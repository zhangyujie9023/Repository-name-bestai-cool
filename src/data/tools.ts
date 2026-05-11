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
  { id: "mindmap", name: "思维导图", icon: "🎟", description: "AI生成脑图、结构化思考" },
  { id: "data", name: "数据分析", icon: "📊", description: "表格处理、数据可视化" },
  { id: "3d", name: "3D建模", icon: "🎨", description: "AI生成3D模型、场景" },
  { id: "privacy", name: "隐私安全", icon: "🔒", description: "密码管理、安全上网" },
  { id: "lifestyle", name: "生活养乐", icon: "👻", description: "AI陪伴、游戏娱乐" },
  { id: "education", name: "教育学习", icon: "🎓", description: "AI辅助学习、知识获取" },
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

  // ========== 效率工具-自动化 ==========
  {
    id: "n8n",
    name: "n8n",
    website: "https://n8n.io",
    downloadUrl: "https://n8n.io/download",
    logo: "🔗",
    category: "productivity",
    shortDesc: "免费开源的工作流自动化工具，把各种APP串联起来自动执行任务。比Zapier便宜，适合想把重复工作自动化的用户。",
    howToUse: [
      "方式一：在线使用 n8n.cloud（无需安装）",
      "方式二：在自己电脑上安装（需要Docker或Node.js）",
      "拖拽节点，连接不同APP（如：收到邮件→自动存到表格）",
      "设置触发条件，自动化运行",
      "内置AI节点，支持GPT等大模型"
    ],
    price: "开源免费",
    isDomestic: false,
    tags: ["自动化", "工作流", "开源免费", "API"]
  },
  {
    id: "make",
    name: "Make（原Integromat）",
    website: "https://www.make.com",
    logo: "⚙️",
    category: "productivity",
    shortDesc: "可视化工作流自动化平台，把不同APP串联起来自动完成任务。免费版每月1000次操作，够个人用户日常使用。",
    howToUse: [
      "注册账号（可用Gmail或邮箱）",
      "点击「Create a new scenario」创建自动化流程",
      "拖拽APP图标到画布，连接它们",
      "设置触发条件和操作步骤",
      "打开开关启用自动化"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["自动化", "工作流", "无代码"]
  },
  {
    id: "biling",
    name: "秘言",
    website: "https://biling.cn",
    downloadUrl: "https://biling.cn",
    logo: "📧",
    category: "productivity",
    shortDesc: "国产AI邮件助手，输入需求自动生成专业邮件。支持中英文，适合职场人士写商务邮件。",
    howToUse: [
      "打开网站，用手机号注册",
      "选择邮件类型（商务/求职/客户跟进等）",
      "输入邮件要点，AI自动生成完整邮件",
      "可调整语气和长度",
      "复制邮件内容到邮箱发送"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["邮件", "商务", "国产"]
  },
  {
    id: "flomo",
    name: "flomo",
    website: "https://flomoapp.com",
    downloadUrl: "https://flomoapp.com/download",
    appStoreUrl: "https://apps.apple.com/app/flomo/id1558288496",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.flomoapp",
    logo: "📝",
    category: "productivity",
    shortDesc: "卡片式笔记工具，AI帮你整理和回顾笔记。碎片化记录，大脑式整理，适合知识管理。",
    howToUse: [
      "下载APP或打开网页版，免费注册",
      "随时记录想法、灵感、读书笔记",
      "打标签分类（#工作 #学习 #灵感）",
      "AI每日回顾，帮助你复习重要内容",
      "支持多设备同步"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["笔记", "知识管理", "手机可用"]
  },
  {
    id: "raycast-alternatives",
    name: "Raycast",
    website: "https://www.raycast.com",
    downloadUrl: "https://www.raycast.com/install",
    logo: "🚀",
    category: "productivity",
    shortDesc: "Mac效率神器，输入快捷命令完成各种操作。比Spotlight强大10倍，支持AI搜索、AI写作、窗口管理。程序员和设计师必备。",
    howToUse: [
      "在Mac上下载安装Raycast（免费基础版）",
      "按 Option+Space 调出搜索框",
      "输入命令快速完成操作：计算器、查汇率、搜文件",
      "安装AI扩展：用自然语言处理文件",
      "管理剪贴板历史、窗口布局"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["效率", "Mac", "快捷键"]
  },

  // ========== 学术研究 ==========
  {
    id: "consensus",
    name: "Consensus",
    website: "https://consensus.app",
    logo: "📚",
    category: "productivity",
    shortDesc: "AI学术搜索引擎，输入问题，直接给你科研论文答案。论文经过同行评审，科学可信。写论文、做研究必备。",
    howToUse: [
      "打开consensus.app，注册账号（可用Google）",
      "用英文输入你的研究问题",
      "AI搜索数亿篇学术论文",
      "直接给出答案和引用来源",
      "点击论文标题查看摘要和下载链接"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["学术", "论文", "AI搜索", "英文"]
  },
  {
    id: "connectedpapers",
    name: "Connected Papers",
    website: "https://www.connectedpapers.com",
    logo: "🕸️",
    category: "productivity",
    shortDesc: "输入一篇论文，可视化显示与之相关的所有论文网络图。找文献、追踪研究脉络神器。完全免费。",
    howToUse: [
      "打开connectedpapers.com",
      "粘贴论文标题或DOI",
      "查看论文关系图谱（颜色深浅=引用数量）",
      "点击任意节点跳转到该论文",
      "点击「Prior works」查看前驱论文，或「Derivative works」查看后续研究"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["学术", "论文关系图", "文献调研"]
  },
  {
    id: "scispace",
    name: "SciSpace（原Typeset）",
    website: "https://scispace.com",
    logo: "🔬",
    category: "productivity",
    shortDesc: "AI论文阅读助手，上传PDF或输入链接，AI用简单语言解释论文内容。选中文回答，专为非科研人员设计。",
    howToUse: [
      "注册SciSpace账号（可用邮箱或Google）",
      "上传PDF或粘贴论文URL",
      "用中文向AI提问：这篇文章讲了什么？",
      "AI用通俗语言解释，支持追问",
      "highlight文字让AI详细解释"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["学术", "论文解读", "AI辅助阅读"]
  },

  // ========== 图像生成-更多 ==========
  {
    id: "bing-image-creator",
    name: "Bing Image Creator",
    website: "https://www.bing.com/images/create",
    logo: "🖼️",
    category: "image",
    shortDesc: "微软必应出品，基于DALL·E 3，完全免费使用。中英文均可，生成质量高，速度快。无需注册直接用。",
    howToUse: [
      "打开bing.com/images/create（用微软账号登录）",
      "输入图片描述（中英文均可）",
      "DALL·E 3自动生成4张图片",
      "点击放大或下载",
      "免费用户每天有积分限制，约15次生成"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI画图", "DALL-E", "免费", "微软"]
  },
  {
    id: "looka",
    name: "Looka",
    website: "https://looka.com",
    logo: "🎯",
    category: "design",
    shortDesc: "AI Logo设计工具，输入品牌名和风格偏好，AI生成100+个Logo方案。选好后可下载全套品牌素材。",
    howToUse: [
      "打开looka.com，输入品牌名称",
      "选择喜欢的Logo风格（简约/现代/复古等）",
      "选择颜色偏好",
      "AI生成100+个Logo方案",
      "选中喜欢的，可下载PNG/SVG格式及品牌指南"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["Logo设计", "品牌设计", "AI生成"]
  },
  {
    id: "adobe-express",
    name: "Adobe Express",
    website: "https://www.adobe.com/express/",
    downloadUrl: "https://www.adobe.com/express/download",
    appStoreUrl: "https://apps.apple.com/app/adobe-express-video-editor/id1494462761",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adobe.spark.post",
    logo: "🎨",
    category: "image",
    shortDesc: "Adobe出品的免费在线设计工具，做海报、Logo、社交图片、PPT。模板超多，AI辅助设计，零基础也能做出专业图。",
    howToUse: [
      "打开adobe.com/express，注册免费账号",
      "选择设计类型：海报/Logo/社交图片等",
      "挑选模板，AI帮你修改内容",
      "输入文字，AI自动排版",
      "完成后下载PNG/PDF格式"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["设计", "海报", "模板", "Adobe"]
  },
  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    website: "https://designer.microsoft.com",
    downloadUrl: "https://www.microsoft.com/designer",
    logo: "✏️",
    category: "image",
    shortDesc: "微软出品的免费在线设计工具，输入文字描述，AI自动生成社交媒体图片、海报、邀请函。支持中文。",
    howToUse: [
      "用微软账号登录designer.microsoft.com",
      "点击「用AI创建设计」",
      "输入图片描述（中英文均可）",
      "AI生成多个设计方案",
      "选择一个后在线编辑，导出图片"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["设计", "海报", "AI生成", "微软"]
  },
  {
    id: "recraft",
    name: "Recraft",
    website: "https://www.recraft.ai",
    logo: "🖌️",
    category: "image",
    shortDesc: "免费AI设计工具，专门生成矢量插画、图标、Logo。支持多种风格（写实、扁平、3D），生成的图片可商用。",
    howToUse: [
      "打开recraft.ai，注册账号（可用Google）",
      "选择图片类型：插画/图标/Logo/真实图片",
      "输入英文描述，选择风格",
      "AI生成多张图片",
      "下载SVG/PNG格式，可商用"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["矢量图", "图标", "Logo", "商用免费"]
  },

  // ========== 视频制作-更多 ==========
  {
    id: "heygen",
    name: "HeyGen",
    website: "https://www.heygen.com",
    logo: "🎭",
    category: "video",
    shortDesc: "输入文字，AI生成虚拟数字人视频。支持中文，数字人播报、带货、教学视频一键生成。免费生成5分钟视频。",
    howToUse: [
      "注册HeyGen账号（可用Gmail）",
      "选择数字人模板或上传自己的照片",
      "输入要播报的文案（支持中文）",
      "选择语言和声音",
      "等待生成视频，下载MP4"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["数字人", "AI视频", "虚拟主播"]
  },
  {
    id: "synthesia",
    name: "Synthesia",
    website: "https://www.synthesia.io",
    logo: "🎙️",
    category: "video",
    shortDesc: "AI数字人视频平台，140+种数字人可选，输入文字生成AI主播视频。企业培训、宣传视频首选。免费试用。",
    howToUse: [
      "注册Synthesia账号",
      "选择数字人形象和语言",
      "输入视频脚本",
      "预览并生成视频",
      "下载或直接嵌入网站"
    ],
    price: "付费",
    isDomestic: false,
    tags: ["数字人", "AI视频", "企业培训"]
  },
  {
    id: "veed",
    name: "VEED",
    website: "https://www.veed.io",
    logo: "🎬",
    category: "video",
    shortDesc: "在线AI视频编辑器，上传视频后AI自动添加字幕、剪辑、去除背景。浏览器里完成，无需下载软件。",
    howToUse: [
      "打开veed.io，注册免费账号",
      "上传视频文件（拖拽即可）",
      "点击「Auto Subtitles」AI自动加字幕",
      "可用AI消除背景噪音",
      "裁剪、添加文字、背景音乐",
      "完成后直接导出下载"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["视频剪辑", "字幕", "在线编辑"]
  },
  {
    id: "d-id",
    name: "D-ID",
    website: "https://www.d-id.com",
    logo: "🎞️",
    category: "video",
    shortDesc: "上传照片，AI让照片里的人说话。输入文字或上传音频，照片变成会说话的视频。适合做数字纪念、创意视频。",
    howToUse: [
      "打开d-id.com，注册账号",
      "上传一张人物照片",
      "输入要说的文字或上传音频",
      "选择声音和语言",
      "生成视频后下载MP4"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["数字人", "照片说话", "AI视频"]
  },

  // ========== 音频处理-更多 ==========
  {
    id: "suno",
    name: "Suno",
    website: "https://suno.ai",
    logo: "🎵",
    category: "audio",
    shortDesc: "全球最火的AI音乐生成器，输入文字描述想要的歌曲风格和内容，AI生成完整歌曲（含歌词+演唱）。完全免费，中文歌也能生成。",
    howToUse: [
      "用Discord账号或Google账号登录suno.ai",
      "点击「Create」创建新歌曲",
      "输入歌曲描述（音乐风格+主题+语言）",
      "也可以点击「Custom Mode」输入自己的歌词",
      "等待3分钟，AI生成两首完整歌曲",
      "点击播放试听，下载音频文件"
    ],
    price: "免费",
    isDomestic: false,
    highlight: true,
    tags: ["AI作曲", "歌曲生成", "完全免费", "中文歌曲"]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    website: "https://elevenlabs.io",
    logo: "🎙️",
    category: "audio",
    shortDesc: "AI语音合成工具，克隆声音、生成逼真人声、支持29种语言。做播客、视频配音、有声书的利器。免费试用。",
    howToUse: [
      "注册ElevenLabs账号",
      "在「Voice Library」选择AI声音",
      "粘贴文字，选择语言",
      "调整语速、音调",
      "生成音频并下载MP3"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["语音合成", "配音", "文字转语音"]
  },
  {
    id: "ttsmaker",
    name: "TTSMaker",
    website: "https://ttsmaker.com",
    logo: "🔊",
    category: "audio",
    shortDesc: "免费文字转语音工具，支持中文和50+种语言。输入文字，选择声音风格，立即生成音频文件。无需注册。",
    howToUse: [
      "打开ttsmaker.com，无需注册直接用",
      "输入要转语音的文字",
      "选择语言和声音风格（男声/女声/童声）",
      "调整语速和音调",
      "点击「Convert」生成，下载MP3/WAV"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["文字转语音", "免费", "配音", "多语言"]
  },
  {
    id: "udio",
    name: "Udio",
    website: "https://www.udio.com",
    logo: "🎶",
    category: "audio",
    shortDesc: "新兴AI音乐生成工具，和Suno类似，完全免费。生成高质量音乐，支持多种风格，适合做视频BGM。",
    howToUse: [
      "打开udio.com，用Gmail注册",
      "点击「Generate」创作音乐",
      "输入音乐风格和主题描述",
      "AI生成完整歌曲",
      "下载音频，可用于视频BGM"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI作曲", "音乐生成", "BGM", "免费"]
  },

  // ========== AI搜索-更多 ==========
  {
    id: "kimi-search",
    name: "Kimi智能搜索",
    website: "https://kimi.moonshot.cn",
    downloadUrl: "https://kimi.moonshot.cn",
    appStoreUrl: "https://apps.apple.com/app/id6677418498",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.moonshot.kimi",
    logo: "🔎",
    category: "search",
    shortDesc: "Kimi内置的AI搜索功能，可以联网搜索最新信息并整理答案。免费、中文友好、支持追问。国内直接用。",
    howToUse: [
      "打开kimi.moonshot.cn或用APP",
      "在对话框输入问题（加「搜索」二字更精准）",
      "Kimi联网搜索，给出结构化答案",
      "可追问深入了解",
      "所有功能免费，无需翻墙"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI搜索", "联网搜索", "国产免费"]
  },
  {
    id: "feixiaohao",
    name: "跃问",
    website: "https://yuewen.cn",
    logo: "❓",
    category: "search",
    shortDesc: "国产AI搜索工具，联网搜索+信息整理+深度分析。免费使用，中文回答质量高，适合查新闻、找资料。",
    howToUse: [
      "打开yuewen.cn，点击「AI搜索」",
      "输入搜索问题",
      "AI联网搜索并整理答案",
      "点击来源链接查看原文",
      "免费使用"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI搜索", "国产", "联网搜索"]
  },

  // ========== 开发工具-更多 ==========
  {
    id: "bolt-new",
    name: "Bolt.new",
    website: "https://bolt.new",
    logo: "⚡",
    category: "dev",
    shortDesc: "AI全栈开发工具，用自然语言描述你要做的网站或应用，AI自动生成完整代码并部署上线。浏览器里完成，无需本地环境。",
    howToUse: [
      "打开bolt.new，用GitHub账号登录",
      "输入想要做的网站或应用描述",
      "AI生成完整前端代码",
      "在右侧预览窗口实时查看效果",
      "可修改代码，AI自动更新",
      "一键部署到Netlify"
    ],
    price: "免费",
    isDomestic: false,
    highlight: true,
    tags: ["AI编程", "网站生成", "全栈开发", "免费"]
  },
  {
    id: "lovable",
    name: "Lovable",
    website: "https://lovable.dev",
    logo: "💖",
    category: "dev",
    shortDesc: "输入产品描述，AI生成完整的可交互网站。前后端代码都有，支持发布。完全免费，适合做MVP和原型。",
    howToUse: [
      "打开lovable.dev，用GitHub登录",
      "描述你想要的产品（网站/App）",
      "AI生成完整前端代码，可交互预览",
      "用自然语言要求修改",
      "一键发布到生产环境"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI编程", "网站生成", "MVP", "原型"]
  },
  {
    id: "vercel-ai",
    name: "Vercel AI SDK",
    website: "https://sdk.vercel.ai",
    logo: "▲",
    category: "dev",
    shortDesc: "Vercel出品的AI开发SDK，用几行代码就能给自己的网站加上AI对话功能。支持GPT-4、Claude等主流大模型。",
    howToUse: [
      "安装SDK：npm install ai",
      "导入SDK到Next.js项目",
      "添加API路由处理AI请求",
      "用React/Vue组件显示对话界面",
      "配置API Key即可使用"
    ],
    price: "开源免费",
    isDomestic: false,
    tags: ["AI开发", "SDK", "Next.js", "开源"]
  },

  // ========== 写作助手-更多 ==========
  {
    id: "jina-writer",
    name: "Jina Chatwriter",
    website: "https://writer.jina.ai",
    logo: "✍️",
    category: "writing",
    shortDesc: "AI写作助手，支持200+种写作模板。输入要点，AI帮你写文章、帖子、邮件、报告。中文支持好，完全免费。",
    howToUse: [
      "打开writer.jina.ai，免费使用",
      "选择写作模板（文章/邮件/社交帖子等）",
      "输入写作要点和关键词",
      "AI生成完整内容",
      "复制到目标平台使用"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["AI写作", "模板", "免费", "多场景"]
  },
  {
    id: "yiyan",
    name: "文心一言（百度）",
    website: "https://yiyan.baidu.com",
    downloadUrl: "https://yiyan.baidu.com",
    appStoreUrl: "https://apps.apple.com/app/文心一言/id6443830496",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.baidu.aitask",
    logo: "📝",
    category: "writing",
    shortDesc: "百度出品国产AI，中文理解能力强，擅长文案创作、知识问答。免费使用，百度账号直接登录。",
    howToUse: [
      "用百度账号登录yiyan.baidu.com",
      "在对话框输入问题或写作需求",
      "可上传图片让AI分析",
      "支持生成图片（文生图）",
      "APP体验流畅，免费使用"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI对话", "文案创作", "免费", "国产"]
  },

  // ========== 办公效率-更多 ==========
  {
    id: "mindshow",
    name: "MindShow",
    website: "https://mindshow.fun",
    logo: "🧠",
    category: "office",
    shortDesc: "输入大纲或文字，AI自动生成PPT幻灯片。支持Markdown格式，生成速度快，完全免费。适合快速做演示。",
    howToUse: [
      "打开mindshow.fun，免费注册",
      "输入PPT大纲或粘贴文字",
      "AI自动生成幻灯片",
      "可切换不同模板风格",
      "导出PPTX格式到本地"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["PPT", "大纲生成", "免费", "Markdown"]
  },
  {
    id: "wondercraft",
    name: "Wondercraft",
    website: "https://wondercraft.ai",
    logo: "🎙️",
    category: "office",
    shortDesc: "AI播客制作工具，输入文字脚本，AI生成多个AI主播声音，生成播客音频。适合做知识分享、个人品牌。",
    howToUse: [
      "注册Wondercraft账号",
      "粘贴播客文字脚本",
      "选择AI主播声音",
      "生成播客音频",
      "导出MP3发布到各平台"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["播客", "AI音频", "知识分享"]
  },
  {
    id: "tome",
    name: "Tome",
    website: "https://tome.app",
    logo: "📖",
    category: "office",
    shortDesc: "AI演示文稿工具，输入主题，AI生成完整演示故事。风格现代优雅，特别适合做产品介绍、商业计划。",
    howToUse: [
      "打开tome.app，用Gmail注册",
      "输入演示主题或粘贴内容",
      "AI生成完整演示故事（幻灯片组）",
      "可嵌入视频、图片、3D模型",
      "分享链接或导出PDF"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["演示文稿", "AI生成", "产品介绍"]
  },

  // ========== 设计Logo ==========
  {
    id: "brandmark",
    name: "Brandmark",
    website: "https://brandmark.io",
    logo: "🏷️",
    category: "design",
    shortDesc: "免费AI Logo制作工具，输入公司名和关键词，AI生成Logo、配色方案、字体搭配。一次搞定品牌全套视觉。",
    howToUse: [
      "打开brandmark.io，输入公司/品牌名称",
      "输入3-5个关键词描述你的业务",
      "选择喜欢的颜色偏好",
      "AI生成Logo+配色+字体全套方案",
      "下载各种格式"
    ],
    price: "免费",
    isDomestic: false,
    tags: ["Logo", "品牌设计", "免费", "配色"]
  },
  {
    id: "hailuo",
    name: "海螺AI",
    website: "https://hailuoai.video",
    logo: "🐚",
    category: "video",
    shortDesc: "MiniMax出品，免费AI视频生成工具，支持文生视频、图生视频。中文界面友好，生成速度快，适合短视频创作。",
    howToUse: [
      "打开hailuoai.video，注册登录",
      "选择「文生视频」或「图生视频」",
      "输入中文描述",
      "选择视频风格和时长",
      "等待生成，下载MP4"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["AI视频", "国产", "文生视频", "免费"]
  },

  // ========== 通用提示词 ==========
  {
    id: "promptport",
    name: "PromptPort",
    website: "https://promptport.ai",
    logo: "💡",
    category: "productivity",
    shortDesc: "AI提示词超市，收录了10000+高质量提示词模板。涵盖写作、编程、设计、营销等场景。复制即可用，提升AI输出质量。",
    howToUse: [
      "打开promptport.ai，浏览各类提示词",
      "找到适合你的场景（如：写小说、做数据分析）",
      "复制提示词模板",
      "粘贴到ChatGPT/Kimi等AI工具中使用",
      "根据需要微调参数"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["提示词", "模板", "AI使用技巧"]
  },

  // ========== 翻译工具 ==========
  {
    id: "deepl",
    name: "DeepL",
    website: "https://www.deepl.com",
    downloadUrl: "https://www.deepl.com/app",
    appStoreUrl: "https://apps.apple.com/app/deepl-translator/id1260632895",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.deepl.mobile.app",
    logo: "🌍",
    category: "writing",
    shortDesc: "全球最准的AI翻译工具，翻译质量碾压Google翻译。支持40+种语言，文档翻译免费。中英互译质量极佳。",
    howToUse: [
      "打开deepl.com，直接粘贴文字翻译",
      "支持整篇文档翻译（Word/PPT/PDF）",
      "免费用户每月5000字符",
      "下载APP随时翻译",
      "浏览器插件划词翻译"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: ["翻译", "文档翻译", "高质量"]
  },

  // ========== 生活休闲 ==========
  {
    id: "myexample",
    name: "我的简历",
    website: "https://resume.rishun.site",
    logo: "📄",
    category: "productivity",
    shortDesc: "AI简历生成器，输入基本信息，AI帮你写专业简历。支持多模板，中英文简历一键生成。找工作必备。",
    howToUse: [
      "打开网站，输入基本信息",
      "选择想要的简历模板",
      "AI优化简历内容",
      "预览并下载PDF",
      "支持中英文简历"
    ],
    price: "免费",
    isDomestic: true,
    tags: ["简历", "求职", "AI优化"]
  },
  {
    id: "aibrillian",
    name: "AI简历优化",
    website: "https://cv.aibrillian.com",
    logo: "✨",
    category: "productivity",
    shortDesc: "上传你的简历，AI帮你分析问题、优化内容、突出亮点。提高面试邀请率，适合求职者。",
    howToUse: [
      "打开网站，上传简历文件",
      "AI分析简历并指出问题",
      "针对每个问题给出优化建议",
      "按建议修改简历内容",
      "导出优化后的简历"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: ["简历优化", "求职", "AI分析"]
  },

  // ========== 思维导图 ==========
  {
    id: "gitmind",
    name: "GitMind",
    website: "https://gitmind.cn",
    logo: "🎯",
    category: "mindmap",
    shortDesc: "免费在线思维导图工具，支持AI一键生成脑图、流程图，多人协作。无需下载，注册即用。",
    howToUse: [
      "打开gitmind.cn，点击「免费创作」",
      "选择思维导图模板或空白画布",
      "输入中心主题，AI自动生成分支",
      "双击节点添加内容，支持插入图片",
      "导出PNG/PDF，或生成链接分享"
    ],
    price: "免费",
    isDomestic: true,
    tags: [
      "思维导图",
      "AI生成",
      "在线协作"
    ]
  },
  {
    id: "xmind-ai",
    name: "XMind AI",
    website: "https://xmind.cn",
    logo: "💫",
    category: "mindmap",
    shortDesc: "专业思维导图工具，新增AI助手功能，输入主题自动生成完整导图框架。",
    howToUse: [
      "下载XMind或打开网页版",
      "输入导图主题描述",
      "点击AI生成，获取导图大纲",
      "手动调整节点和层级",
      "导出多种格式（PNG/SVG/PDF/Markdown）"
    ],
    price: "免费",
    isDomestic: true,
    tags: [
      "思维导图",
      "AI辅助",
      "专业工具"
    ]
  },
  {
    id: "amymind",
    name: "AmyMind",
    website: "https://amymind.com",
    logo: "🧠",
    category: "mindmap",
    shortDesc: "轻量级免费思维导图，AI帮你快速搭建框架，支持Markdown格式导出。",
    howToUse: [
      "打开amymind.com，免费使用",
      "输入主题关键词",
      "AI生成导图结构",
      "编辑节点，添加子主题",
      "导出为PNG/Markdown"
    ],
    price: "免费",
    isDomestic: true,
    tags: [
      "思维导图",
      "轻量",
      "Markdown导出"
    ]
  },

  // ========== 数据分析 ==========
  {
    id: "chubiao",
    name: "酷表",
    website: "https://chubao.io",
    logo: "📊",
    category: "data",
    shortDesc: "AI驱动的在线表格工具，用自然语言告诉它你想做什么，数据分析无需公式。",
    howToUse: [
      "打开chubao.io，上传Excel或新建表格",
      "用中文描述你想做的分析",
      "AI自动生成公式和图表",
      "一键生成数据透视表",
      "导出Excel或生成可视化报告"
    ],
    price: "免费",
    isDomestic: true,
    tags: [
      "数据分析",
      "表格",
      "AI公式"
    ]
  },
  {
    id: "sheetplus",
    name: "Sheet+",
    website: "https://sheetplus.ai",
    logo: "📁",
    category: "data",
    shortDesc: "AI Excel和Google Sheets插件，写公式、生成图表、分析数据，一句话搞定。",
    howToUse: [
      "安装Sheet+ Chrome插件或注册网页版",
      "打开Excel/Google Sheets",
      "描述你想要的计算结果",
      "AI生成对应公式，点击插入",
      "支持数据清洗和可视化"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "Excel",
      "公式生成",
      "数据处理"
    ]
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    website: "https://www.beautiful.ai",
    logo: "📈",
    category: "data",
    shortDesc: "AI自动设计演示文稿，导入数据自动生成专业图表幻灯片，数据汇报必备。",
    howToUse: [
      "注册beautiful.ai账号",
      "选择图表类型或粘贴数据",
      "AI自动美化并生成图表",
      "修改文字和布局",
      "一键导出PPTX或在线演示"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "演示文稿",
      "图表",
      "数据可视化"
    ]
  },

  // ========== 3D建模 ==========
  {
    id: "spline-ai",
    name: "Spline AI",
    website: "https://spline.design",
    logo: "🎨",
    category: "3d",
    shortDesc: "AI在线3D建模工具，用文字描述就能生成3D场景、物体和材质，支持实时渲染。",
    howToUse: [
      "打开spline.design，点击Start Free",
      "输入3D场景描述",
      "AI生成3D模型，可直接在浏览器中编辑",
      "调整材质、光照、动画",
      "导出OBJ/GLB格式"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "3D建模",
      "AI生成",
      "实时渲染"
    ]
  },
  {
    id: "meshy",
    name: "Meshy",
    website: "https://meshy.ai",
    logo: "🎭",
    category: "3d",
    shortDesc: "AI将2D图片或文字描述转换为高质量3D模型，支持纹理和风格化渲染。",
    howToUse: [
      "打开meshy.ai，注册免费账号",
      "上传图片或输入文字描述",
      "选择渲染模式（快速/精细）",
      "等待AI生成3D模型",
      "下载GLB文件或在线预览"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "2D转3D",
      "纹理生成",
      "AI建模"
    ]
  },
  {
    id: "tripo3d",
    name: "Tripo3D",
    website: "https://tripo3d.ai",
    logo: "🎧",
    category: "3d",
    shortDesc: "文字或图片生成3D模型，几秒内获得可编辑的3D资产，适合游戏和设计。",
    howToUse: [
      "打开tripo3d.ai",
      "输入描述或上传图片",
      "选择模型质量和风格",
      "AI生成3D模型（10-30秒）",
      "在线编辑或下载FBX/OBJ"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "3D生成",
      "游戏资产",
      "AI建模"
    ]
  },
  {
    id: "csm3d",
    name: "CSM",
    website: "https://csm.ai",
    logo: "💻",
    category: "3d",
    shortDesc: "开源AI 3D建模平台，支持图片生成3D、视频生成3D，API免费调用。",
    howToUse: [
      "打开csm.ai，注册免费账号",
      "上传图片或输入描述词",
      "选择输出格式和质量",
      "生成3D模型（通常1-2分钟）",
      "下载或集成到游戏引擎"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "开源",
      "3D生成",
      "API"
    ]
  },

  // ========== 隐私安全 ==========
  {
    id: "bitwarden",
    name: "Bitwarden",
    website: "https://bitwarden.com",
    logo: "🔒",
    category: "privacy",
    shortDesc: "开源密码管理器，AI帮你生成强密码、安全存储、自动填充，支持全平台同步。",
    howToUse: [
      "下载Bitwarden客户端或安装浏览器插件",
      "注册账号，设置主密码",
      "AI密码生成器创建强密码",
      "网站登录时自动填充",
      "跨设备同步（手机/电脑/平板）"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "密码管理",
      "开源",
      "全平台"
    ]
  },
  {
    id: "proton",
    name: "Proton",
    website: "https://proton.me",
    logo: "🛡",
    category: "privacy",
    shortDesc: "瑞士隐私保护套件：邮箱、密码管理、VPN、云盘、日历，端到端加密。",
    howToUse: [
      "打开proton.me注册免费账号",
      "使用Proton Mail收发加密邮件",
      "用Proton Pass管理密码",
      "开启VPN保护网络连接",
      "使用Proton Drive存储文件"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "隐私邮箱",
      "VPN",
      "加密云盘"
    ]
  },

  // ========== 生活娱乐 ==========
  {
    id: "character-ai",
    name: "Character.AI",
    website: "https://character.ai",
    logo: "👻",
    category: "lifestyle",
    shortDesc: "和AI角色对话、娱乐聊天、创意写作练习，支持创建自己的AI角色。",
    howToUse: [
      "打开character.ai",
      "搜索喜欢的角色",
      "开始对话，AI角色会即时回复",
      "点击Create创建自己的AI角色",
      "设置角色性格、头像和开场白"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "角色对话",
      "娱乐",
      "创意"
    ]
  },
  {
    id: "replika",
    name: "Replika",
    website: "https://replika.com",
    logo: "🤖",
    category: "lifestyle",
    shortDesc: "AI陪伴聊天机器人，创建你的专属AI朋友，支持视频通话和AR互动。",
    howToUse: [
      "下载Replika应用（iOS/Android）",
      "创建你的AI伙伴，选择性别和形象",
      "与AI聊天，分享日常生活",
      "开启AR模式进行视频通话",
      "解锁更多关系类型"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "AI陪伴",
      "心理健康",
      "AR互动"
    ]
  },
  {
    id: "hailuo-ai",
    name: "海螺AI",
    website: "https://hailuoai.video",
    logo: "💎",
    category: "lifestyle",
    shortDesc: "AI语音对话应用，支持中文语音聊天、角色扮演、知识问答，手机即可使用。",
    howToUse: [
      "打开hailuoai.video或下载APP",
      "选择对话场景",
      "按住说话，AI语音回复",
      "支持多种角色和话题",
      "生成对话记录和摘要"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: [
      "语音对话",
      "角色扮演",
      "中文AI"
    ]
  },

  // ========== 教育学习 ==========
  {
    id: "duolingo",
    name: "Duolingo",
    website: "https://www.duolingo.com",
    logo: "🇺🇸",
    category: "education",
    shortDesc: "全球最流行的AI外语学习APP，游戏化学习，支持40+语言，每天10分钟轻松学。",
    howToUse: [
      "下载Duolingo APP",
      "选择想学的语言",
      "每天完成5-10分钟闯关任务",
      "AI调整难度，个性化推荐练习",
      "参加每周联赛，和全球用户竞争"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "外语学习",
      "游戏化",
      "40+语言"
    ]
  },
  {
    id: "netEase-open",
    name: "网易公开课",
    website: "https://open.163.com",
    logo: "📚",
    category: "education",
    shortDesc: "国内知名MOOC平台，汇集全球顶尖大学课程，AI字幕翻译，中文学习无障碍。",
    howToUse: [
      "打开open.163.com",
      "搜索感兴趣的名校课程",
      "观看带AI字幕的视频课程",
      "完成课后练习和测验",
      "获取课程完成证书"
    ],
    price: "免费",
    isDomestic: true,
    tags: [
      "MOOC",
      "名校课程",
      "AI字幕"
    ]
  },
  {
    id: "xuersi",
    name: "学而思网校",
    website: "https://www.xueersi.com",
    logo: "🎓",
    category: "education",
    shortDesc: "AI辅助K12全科学习，拍照解题、智能批改、个性化学习路径，国内学生首选。",
    howToUse: [
      "打开学而思网校APP或网页",
      "选择年级和科目",
      "拍照上传题目，AI即时解答",
      "观看配套讲解视频",
      "AI生成个性化练习题"
    ],
    price: "部分免费",
    isDomestic: true,
    tags: [
      "K12",
      "拍照解题",
      "AI批改"
    ]
  },
  {
    id: "khan-academy",
    name: "可汗学院",
    website: "https://www.khanacademy.org",
    logo: "🏳",
    category: "education",
    shortDesc: "美国非营利教育平台，K-12全科覆盖，AI助教Khanmigo免费使用，名师讲解视频。",
    howToUse: [
      "打开khanacademy.org，注册免费账号",
      "选择年级和科目开始学习",
      "观看讲解视频，完成练习题",
      "体验AI助教Khanmigo（一对一辅导）",
      "跟踪学习进度，查漏补缺"
    ],
    price: "免费",
    isDomestic: false,
    tags: [
      "K12",
      "AI助教",
      "全科"
    ]
  },
  {
    id: "coursera",
    name: "Coursera",
    website: "https://www.coursera.org",
    logo: "🎓",
    category: "education",
    shortDesc: "全球最大MOOC平台，汇聚200+顶尖大学课程，AI辅助学习，可获权威证书。",
    howToUse: [
      "打开coursera.org，注册免费账号",
      "搜索并报名感兴趣的专业课程",
      "观看视频+做作业+参加讨论",
      "使用AI学习助手答疑",
      "通过考试获得结业证书"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "MOOC",
      "名校证书",
      "AI辅助"
    ]
  },
  {
    id: "edx",
    name: "edX",
    website: "https://www.edx.org",
    logo: "🌍",
    category: "education",
    shortDesc: "MIT和哈佛联合创办的MOOC平台，提供全球顶级大学课程，AI分析学习数据。",
    howToUse: [
      "打开edx.org，选择课程",
      "注册账号，可以旁听（免费）或付费拿证书",
      "按进度完成视频和作业",
      "AI分析薄弱环节，推荐复习内容",
      "获取证书或学分抵免"
    ],
    price: "部分免费",
    isDomestic: false,
    tags: [
      "MOOC",
      "MIT哈佛",
      "学分"
    ]
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