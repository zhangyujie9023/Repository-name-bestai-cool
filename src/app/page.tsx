import Link from "next/link";
import { tutorials, categories, faqs } from "@/data/tutorials";
import { getHighlightTools } from "@/data/tools";

export default function Home() {
  const popularTutorials = tutorials.filter((t) => t.popular);
  const highlightTools = getHighlightTools();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero区域 */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🤖 零基础学AI
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          从"不知道AI是什么"到"能用AI帮你干活"
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          免费教程 · 中文界面 · 适合电脑小白
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/tools"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            🛠️ 查看AI工具导航
          </Link>
          <Link
            href="/tutorials/chatgpt-intro"
            className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
          >
            📚 从教程开始
          </Link>
        </div>
      </section>

      {/* 精选工具导航 */}
      <section className="py-8 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">🛠️ 精选AI工具</h2>
          <Link href="/tools" className="text-sm text-primary hover:underline">
            查看全部{highlightTools.length + 20}+ 工具 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {highlightTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{tool.logo}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {tool.name}
                    </span>
                    {tool.isDomestic && (
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded shrink-0">
                        🇨🇳 国内免费
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {tool.shortDesc}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      打开官网 ↗
                    </span>
                    {tool.tutorialId && (
                      <Link
                        href={`/tutorials/${tool.tutorialId}`}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        📖 教程
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link
            href="/tools"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            🛠️ 访问工具导航
          </Link>
          <Link
            href="/tools?category=writing"
            className="px-4 py-2.5 border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
          >
            ✍️ 写作工具
          </Link>
          <Link
            href="/tools?category=image"
            className="px-4 py-2.5 border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
          >
            🎨 图像工具
          </Link>
          <Link
            href="/tools?category=video"
            className="px-4 py-2.5 border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
          >
            🎬 视频工具
          </Link>
        </div>
      </section>

      {/* 新手3步入门 */}
      <section className="py-8 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">🗺️ 新手入门路线</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/tutorials/chatgpt-intro"
            className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">1</span>
              <span className="font-medium text-foreground">学会跟AI对话</span>
            </div>
            <p className="text-sm text-muted-foreground">
              先注册一个 ChatGPT 或 Kimi 账号，学会最基本的AI对话技巧
            </p>
            <span className="text-xs text-primary mt-2 inline-block">ChatGPT 入门 →</span>
          </Link>
          <Link
            href="/tutorials/ai-write-report"
            className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">2</span>
              <span className="font-medium text-foreground">让AI帮你干活</span>
            </div>
            <p className="text-sm text-muted-foreground">
              学会用AI写周报、邮件、总结，每天省下1小时
            </p>
            <span className="text-xs text-green-600 mt-2 inline-block">AI写周报教程 →</span>
          </Link>
          <Link
            href="/tutorials/tongyi-draw"
            className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">3</span>
              <span className="font-medium text-foreground">探索更多AI能力</span>
            </div>
            <p className="text-sm text-muted-foreground">
              试试AI画图、做PPT、剪辑视频，发现AI的更多可能
            </p>
            <span className="text-xs text-purple-600 mt-2 inline-block">AI画图教程 →</span>
          </Link>
        </div>
      </section>

      {/* 热门教程 */}
      <section className="py-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">📚 热门教程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularTutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.id}`}
              className="tutorial-card p-5 bg-card border border-border rounded-xl hover:border-primary/30 dark:hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">
                  {categories.find((c) => c.id === tutorial.category)?.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{"⭐".repeat(tutorial.difficulty)}</span>
                    <span>{tutorial.duration}</span>
                    {tutorial.free && (
                      <span className="text-green-600">免费</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/tutorials"
          className="inline-block mt-4 text-sm text-primary hover:underline"
        >
          查看全部教程 →
        </Link>
      </section>

      {/* 分类导航 */}
      <section className="py-8 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">📂 按场景学习</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/tutorials?category=${cat.id}`}
              className="p-4 bg-white border border-border rounded-xl text-center hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl block mb-2">{cat.icon}</span>
              <span className="font-medium text-foreground">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-8 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">❓ 新手最常问的问题</h2>
        <div className="space-y-3">
          {faqs[0].items.slice(0, 4).map((faq, idx) => (
            <Link
              key={idx}
              href="/faq"
              className="block p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <span className="text-foreground">{faq.q}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/faq"
          className="inline-block mt-4 text-sm text-primary hover:underline"
        >
          查看全部问题 →
        </Link>
      </section>

      {/* 反馈展示 */}
      <section className="py-8 border-t border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">💬 用户反馈</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="feedback-card p-4 rounded-lg">
            <p className="text-sm text-foreground">"想学怎么用AI帮我写工作总结"</p>
            <p className="text-xs text-muted-foreground mt-2">— 张先生</p>
          </div>
          <div className="feedback-card p-4 rounded-lg">
            <p className="text-sm text-foreground">"能不能出个用AI做PPT的教程？"</p>
            <p className="text-xs text-muted-foreground mt-2">— 李女士</p>
          </div>
          <div className="feedback-card p-4 rounded-lg">
            <p className="text-sm text-foreground">"我想学AI画画，但不知道从哪开始"</p>
            <p className="text-xs text-muted-foreground mt-2">— 小王</p>
          </div>
        </div>
        <Link
          href="/feedback"
          className="inline-block mt-4 text-sm text-primary hover:underline"
        >
          我也想提需求 →
        </Link>
      </section>
    </div>
  );
}