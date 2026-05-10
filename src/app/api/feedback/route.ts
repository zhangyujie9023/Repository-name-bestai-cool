import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "zhangyujie9023";
const REPO_NAME = "Repository-name-bestai-cool";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, description, email } = body;

    if (!description || description.trim().length < 5) {
      return NextResponse.json(
        { error: "请填写至少5个字的描述" },
        { status: 400 }
      );
    }

    if (!GITHUB_TOKEN) {
      // 没有配置 Token 时，模拟成功（开发模式）
      console.log("[Feedback] 开发模式，未提交到 GitHub:", body);
      return NextResponse.json({ ok: true, mode: "dev" });
    }

    // 创建 GitHub Issue
    const issueTitle = `📝 用户反馈：${type || "其他"} - ${new Date().toLocaleDateString("zh-CN")}`;
    const issueBody = [
      `**反馈类型**：${type || "其他"}`,
      `**详细描述**：`,
      ``,
      description.trim(),
      ``,
      `---`,
      `**邮箱**：${email || "未提供"}`,
      `**时间**：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}`,
      `**来源**：bestai.cool 反馈表单`,
    ].join("\n");

    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "bestai-cool-feedback",
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody,
          labels: ["feedback"],
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("[Feedback] GitHub API error:", res.status, errText);
      return NextResponse.json(
        { error: `GitHub API 错误 (${res.status}): ${errText}` },
        { status: 500 }
      );
    }

    const issueData = await res.json();
    return NextResponse.json({ ok: true, issueUrl: issueData.html_url });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error("[Feedback] Error:", errMsg);
    return NextResponse.json(
      { error: `服务器错误: ${errMsg}` },
      { status: 500 }
    );
  }
}
