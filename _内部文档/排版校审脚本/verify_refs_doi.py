# -*- coding: utf-8 -*-
"""CrossRef DOI验证英文参考文献真实性 (D级半自动)"""

import sys, os, re, json

def extract_en_refs(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()
    ref_start = text.find("## 参考文献")
    ref_section = text[ref_start:]
    refs = re.findall(r'^\[(\d+)\]\s*(.+)', ref_section, re.M)
    en = [(n, t.strip()) for n, t in refs if not re.search(r'[\u4e00-\u9fff]', t[:3])]
    return en

def try_crossref(title):
    """Try to verify via CrossRef API"""
    import urllib.request
    try:
        query = title.strip('. ')[:200]
        url = f"https://api.crossref.org/works?query.title={urllib.parse.quote(query)}&rows=1"
        req = urllib.request.Request(url, headers={"User-Agent": "MonographChecker/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            items = data.get("message", {}).get("items", [])
            if items:
                item = items[0]
                title_found = item.get("title", [""])[0]
                doi = item.get("DOI", "")
                year = item.get("published-print", {}).get("date-parts", [[0]])[0][0]
                return True, doi, title_found, year
        return False, "", "", 0
    except:
        return None, "", "", 0

def check(md_path):
    en = extract_en_refs(md_path)
    fname = os.path.basename(md_path)

    print(f"\n{'='*60}")
    print(f"  CrossRef DOI真实性核查 (英文 {len(en)} 条)")
    print(f"  文件: {fname}")
    print(f"{'='*60}")

    confirmed = 0; failed = 0; offline = 0
    for n, text in en:
        # Extract title (between . and [J])
        m = re.search(r'\.\s*(.+?)\.?\s*\[J\]', text)
        if not m:
            m = re.search(r'\.\s*(.+?)\.?\s*\[M\]', text)
        if not m:
            m = re.search(r'\.\s*(.+?)(?:\[|$)', text)
        title = m.group(1).strip() if m else text[:100]

        ok, doi, found_title, year = try_crossref(title)

        if ok:
            print(f"  [OK]  [{n}] DOI:{doi}")
            print(f"       {found_title[:80]}")
            confirmed += 1
        elif ok is False:
            print(f"  [??]  [{n}] CrossRef未找到")
            print(f"       标题: {title[:80]}")
            print(f"       → 请手动核实: https://scholar.google.com/scholar?q={title[:60]}")
            failed += 1
        else:
            print(f"  [--]  [{n}] 离线/网络不可达")
            print(f"       标题: {title[:80]}")
            offline += 1
        print()

    print(f"{'='*60}")
    print(f"  CrossRef确认: {confirmed}条")
    print(f"  未找到: {failed}条 (需人工核实)")
    print(f"  离线跳过: {offline}条")
    print(f"{'='*60}\n")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("用法: python verify_refs_doi.py <XX.md>")
        sys.exit(1)
    check(sys.argv[1])
