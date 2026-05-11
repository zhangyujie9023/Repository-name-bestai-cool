"""Generate og-image.png for bestai.cool v2 - no emoji, pure graphics"""
from PIL import Image, ImageDraw, ImageFont
import os, math

W, H = 1200, 630
img = Image.new('RGB', (W, H))
draw = ImageDraw.Draw(img)

# Gradient background (deep purple-blue)
for y in range(H):
    r = int(79 + (99 - 79) * y / H)
    g = int(70 + (102 - 70) * y / H)
    b = int(229 + (241 - 229) * y / H)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Content area - semi-transparent rounded rect
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
odraw = ImageDraw.Draw(overlay)
odraw.rounded_rectangle([60, 50, W-60, H-50], radius=28, fill=(255, 255, 255, 25))
img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
draw = ImageDraw.Draw(img)

# Fonts
def get_font(size, bold=False):
    if bold:
        try: return ImageFont.truetype("C:/Windows/Fonts/msyhbd.ttc", size)
        except: pass
    try: return ImageFont.truetype("C:/Windows/Fonts/msyh.ttc", size)
    except: return ImageFont.load_default()

# Draw a simple robot icon using shapes (circle head + antenna + body lines)
cx, cy = W // 2, 115

# Robot head (rounded square)
head_size = 48
head_overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(head_overlay)
hd.rounded_rectangle([cx-head_size, cy-head_size, cx+head_size, cy+head_size], radius=14, fill=(255, 255, 255, 220))
img = Image.alpha_composite(img.convert('RGBA'), head_overlay).convert('RGB')
draw = ImageDraw.Draw(img)

# Robot eyes (two circles)
eye_r = 8
draw.ellipse([cx-18, cy-10, cx-2, cy+6], fill=(99, 102, 241))   # left eye
draw.ellipse([cx+2, cy-10, cx+18, cy+6], fill=(99, 102, 241))     # right eye

# Robot mouth (small line)
draw.line([(cx-12, cy+16), (cx+12, cy+16)], fill=(99, 102, 241), width=3)

# Robot antenna
draw.line([(cx, cy-head_size), (cx, cy-head_size-20)], fill=(255, 255, 255, 200), width=3)
antenna_overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ad = ImageDraw.Draw(antenna_overlay)
ad.ellipse([cx-7, cy-head_size-32, cx+7, cy-head_size-18], fill=(255, 200, 50, 230))
img = Image.alpha_composite(img.convert('RGBA'), antenna_overlay).convert('RGB')
draw = ImageDraw.Draw(img)

# Main title
font_title = get_font(72, bold=True)
title = "AI学习站"
bbox = draw.textbbox((0, 0), title, font=font_title)
tw = bbox[2] - bbox[0]
draw.text((W//2 - tw//2, 195), title, fill='white', font=font_title)

# Subtitle
font_sub = get_font(34)
subtitle = "零基础学AI，从入门到实用"
bbox2 = draw.textbbox((0, 0), subtitle, font=font_sub)
sw = bbox2[2] - bbox2[0]
draw.text((W//2 - sw//2, 285), subtitle, fill=(235, 235, 245), font=font_sub)

# URL badge
font_url = get_font(26, bold=True)
url_text = "bestai.cool"
bbox3 = draw.textbbox((0, 0), url_text, font=font_url)
uw = bbox3[2] - bbox3[0]
badge_w = uw + 48
badge_h = 46
badge_x = W//2 - badge_w//2
badge_y = 356

badge_overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(badge_overlay)
bd.rounded_rectangle(
    [badge_x, badge_y, badge_x + badge_w, badge_y + badge_h],
    radius=23,
    fill=(255, 255, 255, 35),
    outline=(255, 255, 255, 80),
    width=1
)
img = Image.alpha_composite(img.convert('RGBA'), badge_overlay).convert('RGB')
draw = ImageDraw.Draw(img)
draw.text((badge_x + 24, badge_y + 9), url_text, fill='white', font=font_url)

# Feature tags with checkmark circles
font_tag = get_font(22)
features = ["免费教程", "中文界面", "适合新手"]

# Calculate total width
tag_widths = []
for f in features:
    bf = draw.textbbox((0, 0), f, font=font_tag)
    tag_widths.append(bf[2] - bf[0])
gap = 40
total_tags = sum(tag_widths) + gap * (len(features) - 1)
start_x = W//2 - total_tags//2
tag_y = 435

for i, f in enumerate(features):
    x = start_x + sum(tag_widths[:i]) + gap * i
    
    # Green check circle
    cr = 11
    check_overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    cd = ImageDraw.Draw(check_overlay)
    cd.ellipse([x-cr, tag_y-cr+2, x+cr, tag_y+cr+2], fill=(74, 222, 128))
    img = Image.alpha_composite(img.convert('RGBA'), check_overlay).convert('RGB')
    draw = ImageDraw.Draw(img)
    
    # Check mark
    draw.text((x-5, tag_y-4), "\u2713", fill='white', font=get_font(15, bold=True))
    
    # Tag text
    draw.text((x + 18, tag_y - 5), f, fill=(220, 220, 240), font=font_tag)

# Bottom tool names
font_bottom = get_font(17)
bottom_text = "ChatGPT \u00b7 Kimi \u00b7 豆包 \u00b7 通义万相 \u00b7 Midjourney \u00b7 剪映AI"
bbox_b = draw.textbbox((0, 0), bottom_text, font=font_bottom)
bw = bbox_b[2] - bbox_b[0]
draw.text((W//2 - bw//2, 520), bottom_text, fill=(200, 200, 225), font=font_bottom)

# Decorative dots at bottom
dot_y = 565
dot_colors = [(167, 139, 250), (139, 92, 246), (99, 102, 241)]
for i, dc in enumerate(dot_colors):
    dx = W//2 - 20 + i * 20
    dot_o = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    dd = ImageDraw.Draw(dot_o)
    dd.ellipse([dx-4, dot_y-4, dx+4, dot_y+4], fill=dc + (220,))
    img = Image.alpha_composite(img.convert('RGBA'), dot_o).convert('RGB')
    draw = ImageDraw.Draw(img)

# Save
out_path = os.path.join(os.path.dirname(__file__), 'public', 'og-image.png')
img.save(out_path, 'PNG', quality=95)
print(f"OG image saved to: {out_path}")
print(f"Size: {img.size}")