const fs = require('fs');

// 新工具数据
const newTools = [
  // 写作助手
  {name: '笔灵AI写作', nameEn: 'ibiling', description: '国内AI写作工具，支持多种文体写作', url: 'https://ibiling.cn', category: 'writing', tags: ['写作', '文案', '免费'], pricing: 'freemium'},
  {name: '秘塔写作猫', nameEn: 'xiezuomao', description: 'AI写作辅助工具，检查语法和表达', url: 'https://xiezuomao.com', category: 'writing', tags: ['写作', '语法检查', '润色'], pricing: 'freemium'},
  {name: 'WPS AI', nameEn: 'WPS AI', description: 'WPS内置AI功能，文档处理更高效', url: 'https://www.wps.cn', category: 'writing', tags: ['WPS', '文档', '办公'], pricing: 'freemium'},
  {name: '讯飞语记', nameEn: 'xfyuji', description: '语音输入实时转文字，支持多语言', url: 'https://www.ifttech.com', category: 'writing', tags: ['语音转文字', '输入', '免费'], pricing: 'free'},
  
  // 图像生成
  {name: '即梦AI', nameEn: 'jimeng', description: '字节跳动AI绘画工具，免费生成图片', url: 'https://jimeng.jinritemai.com', category: 'image', tags: ['AI画图', '免费', '国内'], pricing: 'free'},
  {name: '文心一格', nameEn: 'yige', description: '百度AI绘画工具，中文提示词支持', url: 'https://yige.baidu.com', category: 'image', tags: ['AI画图', '中文', '免费'], pricing: 'freemium'},
  {name: '通义万相', nameEn: 'wanxiang', description: '阿里AI绘画，多风格图片生成', url: 'https://wanxiang.aliyun.com', category: 'image', tags: ['AI画图', '阿里', '免费'], pricing: 'free'},
  {name: '堆友AI', nameEn: 'duodou', description: '阿里旗下AI绘画工具，商用素材丰富', url: 'https://d.design', category: 'image', tags: ['AI画图', '设计', '素材'], pricing: 'free'},
  {name: 'liblib', nameEn: 'liblib', description: '国内最大的Stable Diffusion模型分享站', url: 'https://www.liblib.art', category: 'image', tags: ['SD', '模型', '教程'], pricing: 'freemium'},
  {name: '吐司', nameEn: 'tusi', description: 'AI模型分享平台，可在线生图', url: 'https://tusi.cn', category: 'image', tags: ['SD', '模型', '在线'], pricing: 'freemium'},
  
  // 视频生成
  {name: '可灵AI', nameEn: 'kling', description: '快手AI视频生成，支持长视频', url: 'https://klingai.com', category: 'video', tags: ['AI视频', '免费', '长视频'], pricing: 'freemium'},
  {name: 'Vidu', nameEn: 'Vidu', description: '生数科技AI视频工具，一致性很好', url: 'https://www.vidu.studio', category: 'video', tags: ['AI视频', '一致性', '免费'], pricing: 'freemium'},
  {name: 'Luma Dream', nameEn: 'Luma', description: 'AI视频生成新秀，效果惊艳', url: 'https://lumalabs.ai/dream-machine', category: 'video', tags: ['AI视频', '高质量', '免费'], pricing: 'freemium'},
  {name: 'Pika', nameEn: 'Pika', description: 'AI视频生成工具，快速生成短视频', url: 'https://pika.art', category: 'video', tags: ['AI视频', '快速', '免费'], pricing: 'freemium'},
  {name: '剪映', nameEn: 'jianying', description: '字节视频剪辑软件，AI功能丰富', url: 'https://www.capcut.cn', category: 'video', tags: ['剪辑', '免费', '国产'], pricing: 'free'},
  {name: '度加', nameEn: 'dujia', description: '百度AI视频工具，一键生成口播', url: 'https://aigc.baidu.com', category: 'video', tags: ['AI视频', '口播', '百度'], pricing: 'free'},
  
  // 音频处理
  {name: '剪映配音', nameEn: 'jianying-tts', description: '剪映内置AI配音，多种声音可选', url: 'https://www.capcut.cn', category: 'audio', tags: ['配音', '免费', '多样'], pricing: 'free'},
  {name: '讯飞配音', nameEn: 'xfvoice', description: '科大讯飞语音合成，专业配音', url: 'https://www.xfyun.cn/services/tts', category: 'audio', tags: ['配音', '专业', '商用'], pricing: 'freemium'},
  {name: 'Azure语音', nameEn: 'Azure TTS', description: '微软Azure语音合成，效果自然', url: 'https://azure.microsoft.com/services/cognitive-services/text-to-speech', category: 'audio', tags: ['配音', '微软', '自然'], pricing: 'freemium'},
  {name: 'Udio', nameEn: 'Udio', description: 'AI音乐生成工具，专业级音乐创作', url: 'https://www.udio.com', category: 'audio', tags: ['AI音乐', '创作', '专业'], pricing: 'freemium'},
  {name: '网易天音', nameEn: 'tiyin', description: '网易AI音乐工具，一键生成歌曲', url: 'https://tianyin.163.com', category: 'audio', tags: ['AI音乐', '中文', '免费'], pricing: 'free'},
  
  // 编程助手
  {name: 'Windsurf', nameEn: 'Windsurf', description: 'Codeium推出的AI编程工具，代理模式强大', url: 'https://windsurf.com', category: 'code', tags: ['编程', 'IDE', '代理'], pricing: 'freemium'},
  {name: 'Replit Agent', nameEn: 'Replit', description: 'AI自动编程工具，说需求就能写代码', url: 'https://replit.com', category: 'code', tags: ['编程', '自动', '在线'], pricing: 'freemium'},
  {name: 'v0', nameEn: 'v0', description: 'Vercel AI前端生成工具，快速建网站', url: 'https://v0.dev', category: 'code', tags: ['前端', 'React', '自动'], pricing: 'freemium'},
  {name: 'Bolt.new', nameEn: 'Bolt', description: 'AI全栈开发工具，快速构建应用', url: 'https://bolt.new', category: 'code', tags: ['编程', '全栈', '在线'], pricing: 'freemium'},
  {name: 'Codeium', nameEn: 'Codeium', description: '免费AI代码补全工具，VSCode插件', url: 'https://codeium.com', category: 'code', tags: ['编程', '补全', '免费'], pricing: 'free'},
  {name: '通义灵码', nameEn: 'tongyi-lingma', description: '阿里AI编程助手，免费使用', url: 'https://tongyi.aliyun.com/lingma', category: 'code', tags: ['编程', '阿里', '免费'], pricing: 'free'},
  {name: '讯飞友伴', nameEn: 'xfyouban', description: '科大讯飞AI聊天机器人', url: 'https://youban.xfyun.cn', category: 'chatbot', tags: ['聊天', '陪伴', '免费'], pricing: 'free'},
  {name: '字节扣子', nameEn: 'coze', description: '字节AI Agent平台，可创建聊天机器人', url: 'https://www.coze.com', category: 'chatbot', tags: ['Agent', '工作流', '免费'], pricing: 'free'},
  {name: '文心智能体', nameEn: 'xinwen', description: '百度AI Agent平台，创建智能体', url: 'https://agents.baidu.com', category: 'chatbot', tags: ['Agent', '百度', '免费'], pricing: 'free'},
  
  // 办公效率
  {name: '讯飞智文', nameEn: 'zhiwen', description: '科大讯飞AI生成PPT，完全免费', url: 'https://zhiwen.xfyun.cn', category: 'productivity', tags: ['PPT', '免费', '国产'], pricing: 'free'},
  {name: 'AiPPT', nameEn: 'AiPPT', description: 'AI一键生成PPT，模板丰富', url: 'https://aippt.cn', category: 'productivity', tags: ['PPT', 'AI', '付费'], pricing: 'freemium'},
  {name: '美图AI PPT', nameEn: 'meitu-ppt', description: '美图秀秀旗下PPT生成工具', url: 'https://design.meitu.com/ppt', category: 'productivity', tags: ['PPT', '美图', '免费'], pricing: 'free'},
  {name: 'WPS AI', nameEn: 'WPS AI', description: 'WPS AI办公助手，文档处理更智能', url: 'https://www.wps.cn', category: 'productivity', tags: ['办公', 'AI', '免费'], pricing: 'freemium'},
  {name: '飞书AI', nameEn: 'feishu-ai', description: '飞书内置AI助手，多维表格智能分析', url: 'https://www.feishu.cn', category: 'productivity', tags: ['办公', '协作', '免费'], pricing: 'freemium'},
  {name: '通义听悟', nameEn: 'tingwu', description: '阿里AI会议纪要，自动总结会议', url: 'https://tingwu.aliyun.com', category: 'productivity', tags: ['会议', '纪要', '免费'], pricing: 'free'},
  
  // 搜索/研究
  {name: 'Kimi', nameEn: 'Kimi', description: '月之暗面AI助手，支持超长上下文', url: 'https://kimi.moonshot.cn', category: 'learning', tags: ['搜索', '长文本', '免费'], pricing: 'free'},
  {name: '秘塔AI搜索', nameEn: 'metaso', description: '无广告AI搜索引擎，直接给出答案', url: 'https://metaso.cn', category: 'learning', tags: ['搜索', '无广告', '免费'], pricing: 'free'},
  {name: '夸克AI', nameEn: 'quark', description: '阿里夸克AI搜索，智能总结', url: 'https://www.quark.cn', category: 'learning', tags: ['搜索', '浏览器', '免费'], pricing: 'free'},
  {name: 'Consensus', nameEn: 'Consensus', description: 'AI学术搜索，查找论文研究', url: 'https://consensus.app', category: 'learning', tags: ['学术', '论文', '搜索'], pricing: 'freemium'},
  
  // 设计工具
  {name: 'Canva', nameEn: 'Canva', description: '在线设计工具，AI辅助生成海报', url: 'https://www.canva.com', category: 'image', tags: ['设计', '海报', '免费'], pricing: 'freemium'},
  {name: 'Figma', nameEn: 'Figma', description: 'UI设计工具，AI辅助设计', url: 'https://www.figma.com', category: 'image', tags: ['UI', '设计', '协作'], pricing: 'freemium'},
  {name: 'MasterGo', nameEn: 'MasterGo', description: '国产UI设计工具，免费使用', url: 'https://mastergo.com', category: 'image', tags: ['UI', '国产', '免费'], pricing: 'free'},
  {name: '即时AI', nameEn: 'jsai', description: '即时设计AI，快速生成UI', url: 'https://js.design', category: 'image', tags: ['UI', 'AI', '免费'], pricing: 'freemium'},
  
  // 翻译工具
  {name: 'DeepL翻译', nameEn: 'DeepL', description: 'AI翻译神器，翻译质量最高', url: 'https://www.deepl.com', category: 'learning', tags: ['翻译', '免费', '高质量'], pricing: 'freemium'},
  {name: '沉浸式翻译', nameEn: 'immersive-translate', description: '浏览器翻译插件，网页双语对照', url: 'https://immersivetranslate.com', category: 'learning', tags: ['翻译', '插件', '免费'], pricing: 'free'},
  {name: '有道翻译', nameEn: 'youdao', description: '网易有道翻译，AI辅助翻译', url: 'https://fanyi.youdao.com', category: 'learning', tags: ['翻译', '免费', '国产'], pricing: 'free'},
  
  // 生活休闲
  {name: '豆包', nameEn: 'doubao', description: '字节跳动免费AI助手，功能全面', url: 'https://www.doubao.com', category: 'chatbot', tags: ['聊天', '免费', '国产'], pricing: 'free'},
  {name: '智谱清言', nameEn: 'zhipu', description: '智谱AI对话助手，清华技术', url: 'https://www.zhipuai.cn', category: 'chatbot', tags: ['聊天', '免费', '国产'], pricing: 'free'},
  {name: '讯飞星火', nameEn: 'xinghuo', description: '科大讯飞AI助手，语音交互强', url: 'https://xinghuo.xfyun.cn', category: 'chatbot', tags: ['聊天', '语音', '免费'], pricing: 'freemium'},
  
  // 更多图像工具
  {name: '美图AI', nameEn: 'meitu-ai', description: '美图秀秀AI图片处理，去水印修图', url: 'https://design.meitu.com', category: 'image', tags: ['修图', '去水印', '免费'], pricing: 'free'},
  {name: 'Fotor AI', nameEn: 'Fotor', description: '在线AI图片编辑工具', url: 'https://www.fotor.com', category: 'image', tags: ['修图', '编辑', '免费'], pricing: 'freemium'},
  
  // 更多编程工具
  {name: 'Continue', nameEn: 'Continue', description: '开源AI编程助手，VSCode和JetBrains插件', url: 'https://continue.dev', category: 'code', tags: ['编程', '开源', '免费'], pricing: 'free'},
  {name: 'GitHub Copilot', nameEn: 'Copilot', description: 'GitHub AI编程助手，代码补全', url: 'https://github.com/features/copilot', category: 'code', tags: ['编程', 'GitHub', '付费'], pricing: 'paid'},
  
  // 更多视频工具
  {name: 'HeyGen', nameEn: 'HeyGen', description: 'AI数字人视频，营销视频制作', url: 'https://www.heygen.com', category: 'video', tags: ['数字人', '营销', '付费'], pricing: 'freemium'},
  {name: 'Runway', nameEn: 'Runway', description: 'AI视频创作平台，功能全面', url: 'https://runwayml.com', category: 'video', tags: ['视频', 'AI视频', '编辑'], pricing: 'freemium'},
];

// 读取现有工具
const toolsPath = 'C:/Users/z1396/.qclaw/workspace/bestai-cool/src/data/tools.ts';
let content = fs.readFileSync(toolsPath, 'utf8');

// 找到aiTools数组的位置
const startMarker = 'export const aiTools: AITool[] = [';
const endMarker = '];';

// 提取现有工具
const startIdx = content.indexOf(startMarker) + startMarker.length;
const endIdx = content.indexOf(endMarker, startIdx);
const existingToolsStr = content.substring(startIdx, endIdx).trim();

// 解析现有工具
const existingTools = [];
if (existingToolsStr.length > 0) {
  const nameMatches = existingToolsStr.matchAll(/name:\s*"([^"]+)"/g);
  for (const match of nameMatches) {
    existingTools.push(match[1]);
  }
}

console.log('现有工具数量:', existingTools.length);

// 过滤掉重复的工具
const newToolsFiltered = newTools.filter(t => !existingTools.includes(t.name));
console.log('新增工具数量:', newToolsFiltered.length);

// 生成新的工具数据
let newToolsStr = '';
for (const tool of newToolsFiltered) {
  newToolsStr += `
  {
    name: "${tool.name}",
    nameEn: "${tool.nameEn}",
    description: "${tool.description}",
    url: "${tool.url}",
    category: "${tool.category}",
    tags: ${JSON.stringify(tool.tags)},
    pricing: "${tool.pricing}",
  },`;
}

// 插入新工具
const newContent = content.substring(0, startIdx) + existingToolsStr + newToolsStr + '\n' + content.substring(endIdx);

fs.writeFileSync(toolsPath, newContent);
console.log('工具数据已更新！');