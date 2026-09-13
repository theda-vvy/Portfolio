"""Import the founder's high-quality Afriforge exports without cropping or upscaling."""
from pathlib import Path
import json
from PIL import Image, ImageOps
ROOT=Path(__file__).resolve().parents[1]
SOURCE=Path('/Users/thedavvy/Desktop/Desktop/Personal Work/New Afriforge')
OUT=ROOT/'public/projects/afriforge/updated'
OUT.mkdir(parents=True,exist_ok=True)
records={}
for source in sorted(SOURCE.glob('*.jpg')):
 name=source.stem.lower().replace(' ','-')
 im=ImageOps.exif_transpose(Image.open(source)).convert('RGB')
 im.save(OUT/f'{name}.webp',quality=93,method=6)
 small=im.copy();small.thumbnail((960,1100),Image.Resampling.LANCZOS)
 small.save(OUT/f'{name}-960.webp',quality=88,method=6)
 records[name]={'src':f'/projects/afriforge/updated/{name}.webp','width':im.width,'height':im.height,'source':source.name}
(ROOT/'lib/project-assets/afriforge-updated.json').write_text(json.dumps(records,indent=2)+'\n')
print(f'Imported {len(records)} original images and responsive variants.')
