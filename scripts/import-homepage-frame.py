from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib
root=Path(__file__).resolve().parents[1];source=Path('/Users/thedavvy/Desktop/Desktop/Personal Work/homepage frame');out=root/'public/showcase';out.mkdir(exist_ok=True);records=[]
for p in sorted(source.rglob('*')):
 if p.suffix.lower() not in ('.jpg','.jpeg','.png','.webp'):continue
 im=ImageOps.exif_transpose(Image.open(p)).convert('RGBA')
 if im.getextrema()[3][1]==0:print('Skipped transparent image:',p.name);continue
 bg=Image.new('RGBA',im.size,'#f6f5f1');bg.alpha_composite(im);im=bg.convert('RGB');im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 name=hashlib.sha256(p.read_bytes()).hexdigest()[:12];im.save(out/f'{name}.webp',quality=86,method=6)
 records.append({'src':f'/showcase/{name}.webp','width':im.width,'height':im.height})
(root/'lib/project-assets/homepage-frame.json').write_text(json.dumps(records,indent=2)+'\n');print('Imported',len(records),'snapshots')
