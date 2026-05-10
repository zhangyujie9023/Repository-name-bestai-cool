import { faqs } from "@/data/tutorials";

export const metadata = {
  title: "常见问题 - AI学习站",
  description: "AI学习常见问题解答，包括入门问题、费用、隐私安全、工具选择等",
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">❓ 常见问题</h1>
      <p className="text-muted-foreground mb-8">
        新手最常问的问题，点击展开查看答案
      </p>

      <div className="space-y-6">
        {faqs.map((section) => (
          <section key={section.category}>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((faq, idx) => (
                <details
                  key={idx}
                  className="faq-item group bg-white border border-border rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-foreground pr-4">
                      {faq.q}
                    </span>
                    <span className="faq-arrow text-muted-foreground transition-transform">
                      ▶
                    </span>
                  </summary>
                  <div className="p-4 pt-0 text-foreground leading-relaxed border-t border-border">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 没找到答案 */}
      <div className="mt-12 p-6 bg-muted rounded-xl text-center">
        <p className="font-medium text-foreground mb-2">
          没找到你想问的问题？
        </p>
        <p className="text-muted-foreground mb-4">
          提交反馈，我们会尽快添加相关内容
        </p>
        <a
          href="/feedback"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          提交反馈
        </a>
      </div>
    </div>
  );
}