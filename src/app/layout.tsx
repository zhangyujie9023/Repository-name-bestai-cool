import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./google-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestai.cool"),
  title: "AI学习站 - 零基础学AI，从入门到实用",
  description: "帮助电脑小白学会使用AI工具。ChatGPT、Kimi、通义万相等热门AI工具详细教程，按场景分类，从注册到实战一步一步教你。",
  keywords: "AI教程, ChatGPT教程, AI入门, AI学习, 人工智能教程, Kimi教程, AI工具使用",
  openGraph: {
    title: "AI学习站 - 零基础学AI",
    description: "帮助电脑小白学会使用AI工具，免费教程，中文界面，适合新手",
    url: "https://bestai.cool",
    siteName: "AI学习站",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI学习站 - 零基础学AI",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI学习站 - 零基础学AI",
    description: "帮助电脑小白学会使用AI工具，免费教程，中文界面",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <GoogleAnalytics />
      <body className={`${geistSans.variable} min-h-screen bg-background`}>
        {/* 顶部导航 */}
        <header className="border-b border-border bg-white sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span>AI学习站</span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">首页</a>
              <a href="/tutorials" className="text-muted-foreground hover:text-foreground transition-colors">教程</a>
              <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">常见问题</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">关于</a>
              <a href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">反馈</a>
            </nav>
          </div>
        </header>

        {/* 主内容 */}
        <main className="flex-1">
          {children}
        </main>

        {/* 底部 */}
        <footer className="border-t border-border bg-white mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">🤖 AI学习站</h3>
                <p className="text-sm text-muted-foreground">
                  帮助普通人学会使用AI工具，让AI成为你的助手。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">快速开始</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><a href="/tutorials/chatgpt-intro" className="hover:text-foreground">ChatGPT 入门</a></li>
                  <li><a href="/tutorials/kimi-intro" className="hover:text-foreground">Kimi 入门</a></li>
                  <li><a href="/tutorials/tongyi-draw" className="hover:text-foreground">AI画图教程</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">有问题？</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><a href="/faq" className="hover:text-foreground">常见问题</a></li>
                  <li><a href="/feedback" className="hover:text-foreground">提交反馈</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">关于网站</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><a href="/about" className="hover:text-foreground">关于我们</a></li>
                  <li><a href="/privacy" className="hover:text-foreground">隐私政策</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
              © 2026 AI学习站 | 帮普通人学会用AI
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}