"""Fix dark mode: replace bg-white with bg-card in page.tsx"""
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    'bg-white border border-border rounded-xl hover:border-primary/30',
    'bg-card border border-border rounded-xl hover:border-primary/30 dark:hover:border-primary/50'
)
# faq items and related tutorials
c = c.replace(
    'bg-white border border-border rounded-lg hover:border-primary/30 transition-colors"',
    'bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print('done')
