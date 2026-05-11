"""Check tutorials.ts format"""
with open('src/data/tutorials.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# Find first id
idx = c.find("id: ")
if idx >= 0:
    print("FIRST 600 CHARS AT FIRST 'id':")
    print(repr(c[idx:idx+600]))
else:
    print("NO 'id' FOUND")
    print(f"File size: {len(c)}")
    print(f"First 200 chars: {repr(c[:200])}")