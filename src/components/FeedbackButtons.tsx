"use client";

import { useState } from "react";
import Link from "next/link";

interface FeedbackButtonsProps {
  tutorialId: string;
  tutorialTitle: string;
}

export default function FeedbackButtons({ tutorialId, tutorialTitle }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedback(type);
    setShowThanks(true);
    
    // 记录到 localStorage
    try {
      const feedbacks = JSON.parse(localStorage.getItem("tutorial_feedbacks") || "{}");
      feedbacks[tutorialId] = {
        type,
        timestamp: new Date().toISOString(),
        tutorialTitle,
      };
      localStorage.setItem("tutorial_feedbacks", JSON.stringify(feedbacks));
    } catch (e) {
      // localStorage 可能不可用（隐私模式等）
      console.log("Could not save feedback to localStorage");
    }

    // 3秒后隐藏感谢消息
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
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
            disabled={feedback !== null}
            className={`px-4 py-2 rounded-lg transition-all ${
              feedback === "helpful"
                ? "bg-green-100 border-green-500 text-green-700 border-2"
                : feedback !== null
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-border hover:bg-green-50 hover:border-green-300"
            }`}
          >
            👍 有帮助
          </button>
          <button
            onClick={() => handleFeedback("not-helpful")}
            disabled={feedback !== null}
            className={`px-4 py-2 rounded-lg transition-all ${
              feedback === "not-helpful"
                ? "bg-red-100 border-red-500 text-red-700 border-2"
                : feedback !== null
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-border hover:bg-red-50 hover:border-red-300"
            }`}
          >
            👎 没帮助
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
