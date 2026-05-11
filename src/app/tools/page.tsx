"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, toolCategories, type AITool } from "@/data/tools";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTools = tools.filter((t) => {
    const matchCategory = !selectedCategory || t.category === selectedCategory;
    const matchSearch = !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedTool(expandedTool === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">🛠️ AI工具导航</h1>
        <p className="text-muted-foreground text-sm">
          精选优质AI工具，附直达链接和使用教程。找工具、找教程，一个页面全搞定。
        </p>
      </div>

      {/* 搜索栏 */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
          <input
            type="text"
            placeholder="搜索工具名称、功能或标签..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="text-xs text-muted-foreground mt-2">
            找到 {filteredTools.length} 个相关工具
          </p>
        )}
      </div>

      {/* 分类Tab切换 */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === null
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          全部 {tools.length}
        </button>
        {toolCategories.map((cat) => {
          const count = tools.filter((t) => t.category === cat.id).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.icon} {cat.name} {count}
            </button>
          );
        })}
      </div>

      {/* 工具列表 */}
      <div className="space-y-4">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            expanded={expandedTool === tool.id}
            onToggle={() => toggleExpand(tool.id)}
          />
        ))}

        {filteredTools.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-4xl mb-3">🔍</p>
            <p>该分类下暂无工具</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ToolCard({ tool, expanded, onToggle }: { tool: AITool; expanded: boolean; onToggle: () => void }) {
  const priceColor = {
    "免费": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "部分免费": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    "付费": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    "开源免费": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  }[tool.price];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-200 shadow-sm">
      {/* 卡片头部 */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <span className="text-4xl shrink-0 mt-0.5">{tool.logo}</span>

          {/* 主体内容 */}
          <div className="flex-1 min-w-0">
            {/* 名称 + 价格标签 */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground text-lg hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {tool.name}
                {tool.nameEn && <span className="text-muted-foreground font-normal text-sm ml-1">{tool.nameEn}</span>}
                <span className="text-primary ml-1">↗</span>
              </a>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priceColor}`}>
                {tool.price}
              </span>
              {tool.isDomestic && tool.price !== "付费" && (
                <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full font-semibold">
                  🇨🇳 国内可用
                </span>
              )}
            </div>

            {/* 一句话简介 */}
            <p className="text-foreground text-sm leading-relaxed mb-4">
              {tool.shortDesc}
            </p>

            {/* 直达链接区（重点突出） */}
            <div className="flex flex-wrap gap-2 mb-3">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-sm"
              >
                🌐 直达官网
              </a>
              {tool.downloadUrl && (
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-sm"
                >
                  ⬇️ 下载安装
                </a>
              )}
              {tool.appStoreUrl && (
                <a
                  href={tool.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm bg-black text-white rounded-xl hover:opacity-80 transition-opacity font-medium shadow-sm"
                >
                  🍎 App Store
                </a>
              )}
              {tool.playStoreUrl && (
                <a
                  href={tool.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm bg-[#1DB954] text-white rounded-xl hover:opacity-80 transition-opacity font-medium shadow-sm"
                >
                  🤖 Google Play
                </a>
              )}
            </div>

            {/* 展开使用方法（点击后显示） */}
            <button
              onClick={onToggle}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <span className="text-primary">{expanded ? "🔼" : "🔽"}</span>
              {expanded ? "收起使用步骤" : "查看使用步骤"}
            </button>
          </div>
        </div>
      </div>

      {/* 使用方法展开区 */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-border bg-gradient-to-b from-muted/10 to-muted/5">
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-lg">📋</span> 使用步骤
            </h4>
            <ol className="space-y-3">
              {tool.howToUse.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5 shadow-sm">
                    {i + 1}
                  </span>
                  <span className="text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            {/* 标签 */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full border border-border/50"
                >
                  {tag}
                </span>
              ))}
              {tool.tutorialId && (
                <Link
                  href={`/tutorials/${tool.tutorialId}`}
                  className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  📖 完整教程
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}