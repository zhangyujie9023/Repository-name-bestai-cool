"""Count tutorial chars v5 - handle escaped backticks in template strings"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tutorials.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all content: ` positions and match balanced backticks
lines = []
lines.append(f"{'Tutorial ID':25s} | {'Chars':>6s} | {'CN':>5s} | Status | Title")
lines.append("-" * 95)

# Find each tutorial by looking for id: "xxx" followed eventually by content: `
# Then find the matching closing backtick (handling \`)
pattern = r'id: "([^"]+)"[\s\S]*?title: "([^"]+)"[\s\S]*?content: `'

for m in re.finditer(pattern, content):
    tid = m.group(1)
    title = m.group(2)
    start = m.end()  # position after opening backtick
    
    # Now find the matching closing backtick
    pos = start
    depth = 1
    while pos < len(content) and depth > 0:
        if content[pos] == '\\' and pos + 1 < len(content) and content[pos+1] == '`':
            pos += 2  # skip escaped backtick
            continue
        if content[pos] == '`':
            depth -= 1
            if depth == 0:
                break
        pos += 1
    
    body = content[start:pos].strip()
    chars = len(body)
    cn = len(re.findall(r'[\u4e00-\u9fff]', body))
    
    if chars >= 3000:
        status = "OK "
    elif chars >= 2000:
        status = "~  "
    else:
        status = "LOW"
    
    lines.append(f"{tid:25s} | {chars:6d} | {cn:5d} | [{status}] {title}")

result = "\n".join(lines)
with open('char_count_report.txt', 'w', encoding='utf-8') as f:
    f.write(result + "\n")
print(result)

# Count unique tutorials
ids = [m.group(1) for m in re.finditer(pattern, content)]
print(f"\nTotal tutorials with content: {len(ids)}")
print(f"Unique IDs: {len(set(ids))}")