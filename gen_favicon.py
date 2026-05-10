"""Generate favicon.ico for bestai.cool - multi-size ICO with PNG entries"""
from PIL import Image, ImageDraw, ImageFont
import struct, io

def create_favicon_icon(size):
    """Create a square favicon at given size"""
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Purple-blue gradient background (rounded)
    margin = max(1, size // 16)
    
    # Draw rounded rect background
    overlay = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    radius = size // 5
    od.rounded_rectangle([margin, margin, size-margin, size-margin], radius=radius, fill=(99, 102, 241, 255))
    img = Image.alpha_composite(img, overlay).convert('RGBA')
    draw = ImageDraw.Draw(img)
    
    # Robot face - simple
    cx = size // 2
    cy = size // 2
    
    # Eyes
    eye_r = max(2, size // 10)
    eye_offset = max(3, size // 6)
    draw.ellipse([cx-eye_offset-eye_r, cy-eye_r, cx-eye_offset+eye_r, cy+eye_r], fill=(255, 255, 255, 255))
    draw.ellipse([cx+eye_offset-eye_r, cy-eye_r, cx+eye_offset+eye_r, cy+eye_r], fill=(255, 255, 255, 255))
    
    # Pupils
    pupil_r = max(1, eye_r // 2)
    draw.ellipse([cx-eye_offset-pupil_r, cy-pupil_r+1, cx-eye_offset+pupil_r, cy+pupil_r+1], fill=(79, 70, 229, 255))
    draw.ellipse([cx+eye_offset-pupil_r, cy-pupil_r+1, cx+eye_offset+pupil_r, cy+pupil_r+1], fill=(79, 70, 229, 255))
    
    # Smile
    smile_y = cy + eye_r + max(1, size // 10)
    smile_w = max(3, size // 4)
    draw.arc([cx-smile_w, smile_y-max(2,size//12), cx+smile_w, smile_y+max(2,size//12)], 200, 340, fill=(255, 255, 255, 255), width=max(1, size//24))
    
    return img

# Create multiple sizes
sizes = [16, 32, 48]
images = []
for s in sizes:
    images.append(create_favicon_icon(s))

# Save as ICO
out_path = 'public/favicon.ico'
images[0].save(
    out_path,
    format='ICO',
    sizes=[(s, s) for s in sizes],
    append_images=images[1:]
)
print(f"favicon.ico saved to: {out_path}")
print(f"Sizes: {sizes}")

# Also save a larger 180x180 for Apple touch icon
apple = create_favicon_icon(180)
apple.save('public/apple-touch-icon.png', format='PNG')
print(f"Apple touch icon saved to: public/apple-touch-icon.png (180x180)")
