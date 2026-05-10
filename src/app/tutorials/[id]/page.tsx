import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTutorialById, tutorials, categories } from "@/data/tutorials";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tutorials.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tutorial = getTutorialById(id);
  if (!tutorial) return { title: "教程未找到" };
  
  return {
    title: `${tutorial.title} - AI学习站`,
    description: tutorial.description,
  };
}

export default async function TutorialPage({ params }: Props) {
  const { id } = await params;
  const tutorial = getTutorialById(id);

  if (!tutorial) {
    notFound();
  }

  const category = categories.find((c) => c.id === tutorial.category);
  const difficultyText = ["", "入门", "进阶", "高级"][tutorial.difficulty];

  // 简单的 Markdown 渲染
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: string[] = [];

    lines.forEach((line, idx) => {
      // 列表项
      if (line.startsWith("- ")) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(line.slice(2));
        return;
      } else if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-1 my-4 text-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // 空行
      if (line.trim() === "") {
        elements.push(<div key={idx} className="h-4" />);
        return;
      }

      // 标题
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={idx} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={idx} className="text-lg font-medium text-foreground mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      // 分隔线
      if (line.startsWith("---")) {
        elements.push(
          <hr key={idx} className="my-8 border-border" />
        );
        return;
      }

      // 代码块
      if (line.startsWith("```")) {
        elements.push(
          <pre key={idx} className="my-4 p-4 bg-muted rounded-lg text-sm overflow-x-auto">
            {line.slice(3)}
          </pre>
        );
        return;
      }

      // 警告
      if (line.startsWith("⚠️")) {
        elements.push(
          <div key={idx} className="my-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
            {line}
          </div>
        );
        return;
      }

      // 普通段落
      elements.push(
        <p key={idx} className="my-3 text-foreground leading-relaxed">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* 面包屑 */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/tutorials" className="hover:text-foreground">教程</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{tutorial.title}</span>
      </nav>

      {/* 教程头部 */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {tutorial.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>难度：{"⭐".repeat(tutorial.difficulty)} {difficultyText}</span>
          <span>预计时间：{tutorial.duration}</span>
          {tutorial.free && (
            <span className="text-green-600 font-medium">免费</span>
          )}
        </div>
      </header>

      {/* 教程内容 */}
      <article className="prose prose-zinc max-w-none">
        {renderContent(tutorial.content)}
      </article>

      {/* 底部反馈 */}
      <div className="mt-12 p-6 bg-muted rounded-xl">
        <p className="font-medium text-foreground mb-4">
          🎉 这个教程对你有帮助吗？
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
            👍 有帮助
          </button>
          <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
            👎 没帮助
          </button>
          <Link
            href="/feedback"
            className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors"
          >
            💬 我有疑问
          </Link>
        </div>
      </div>

      {/* 相关教程 */}
      <div className="mt-8">
        <h3 className="font-semibold text-foreground mb-4">相关教程</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tutorials
            .filter((t) => t.category === tutorial.category && t.id !== tutorial.id)
            .slice(0, 2)
            .map((t) => (
              <Link
                key={t.id}
                href={`/tutorials/${t.id}`}
                className="p-4 bg-white border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <span className="font-medium text-foreground">{t.title}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}