"use client";

import { useState } from "react";

const feedbackTypes = [
  { id: "writing", label: "写作相关（周报、邮件、文章）", icon: "✍️" },
  { id: "image", label: "绘图相关（AI画图、设计）", icon: "🎨" },
  { id: "office", label: "办公相关（PPT、表格、文档）", icon: "💼" },
  { id: "video", label: "视频相关（剪辑、配音）", icon: "🎬" },
  { id: "learning", label: "学习相关（翻译、问答）", icon: "📚" },
  { id: "other", label: "其他", icon: "💬" },
];

const recentFeedback = [
  { text: "怎么用AI帮我做PPT？", count: 12 },
  { text: "AI能帮我翻译PDF文件吗？", count: 8 },
  { text: "有没有免费的AI画图工具？", count: 15 },
  { text: "想学用AI写工作周报", count: 10 },
];

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里暂时只做前端模拟
    // 实际部署后可以接入表单服务
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          感谢你的反馈！
        </h1>
        <p className="text-muted-foreground mb-8">
          我们会认真对待每一条反馈，尽快添加相关教程。
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          返回首页
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">💬 提交反馈</h1>
      <p className="text-muted-foreground mb-8">
        你的反馈会帮助我们做得更好！
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 反馈类型 */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            📌 我想学...
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {feedbackTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={`p-3 text-left rounded-lg border transition-colors ${
                  selectedType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                <span className="text-foreground text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 详细描述 */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            📝 具体描述一下你想学什么
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="例如：我想学怎么用AI帮我写工作周报"
            rows={4}
            className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            required
          />
        </div>

        {/* 邮箱（可选） */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            📧 你的邮箱
            <span className="text-muted-foreground font-normal">（可选，用于回复你）</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* 提交按钮 */}
        <button
          type="submit"
          disabled={!selectedType || !description}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          提交反馈
        </button>
      </form>

      {/* 最近大家都在问 */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          📋 最近大家都在问
        </h2>
        <div className="space-y-2">
          {recentFeedback.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <span className="text-foreground text-sm">{item.text}</span>
              <span className="text-xs text-muted-foreground">
                {item.count}人想学
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}