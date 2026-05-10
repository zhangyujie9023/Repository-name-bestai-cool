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

  // ===== 图像生成 =====
  "tongyi-draw": {
    id: "tongyi-draw",
    title: "通义万相：免费AI画图工具",
    description: "阿里巴巴出品的免费AI画图工具，输入文字就能生成图片",
    category: "image",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["AI画图", "免费", "通义万相"],
    content: `
## 你将学会

- 什么是通义万相
- 如何用文字生成图片
- 常用的画图提示词技巧
- 如何调整和优化图片

---

## 第一步：认识通义万相

**通义万相** 是阿里巴巴（淘宝/支付宝母公司）推出的 AI 画图工具。

**核心优势：**
- ✅ **完全免费** — 没有次数限制
- ✅ **中文友好** — 用中文描述就能画
- ✅ **不需要注册** — 直接打开就能用
- ✅ **效果不错** — 日常使用完全够

---

## 第二步：开始画图

1. 打开网站：[tongyi.aliyun.com/wanxiang](https://tongyi.aliyun.com/wanxiang)
2. 在输入框里描述你想画的图
3. 点击「生成」按钮
4. 等待几秒，图片就出来了！

---

## 第三步：写好提示词（关键！）

AI 画图的质量，80% 取决于你的**描述文字**（也叫「提示词」）。

### ❌ 太简单（效果差）
\
一只猫
\
→ 生成的是很普通的猫

### ✅ 具体生动（效果好）
\
一只橘色的英国短毛猫，坐在窗台上，阳光照在它的毛发上，毛茸茸的质感，背景是模糊的花园，摄影风格
\
→ 生成的是精美的大片感图片

### 提示词公式

**主体 + 动作/姿态 + 环境/背景 + 风格/光线 + 质感细节**

| 元素 | 示例 |
|------|------|
| 主体 | 一只猫、一位少女、一座山 |
| 动作 | 坐着、奔跑、仰望 |
| 背景 | 在窗台上、在海边、在森林里 |
| 风格 | 摄影风格、油画风、动漫风、水彩 |
| 光线 | 阳光、夕阳、月光、柔光 |

---

## 实用场景

### 🖼️ 做公众号封面
\
蓝色渐变背景，中间放一本打开的书，书页发出金色光芒，周围飘浮着星星和音符，简约扁平设计风格
\

### 🎨 做 PPT 配图
\
商务风格的插图，两个人在握手，背景是现代办公室，扁平化设计，蓝白色调
\

### 🌸 发朋友圈
\
春天的樱花树下，一位穿白裙的女生在拍照，阳光透过花瓣洒下来，日系清新风格
\

---
## 下一步

- [Midjourney 入门：专业级AI画图](/tutorials/midjourney-intro)
- [ChatGPT 入门教程](/tutorials/chatgpt-intro)
`,
  },

  "midjourney-intro": {
    id: "midjourney-intro",
    title: "Midjourney 入门：专业级AI画图",
    description: "目前效果最好的AI画图工具，适合需要高质量图片的场景",
    category: "image",
    difficulty: 2,
    duration: "20分钟",
    free: false,
    tags: ["Midjourney", "专业", "付费"],
    content: `
## 你将学会

- 什么是 Midjourney
- 如何注册和使用 Midjourney
- Midjourney 的基本命令
- 如何生成高质量图片

---

## 第一步：认识 Midjourney

**Midjourney** 是目前公认效果最好的 AI 画图工具。

**特点：**
- 🎨 **画质顶级** — 艺术感和细节远超其他工具
- 💰 **需要付费** — 按月订阅制
- 📱 **通过 Discord 使用** — 在 Discord 里和 AI 对话来画图
- ⚡ **需要特殊网络** — 国外产品

**适合人群：** 设计师、自媒体运营、需要高质量配图的用户

> ⚠️ 如果只是日常随便画画，推荐先用免费的**通义万相**。Midjourney 适合对画质有较高要求的场景。

---

## 第二步：注册和准备

### 1. 注册 Discord 账号
Midjourney 运行在 Discord 上，所以你需要先有 Discord 账号。

1. 打开 [discord.com](https://discord.com) 注册
2. 下载 Discord 客户端（电脑手机都行）

### 2. 加入 Midjourney 服务器
1. 打开 [midjourney.com](https://www.midjourney.com)
2. 点击 "Join the Beta"
3. 会跳转到 Discord 的 Midjourney 服务器
4. 接受邀请加入

### 3. 订阅会员
1. 在 Discord 里输入 /subscribe
2. 选择套餐（基础版 $10/月起）
3. 完成支付

---

## 第三步：开始画图

### 基本用法
在新手频道（#newbies）输入：

\`\`\`
/imagine prompt: 一只穿着宇航服的猫在月球上漫步，地球在背景中，科幻电影风格
\`\`\`

等待约 30 秒-1 分钟，AI 就会生成 4 张图片供你选择。

### 常用参数

| 参数 | 作用 | 示例 |
|------|------|------|
| --ar | 图片比例 | --ar 16:9（横图）--ar 9:16（竖图） |
| --v | 版本号 | --v 6（最新版本） |
| --q | 质量 | --q 2（更高质量） |
| --s | 风格化程度 | --s 250（更有艺术感） |
| --no | 排除元素 | --no 文字, 水印 |

### 完整示例
\`\`\`
/imagine prompt: 一位中国古典美女站在樱花树下，汉服飘逸，花瓣飘落，柔和的春日光线，摄影风格，景深虚化 --ar 3:4 --v 6 --q 2
\`\`\`

---

## 第四步：选图和放大

生成 4 张图后：
1. 点击你最喜欢的那张（U1/U2/U3/U4）→ **放大这张图**
2. 或者点击 V 按钮 → **以这张图为参考再变体 4 张**
3. 放大后还可以继续点 Refresh → 再次放大

---

## 下一步

- [通义万相：免费AI画图工具](/tutorials/tongyi-draw)
- [剪映AI：文字一键生成视频](/tutorials/jianying-ai)
`,
  },

  // ===== 办公效率 =====
  "wps-ai": {
    id: "wps-ai",
    title: "WPS AI：一键生成PPT和文档",
    description: "WPS内置的AI功能，可以直接在PPT和文档中使用",
    category: "office",
    difficulty: 1,
    duration: "12分钟",
    free: true,
    tags: ["WPS", "PPT", "文档"],
    content: `
## 你将学会

- WPS AI 是什么
- 用 AI 一键生成 PPT
- 用 AI 写文档/总结
- WPS AI 的实用技巧

---

## 第一步：认识 WPS AI

**WPS AI** 是金山办公软件（WPS）内置的人工智能功能。

**核心优势：**
- ✅ **无需额外安装** — WPS 自带的功能
- ✅ **中文完美支持** — 国内产品，中文理解能力强
- ✅ **与文档深度整合** — 直接在 PPT/Word 里使用
- ⚠️ **需要 WPS 最新版本** — 旧版本可能没有

---

## 第二步：准备环境

1. 确保安装了 **WPS Office 最新版**
   - 官网下载：[wps.cn](https://www.wps.cn)
2. 打开 WPS，登录账号（免费注册即可）
3. 找到右上角的 **「AI」或「WPS AI」按钮**

> 💡 如果找不到 AI 按钮，检查一下 WPS 是否需要更新到最新版本

---

## 第三步：一键生成 PPT（最常用功能）

### 方法一：从零生成

1. 打开 WPS → 新建 → 演示文稿
2. 点击 **「AI 生成 PPT」** 按钮
3. 输入主题，例如：
   - "2024年第一季度工作总结"
   - "人工智能基础知识介绍"
   - "端午节活动策划方案"
4. 点击「生成」，等待 30 秒左右
5. AI 自动生成完整的 PPT，包含多页内容和配图！

### 方法二：大纲生成

如果你已经有内容思路：

1. 先写好一个大纲（每行一个要点）
2. 选中大纲文字
3. 点击 **「AI 生成 PPT」**
4. AI 根据你的大纲自动扩展成完整 PPT

---

## 第四步：AI 写文档

### 在 Word 中使用

1. 打开 WPS 文字（Word）
2. 点击 **「WPS AI」选项卡**
3. 常用功能：

| 功能 | 说明 | 示例 |
|------|------|------|
| 续写文字 | AI 帮你接着写 | 选中文本 → 点「续写」 |
| 总结全文 | AI 总结当前文档 | 点「总结全文」 |
| 扩写内容 | 让内容更丰富 | 选中一段 → 点「扩写」 |
| 缩写内容 | 让内容更精简 | 选中一段 → 点「缩写」 |
| 改写润色 | 让文字更专业 | 选中 → 点「改写」 |

---

## 下一步

- [Gamma：AI自动生成PPT](/tutorials/gamma-ai)
- [用AI帮你写周报、总结、邮件](/tutorials/ai-write-report)
`,
  },

  "gamma-ai": {
    id: "gamma-ai",
    title: "Gamma：AI自动生成PPT",
    description: "输入主题，AI自动生成完整的演示文稿",
    category: "office",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["PPT", "Gamma", "演示"],
    content: `
## 你将学会

- Gamma 是什么
- 用 Gamma 快速生成 PPT
- Gamma vs WPS AI 对比
- 导出和分享

---

## 第一步：认识 Gamma

**Gamma** 是一款在线 AI 演示文稿制作工具。

**核心优势：**
- ✅ **纯在线使用** — 不用安装软件，浏览器打开就行
- ✅ **生成速度极快** — 1 分钟出完整 PPT
- ✅ **模板美观** — 默认模板就很漂亮
- ✅ **免费额度够用** — 每月有免费生成次数

**与 WPS AI 的区别：**

| 对比项 | Gamma | WPS AI |
|--------|-------|--------|
| 使用方式 | 在线网页 | 需要安装软件 |
| 生成速度 | 更快（~1分钟） | 较慢（~30秒/页） |
| 模板美观度 | 更现代时尚 | 偏传统商务 |
| 编辑灵活性 | 一般 | 强（WPS 全功能编辑） |
| 中文支持 | 支持 | 原生支持更好 |

**建议：** 要快速出好看 PPT → **Gamma**；要深度编辑 → **WPS AI**

---

## 第二步：开始使用

1. 打开网站：[gamma.app](https://gamma.app)
2. 注册/登录（可以用 Google 账号或邮箱）
3. 点击 **「Create new」→「Generate」**

---

## 第三步：生成 PPT

### 输入主题
在输入框里写清楚你要做什么 PPT：

\`\`\`
帮我做一个关于「远程工作效率提升」的PPT，面向公司管理层，10页左右，包含现状分析、问题、解决方案、预期效果
\`\`\`

### 选择风格
Gamma 会让你选择：
- **风格**：商务 / 学术 / 创意 / 简约
- **语言**：中文 / 英文
- **页数**：建议 8-15 页

点击「生成」，等 1 分钟左右就完成了！

---

## 第四步：编辑和导出

### 编辑
- 点击任意文字可以直接修改
- 可以拖拽调整布局
- 可以替换图片
- 可以新增/删除页面

### 导出
- **PPT 格式**：导出为 .pptx（兼容 PowerPoint/WPS）
- **PDF 格式**：直接导出 PDF
- **在线分享**：生成链接，别人可以直接浏览
- **嵌入网页**：可以嵌入到自己的网站里

---

## 下一步

- [WPS AI：一键生成PPT和文档](/tutorials/wps-ai)
- [ChatGPT 入门教程](/tutorials/chatgpt-intro)
`,
  },

  // ===== 视频制作 =====
  "jianying-ai": {
    id: "jianying-ai",
    title: "剪映AI：文字一键生成视频",
    description: "用剪映的AI功能，输入文字就能生成短视频",
    category: "video",
    difficulty: 1,
    duration: "15分钟",
    free: true,
    tags: ["剪映", "视频", "免费"],
    content: `
## 你将学会

- 剪映 AI 是什么
- 用文字生成视频（图文成片）
- AI 数字人功能
- 实用场景和技巧

---

## 第一步：认识剪映 AI

**剪映** 是字节跳动（抖音官方）推出的视频剪辑工具，**剪映专业版** 内置了强大的 AI 功能。

**核心优势：**
- ✅ **完全免费** — AI 功能不收费
- ✅ **中文原生** — 抖音官方出品，中文理解极好
- ✅ **素材丰富** — 内置大量音乐、贴纸、特效
- ✅ **一键发布** — 做完直接发抖音

---

## 第二步：准备工作

1. 下载 **剪映专业版**（电脑版）
   - 官网：[www.capcut.cn](https://www.capcut.cn)（国内叫剪映）
   - 注意：要下「剪映专业版」，不是手机版
2. 安装并登录（可以用抖音账号）

---

## 第三步：文字一键生成视频（图文成片）

这是最实用的功能！只需要输入文字，AI 自动帮你配上画面、音乐、字幕。

### 操作步骤

1. 打开剪映专业版
2. 点击 **「AI 文字成片」** 或 **「图文成片」**
3. 在输入框粘贴你的文案，例如：

\`\`\`
今天给大家介绍5个提高效率的好方法：
第一，每天早上列出当天最重要的三件事。
第二，工作时手机静音，减少干扰。
第三，用番茄工作法，25分钟专注+5分钟休息。
第四，学会说"不"，不要什么都接。
第五，每天留30分钟给自己复盘和规划。
坚持一周，你会发现效率明显提升！
\`\`\`

4. 选择 **「视频模式」**（推荐）或「图片模式」
5. 点击 **「生成视频」**
6. 等待 1-2 分钟，视频就做好了！

AI 会自动：
- 🎬 匹配相关画面素材（来自素材库）
- 🎵 添加合适的背景音乐
- 📝 自动生成字幕
- ✨ 加上转场特效

---

## 第四步：微调和发布

### 微调
- 不满意的画面 → 右键替换素材
- 音乐不对劲 → 更换背景音乐
- 字幕有错别字 → 直接编辑文字
- 想加 logo → 导入图片拖进去

### 发布
- 点击右上角 **「导出」** → 选择清晰度 → 导出
- 或者直接 **「发布到抖音」** 一键上传

---

## 实用场景

| 场景 | 文案示例 |
|------|----------|
| 口播视频 | 把你要说的话写成稿子，生成视频 |
| 产品介绍 | 产品特点+优势，自动配产品画面 |
| 知识科普 | 知识点讲解，自动配示意图 |
| 朋友圈/小红书 | 心情文字，生成唯美短视频 |

---

## 下一步

- [Midjourney 入门：专业级AI画图](/tutorials/midjourney-intro)
- [通义万相：免费AI画图工具](/tutorials/tongyi-draw)
`,
  },

  // ===== 学习助手 =====
  "ai-translate": {
    id: "ai-translate",
    title: "AI翻译：比翻译软件更准确",
    description: "用AI翻译文档、网页、对话，比传统翻译软件更准确",
    category: "learning",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["翻译", "学习", "免费"],
    content: `
## 你将学会

- 为什么 AI 翻译比传统翻译软件更好
- 用 AI 翻译各种内容
- 翻译技巧和注意事项

---

## 为什么用 AI 翻译？

传统翻译软件（如 Google 翻译、百度翻译）：
- ❌ 经常翻得生硬、不通顺
- ❌ 不理解上下文，容易翻错
- ❌ 专业术语翻译不准确

AI 翻译的优势：
- ✅ **理解语境** — 能根据上下文准确翻译
- ✅ **风格自然** — 翻出来的文字像人写的
- ✅ **支持长文** — 整篇文档都能翻译
- ✅ **多种风格** — 可以指定正式/口语化等风格

---

## 场景一：翻译文章/段落

直接发给 AI：

\`\`\`
请帮我把以下英文翻译成中文，要求自然流畅：

Artificial intelligence is transforming the way we work and live.
From smart assistants to self-driving cars, AI is becoming an integral part of our daily lives.
\`\`\`

AI 会给出地道的中文翻译。

---

## 场景二：翻译整篇文档

用 **Kimi** 最方便（支持上传文件）：

1. 打开 [kimi.moonshot.cn](https://kimi.moonshot.cn)
2. 上传你要翻译的 Word/PDF 文件
3. 输入：「请把这篇文档翻译成中文/英文」
4. AI 会逐段翻译，保持原文格式

---

## 场景三：翻译对话/邮件

\`\`\`
请帮我翻译这封邮件回复，要求语气礼貌、专业：

英文原文：Thank you for your email. I appreciate your patience.
I will get back to you by tomorrow with the updated information.
\`\`\`

或者反过来：

\`\`\`
请帮我把这段中文翻译成英文商务邮件格式：

张总您好，附件是本季度的销售报告，请您审阅。
如有任何问题，随时联系我。
\`\`\`

---

## 翻译技巧

1. **告诉 AI 背景**
   - 「这是一封给客户的邮件，语气要正式客气」
   - 「这是技术文档，专业术语要准确」

2. **指定目标读者**
   - 「翻译成小学生能看懂的中文」
   - 「翻译成学术论文风格的英文」

3. **分段翻译**
   - 长文档建议分段发，每次 500-1000 字
   - 这样质量更高，也方便检查

---

## 下一步

- [AI总结：快速读懂长文章](/tutorials/ai-summary)
- [Kimi 入门教程](/tutorials/kimi-intro)
`,
  },

  "ai-summary": {
    id: "ai-summary",
    title: "AI总结：快速读懂长文章",
    description: "把长文章、PDF发给AI，让它帮你总结要点",
    category: "learning",
    difficulty: 1,
    duration: "10分钟",
    free: true,
    tags: ["总结", "效率", "阅读"],
    content: `
## 你将学会

- 用 AI 快速总结长文章/PDF
- 不同类型的总结方式
- 提取关键信息和数据

---

## 为什么用 AI 总结？

我们经常遇到这种情况：
- 📄 收到一份 50 页的报告，没时间细看
- 🔗 看到一篇很长的公众号文章，只想知道重点
- 📊 会议纪要有好几页，想快速了解结论

**AI 帮你：** 3 秒读完 1 小时的内容

---

## 场景一：总结网页文章

复制文章链接或内容，发给 AI：

\`\`\`
请帮我总结这篇文章的主要内容，包括：
1. 核心观点（3条以内）
2. 关键数据
3. 作者的结论
\`\`\`

如果用的是 Kimi，甚至可以直接粘贴链接：

\`\`\`
请总结这篇文章：https://xxx.com/article/xxx
\`\`\`

---

## 场景二：总结 PDF/Word 文档

**推荐用 Kimi**（支持文件上传）：

1. 打开 [kimi.moonshot.cn](https://kimi.moonshot.cn)
2. 上传 PDF 或 Word 文件
3. 输入总结指令：

| 你想要 | 输入这个 |
|--------|----------|
| 一句话总结 | 「用一句话总结这份文档」 |
| 3 个要点 | 「总结出最重要的 3 个要点」 |
| 详细摘要 | 「写一份 200 字的摘要」 |
| 提取数据 | 「提取文中所有数字和数据」 |
| 列出结论 | 「列出文档的所有结论和建议」 |
| 对比分析 | 「对比文档中提到的几个方案的优缺点」 |

---

## 场景三：总结会议记录

\`\`\`
请帮我整理以下会议记录：
1. 提炼会议决议（哪些事确定了）
2. 列出待办事项（谁、做什么、什么时候完成）
3. 标注未解决的问题
\`\`\`

然后粘贴会议记录内容。

---

## 高级用法

### 按角色总结
\`\`\`
请分别从以下角度总结：
- 作为管理者，关注什么？
- 作为执行者，需要做什么？
- 作为客户，关心什么？
\`\`\`

### 生成摘要 + 详细版
\`\`\`
请提供两个版本的总结：
1. 精简版（给领导看，100字以内）
2. 详细版（给自己看，包含具体数据和操作步骤）
\`\`\`

---

## 下一步

- [AI翻译：比翻译软件更准确](/tutorials/ai-translate)
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