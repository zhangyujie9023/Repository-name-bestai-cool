"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tutorials, categories, type Tutorial } from "@/data/tutorials";
import { getTutorialById } from "@/data/tutorials";

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((t) => {
      const matchCategory = !selectedCategory || t.category === selectedCategory;
      if (!matchCategory) return false;

      if (!searchQuery) return true;
      
      const q = searchQuery.toLowerCase();
      // 搜索标题、描述、标签
      if (t.title.toLowerCase().includes(q)) return true;
      if (t.description.toLowerCase().includes(q)) return true;
      if (t.tags.some(tag => tag.toLowerCase().includes(q))) return true;
      
      // 搜索正文内容
      const detail = getTutorialById(t.id);
      if (detail && detail.content && detail.content.toLowerCase().includes(q)) return true;
      
      return false;
    });
  }, [selectedCategory, searchQuery]);

  const difficultyText = (d: number) => ["", "入门", "进阶", "高级"][d];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">📖 全部教程</h1>

      {/* 搜索 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 搜索教程名称、标签或正文内容..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-4 py-2.5 pl-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white dark:bg-card text-foreground"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-muted-foreground">
            找到 {filteredTutorials.length} 个匹配的教程
          </p>
        )}
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`category-tag px-4 py-2 rounded-full text-sm border ${
            selectedCategory === null ? "active" : "border-border"
          }`}
        >
          全部
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`category-tag px-4 py-2 rounded-full text-sm border ${
              selectedCategory === cat.id ? "active" : "border-border"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* 教程列表 */}
      <div className="space-y-8">
        {categories.map((cat) => {
          const catTutorials = filteredTutorials.filter(
            (t) => t.category === cat.id
          );
          if (catTutorials.length === 0) return null;

          return (
            <div key={cat.id}>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {cat.icon} {cat.name}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({catTutorials.length}个教程)
                </span>
              </h2>
              <div className="space-y-3">
                {catTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </div>
          );
        })}

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-3xl mb-3">🔍</p>
            <p>没有找到匹配的教程</p>
            <p className="text-sm mt-1">试试其他关键词</p>
          </div>
        )}
      </div>
    </div>
  );
}

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const difficultyText = ["", "入门", "进阶", "高级"][tutorial.difficulty];

  return (
    <Link
      href={`/tutorials/${tutorial.id}`}
      className="tutorial-card block p-4 bg-card border border-border rounded-xl hover:border-primary/30 dark:hover:border-primary/50"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-foreground">{tutorial.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {tutorial.description}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs">
            <span className="text-muted-foreground">
              难度：{"⭐".repeat(tutorial.difficulty)} {difficultyText}
            </span>
            <span className="text-muted-foreground">{tutorial.duration}</span>
            {tutorial.free && (
              <span className="text-green-600 font-medium">免费</span>
            )}
          </div>
        </div>
        <span className="primary text-sm ml-4 shrink-0">学习 →</span>
      </div>
    </Link>
  );
}