"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl,
        });
      } catch {
        // 用户取消分享
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        onClick={handleCopyLink}
        className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        title="复制链接"
      >
        {copied ? "✅ 已复制" : "🔗 复制链接"}
      </button>
      <button
        onClick={() => window.open(`https://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, "_blank")}
        className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        title="分享到微博"
      >
        📢 微博
      </button>
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, "_blank")}
        className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        title="分享到 Twitter/X"
      >
        🐦 Twitter
      </button>
      {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
        <button
          onClick={handleShare}
          className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity md:hidden"
          title="更多分享选项"
        >
          ⤴ 分享
        </button>
      )}
    </div>
  );
}