// 教程数据

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 1 | 2 | 3; // 1=入门, 2=进阶, 3=高级
  duration: string; // 预计时间
  free: boolean;
  tags: string[];
  popular?: boolean;
}

export interface TutorialDetail extends Tutorial {
  content: string; // Markdown内容
}

export const categories = [
  { id: "writing", name: "写作助手", icon: "✍️", description: "用AI帮你写文章、周报、邮件" },
  { id: "image", name: "图像生成", icon: "🎨", description: "用AI画图、设计、修图" },
  { id: "office", name: "办公效率", icon: "💼", description: "用AI做PPT、表格、文档" },
  { id: "video", name: "视频制作", icon: "🎬", description: "用AI剪辑视频、配音、字幕" },
  { id: "learning", name: "学习助手", icon: "📚", description: "用AI翻译、问答、总结" },
];

export const tutorials: Tutorial[] = [
  // 写作助手
  {
    id: "chatgpt-intro",
    title: "ChatGPT 入门：从注册到第一次对话",
    description: "零基础学会使用ChatGPT，包括注册账号、界面介绍、提问技巧",
    category: "writing",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["ChatGPT", "入门", "免费"],
    popular: true,
  },
  {
    id: "kimi-intro",
    title: "Kimi 入门：能读懂文件的中国版ChatGPT",
    description: "学会使用Kimi，可以上传PDF、Word文件让它帮你阅读和总结",
    category: "writing",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["Kimi", "文件处理", "免费"],
    popular: true,
  },
  {
    id: "ai-write-report",
    title: "用AI帮你写周报、总结、邮件",
    description: "教你用AI快速生成工作文档，节省每天1小时",
    category: "writing",
    difficulty: 2,
    duration: "15分钟",
    free: true,
    tags: ["写作", "周报", "效率"],
    popular: true,
  },
  {
    id: "doubao-intro",
    title: "豆包入门：字节跳动的免费AI助手",
    description: "豆包完全免费，适合日常聊天、写作、翻译",
    category: "writing",
    difficulty: 1,
    duration: "8分钟",
    free: true,
    tags: ["豆包", "免费", "入门"],
    popular: true,
  },

  // 图像生成
  {
    id: "tongyi-draw",
    title: "通义万相：免费AI画图工具",
    description: "阿里巴巴出品的免费AI画图工具，输入文字就能生成图片",
    category: "image",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["AI画图", "免费", "通义万相"],
    popular: true,
  },
  {
    id: "midjourney-intro",
    title: "Midjourney 入门：专业级AI画图",
    description: "目前效果最好的AI画图工具，适合需要高质量图片的场景",
    category: "image",
    difficulty: 2,
    duration: "20分钟",
    free: false,
    tags: ["Midjourney", "专业", "付费"],
  },

  // 办公效率
  {
    id: "wps-ai",
    title: "WPS AI：一键生成PPT和文档",
    description: "WPS内置的AI功能，可以直接在PPT和文档中使用",
    category: "office",
    difficulty: 1,
    duration: "12分钟",
    free: true,
    tags: ["WPS", "PPT", "文档"],
  },
  {
    id: "gamma-ai",
    title: "Gamma：AI自动生成PPT",
    description: "输入主题，AI自动生成完整的演示文稿",
    category: "office",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["PPT", "Gamma", "演示"],
  },

  // 视频制作
  {
    id: "jianying-ai",
    title: "剪映AI：文字一键生成视频",
    description: "用剪映的AI功能，输入文字就能生成短视频",
    category: "video",
    difficulty: 1,
    duration: "15分钟",
    free: true,
    tags: ["剪映", "视频", "免费"],
    popular: true,
  },

  // 学习助手
  {
    id: "ai-translate",
    title: "AI翻译：比翻译软件更准确",
    description: "用AI翻译文档、网页、对话，比传统翻译软件更准确",
    category: "learning",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["翻译", "学习", "免费"],
  },
  {
    id: "ai-summary",
    title: "AI总结：快速读懂长文章",
    description: "把长文章、PDF发给AI，让它帮你总结要点",
    category: "learning",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["总结", "效率", "阅读"],
  },
];

export const faqs = [
  {
    category: "入门问题",
    items: [
      {
        q: "AI是什么？我为什么需要学？",
        a: "AI（人工智能）可以理解为一个\"非常聪明的助手\"。它可以帮你写文章、翻译、画图、做PPT等。学会用AI，就像多了一个24小时在线的助手，能帮你节省大量时间。",
      },
      {
        q: "我不懂英语，能用AI吗？",
        a: "完全可以！现在很多AI工具都支持中文，比如Kimi、豆包、通义千问等。你用中文和它对话，它也用中文回复你。",
      },
      {
        q: "我不会编程，能用AI吗？",
        a: "当然可以！现在的AI工具都是\"对话式\"的，你只需要打字和它聊天，不需要任何编程知识。",
      },
    ],
  },
  {
    category: "费用相关",
    items: [
      {
        q: "AI工具要钱吗？",
        a: "大部分AI工具都有免费版本，对于日常使用完全够用。如果你需要更高级的功能，可以考虑付费版本。",
      },
      {
        q: "免费和付费有什么区别？",
        a: "免费版通常有使用次数限制、功能较少。付费版一般会提供更多使用次数、更快的响应速度、更强大的功能。建议先用免费版，觉得不够用了再考虑付费。",
      },
      {
        q: "哪些工具值得付费？",
        a: "如果你经常写文章、做PPT，可以考虑 ChatGPT Plus 或 WPS AI 会员。如果你需要大量画图，可以考虑 Midjourney 会员。先用免费版试试，再决定。",
      },
    ],
  },
  {
    category: "隐私安全",
    items: [
      {
        q: "AI会不会泄露我的隐私？",
        a: "正规的AI工具（如ChatGPT、Kimi）都有隐私保护政策。但建议不要把身份证号、银行卡号等敏感信息发给AI。工作文件如果涉及机密，最好也避免上传。",
      },
      {
        q: "我可以把工作文件发给AI吗？",
        a: "普通的工作文件（如报告、PPT）可以，但涉及公司机密或客户隐私的文件，建议不要上传。",
      },
    ],
  },
  {
    category: "工具选择",
    items: [
      {
        q: "ChatGPT 和 Kimi 有什么区别？",
        a: "ChatGPT 是国外产品，功能最强大，但需要特殊网络才能访问。Kimi 是国内产品，完全免费，支持上传文件，更适合国内用户日常使用。",
      },
      {
        q: "哪个AI画图工具最好用？",
        a: "想要免费：通义万相（中文界面，完全免费）。想要专业：Midjourney（效果最好，但要付费）。新手建议先试试通义万相。",
      },
      {
        q: "国内能用的AI工具有哪些？",
        a: "聊天：Kimi、豆包、通义千问、文心一言。画图：通义万相。视频：剪映AI。办公：WPS AI。这些都是国内可以直接访问的。",
      },
    ],
  },
];

// 教程详情内容
export const tutorialDetails: Record<string, TutorialDetail> = {
  "chatgpt-intro": {
    id: "chatgpt-intro",
    title: "ChatGPT 入门：从注册到第一次对话",
    description: "零基础学会使用ChatGPT，包括注册账号、界面介绍、提问技巧",
    category: "writing",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["ChatGPT", "入门", "免费"],
    content: `
## 你将学会

- 什么是 ChatGPT
- 如何注册 ChatGPT 账号
- 如何开始第一次对话
- 几个实用的提问技巧

---

## 第一步：认识 ChatGPT

ChatGPT 是一个 AI 对话工具，你可以把它想象成一个\"非常聪明的聊天机器人\"。你可以问它任何问题，它会用人类的语言回答你。

**它能帮你做什么？**
- 写文章、写邮件、写周报
- 翻译外语
- 回答问题
- 帮你出主意
- 解释复杂的概念

---

## 第二步：注册账号

⚠️ **注意**：ChatGPT 是国外产品，需要能访问国外网站才能使用。如果你无法访问，推荐使用 **Kimi** 或 **豆包** 作为替代。

1. 打开网站：[chat.openai.com](https://chat.openai.com)
2. 点击 \"Sign up\"（注册）
3. 输入你的邮箱，设置密码
4. 验证邮箱
5. 完成注册

---

## 第三步：开始第一次对话

登录后，你会看到一个聊天界面。在底部的输入框输入你的问题，按回车发送。

**试试这个问题：**

\`\`\`
你好，请帮我写一个请假条，理由是家里有事
\`\`\`

ChatGPT 会立刻回复你：

\`\`\`
尊敬的领导：

您好！因家里有急事需要处理，特向您请假一天（X月X日）。
请假期间我会保持电话畅通，确保工作不受影响。
恳请批准。

此致
敬礼！

申请人：XXX
日期：XXXX年XX月XX日
\`\`\`

---

## 提问小技巧

1. **说清楚背景**
   - ❌ \"帮我写个邮件\"
   - ✅ \"帮我写一封请假邮件，理由是家里有事，请假一天\"

2. **给示例**
   - \"请用简单的语言解释量子力学，就像给小学生讲一样\"

3. **分步骤问**
   - 如果问题很复杂，可以拆成几个小问题依次问

---

## 下一步

- [用 AI 帮你写周报、总结、邮件](/tutorials/ai-write-report)
- [Kimi 入门教程](/tutorials/kimi-intro)
`,
  },
  "kimi-intro": {
    id: "kimi-intro",
    title: "Kimi 入门：能读懂文件的中国版ChatGPT",
    description: "学会使用Kimi，可以上传PDF、Word文件让它帮你阅读和总结",
    category: "writing",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["Kimi", "文件处理", "免费"],
    content: `
## 你将学会

- 什么是 Kimi
- 如何注册使用 Kimi
- 如何让 Kimi 帮你读文件
- 几个实用场景

---

## 第一步：认识 Kimi

Kimi 是月之暗面公司开发的 AI 对话工具，完全免费，支持中文。

**它最大的特点是：可以读取文件！**

你可以上传 PDF、Word、PPT、Excel 等文件，让它帮你：
- 总结文件内容
- 提取关键信息
- 翻译文件
- 根据文件回答问题

---

## 第二步：开始使用

Kimi 不需要注册就能使用！

1. 打开网站：[kimi.moonshot.cn](https://kimi.moonshot.cn)
2. 直接开始对话

如果想要保存对话历史，可以注册一个账号。

---

## 第三步：上传文件

点击输入框旁边的 \"上传文件\" 按钮，选择你要处理的文件。

**支持的文件类型：**
- PDF 文档
- Word 文档（.doc, .docx）
- PPT 演示文稿
- Excel 表格
- 图片
- 压缩包

上传后，你可以问它：

- \"帮我总结这个文档的主要内容\"
- \"这个文件里提到了哪些重要数据？\"
- \"帮我把这个英文文档翻译成中文\"

---

## 实用场景

1. **读长论文**
   - 上传论文 PDF，让它总结要点

2. **读合同**
   - 上传合同，让它帮你找出关键条款

3. **处理工作文档**
   - 上传报告，让它帮你写总结

---

## 下一步

- [用 AI 帮你写周报、总结、邮件](/tutorials/ai-write-report)
- [豆包入门教程](/tutorials/doubao-intro)
`,
  },
  "ai-write-report": {
    id: "ai-write-report",
    title: "用AI帮你写周报、总结、邮件",
    description: "教你用AI快速生成工作文档，节省每天1小时",
    category: "writing",
    difficulty: 2,
    duration: "15分钟",
    free: true,
    tags: ["写作", "周报", "效率"],
    content: `
## 你将学会

- 用AI写周报
- 用AI写工作总结
- 用AI写各类邮件
- 让AI的输出更符合你的需求

---

## 为什么用AI写文档？

很多人每周都要花 **1-2小时** 写周报、总结、邮件。用AI可以帮你：

- ⏱️ **节省时间**：30秒生成初稿，你只需要修改
- 📝 **格式规范**：AI生成的文档结构清晰
- 💡 **内容丰富**：AI会帮你补充你可能遗漏的点

---

## 场景一：写周报

**直接复制这段话发给AI：**

\`\`\`
请帮我写一份周报，本周完成了以下工作：
1. 完成了XX项目的需求分析
2. 参加了3次团队会议
3. 修复了2个bug
下周计划：
1. 开始XX功能的开发
2. 整理项目文档
\`\`\`

AI会立刻生成一份格式规范的周报！

> 💡 **技巧**：把你的工作内容列成要点发给AI，它帮你组织语言

---

## 场景二：写工作总结

**给AI更多背景信息：**

\`\`\`
请帮我写一份季度工作总结，要求：
- 我是XX公司的XX岗位
- 本季度主要完成了XX项目
- 遇到的挑战是XX，解决方法是XX
- 下季度计划是XX
语气要正式，控制在500字以内
\`\`\`

---

## 场景三：写邮件

**常用邮件模板：**

| 类型 | 给AI的提示词 |
|------|------------|
| 请假 | "帮我写封请假邮件，理由是身体不适，请假1天" |
| 汇报 | "帮我写封邮件向领导汇报项目进度，项目已完成80%" |
| 感谢 | "帮我写封感谢信，感谢客户的支持" |
| 申请 | "帮我写封申请，申请购买XX软件的授权" |

---

## 让输出更完美的技巧

1. **指定字数**
   - "控制在200字以内"
   - "写详细一点，500字左右"

2. **指定风格**
   - "语气正式一些"
   - "用口语化的方式写"
   - "像给朋友发消息一样写"

3. **提供示例**
   - "参考这个格式写：开头...中间...结尾..."

4. **多轮修改**
   - 第一版不满意？直接说："第三点再展开写一下"
   - AI会基于上一版继续修改

---

## 下一步

- [ChatGPT 入门教程](/tutorials/chatgpt-intro)
- [Kimi 入门教程](/tutorials/kimi-intro)
- [豆包入门教程](/tutorials/doubao-intro)
`,
  },
  "doubao-intro": {
    id: "doubao-intro",
    title: "豆包入门：字节跳动的免费AI助手",
    description: "豆包完全免费，适合日常聊天、写作、翻译",
    category: "writing",
    difficulty: 1,
    duration: "8分钟",
    free: true,
    tags: ["豆包", "免费", "入门"],
    content: `
## 你将学会

- 什么是豆包
- 如何使用豆包
- 豆包的特色功能
- 豆包 vs 其他AI工具对比

---

## 第一步：认识豆包

**豆包** 是字节跳动（抖音母公司）推出的 AI 助手。

**核心优势：**
- ✅ **完全免费** — 没有使用次数限制
- ✅ **国内直连** — 不需要特殊网络
- ✅ **手机电脑都能用** — 有网页版和APP
- ✅ **响应速度快** — 字节的技术底子

---

## 第二步：开始使用

### 网页版（推荐新手）

1. 打开网站：[www.doubao.com](https://www.doubao.com)
2. 直接开始对话（可以用抖音账号登录）

### 手机APP

1. 应用商店搜索「豆包」
2. 下载安装
3. 注册/登录即可使用

---

## 第三步：试试这些功能

### 🗣️ 对话聊天

和 ChatGPT 类似，直接打字提问：

- "今天天气怎么样？"
- "帮我解释一下什么是区块链"
- "给我讲个笑话"

### ✍️ 写作辅助

- "帮我写一篇关于春天的作文，300字"
- "帮我想5个抖音视频的标题"
- "把这段话改得更专业一点"

### 🌐 翻译

- "把'Hello, how are you?'翻译成中文"
- "帮我把这段中文翻译成英文商务邮件格式"

### 📚 知识问答

- "Python和JavaScript有什么区别？"
- "怎么做才好吃？"
- "推荐几本适合入门的书"

---

## 豆包 vs 其他工具

| 对比项 | 豆包 | Kimi | ChatGPT |
|--------|------|------|----------|
| 价格 | 免费 | 免费 | 部分付费 |
| 是否需要特殊网络 | ❌ 不需要 | ❌ 不需要 | ✅ 需要 |
| 上传文件 | 支持 | 强项 | 支持 |
| 响应速度 | 快 | 快 | 较快 |
| 适合场景 | 日常使用 | 读文件处理 | 最强大 |

**简单来说：**
- 日常聊天、简单任务 → **豆包**
- 要读文件 → **Kimi**
- 要最强能力 → **ChatGPT**（如果能访问）

---

## 下一步

- [用AI帮你写周报、总结、邮件](/tutorials/ai-write-report)
- [ChatGPT 入门教程](/tutorials/chatgpt-intro)
- [Kimi 入门教程](/tutorials/kimi-intro)
`,
  },
};

export function getTutorialById(id: string): TutorialDetail | undefined {
  return tutorialDetails[id];
}

export function getTutorialsByCategory(categoryId: string): Tutorial[] {
  return tutorials.filter((t) => t.category === categoryId);
}

export function getPopularTutorials(): Tutorial[] {
  return tutorials.filter((t) => t.popular);
}