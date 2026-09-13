from pathlib import Path
from PIL import Image,ImageOps
import json
root=Path(__file__).resolve().parents[1];source=Path('/Users/thedavvy/Desktop/Desktop/Personal Work/Woma Website');out=root/'public/projects/woma';out.mkdir(parents=True,exist_ok=True)
names={'COVER.png':'cover','WOMA v2 — Homepage (Desktop).png':'homepage','WOMA v2 — Interiors Portfolio.png':'interiors','WOMA v2 — Furniture Collection.png':'furniture','WOMA v2 — Art Gallery.png':'art','WOMA v2 — Project Case Study.png':'project','v1 — About.png':'about','v1 — Contact.png':'contact'};records={}
for filename,key in names.items():
 im=ImageOps.exif_transpose(Image.open(source/filename)).convert('RGB');im.thumbnail((1600,16000),Image.Resampling.LANCZOS);im.save(out/f'{key}.webp',quality=90,method=6)
 small=im.copy();small.thumbnail((960,1100),Image.Resampling.LANCZOS);small.save(out/f'{key}-960.webp',quality=88,method=6)
 records[key]={'src':f'/projects/woma/{key}.webp','width':im.width,'height':im.height}
(root/'lib/project-assets/woma.json').write_text(json.dumps(records,indent=2)+'\n');print('Imported eight WOMA screens.')
