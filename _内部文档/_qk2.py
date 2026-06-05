import json, os
base = r'C:\Users\H1811\Desktop\CDU 固废备课文件夹2026\演示展示\lang'
with open(os.path.join(base, 'zh.json'), 'r', encoding='utf-8-sig') as f:
    zh = json.load(f)

music = zh.get('transfer_music', {})
hub = zh.get('transfer_hub', {})

lines = []
lines.append('=== transfer_music keys ===')
for k in sorted(music):
    v = music[k]
    if isinstance(v, str) and len(v) < 200:
        lines.append(f'music.{k}: {v}')

lines.append('')
lines.append('=== transfer_hub keys ===')
for k in sorted(hub):
    v = hub[k]
    if isinstance(v, str):
        lines.append(f'hub.{k}: {v}')

with open(os.path.join(base, '..', '_keys_dump.txt'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('Dumped.')
