import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "搭建指南 - AI学习站",
  description: "如何从零开始搭建和扩展AI学习站，包括环境配置、部署到Vercel、添加新教程和工具",
};

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">📖 搭建指南</h1>
      <p className="text-muted-foreground mb-8">
        手把手教你从零搭建这个网站，包括配置、部署和二次开发
      </p>

      <div className="space-y-10 text-foreground">
        {/* 项目概览 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">🏗️ 项目概览</h2>
          <div className="bg-muted p-4 rounded-lg text-sm space-y-1">
            <p>📁 源码：<a href="https://github.com/zhangyujie9023/Repository-name-bestai-cool" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub 仓库</a></p>
            <p>🌐 域名：<span className="text-foreground">bestai.cool</span></p>
            <p>💻 技术栈：Next.js 16 + TypeScript + Tailwind CSS 4 + Vercel</p>
            <p>📊 统计：Google Analytics 4</p>
            <p>💰 变现：Google AdSense</p>
            <p>🛠️ 反馈系统：GitHub Issues API</p>
          </div>
        </section>

        {/* 环境配置 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">🔑 环境变量配置</h2>
          <p className="text-sm text-muted-foreground mb-4">
            在项目根目录创建 <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">.env.local</code> 文件，填入以下内容：
          </p>

          <div className="bg-[#1e1e1e] text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
{`# GitHub Token - 用于反馈表单自动创建 Issue
# 在 https://github.com/settings/tokens 生成
# 需要勾选 repo:public_repo 权限
GITHUB_TOKEN=ghp_your_token_here

# Google Analytics 4
# 注册 https://analytics.google.com 获取 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`}
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-1">GITHUB_TOKEN</h3>
              <p className="text-sm text-muted-foreground mb-2">
                用于用户反馈表单自动在 GitHub 创建 Issue。无需翻墙，GitHub API 在国内可直接访问。
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>打开 <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Tokens 页面</a></li>
                <li>点击 "Generate new token (classic)"</li>
                <li>勾选 <code className="px-1 bg-muted rounded text-xs">repo:public_repo</code> 权限</li>
                <li>生成 Token，复制到 <code className="px-1 bg-muted rounded text-xs">.env.local</code></li>
              </ol>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-1">NEXT_PUBLIC_GA_ID</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Google Analytics 4 的 Measurement ID，用于统计网站访问量。注册 Google Analytics 后可在 "管理 → 数据流" 中找到。
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>打开 <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics</a></li>
                <li>创建账号和网站数据流</li>
                <li>在数据流详情中找到 "Measurement ID"（格式：G-XXXXXXXXXX）</li>
                <li>填入 <code className="px-1 bg-muted rounded text-xs">.env.local</code></li>
              </ol>
            </div>
          </div>
        </section>

        {/* 本地开发 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">💻 本地开发</h2>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">安装依赖</h3>
              <div className="bg-[#1e1e1e] text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`# 克隆项目
git clone https://github.com/zhangyujie9023/Repository-name-bestai-cool.git
cd Repository-name-bestai-cool

# 安装依赖
npm install`}
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">启动开发服务器</h3>
              <div className="bg-[#1e1e1e] text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`npm run dev
# 访问 http://localhost:3000`}
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">构建生产版本</h3>
              <div className="bg-[#1e1e1e] text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`npm run build
npm start`}
              </div>
            </div>
          </div>
        </section>

        {/* 部署到 Vercel */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">🚀 部署到 Vercel</h2>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">方式一：从 GitHub 一键部署（推荐）</h3>
              <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal list-inside">
                <li>Fork 这个 <a href="https://github.com/zhangyujie9023/Repository-name-bestai-cool" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub 仓库</a></li>
                <li>注册 <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel</a>（用 GitHub 账号登录）</li>
                <li>点击 "Add New → Project"</li>
                <li>选择你 Fork 的仓库</li>
                <li>在 "Environment Variables" 中添加：
                  <ul className="ml-4 mt-1 space-y-0.5 list-disc list-inside">
                    <li><code className="px-1 bg-muted rounded text-xs">GITHUB_TOKEN</code> = 你的 GitHub Token</li>
                    <li><code className="px-1 bg-muted rounded text-xs">NEXT_PUBLIC_GA_ID</code> = 你的 GA ID</li>
                  </ul>
                </li>
                <li>点击 Deploy，等待约 2 分钟</li>
                <li>部署完成后，在 Vercel 控制台绑定自定义域名 bestai.cool</li>
              </ol>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">方式二：Vercel CLI 部署</h3>
              <div className="bg-[#1e1e1e] text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`npm i -g vercel
vercel login
vercel --prod`}
              </div>
            </div>
          </div>
        </section>

        {/* 添加教程 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">📝 添加新教程</h2>
          <p className="text-sm text-muted-foreground mb-4">
            教程数据统一在 <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">src/data/tutorials.ts</code> 中管理。
          </p>
          <div className="bg-[#1e1e1e] text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
{`{
  id: "your-tutorial-id",      // URL中的唯一ID，如 "chatgpt-advance"
  title: "教程标题",
  description: "一句话简介（显示在列表和详情页顶部）",
  category: "writing",          // 分类：writing/image/office/video/learning
  difficulty: 1,                // 难度：1=入门 2=进阶 3=高级
  duration: "15分钟",
  free: true,
  tags: ["标签1", "标签2"],
  popular: false,               // 是否在首页推荐
  content: \`
## 简介
这里是教程正文，支持 Markdown 格式。

## 第一步
1. 打开网站
2. 注册账号

💡 小提示

## 常见问题
> 引用内容
\`,
}`}
          </div>
          <p className="text-sm text-muted-foreground">
            添加教程后，<code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">npm run build</code> 会自动生成对应的静态页面。
          </p>
        </section>

        {/* 添加工具 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">🛠️ 添加新工具</h2>
          <p className="text-sm text-muted-foreground mb-4">
            工具数据统一在 <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">src/data/tools.ts</code> 中管理。
          </p>
          <div className="bg-[#1e1e1e] text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
{`{
  id: "your-tool-id",           // 唯一ID，如 "chatgpt"
  name: "工具名称",
  nameEn: "Tool Name",          // 英文名（可选）
  website: "https://...",       // 工具官网地址（必填，直达链接）
  downloadUrl: "https://...",   // 下载地址（可选，手机端直达）
  appStoreUrl: "https://...",    // iOS App Store 链接（可选）
  playStoreUrl: "https://...",   // Android Play 链接（可选）
  logo: "🤖",                   // Emoji 图标
  category: "writing",          // 分类：writing/image/office/video/audio/search/dev/productivity
  shortDesc: "简明介绍（一句话，说明工具是干什么的）",
  howToUse: [
    "步骤1",
    "步骤2",
    "步骤3",
  ],
  price: "免费",                 // 免费/部分免费/付费/开源免费
  isDomestic: true,              // 国内是否可直接访问
  tutorialId: "chatgpt-intro",  // 对应教程ID（可选）
  highlight: false,             // 是否首页高亮推荐
  tags: ["标签1", "标签2"],
}`}
          </div>
        </section>

        {/* 目录结构 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">📂 目录结构</h2>
          <div className="bg-[#1e1e1e] text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`bestai-cool/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx            # 首页
│   │   ├── layout.tsx          # 根布局（导航+页脚）
│   │   ├── tools/page.tsx      # 工具导航页
│   │   ├── tutorials/         # 教程相关页面
│   │   │   ├── page.tsx        # 教程列表
│   │   │   └── [id]/page.tsx   # 教程详情
│   │   ├── about/page.tsx      # 关于页面
│   │   ├── faq/page.tsx        # FAQ页面
│   │   ├── feedback/page.tsx   # 反馈页面
│   │   └── docs/page.tsx       # 搭建指南（本文档）
│   ├── components/             # React 组件
│   │   ├── JsonLd.tsx           # 结构化数据组件
│   │   ├── ThemeToggle.tsx      # 深色模式切换
│   │   ├── MobileNav.tsx       # 移动端汉堡菜单
│   │   ├── ShareButtons.tsx    # 社交分享按钮
│   │   └── FeedbackButtons.tsx # 反馈按钮
│   └── data/                   # 数据层
│       ├── tutorials.ts        # 教程数据库
│       └── tools.ts            # 工具数据库
├── public/                     # 静态资源
├── .env.local                  # 环境变量（不上传GitHub）
└── package.json`}
          </div>
        </section>

        {/* 相关资源 */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">🔗 相关资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <span className="font-medium text-foreground">Next.js 官方文档</span>
              <p className="text-sm text-muted-foreground mt-1">nextjs.org/docs</p>
            </a>
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <span className="font-medium text-foreground">Tailwind CSS 文档</span>
              <p className="text-sm text-muted-foreground mt-1">tailwindcss.com/docs</p>
            </a>
            <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <span className="font-medium text-foreground">Vercel 部署文档</span>
              <p className="text-sm text-muted-foreground mt-1">vercel.com/docs</p>
            </a>
            <a href="https://github.com/zhangyujie9023/Repository-name-bestai-cool" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <span className="font-medium text-foreground">项目 GitHub 仓库</span>
              <p className="text-sm text-muted-foreground mt-1">源码 · MIT License</p>
            </a>
          </div>
        </section>

        {/* 返回链接 */}
        <div className="pt-4 border-t border-border">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}