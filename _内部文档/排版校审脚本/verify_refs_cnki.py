# -*- coding: utf-8 -*-
"""CNKI检索验证中文参考文献真实性 (D级半自动)"""

import sys, os, re
from urllib.parse import quote

def extract_cn_refs(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()
    ref_start = text.find("## 参考文献")
    ref_section = text[ref_start:]
    refs = re.findall(r'^\[(\d+)\]\s*(.+)', ref_section, re.M)
    cn = [(n, t.strip()) for n, t in refs if re.search(r'[\u4e00-\u9fff]', t[:3])]
    return cn

def build_cnki_url(ref_text):
    """Extract title and build CNKI search URL"""
    # Try to extract title
    m = re.search(r'\.\s*(.+?)\[(?:J|M|D|C|N|Z|EB)', ref_text)
    if not m:
        m = re.search(r'\.\s*(.+?)\.\s*\d{4}', ref_text)
    title = m.group(1) if m else ref_text[:60]
    return f"https://kns.cnki.net/kns8/defaultresult/index?kwd={quote(title)}"

def check(md_path):
    cn = extract_cn_refs(md_path)
    fname = os.path.basename(md_path)

    print(f"\n{'='*60}")
    print(f"  CNKI参考文献真实性核查 (中文 {len(cn)} 条)")
    print(f"  文件: {fname}")
    print(f"{'='*60}")
    print()
    print("  以下为各文献的手动验证链接 (请逐条点击确认):")
    print()

    for n, text in cn:
        # Extract author+year
        author = re.match(r'^([^.,]+)', text)
        year = re.search(r'(\d{4})', text)
        author_str = author.group(1) if author else "?"
        year_str = year.group(1) if year else "?"

        url = build_cnki_url(text)
        print(f"  [{n}] {author_str} ({year_str})")
        print(f"      {text[:100]}")
        print(f"      → CNKI检索: {url}")
        print()

    print(f"{'='*60}")
    print(f"  手动验证清单: {len(cn)}条中文文献")
    print(f"  请逐条点击上方链接，在CNKI中确认文献真实存在")
    print(f"  验证完成后，在 校审记录/参考文献核查_第X章.md 中逐条标记")
    print(f"{'='*60}\n")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("用法: python verify_refs_cnki.py <XX.md>")
        sys.exit(1)
    check(sys.argv[1])
