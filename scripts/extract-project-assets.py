"""Render selected artwork from the owner's original PDFs; source documents stay untouched."""
import json, subprocess, sys
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

ASSETS.update({'punchin': ('Punchin Update.pdf', [('cover', 28, None), ('hero', 24, None), ('identity', 13, (0.09, 0.1, 0.96, 0.94)), ('mascot', 19, (0.32, 0.04, 0.98, 0.97)), ('pattern', 20, (0.32, 0.04, 0.98, 0.97)), ('campaign', 32, None), ('posters', 34, None)]), 'gidigroove': ('Gidigroove.pdf', [('cover', 41, None), ('hero', 40, None), ('identity', 21, (0.12, 0.08, 0.98, 0.96)), ('illustration', 34, (0.325, 0.025, 0.98, 0.975)), ('pattern', 31, (0.325, 0.025, 0.98, 0.975)), ('campaign', 43, (0.15, 0.1, 0.93, 0.95)), ('digital', 48, None)]), 'wattflex': ('WATTFLEX.pdf', [('cover', 43, None), ('hero', 47, (0.073, 0.127, 0.927, 0.873)), ('identity', 19, (0.26, 0.25, 0.94, 0.94)), ('pattern', 25, (0.4, 0.055, 0.98, 0.95)), ('packaging', 31, (0.315, 0.065, 0.965, 0.94)), ('campaign', 48, None), ('tote', 39, (0.45, 0, 1, 1))]), 'nabata': ('Nabata.pdf', [('cover', 41, None), ('hero', 47, None), ('identity', 20, (0.502, 0.135, 0.952, 0.855)), ('pattern', 28, (0.455, 0, 1, 1)), ('fold', 29, (0.455, 0, 1, 1)), ('editorial', 38, None), ('campaign', 45, None)])})

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
with ThreadPoolExecutor(max_workers=3) as executor: list(executor.map(project,((slug, data) for slug, data in ASSETS.items() if not sys.argv[1:] or slug in sys.argv[1:])))
