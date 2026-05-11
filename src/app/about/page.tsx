import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们 - AI学习站",
  description: "AI学习站的故事，我们为什么要做这个网站",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">🤖 关于 AI学习站</h1>
      <p className="text-muted-foreground mb-8">
        一个帮助普通人学会用AI的免费网站
      </p>

      <div className="space-y-8 text-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold mb-3">为什么要做这个网站？</h2>
          <p className="text-muted-foreground mb-3">
            2024年以来，AI工具遍地开花——ChatGPT、Kimi、豆包、通义万相、Midjourney……
            每个都在说"AI改变世界"，但对于大多数普通人来说，AI离自己还很远。
          </p>
          <p className="text-muted-foreground mb-3">
            我们发现一个问题：<strong className="text-foreground">网上关于AI的内容，要么太技术化（程序员写的），要么太商业化（卖课的）</strong>。
            真正适合"电脑小白"的、手把手教的、免费的内容，太少了。
          </p>
          <p className="text-muted-foreground">
            所以我们做了这个网站——<strong className="text-foreground">用大白话，一步一步教你用AI</strong>。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">我们和其他AI教程网站有什么不同？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-medium mb-1">按场景教</h3>
              <p className="text-sm text-muted-foreground">
                不说"图像生成"，说"做自媒体封面用什么AI"；不说"NLP"，说"怎么让AI帮你写周报"
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-medium mb-1">手把手</h3>
              <p className="text-sm text-muted-foreground">
                从注册账号开始教，每一步都有截图说明，不跳步、不假设你懂技术
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-2">🆓</div>
              <h3 className="font-medium mb-1">完全免费</h3>
              <p className="text-sm text-muted-foreground">
                所有教程免费阅读，不卖课、不付费解锁，没有套路
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">网站是怎么做出来的？</h2>
          <p className="text-muted-foreground mb-3">
            这个网站本身就是用AI做的！我们用 ChatGPT 和 Claude 辅助编写代码，
            用 Cursor 加速开发，用 Vercel 部署，全程零成本。
          </p>
          <p className="text-muted-foreground">
            如果我们能做到，你也可以。AI不只是一种工具，更是一种<strong className="text-foreground">让普通人也能做大事的能力</strong>。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">一起参与</h2>
          <p className="text-muted-foreground mb-4">
            这个网站在持续完善中。你的每一条反馈、每一个建议，都会让这个网站变得更好。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/feedback"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              💬 提交反馈
            </Link>
            <Link
              href="/tutorials"
              className="px-5 py-2 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            >
              📚 开始学习
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">技术信息</h2>
          <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground space-y-1">
            <p>🌐 域名：<span className="text-foreground">bestai.cool</span></p>
            <p>💻 技术栈：Next.js + TypeScript + Tailwind CSS</p>
            <p>🚀 托管：Vercel</p>
            <p>📊 分析：Google Analytics</p>
            <p>📢 广告：Google AdSense</p>
          </div>
        </section>
      </div>
    </div>
  );
}