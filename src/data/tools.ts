// AI工具数据库
// 每个工具包含：名称、网址、下载链接、logo图标、分类、简介（简明在前）、使用方法、教程链接

export interface AITool {
  id: string;
  name: string;
  nameEn?: string;
  website: string;
  downloadUrl?: string;        // 直接下载链接（手机可用）
  appStoreUrl?: string;        // iOS App Store
  playStoreUrl?: string;       // Android Play Store
  logo: string;               // emoji图标
  category: string;            // 分类ID
  shortDesc: string;          // 一句话简介（简明在前）
  howToUse: string[];         // 如何使用的步骤
  price: "免费" | "部分免费" | "付费" | "开源免费";
  isDomestic: boolean;         // 国内是否可直接访问
  tutorialId?: string;        // 对应教程ID（关联到教程页）
  highlight?: boolean;          // 是否首页高亮推荐
  tags: string[];
}

export const toolCategories = [
  { id: "image", name: "图像生成", icon: "🎨", description: "AI画图、设计、修图" },
  { id: "writing", name: "写作助手", icon: "✍️", description: "写文章、翻译、润色" },
  { id: "office", name: "办公效率", icon: "💼", description: "PPT、表格、文档" },
  { id: "video", name: "视频制作", icon: "🎬", description: "AI剪辑、配音、字幕" },
  { id: "audio", name: "音频处理", icon: "🎵", description: "文字转语音、作曲" },
  { id: "search", name: "AI搜索", icon: "🔍", description: "智能问答、资料查找" },
  { id: "dev", name: "开发工具", icon: "💻", description: "编程、代码、搭建网站" },
  { id: "design", name: "设计Logo", icon: "🎯", description: "品牌设计、Logo生成" },
  { id: "productivity", name: "效率工具", icon: "⚡", description: "搜索、表格、语音转文字" },
];

export const tools: AITool[] = [
  // ========== 图像生成 ==========
  {
    id: "midjourney",
    name: "Midjourney",
    website: "https://www.midjourney.com",
    logo: "🎨",
    category: "image",
    shortDesc: "效果最好的AI画图工具，输入文字描述就能生成专业级图片。适合做插画、海报、封面、Logo设计。",
    howToUse: [
      "在Discord注册账号，加入Midjourney服务器",
      "在对话框输入 /imagine 指令",
      "用英文描述你想要生成的图片内容",
      "等待约30秒，AI生成4张图片供选择",
      "选择满意的图片，可放大(U)或变体(V)"
    ],
    price: "付费",
    isDomestic: false,
    highlight: true,
    tags: ["AI画图", "专业", "付费", "英文界面"]
  },
  {
    id: "tongyi-xiang",
    name: "通义万相",
    nameEn: "Tongyi Wanxiang",
    website: "https://tongyi.aliyun.com/wanxiang",
    downloadUrl: "https://tongyi.aliyun.com/wanxiang",
    logo: "🖼️",
    category: "image",
    shortDesc: "阿里巴巴出品的免费AI画图工具，中文界面，完全免费，适合新手入门。输入中文描述即可生成图片。",
    howToUse: [
      "用淘宝或支付宝账号直接登录（无需注册）",
      "点击「文字生成图片」",
      "用中文输入图片描述，例如：一只可爱的橘猫在草地上晒太阳",
      "选择图片风格（动漫、写实、水彩等）",
      "点击生成，等待10秒左右即可下载"
    ],
    price: "免费",
    isDomestic: true,
    tutorialId: "tongyi-draw",
    highlight: true,
    tags: ["AI画图", "免费", "中文界面", "国内可用"]
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    website: "https://stability.ai",
    logo: "🌌",
    category: "image",
    shortDesc: "开源免费可本地部署的AI画图工具，效果强大。适合有电脑基础、想要完全免费无限制使用的用户。",
    howToUse: [
      "方式一（推荐新手）：使用在线版DreamStudio",
      "方式二：在自己电脑上安装Stable Diffusion WebUI",
      "输入英文提示词描述图片",
      "调整参数（图片尺寸、步数、采样器）",
      "生成后右键保存图片"
    ],
    price: "开源免费",
    isDomestic: false,
    tags: ["AI画图", "开源免费", "本地部署", "英文"]
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    website: "https://leonardo.ai",
    logo: "🧙",
    category: "image",
    shortDesc: "每日150积分免费使用，专业级AI画图，特别擅长游戏风格、角色设计、动漫图片。",
    howToUse: [
      "用邮箱注册账号（推荐Gmail）",
      "进入「Dream」功能开始创作",
      "输入英文提示词，选择风格模型",
      "每天登录送150积分，约可生成150张图",
      "高清图片需要消耗更多积分"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["AI画图", "动漫风", "游戏素材", "英文"]
  },
  {
    id: "ideogram",
    name: "Ideogram",
    website: "https://ideogram.ai",
    logo: "✨",
    category: "image",
    shortDesc: "免费AI画图，擅长文字融入图片（图片里可以有准确的文字），做海报、封面、Logo特别好用。",
    howToUse: [
      "用Google账号或邮箱注册",
      "输入提示词（支持在图片中生成文字）",
      "选择风格和宽高比",
      "免费用户每天100张额度",
      "点击下载高清图片"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI画图", "文字图片", "免费", "英文"]
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    website: "https://firefly.adobe.com",
    logo: "🔥",
    category: "image",
    shortDesc: "Adobe出品的AI工具，可生成图片、扩图、换衣服、换背景。适合已有PS基础的用户。",
    howToUse: [
      "用Adobe账号登录（可用QQ邮箱）",
      "点击「文生图」输入中文描述",
      "可选择图片比例和风格",
      "生成的图片可直接在PS中编辑",
      "每月25个免费快速生成额度"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["AI画图", "Adobe", "PS配套", "英文"]
  },
  {
    id: "canva",
    name: "Canva",
    website: "https://www.canva.com",
    downloadUrl: "https://www.canva.com/download/",
    appStoreUrl: "https://apps.apple.com/app/canva/id897446215",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.canva.editor",
    logo: "🎬",
    category: "image",
    shortDesc: "在线设计平台，AI生成PPT、海报、Logo、社交媒体图片。模板超多，做设计不用学PS。",
    howToUse: [
      "用邮箱或Google账号注册（可用QQ邮箱）",
      "选择想做的内容类型（PPT/海报/Logo等）",
      "挑选模板后用AI工具修改内容",
      "AI图片生成功能：点击「AI生成图片」输入描述",
      "完成后点击右上角「分享」或「下载」"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["设计", "PPT", "海报", "模板多"]
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    website: "https://www.remove.bg",
    logo: "🖼️",
    category: "image",
    shortDesc: "一键AI自动抠图，去除照片背景，保留人物或物品。5秒搞定，比PS快100倍。完全免费使用。",
    howToUse: [
      "打开网站，点击「上传图片」",
      "选择照片，等待5秒自动抠图",
      "点击「下载」保存无背景图片",
      "免费用户下载的是标准分辨率",
      "付费用户可下载高清4K原图"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["抠图", "去背景", "免费", "快速"]
  },

  // ========== 写作助手 ==========
  {
    id: "chatgpt",
    name: "ChatGPT",
    website: "https://chat.openai.com",
    appStoreUrl: "https://apps.apple.com/app/chatgpt/id6448311029",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
    logo: "🤖",
    category: "writing",
    shortDesc: "全球最强大的AI对话助手，可写文章、翻译、编程、回答问题、生成创意。相当于一个24小时在线的超级助理。",
    howToUse: [
      "访问官网，用邮箱注册账号（需要国外手机号验证）",
      "免费版使用GPT-3.5（足够日常使用）",
      "在对话框输入你的问题或需求",
      "提问越具体，回答越准确",
      "可用中文提问，ChatGPT用中文回答"
    ],
    price: "部分免费",
    isDomestic: false,
    tutorialId: "chatgpt-intro",
    highlight: true,
    tags: ["AI对话", "全能", "英文界面", "需翻墙"]
  },
  {
    id: "kimi",
    name: "Kimi",
    website: "https://kimi.moonshot.cn",
    downloadUrl: "https://kimi.moonshot.cn",
    appStoreUrl: "https://apps.apple.com/app/id6677418498",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.moonshot.kimi",
    logo: "📄",
    category: "writing",
    shortDesc: "国产AI助手，最大特色是能上传PDF/Word文件让AI阅读总结。国内免费使用，中文支持最好。",
    howToUse: [
      "打开官网，用手机号或微信直接登录（无需翻墙）",
      "在对话框输入问题，可以上传文件",
      "上传文件方法：点击输入框左边的📎图标",
      "支持PDF、Word、Excel、图片等文件",
      "每月可处理数百万字，完全免费"
    ],
    price: "免费",
    isDomestic: true,
    tutorialId: "kimi-intro",
    highlight: true,
    tags: ["AI对话", "免费", "文件处理", "国内可用"]
  },
  {
    id: "tongyi-qianwen",
    name: "通义千问",
    website: "https://tongyi.aliyun.com",
    downloadUrl: "https://tongyi.aliyun.com",
    appStoreUrl: "https://apps.apple.com/app/id1619995104",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.aliyun.intl.tongyi",
    logo: "🧠",
    category: "writing",
    shortDesc: "阿里巴巴出品的国产AI，中文理解能力强。和淘宝、支付宝账号通用，登录方便，适合日常使用。",
    howToUse: [
      "用淘宝或支付宝账号直接登录",
      "支持网页版和手机APP",
      "输入中文问题，AI用中文回答",
      "可生成PPT、写文章、画图片（一站式）",
      "所有功能免费使用"
    ],
    price: "免费",
    isDomestic: true,
    highlight: true,
    tags: ["AI对话", "免费", "阿里系", "国内可用"]
  },
  {
    id: "wenshu",
    name: "文心一言",
    website: "https://yiyan.baidu.com",
    downloadUrl: "https://yiyan.baidu.com",
    appStoreUrl: "https://apps.apple.com/app/文心一言/id6443830496",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.baidu.aitask",
    logo: "📝",
    category: "writing",
    shortDesc: "百度出品的国产AI，擅长中文理解和文学创作。免费使用，和百度账号通用。",
    howToUse: [
      "用百度账号登录（手机号注册）",
      "在对话框输入问题或任务",
      "支持生成图片（文生图）、写代码",
      "可创建自己的智能体（AI助手）",
      "手机APP体验流畅，免费使用"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI对话", "免费", "百度", "国内可用"]
  },
  {
    id: "doubao",
    name: "豆包",
    website: "https://www.doubao.com",
    downloadUrl: "https://www.doubao.com",
    appStoreUrl: "https://apps.apple.com/app/豆包/id6443892000",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.larus.shooting",
    logo: "🥟",
    category: "writing",
    shortDesc: "字节跳动出品，界面友好，完全免费。支持语音对话（像Siri一样说话），适合不喜欢打字的朋友。",
    howToUse: [
      "用抖音账号直接登录",
      "点击麦克风图标，直接说话提问",
      "豆包会用语音回复你",
      "可以创建多个AI智能体",
      "写作、翻译、问答全部免费"
    ],
    price: "免费",
    isDomestic: true,
    tutorialId: "doubao-intro",
    highlight: true,
    tags: ["AI对话", "语音", "免费", "抖音账号"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    website: "https://www.deepseek.com",
    downloadUrl: "https://www.deepseek.com",
    appStoreUrl: "https://apps.apple.com/app/deepseek/id6472025450",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.deepseek.app",
    logo: "🔮",
    category: "writing",
    shortDesc: "国产顶级AI，代码能力极强，价格便宜（GPT-4水平的1/30）。写代码、做分析、研究问题首选。",
    howToUse: [
      "打开官网，用手机号注册",
      "免费版使用DeepSeek Chat（V3模型）",
      "编程问题推荐用DeepSeek Coder",
      "API价格极低，适合开发者",
      "中文支持优秀，回答专业"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["AI对话", "编程", "便宜", "国产"]
  },

  // ========== 办公效率 ==========
  {
    id: "wps-ai",
    name: "WPS AI",
    website: "https://www.wps.cn",
    downloadUrl: "https://www.wps.cn",
    appStoreUrl: "https://apps.apple.com/app/wps-office/id1443749478",
    playStoreUrl: "https://play.google.com/store/apps/details?id=cn.wps.moffice_eng",
    logo: "📊",
    category: "office",
    shortDesc: "WPS内置的AI功能，写文章、做PPT、表格数据分析，一键搞定。适合已用WPS的用户，无缝衔接。",
    howToUse: [
      "下载最新版WPS Office（免费）",
      "登录WPS账号（手机号注册）",
      "Word中点击「WPS AI」按钮使用AI写作",
      "PPT中点击「AI助手」自动生成幻灯片",
      "Excel中可AI分析数据、生成图表"
    ],
    price: "部分免费",
    isDomestic: true,
    tutorialId: "wps-ai",
    tags: ["PPT", "Word", "Excel", "国内可用"]
  },
  {
    id: "gamma",
    name: "Gamma",
    website: "https://gamma.app",
    logo: "📽️",
    category: "office",
    shortDesc: "输入一个主题，AI自动生成完整PPT演示文稿。支持在线演示和导出PDF，新手做PPT神器。",
    howToUse: [
      "用Google账号注册（gmail邮箱）",
      "点击「New with AI」创建新PPT",
      "输入PPT主题或粘贴文本内容",
      "AI自动生成幻灯片，可在线编辑",
      "完成后点击「Present」在线演示或「Share」分享"
    ],
    price: "部分免费",
    isDomestic: false,
    tutorialId: "gamma-ai",
    tags: ["PPT", "自动生成", "演示文稿"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    website: "https://www.notion.so",
    logo: "📓",
    category: "office",
    shortDesc: "AI笔记工具，可自动写文章、总结笔记、翻译、纠正语法。让笔记和文档更高效。",
    howToUse: [
      "注册Notion账号（可用QQ邮箱）",
      "新建一个页面，开始写内容",
      "按空格键或Ctrl+K调出AI菜单",
      "选择AI功能：写文章/总结/翻译等",
      "免费用户每月20次AI额度"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["笔记", "文档", "AI写作"]
  },
  {
    id: "chatdoc",
    name: "ChatDoc",
    website: "https://chatdoc.com",
    logo: "📑",
    category: "office",
    shortDesc: "上传PDF文档，AI帮你阅读和回答问题。像Kimi一样能处理文件，适合处理合同、论文、报告。",
    howToUse: [
      "打开网站，注册账号（邮箱即可）",
      "上传PDF、Word或Excel文件",
      "用中文提问关于文档的问题",
      "AI会引用原文位置来回答",
      "免费用户可上传2MB文件/天"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["PDF", "文档问答", "文件处理"]
  },

  // ========== 视频制作 ==========
  {
    id: "jianying",
    name: "剪映",
    website: "https://www.jianying.com",
    downloadUrl: "https://www.capcut.cn",
    appStoreUrl: "https://apps.apple.com/app/剪映/id1502776009",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lemon.lvov",
    logo: "🎥",
    category: "video",
    shortDesc: "字节跳动出品的免费视频剪辑APP，AI功能强大。文字转视频、一键成片、AI配音，全部免费。",
    howToUse: [
      "下载剪映APP（手机/电脑均可，免费）",
      "打开APP，点击「图文成片」",
      "输入文字内容（如文章或想法）",
      "AI自动选择配图、配音、背景音乐",
      "预览后可导出高清视频"
    ],
    price: "免费",
    isDomestic: true,
    tutorialId: "jianying-ai",
    highlight: true,
    tags: ["视频剪辑", "文字转视频", "免费", "国内可用"]
  },
  {
    id: "pika",
    name: "Pika",
    website: "https://pika.art",
    logo: "🎞️",
    category: "video",
    shortDesc: "输入文字生成视频（文生视频），目前免费使用。可生成5秒小动画，适合做创意短视频。",
    howToUse: [
      "用Discord账号登录Pika官网",
      "进入生成界面，输入英文提示词",
      "等待AI生成视频（约2-3分钟）",
      "下载生成的MP4视频",
      "免费用户每日约3个视频额度"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI视频", "文生视频", "免费"]
  },
  {
    id: "runway",
    name: "Runway Gen-2",
    website: "https://runwayml.com",
    logo: "🎬",
    category: "video",
    shortDesc: "专业AI视频生成和编辑工具，支持文生视频、图生视频、视频风格迁移好莱坞级别效果。",
    howToUse: [
      "注册账号（可用Gmail）",
      "点击「Generate Video」开始创作",
      "输入文字描述或上传图片",
      "选择视频时长和画质",
      "免费用户每月125积分（约125秒视频）"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["AI视频", "专业", "视频编辑"]
  },
  {
    id: "pixverse",
    name: "PixVerse",
    website: "https://pixverse.ai",
    logo: "🌊",
    category: "video",
    shortDesc: "国产AI视频生成工具，中文界面，免费使用。生成速度较快，适合短视频创作者。",
    howToUse: [
      "用手机号注册登录",
      "点击「Create」创建视频",
      "输入中文提示词描述场景",
      "选择视频风格和时长",
      "等待生成后下载MP4视频"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI视频", "国产", "中文界面"]
  },

  // ========== 音频处理 ==========
  {
    id: "tting",
    name: "讯飞听见",
    website: "https://www.iflyrec.com",
    downloadUrl: "https://www.iflyrec.com/download.html",
    appStoreUrl: "https://apps.apple.com/app/讯飞听见/id1420987076",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.iflytek.talk",
    logo: "🎙️",
    category: "audio",
    shortDesc: "科大讯飞出品，语音转文字准确率高（95%以上）。会议录音转文字、外语翻译，一键搞定。",
    howToUse: [
      "下载APP或打开网页版",
      "免费用户可录音转文字30分钟/天",
      "上传音频文件（支持MP3/WAV/M4A）",
      "AI自动识别并转成文字",
      "可在线编辑和导出文字稿"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["语音转文字", "录音转写", "会议记录"]
  },
  {
    id: "sky-music",
    name: "网易天音",
    website: "https://tianyin.163.com",
    logo: "🎶",
    category: "audio",
    shortDesc: "网易出品，输入文字描述，AI生成原创歌曲。支持中文，可自定义歌词、风格、歌手声音。",
    howToUse: [
      "用网易云音乐账号登录",
      "点击「AI创作歌曲」",
      "输入歌词或让AI辅助写词",
      "选择音乐风格和歌手",
      "等待3-5分钟生成完整歌曲"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI作曲", "歌曲生成", "网易"]
  },

  // ========== AI搜索 ==========
  {
    id: "perplexity",
    name: "Perplexity",
    website: "https://www.perplexity.ai",
    appStoreUrl: "https://apps.apple.com/app/perplexity-ask/id6447007936",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.perplexity.ai",
    logo: "🔭",
    category: "search",
    shortDesc: "AI搜索引擎，会直接给你答案并列出参考来源。比传统搜索更精准，适合做研究、查资料。",
    howToUse: [
      "打开网站或下载APP",
      "用Google账号或邮箱注册",
      "像用百度一样输入你的问题",
      "AI会直接给出答案并注明来源",
      "点击引用链接可查看原始网页"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["AI搜索", "智能问答", "英文"]
  },
  {
    id: "metaso",
    name: "秘塔AI搜索",
    website: "https://metaso.cn",
    downloadUrl: "https://metaso.cn",
    appStoreUrl: "https://apps.apple.com/app/秘塔搜索/id1610481539",
    logo: "🔎",
    category: "search",
    shortDesc: "国产AI搜索工具，中文界面，完全免费。搜索结果带AI总结，无广告，直接给出答案。",
    howToUse: [
      "打开网站，直接搜索（无需注册）",
      "输入问题，支持中文搜索",
      "AI总结搜索结果，结构化呈现",
      "显示信息来源，可点击查看原文",
      "可切换「简洁/详细/研究」模式"
    ],
    price: "免费",
    isDomestic: true,
    highlight: true,
    tags: ["AI搜索", "国产", "免费", "中文"]
  },
  {
    id: "fuxi",
    name: "伏羲AI（MiniMax）",
    website: "https://platform.minimaxi.com",
    logo: "☯️",
    category: "search",
    shortDesc: "国产大模型API平台，提供免费API调用额度。开发者可免费接入，支持文字生成、语音合成。",
    howToUse: [
      "注册开发者账号获取API Key",
      "免费用户有大量调用额度",
      "可接入到自己开发的应用中",
      "支持中文理解和生成",
      "文档有详细接入教程"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["API", "开发者", "国产大模型"]
  },

  // ========== 开发工具 ==========
  {
    id: "cursor",
    name: "Cursor",
    website: "https://cursor.sh",
    downloadUrl: "https://cursor.sh",
    logo: "💻",
    category: "dev",
    shortDesc: "AI编程编辑器，基于VS Code，内置GPT-4。可帮你写代码、解释代码、修复Bug。新手编程神器。",
    howToUse: [
      "下载安装Cursor（Windows/Mac均可）",
      "用Google账号登录",
      "新建Python/JS等代码文件",
      "按Ctrl+K调出AI对话，输入需求",
      "AI会直接在代码中写入内容"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["编程", "代码生成", "AI辅助"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    website: "https://github.com/features/copilot",
    logo: "🔗",
    category: "dev",
    shortDesc: "微软出品，编程必备AI助手。在VS Code中实时提示代码，补全整行甚至整函数。程序员效率提升50%。",
    howToUse: [
      "安装VS Code编辑器",
      "安装GitHub Copilot扩展",
      "用GitHub账号登录（免费注册）",
      "写代码时AI自动给出补全建议",
      "按Tab键接受建议，免费试用60天"
    ],
    price: "付费",
    isDomestic: false,
    tags: ["编程", "代码补全", "VS Code"]
  },
  {
    id: "windsurf",
    name: "Windsurf",
    website: "https://codeium.com/windsurf",
    downloadUrl: "https://codeium.com/windsurf",
    logo: "🌊",
    category: "dev",
    shortDesc: "免费AI编程工具，功能类似Copilot但完全免费。支持多文件编辑理解，适合需要AI辅助但不想付费的开发者。",
    howToUse: [
      "下载安装Windsurf",
      "用邮箱注册账号",
      "打开代码文件夹开始编程",
      "AI会理解整个项目结构",
      "免费使用所有功能，无限制"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["编程", "免费", "代码补全"]
  },
  {
    id: "replit",
    name: "Replit",
    website: "https://replit.com",
    logo: "🚀",
    category: "dev",
    shortDesc: "在线编程平台，打开浏览器就能写代码。内置AI助手，支持Python/JS等50+语言，无需安装任何东西。",
    howToUse: [
      "打开replit.com注册账号",
      "点击「+」创建新项目",
      "选择编程语言（推荐Python）",
      "在代码区写代码，右侧有AI助手",
      "点击运行，直接在浏览器看到结果"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["编程", "在线IDE", "Python"]
  },

  // ========== 效率工具 ==========
  {
    id: "chatba",
    name: "ChatBA",
    website: "https://www.chatba.com",
    logo: "📊",
    category: "productivity",
    shortDesc: "输入文字描述，一键生成PPT幻灯片。完全免费，操作简单，适合快速制作简单演示文稿。",
    howToUse: [
      "打开网站，直接输入PPT主题",
      "AI自动生成完整PPT幻灯片",
      "可下载为PPTX格式",
      "不支持复杂设计，但速度快",
      "适合不需要精美设计的快速演示"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["PPT", "免费", "快速生成"]
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    website: "https://www.chatpdf.com",
    logo: "📖",
    category: "productivity",
    shortDesc: "上传PDF，AI帮你读懂内容。问任何关于PDF的问题，秒回答案。适合读论文、合同、报告。",
    howToUse: [
      "打开chatpdf.com",
      "上传PDF文件（拖拽或点击上传）",
      "在对话框用中文提问关于PDF的问题",
      "AI引用原文位置回答问题",
      "免费用户每天3个PDF，每个10MB"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["PDF", "文档问答", "论文"]
  },
  {
    id: "otter",
    name: "Otter.ai",
    website: "https://otter.ai",
    logo: "🦦",
    category: "productivity",
    shortDesc: "会议录音实时转文字，AI自动识别发言人。自动生成会议纪要，省去手动记录的时间。",
    howToUse: [
      "注册Otter账号（可用Google登录）",
      "点击「Live Transcript」开始录音",
      "邀请参会者或直接录音",
      "AI实时转文字并标注发言人",
      "结束后自动生成会议纪要"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["会议记录", "录音转文字", "实时"]
  },
];

// 获取工具（可选分类）
export function getToolsByCategory(categoryId: string) {
  return tools.filter(t => t.category === categoryId);
}

export function getToolById(id: string) {
  return tools.find(t => t.id === id);
}

export function getHighlightTools() {
  return tools.filter(t => t.highlight);
}

export function getDomesticTools() {
  return tools.filter(t => t.isDomestic);
}
