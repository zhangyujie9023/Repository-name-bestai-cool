"use client";

import { useState } from "react";
import Link from "next/link";
import { tutorials, categories, type Tutorial } from "@/data/tutorials";

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTutorials = tutorials.filter((t) => {
    const matchCategory = !selectedCategory || t.category === selectedCategory;
    const matchSearch =
      !searchQuery ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const difficultyText = (d: number) => ["", "入门", "进阶", "高级"][d];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">📖 全部教程</h1>

      {/* 搜索 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="搜索教程..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
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
            没有找到匹配的教程
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
      className="tutorial-card block p-4 bg-white border border-border rounded-xl hover:border-primary/30"
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
        <span className="text-primary text-sm ml-4">学习 →</span>
      </div>
    </Link>
  );
}