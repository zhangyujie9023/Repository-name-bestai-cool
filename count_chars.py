import re

with open('src/data/tutorials.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for tid in ['gamma-ai', 'jianying-ai', 'ai-translate', 'ai-summary']:
    start = content.find(f'"{tid}": {{')
    if start == -1:
        continue
    # Find the content field
    content_start = content.find('content: `', start) + len('content: `')
    content_end = content.find('`,', content_start)
    tutorial_content = content[content_start:content_end]
    # Count Chinese characters
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', tutorial_content))
    # Count total characters
    total_chars = len(tutorial_content)
    print(f'{tid}: {chinese_chars} Chinese chars, {total_chars} total chars')

# Also check the longer tutorials for comparison
for tid in ['chatgpt-intro', 'kimi-intro', 'ai-write-report']:
    start = content.find(f'"{tid}": {{')
    if start == -1:
        continue
    content_start = content.find('content: `', start) + len('content: `')
    content_end = content.find('`,', content_start)
    tutorial_content = content[content_start:content_end]
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', tutorial_content))
    total_chars = len(tutorial_content)
    print(f'{tid}: {chinese_chars} Chinese chars, {total_chars} total chars')
