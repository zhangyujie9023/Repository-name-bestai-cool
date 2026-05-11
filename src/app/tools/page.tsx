"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, toolCategories, type AITool } from "@/data/tools";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const filteredTools = selectedCategory
    ? tools.filter((t) => t.category === selectedCategory)
    : tools;

  const toggleExpand = (id: string) => {
    setExpandedTool(expandedTool === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">🛠️ AI工具导航</h1>
        <p className="text-muted-foreground text-sm">
          精选优质AI工具，附直达链接和使用教程。找工具、找教程，一个页面全搞定。
        </p>
      </div>

      {/* 分类Tab切换 */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
            selectedCategory === null
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          全部工具 ({tools.length})
        </button>
        {toolCategories.map((cat) => {
          const count = tools.filter((t) => t.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.icon} {cat.name} ({count})
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
    "免费": "text-green-600",
    "部分免费": "text-yellow-600",
    "付费": "text-red-500",
    "开源免费": "text-green-600",
  }[tool.price];

  const domesticBadge = tool.isDomestic && tool.price !== "付费" ? (
    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded">
      🇨🇳 国内可用
    </span>
  ) : null;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* 卡片头部：Logo + 名称 + 简介 */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <span className="text-3xl shrink-0 mt-0.5">{tool.logo}</span>

          {/* 主体内容 */}
          <div className="flex-1 min-w-0">
            {/* 名称行 */}
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <h3 className="font-semibold text-foreground text-base">
                {/* 名称可点击，直达官网 */}
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {tool.name}
                  {tool.nameEn && (
                    <span className="text-muted-foreground font-normal ml-1 text-sm">
                      {tool.nameEn}
                    </span>
                  )}
                  <span className="inline-block ml-1 text-primary opacity-70">↗</span>
                </a>
              </h3>
              <span className={`text-xs font-medium ${priceColor}`}>{tool.price}</span>
              {domesticBadge}
            </div>

            {/* 简明简介（放在最前面） */}
            <p className="text-foreground text-sm leading-relaxed mb-3">
              {tool.shortDesc}
            </p>

            {/* 操作按钮行 */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* 直达官网 */}
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                🌐 直达官网
              </a>

              {/* 直接下载（手机可用） */}
              {tool.downloadUrl && (
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  ⬇️ 下载使用
                </a>
              )}

              {/* App下载 */}
              {tool.appStoreUrl && (
                <a
                  href={tool.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 text-xs border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  🍎 iOS
                </a>
              )}
              {tool.playStoreUrl && (
                <a
                  href={tool.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 text-xs border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  🤖 Android
                </a>
              )}

              {/* 教程链接 */}
              {tool.tutorialId && (
                <Link
                  href={`/tutorials/${tool.tutorialId}`}
                  className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  📖 查看使用教程
                </Link>
              )}

              {/* 展开/收起使用方法 */}
              <button
                onClick={onToggle}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-muted"
              >
                {expanded ? "收起步骤 ▲" : "如何使用 ▼"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 使用方法展开区 */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-border bg-muted/20">
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-3">📝 如何使用：</h4>
            <ol className="space-y-2">
              {tool.howToUse.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold mt-0.5">
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
                  className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
