import re

with open('src/data/tutorials.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Check ALL tutorials
for tid in ['chatgpt-intro', 'kimi-intro', 'ai-write-report', 'doubao-intro', 'tongyi-draw', 'midjourney-intro', 'wps-ai', 'gamma-ai', 'jianying-ai', 'ai-translate', 'ai-summary']:
    start = content.find(f'"{tid}": {{')
    if start == -1:
        print(f'{tid}: NOT FOUND')
        continue
    content_start = content.find('content: `', start) + len('content: `')
    content_end = content.find('`,', content_start)
    tutorial_content = content[content_start:content_end]
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', tutorial_content))
    total_chars = len(tutorial_content)
    print(f'{tid}: {chinese_chars} Chinese chars, {total_chars} total chars')