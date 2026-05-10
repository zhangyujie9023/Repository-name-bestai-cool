import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 - AI学习站",
  description: "AI学习站隐私政策，说明我们如何收集、使用和保护您的信息",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">🔒 隐私政策</h1>
      <p className="text-muted-foreground mb-8">
        最后更新：2026年5月10日
      </p>

      <div className="space-y-6 text-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold mb-3">一、我们收集什么信息</h2>
          <p className="text-muted-foreground">
            当您使用 AI学习站 时，我们可能收集以下信息：
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
            <li><strong>使用数据</strong>：访问的页面、停留时间、点击行为（通过 Google Analytics）</li>
            <li><strong>反馈信息</strong>：您主动提交的反馈内容、邮箱（可选）</li>
            <li><strong>投票记录</strong>：教程"有帮助/没帮助"的投票（存储在您的浏览器本地）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">二、我们如何使用这些信息</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>改进网站内容和用户体验</li>
            <li>分析热门教程和用户需求</li>
            <li>回复您提交的反馈（如果您留下了邮箱）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">三、信息存储位置</h2>
          <p className="text-muted-foreground">
            <strong>Google Analytics</strong>：用于网站流量分析，数据存储在 Google 服务器。<br />
            <strong>GitHub Issues</strong>：您提交的反馈会存储在 GitHub Issues 中。<br />
            <strong>本地存储</strong>：投票记录存储在您的浏览器 localStorage 中，不会上传到服务器。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">四、Cookie 政策</h2>
          <p className="text-muted-foreground">
            我们使用 Google Analytics，会设置以下 Cookie：
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
            <li><code className="bg-muted px-1 rounded">_ga</code>：区分用户，有效期2年</li>
            <li><code className="bg-muted px-1 rounded">_ga_*</code>：保持会话状态，有效期2年</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            您可以在浏览器设置中禁用 Cookie，但这可能影响网站的部分功能。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">五、第三方服务</h2>
          <p className="text-muted-foreground">我们使用以下第三方服务：</p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
            <li><strong>Google Analytics</strong>：网站流量分析（<a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener">隐私政策</a>）</li>
            <li><strong>Google AdSense</strong>：广告服务（<a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener">隐私政策</a>）</li>
            <li><strong>Vercel</strong>：网站托管服务（<a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener">隐私政策</a>）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">六、数据安全</h2>
          <p className="text-muted-foreground">
            我们采取合理的安全措施保护您的信息。但请注意，互联网传输不是100%安全的。
            请勿在反馈中提交身份证号、银行卡号等敏感信息。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">七、您的权利</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>您可以清除浏览器数据来删除本地存储的投票记录</li>
            <li>您可以禁用浏览器 Cookie 来停止 Google Analytics 追踪</li>
            <li>如需删除已提交的反馈，请通过反馈页面联系我们</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">八、儿童隐私</h2>
          <p className="text-muted-foreground">
            本网站不面向13岁以下儿童。我们不会故意收集儿童的个人信息。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">九、政策更新</h2>
          <p className="text-muted-foreground">
            我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，请定期查看。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">十、联系我们</h2>
          <p className="text-muted-foreground">
            如有隐私相关问题，请通过<a href="/feedback" className="text-primary hover:underline">反馈页面</a>联系我们。
          </p>
        </section>
      </div>

      <div className="mt-12 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          本网站由个人运营，尽力保护您的隐私。如有疑问，欢迎反馈。
        </p>
      </div>
    </div>
  );
}
