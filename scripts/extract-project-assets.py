"""Render selected artwork from the owner's original PDFs; source documents stay untouched."""
import json, subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

SOURCE = Path('/Users/thedavvy/Desktop/Desktop/Personal Work')
ROOT = Path(__file__).resolve().parents[1]
TMP = ROOT / 'tmp/pdfs/selected'
PUBLIC = ROOT / 'public/projects'
# Crop coordinates identify artwork within the original presentation, excluding manual chrome.
ASSETS = {
 'schlepp': ('Schlepp.pdf', [
  ('cover',86,(.08,.28,.92,.945)),('hero',87,(.08,.20,.92,.945)),
  ('mark',16,(.466,.137,.925,.862)),('identity',19,(.075,.40,.895,.91)),
  ('architecture',44,(.075,.385,.94,.79)),('campaign',77,(.075,.245,.925,.905)),
  ('nook',52,(.08,.285,.92,.945)),('loadways',64,(.08,.285,.92,.925)),
  ('brochure',81,(.08,.215,.92,.945)),('tote',93,(.08,.25,.92,.945)),
 ]),
 '5fourteen': ('5fourteen.pdf', [
  ('cover',60,(.665,.155,.95,.87)),('hero',47,None),
  ('identity',16,(.455,.14,.95,.89)),('pattern',31,(.385,.355,.95,.91)),
  ('colour',24,(.177,.315,.975,.90)),('campaign',44,(.035,.13,.965,.885)),
  ('books',55,None),('apparel',60,(.065,.155,.95,.87)),('billboard',63,None),
 ]),
 'afriforge': ('Afriforge.pdf', [
  ('cover',31,None),('hero',39,None),('identity',13,(.27,.22,.955,.895)),
  ('pattern',15,(.46,.13,.965,.92)),('elements',18,(.405,.08,.965,.93)),
  ('posters',20,(.025,.065,.975,.945)),('campaign',36,None),
  ('digital',42,None),('apparel',56,None),
 ]),
}

def project(job):
 slug,(filename,items)=job
 out=PUBLIC/slug;out.mkdir(parents=True,exist_ok=True)
 cache=TMP/slug;cache.mkdir(parents=True,exist_ok=True)
 records={}
 for name,page,crop in items:
  raw=cache/f'page-{page}.png'
  if not raw.exists():
   subprocess.run(['pdftoppm','-f',str(page),'-l',str(page),'-singlefile','-scale-to','4600' if slug=='5fourteen' and page==60 else '3000','-png',str(SOURCE/filename),str(raw.with_suffix(''))],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
  im=Image.open(raw).convert('RGB')
  if crop: im=im.crop(tuple(round(v*s) for v,s in zip(crop,[im.width,im.height,im.width,im.height])))
  im.thumbnail((2000,2200),Image.Resampling.LANCZOS)
  im.save(out/f'{name}.webp',quality=89,method=6)
  small=im.copy();small.thumbnail((960,1100),Image.Resampling.LANCZOS);small.save(out/f'{name}-960.webp',quality=85,method=6)
  records[name]={'src':f'/projects/{slug}/{name}.webp','width':im.width,'height':im.height,'source':filename,'page':page,'crop':crop}
 (ROOT/'lib/project-assets').mkdir(exist_ok=True)
 (ROOT/'lib/project-assets'/f'{slug}.json').write_text(json.dumps(records,indent=2)+'\n')
 print(slug,len(records),'assets exported',flush=True)
with ThreadPoolExecutor(max_workers=3) as executor: list(executor.map(project,ASSETS.items()))
