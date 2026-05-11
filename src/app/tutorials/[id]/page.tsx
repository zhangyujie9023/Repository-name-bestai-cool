import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FeedbackButtons from "@/components/FeedbackButtons";
import JsonLd from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";
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

// 教程 JSON-LD 数据
function getTutorialJsonLd(tutorial: ReturnType<typeof getTutorialById>) {
  if (!tutorial) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tutorial.title,
    description: tutorial.description,
    author: {
      "@type": "Organization",
      name: "AI学习站",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    url: `https://bestai.cool/tutorials/${tutorial.id}`,
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
  const tutorialJsonLd = getTutorialJsonLd(tutorial);

  // 增强的 Markdown 渲染
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inList = false;
    let inOrderedList = false;
    let listItems: string[] = [];
    let orderedListStart = 1;

    const processLine = (text: string): React.ReactNode => {
      // 加粗文字 **文字**
      const boldProcessed = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // 行内代码 `代码`
      const codeProcessed = boldProcessed.replace(/`(.+?)`/g, '<code class="px-1 py-0.5 bg-muted rounded text-sm font-mono">$1</code>');
      return <span dangerouslySetInnerHTML={{ __html: codeProcessed }} />;
    };

    lines.forEach((line, idx) => {
      // 引用块 > 开头
      if (line.startsWith("&gt; ")) {
        elements.push(
          <blockquote key={`quote-${idx}`} className="border-l-4 border-border bg-muted/30 pl-4 py-2 my-4 text-foreground italic">
            {processLine(line.slice(4))}
          </blockquote>
        );
        return;
      }

      // 有序列表 1. 2. 等
      const orderedListMatch = line.match(/^(\d+)\.\s+(.+)/);
      if (orderedListMatch) {
        if (!inOrderedList) {
          inOrderedList = true;
          inList = false;
          listItems = [];
          orderedListStart = parseInt(orderedListMatch[1], 10);
        }
        listItems.push(orderedListMatch[2]);
        return;
      } else if (inOrderedList) {
        elements.push(
          <ol key={`ordered-list-${idx}`} className="list-decimal list-inside space-y-1 my-4 text-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{processLine(item)}</li>
            ))}
          </ol>
        );
        inOrderedList = false;
        listItems = [];
      }

      // 无序列表 - 开头
      if (line.startsWith("- ")) {
        if (!inList) {
          inList = true;
          inOrderedList = false;
          listItems = [];
        }
        listItems.push(line.slice(2));
        return;
      } else if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-1 my-4 text-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{processLine(item)}</li>
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

      // 提示框 💡 开头
      if (line.startsWith("💡")) {
        elements.push(
          <div key={idx} className="my-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-800 dark:text-blue-200">
            {processLine(line.slice(1).trim())}
          </div>
        );
        return;
      }

      // 重要提示 ❗ 开头
      if (line.startsWith("❗")) {
        elements.push(
          <div key={idx} className="my-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
            {processLine(line.slice(1).trim())}
          </div>
        );
        return;
      }

      // 警告 ⚠️ 开头
      if (line.startsWith("⚠️")) {
        elements.push(
          <div key={idx} className="my-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-yellow-800 dark:text-yellow-200">
            {processLine(line.slice(1).trim())}
          </div>
        );
        return;
      }

      // 表格 | 分隔
      if (line.includes("|") && !line.startsWith("|") && !line.endsWith("|")) {
        // 检查是否是表格行（包含 | 但不是分隔符）
        const cells = line.split("|").filter((c: string) => c.trim() !== "");
        if (cells.length >= 2 && !line.includes("---")) {
          // 普通表格行
          elements.push(
            <div key={`table-row-${idx}`} className="grid grid-cols-2 gap-4 my-2">
              {cells.map((cell: string, i: number) => (
                <div key={i} className={i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}>
                  {processLine(cell.trim())}
                </div>
              ))}
            </div>
          );
          return;
        }
      }

      // 普通段落
      elements.push(
        <p key={idx} className="my-3 text-foreground leading-relaxed">
          {processLine(line)}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {tutorialJsonLd && <JsonLd data={tutorialJsonLd} />}
      
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

      {/* 分享按钮 */}
      <div className="my-6 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">觉得有用？分享给朋友：</p>
        <ShareButtons title={tutorial.title} url={`https://bestai.cool/tutorials/${tutorial.id}`} />
      </div>

      {/* 底部反馈 */}
      <FeedbackButtons tutorialId={tutorial.id} tutorialTitle={tutorial.title} />

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
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <span className="font-medium text-foreground">{t.title}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}