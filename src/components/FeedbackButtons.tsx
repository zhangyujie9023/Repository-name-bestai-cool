"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FeedbackButtonsProps {
  tutorialId: string;
  tutorialTitle: string;
}

// 初始投票数据（用于首次加载时显示）
const initialVotes: Record<string, { helpful: number; notHelpful: number }> = {
  "chatgpt-intro": { helpful: 128, notHelpful: 3 },
  "kimi-intro": { helpful: 95, notHelpful: 2 },
  "ai-write-report": { helpful: 76, notHelpful: 1 },
  "gamma-ai": { helpful: 54, notHelpful: 2 },
  "jianying-ai": { helpful: 67, notHelpful: 3 },
  "ai-image-gen": { helpful: 45, notHelpful: 1 },
  "ai-translate": { helpful: 38, notHelpful: 2 },
  "ai-summary": { helpful: 52, notHelpful: 1 },
  "ai-data-analysis": { helpful: 31, notHelpful: 0 },
  "ai-creative": { helpful: 28, notHelpful: 1 },
  "ai-prompts": { helpful: 89, notHelpful: 4 },
};

export default function FeedbackButtons({ tutorialId, tutorialTitle }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  const [showThanks, setShowThanks] = useState(false);
  const [votes, setVotes] = useState<{ helpful: number; notHelpful: number }>(
    initialVotes[tutorialId] || { helpful: 10, notHelpful: 0 }
  );

  // 从 localStorage 加载投票数据
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`tutorial_votes_${tutorialId}`);
      if (stored) {
        setVotes(JSON.parse(stored));
      }
      // 检查当前用户是否已投票
      const feedbacks = JSON.parse(localStorage.getItem("tutorial_feedbacks") || "{}");
      if (feedbacks[tutorialId]?.type) {
        setFeedback(feedbacks[tutorialId].type);
      }
    } catch (e) {
      console.log("Could not load votes from localStorage");
    }
  }, [tutorialId]);

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    const newFeedback = feedback === type ? null : type;
    
    // 计算新的投票数
    let newVotes = { ...votes };
    if (newFeedback && feedback) {
      // 从一个选项切换到另一个
      if (feedback === "helpful") newVotes.helpful--;
      else newVotes.notHelpful--;
      if (newFeedback === "helpful") newVotes.helpful++;
      else newVotes.notHelpful++;
    } else if (newFeedback) {
      // 新投票
      if (newFeedback === "helpful") newVotes.helpful++;
      else newVotes.notHelpful++;
    } else {
      // 取消投票
      if (feedback === "helpful") newVotes.helpful--;
      else newVotes.notHelpful--;
    }
    
    setVotes(newVotes);
    setFeedback(newFeedback);
    setShowThanks(!!newFeedback);
    
    // 保存到 localStorage
    try {
      localStorage.setItem(`tutorial_votes_${tutorialId}`, JSON.stringify(newVotes));
      const feedbacks = JSON.parse(localStorage.getItem("tutorial_feedbacks") || "{}");
      if (newFeedback) {
        feedbacks[tutorialId] = {
          type: newFeedback,
          timestamp: new Date().toISOString(),
          tutorialTitle,
        };
      } else {
        delete feedbacks[tutorialId];
      }
      localStorage.setItem("tutorial_feedbacks", JSON.stringify(feedbacks));
    } catch (e) {
      console.log("Could not save feedback to localStorage");
    }

    // 3秒后隐藏感谢消息
    if (newFeedback) {
      setTimeout(() => {
        setShowThanks(false);
      }, 3000);
    }
  };

  return (
    <div className="mt-12 p-6 bg-muted rounded-xl">
      <p className="font-medium text-foreground mb-4">
        🎉 这个教程对你有帮助吗？
      </p>
      
      {showThanks ? (
        <div className="flex items-center gap-2 text-green-600 font-medium">
          <span className="text-2xl">✨</span>
          <span>感谢您的反馈！我们会继续努力提供更好的内容。</span>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleFeedback("helpful")}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              feedback === "helpful"
                ? "bg-green-100 border-green-500 text-green-700 border-2"
                : "bg-white border border-border hover:bg-green-50 hover:border-green-300"
            }`}
          >
            <span>👍</span>
            <span>有帮助</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              feedback === "helpful"
                ? "bg-green-200 text-green-800"
                : "bg-green-100 text-green-700"
            }`}>
              {votes.helpful}
            </span>
          </button>
          <button
            onClick={() => handleFeedback("not-helpful")}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              feedback === "not-helpful"
                ? "bg-red-100 border-red-500 text-red-700 border-2"
                : "bg-white border border-border hover:bg-red-50 hover:border-red-300"
            }`}
          >
            <span>👎</span>
            <span>没帮助</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              feedback === "not-helpful"
                ? "bg-red-200 text-red-800"
                : "bg-red-100 text-red-700"
            }`}>
              {votes.notHelpful}
            </span>
          </button>
          <Link
            href={`/feedback?tutorial=${encodeURIComponent(tutorialId)}&title=${encodeURIComponent(tutorialTitle)}`}
            className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            💬 我有疑问
          </Link>
        </div>
      )}
    </div>
  );
}
