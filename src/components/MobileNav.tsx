"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // 防止滚动穿透
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks: { href: string; label: string; highlight?: boolean }[] = [
    { href: "/", label: "首页" },
    { href: "/tools", label: "🛠️ 工具导航", highlight: true },
    { href: "/tutorials", label: "教程" },
    { href: "/faq", label: "常见问题" },
    { href: "/docs", label: "搭建指南" },
    { href: "/about", label: "关于" },
    { href: "/feedback", label: "反馈" },
  ];

  return (
    <>
      {/* 汉堡按钮 - 仅移动端显示 */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="打开菜单"
        aria-expanded={open}
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          <span className={`block w-3.5 h-0.5 bg-foreground transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
        </div>
      </button>

      {/* 移动端遮罩 */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 移动端侧边栏 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-card border-l border-border z-50 transform transition-transform duration-200 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <span className="font-bold text-lg text-foreground">🤖 AI学习站</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              aria-label="关闭菜单"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                  link.highlight
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground px-4">
              © 2026 AI学习站<br />
              帮普通人学会用AI
            </p>
          </div>
        </div>
      </div>
    </>
  );
}