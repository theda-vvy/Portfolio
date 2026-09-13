"""Prepare the supplied Punchin exports for responsive web display."""
from pathlib import Path
import json
from PIL import Image, ImageOps
ROOT=Path(__file__).resolve().parents[1]
SOURCE=Path('/Users/thedavvy/Desktop/Desktop/Personal Work/New Punchin')
OUT=ROOT/'public/projects/punchin/updated'
OUT.mkdir(parents=True,exist_ok=True)
records={}
for source in sorted(p for p in SOURCE.iterdir() if p.suffix.lower() in ('.jpg', '.jpeg', '.png')):
 name=source.stem.lower().replace(' ','-')
 im=ImageOps.exif_transpose(Image.open(source)).convert('RGB')
 im.thumbnail((2560,3200),Image.Resampling.LANCZOS)
 im.save(OUT/f'{name}.webp',quality=92,method=6)
 small=im.copy();small.thumbnail((960,1100),Image.Resampling.LANCZOS)
 small.save(OUT/f'{name}-960.webp',quality=88,method=6)
 records[name]={'src':f'/projects/punchin/updated/{name}.webp','width':im.width,'height':im.height,'source':source.name}
(ROOT/'lib/project-assets/punchin-updated.json').write_text(json.dumps(records,indent=2)+'\n')
print(f'Imported {len(records)} images and responsive variants.')
