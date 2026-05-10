// AI工具数据
export interface AITool {
  name: string;
  nameEn: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  pricing: "free" | "freemium" | "paid";
  logo?: string;
}

export const categories = [
  { id: "writing", name: "写作助手", icon: "✍️", description: "AI写作、文案生成、语法检查" },
  { id: "image", name: "图像生成", icon: "🎨", description: "AI绘图、图片编辑、logo设计" },
  { id: "chatbot", name: "AI对话", icon: "💬", description: "ChatGPT、Claude等对话AI" },
  { id: "video", name: "视频生成", icon: "🎬", description: "AI视频创作、剪辑、配音" },
  { id: "code", name: "编程助手", icon: "💻", description: "代码生成、代码解释、Bug修复" },
  { id: "audio", name: "音频处理", icon: "🎵", description: "语音合成、音乐生成、音频编辑" },
  { id: "productivity", name: "效率工具", icon: "⚡", description: "文档处理、思维导图、任务管理" },
  { id: "learning", name: "学习助手", icon: "📚", description: "AI家教、翻译、知识查询" },
];

export const aiTools: AITool[] = [
  // 写作助手
  {
    name: "ChatGPT",
    nameEn: "ChatGPT",
    description: "OpenAI开发的AI对话助手，支持写作、编程、分析等多种任务",
    url: "https://chat.openai.com",
    category: "chatbot",
    tags: ["对话", "写作", "编程", "分析"],
    pricing: "freemium",
  },
  {
    name: "Claude",
    nameEn: "Claude",
    description: "Anthropic开发的AI助手，擅长长文本分析和创意写作",
    url: "https://claude.ai",
    category: "chatbot",
    tags: ["对话", "写作", "分析", "创意"],
    pricing: "freemium",
  },
  {
    name: "DeepSeek",
    nameEn: "DeepSeek",
    description: "国产开源大语言模型，性价比高，支持代码和数学推理",
    url: "https://deepseek.com",
    category: "chatbot",
    tags: ["对话", "编程", "数学", "开源"],
    pricing: "freemium",
  },
  {
    name: "Copilot",
    nameEn: "GitHub Copilot",
    description: "GitHub推出的AI编程助手，实时代码补全和生成",
    url: "https://github.com/features/copilot",
    category: "code",
    tags: ["编程", "代码补全", "AI IDE"],
    pricing: "paid",
  },
  {
    name: "Cursor",
    nameEn: "Cursor",
    description: "AI优先的代码编辑器，深度集成GPT-4和Claude",
    url: "https://cursor.sh",
    category: "code",
    tags: ["编程", "IDE", "代码补全"],
    pricing: "freemium",
  },
  {
    name: "Midjourney",
    nameEn: "Midjourney",
    description: "强大的AI图像生成工具，通过Discord使用",
    url: "https://www.midjourney.com",
    category: "image",
    tags: ["图像生成", "艺术", "设计"],
    pricing: "paid",
  },
  {
    name: "Stable Diffusion",
    nameEn: "Stable Diffusion",
    description: "开源AI图像生成模型，可本地部署",
    url: "https://stability.ai",
    category: "image",
    tags: ["图像生成", "开源", "本地部署"],
    pricing: "free",
  },
  {
    name: "DALL-E",
    nameEn: "DALL-E",
    description: "OpenAI开发的AI图像生成器",
    url: "https://openai.com/dall-e-3",
    category: "image",
    tags: ["图像生成", "设计", "创意"],
    pricing: "paid",
  },
  {
    name: "Notion AI",
    nameEn: "Notion AI",
    description: "Notion内置的AI写作助手，帮你写文档、总结、翻译",
    url: "https://notion.so",
    category: "writing",
    tags: ["写作", "文档", "笔记"],
    pricing: "paid",
  },
  {
    name: "Jasper",
    nameEn: "Jasper",
    description: "专业的AI文案生成工具，适合营销内容创作",
    url: "https://www.jasper.ai",
    category: "writing",
    tags: ["写作", "营销", "文案"],
    pricing: "paid",
  },
  {
    name: "Gamma",
    nameEn: "Gamma",
    description: "AI演示文稿和文档生成器，快速创建PPT和报告",
    url: "https://gamma.app",
    category: "productivity",
    tags: ["PPT", "演示", "文档"],
    pricing: "freemium",
  },
  {
    name: "Runway",
    nameEn: "Runway",
    description: "AI视频生成和编辑平台，支持文生视频",
    url: "https://runwayml.com",
    category: "video",
    tags: ["视频", "AI视频", "编辑"],
    pricing: "freemium",
  },
  {
    name: "HeyGen",
    nameEn: "HeyGen",
    description: "AI数字人视频生成平台，快速创建营销视频",
    url: "https://www.heygen.com",
    category: "video",
    tags: ["数字人", "视频", "营销"],
    pricing: "freemium",
  },
  {
    name: "ElevenLabs",
    nameEn: "ElevenLabs",
    description: "AI语音合成平台，支持多语言和声音克隆",
    url: "https://elevenlabs.io",
    category: "audio",
    tags: ["语音", "配音", "TTS"],
    pricing: "freemium",
  },
  {
    name: "Suno",
    nameEn: "Suno",
    description: "AI音乐生成工具，用文字描述即可创作歌曲",
    url: "https://suno.ai",
    category: "audio",
    tags: ["音乐", "创作", "AI作曲"],
    pricing: "freemium",
  },
  {
    name: "Perplexity",
    nameEn: "Perplexity",
    description: "AI驱动的搜索引擎，实时获取和总结网络信息",
    url: "https://www.perplexity.ai",
    category: "learning",
    tags: ["搜索", "研究", "问答"],
    pricing: "freemium",
  },
  {
    name: "Phind",
    nameEn: "Phind",
    description: "专为开发者设计的AI搜索引擎",
    url: "https://www.phind.com",
    category: "code",
    tags: ["搜索", "编程", "开发者"],
    pricing: "free",
  },
  {
    name: "Kimi",
    nameEn: "Kimi",
    description: "月之暗面开发的AI助手，支持超长上下文和文件阅读",
    url: "https://kimi.moonshot.cn",
    category: "chatbot",
    tags: ["对话", "长文本", "文件分析"],
    pricing: "freemium",
  },
  {
    name: "通义千问",
    nameEn: "Tongyi Qianwen",
    description: "阿里云开发的AI大模型，支持多轮对话和代码生成",
    url: "https://qianwen.aliyun.com",
    category: "chatbot",
    tags: ["对话", "编程", "阿里云"],
    pricing: "freemium",
  },
  {
    name: "文心一言",
    nameEn: "ERNIE Bot",
    description: "百度开发的AI对话大模型，中文理解能力强",
    url: "https://yiyan.baidu.com",
    category: "chatbot",
    tags: ["对话", "中文", "百度"],
    pricing: "freemium",
  },
  {
    name: "讯飞星火",
    nameEn: "Spark",
    description: "科大讯飞开发的AI认知大模型，支持语音交互",
    url: "https://xinghuo.xfyun.cn",
    category: "chatbot",
    tags: ["对话", "语音", "讯飞"],
    pricing: "freemium",
  },
  {
    name: "秘塔搜索",
    nameEn: "Metaso",
    description: "国产AI搜索引擎，无广告，直达结果",
    url: "https://metaso.cn",
    category: "learning",
    tags: ["搜索", "AI搜索", "无广告"],
    pricing: "free",
  },
  {
    name: "Canva AI",
    nameEn: "Canva AI",
    description: "Canva的AI设计助手，快速生成海报和社交媒体图片",
    url: "https://www.canva.com",
    category: "image",
    tags: ["设计", "海报", "社交媒体"],
    pricing: "freemium",
  },
  {
    name: "Gamma AI",
    nameEn: "Gamma AI",
    description: "AI驱动的演示文稿和网页生成工具",
    url: "https://gamma.app",
    category: "productivity",
    tags: ["PPT", "演示", "AI生成"],
    pricing: "freemium",
  },
];

export function getToolsByCategory(categoryId: string): AITool[] {
  return aiTools.filter(tool => tool.category === categoryId);
}

export function getCategoryById(categoryId: string) {
  return categories.find(cat => cat.id === categoryId);
}