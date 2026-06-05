# -*- coding: utf-8 -*-
"""参考文献自动核查 (A+B+C级) —— 序号/格式/交叉验证"""

import sys, os, re
from collections import Counter

def extract_refs_from_md(md_path):
    """Extract body citations and reference entries from .md"""
    with open(md_path, "r", encoding="utf-8") as f:
        text = f.read()

    # Split body and references
    ref_start = text.find("## 参考文献")
    if ref_start < 0:
        print("ERROR: 未找到 ## 参考文献")
        return [], [], ""

    body = text[:ref_start]
    ref_section = text[ref_start:]

    # Extract body citations [n]
    body_cites = re.findall(r'\[(\d+)\]', body)
    body_cites = [int(n) for n in body_cites]

    # Extract reference entries
    ref_entries = re.findall(r'^\[(\d+)\]\s*(.+)', ref_section, re.M)
    ref_dict = {int(n): text.strip() for n, text in ref_entries}

    return body_cites, ref_dict, ref_section

def check(md_path):
    fname = os.path.basename(md_path)
    body_cites, ref_dict, ref_section = extract_refs_from_md(md_path)

    if not ref_dict:
        print("ERROR: 参考文献为空")
        return

    max_ref = max(ref_dict.keys())
    min_ref = min(ref_dict.keys())

    errors = 0
    warns = 0

    print(f"\n{'='*60}")
    print(f"  参考文献核查报告")
    print(f"  文件: {fname}")
    print(f"  标准: GB/T 7714-2015 + 专著写作宪法")
    print(f"{'='*60}")

    # A1: 序号连续无跳号
    expected = set(range(min_ref, max_ref + 1))
    actual = set(ref_dict.keys())
    missing = expected - actual
    extra = actual - expected
    if not missing and not extra:
        print(f"  [PASS] A1 序号连续   [{min_ref}]-[{max_ref}] 无跳号/重复")
    else:
        print(f"  [FAIL] A1 序号连续   缺失: {sorted(missing)} 多余: {sorted(extra)}")
        errors += 1

    # A2: 首次出现序 = 参考文献序
    seen = set()
    first_order = []
    for n in body_cites:
        if n not in seen:
            first_order.append(n)
            seen.add(n)
    correct_order = True
    for i, n in enumerate(first_order):
        if i + min_ref != n:
            correct_order = False
            break
    if correct_order and len(first_order) <= len(ref_dict):
        print(f"  [PASS] A2 首次出现序  与参考文献序一致")
    else:
        print(f"  [WARN] A2 首次出现序  {len(first_order)}个首次引用, 参考文献{len(ref_dict)}条")
        warns += 1

    # B1: 悬空引用 (正文引了但参考文献表没有)
    cited_nums = set(int(n) for n in body_cites)
    dangling = cited_nums - actual
    if not dangling:
        print(f"  [PASS] B1 悬空引用    正文{len(cited_nums)}个引用→参考文献{len(ref_dict)}条, 全部对应")
    else:
        print(f"  [FAIL] B1 悬空引用    [{', '.join(map(str, sorted(dangling)))}] 在正文中被引用但参考文献表中无对应")
        errors += 1

    # B2: 死文献 (参考文献表有但正文未引用)
    dead = actual - cited_nums
    if not dead:
        print(f"  [PASS] B2 死文献      参考文献{len(ref_dict)}条全被引用")
    else:
        print(f"  [WARN] B2 死文献      [{', '.join(map(str, sorted(dead)))}] 未在正文中被引用")
        warns += 1

    # C1: 标点检测
    cn_bad = 0; en_bad = 0
    for n, text in ref_dict.items():
        is_cn = bool(re.search(r'[\u4e00-\u9fff]', text[:3]))
        if is_cn:
            if not text.rstrip().endswith('。') and not text.rstrip().endswith('.'):
                cn_bad += 1
        else:
            if not text.rstrip().endswith('.'):
                en_bad += 1
    if cn_bad == 0 and en_bad == 0:
        print(f"  [PASS] C1 标点格式    中文{len([n for n,t in ref_dict.items() if re.search(r'[\u4e00-\u9fff]', t[:3])])}条/英文{len(ref_dict)-len([n for n,t in ref_dict.items() if re.search(r'[\u4e00-\u9fff]', t[:3])])}条, 句末标点正确")
    else:
        print(f"  [WARN] C1 标点格式    中文{cn_bad}条/英文{en_bad}条句末标点异常")
        warns += 1

    # C2: 作者格式 ("等" vs "et al")
    cn_et_al = 0; en_deng = 0
    for n, text in ref_dict.items():
        is_cn = bool(re.search(r'[\u4e00-\u9fff]', text[:3]))
        if is_cn and 'et al' in text and '等' not in text:
            cn_et_al += 1
        if not is_cn and '等' in text:
            en_deng += 1
    if cn_et_al == 0 and en_deng == 0:
        print(f"  [PASS] C2 作者格式    中文'等'/英文'et al' 一致")
    else:
        print(f"  [WARN] C2 作者格式    中文误用'et al'={cn_et_al}条, 英文误用'等'={en_deng}条")
        warns += 1

    # C3: 四要素 (卷/期/页码)
    incomplete = []
    for n, text in ref_dict.items():
        # Check for [J] articles
        if '[J]' in text:
            has_vol = bool(re.search(r'\d{4}[,，]\s*\d+', text))
            has_page = bool(re.search(r'\d+[-–—]\d+', text) or re.search(r':\s*\d+', text))
            if not (has_vol and has_page):
                incomplete.append(n)
    if not incomplete:
        print(f"  [PASS] C3 四要素      [J]类文献卷期页码齐全")
    else:
        print(f"  [WARN] C3 四要素      [{', '.join(map(str, incomplete))}] 疑似缺卷期页码")
        warns += 1

    # ── D: 真实性提醒 ──
    cn_refs = [(n, t) for n, t in ref_dict.items() if re.search(r'[\u4e00-\u9fff]', t[:3])]
    en_refs = [(n, t) for n, t in ref_dict.items() if not re.search(r'[\u4e00-\u9fff]', t[:3])]
    print(f"\n  --- D级真实性核查 (需单独运行 verify_refs 脚本) ---")
    print(f"  中文 {len(cn_refs)} 条 → python verify_refs_cnki.py")
    print(f"  英文 {len(en_refs)} 条 → python verify_refs_doi.py")

    # Summary
    print(f"\n{'='*60}")
    total = errors + warns
    if total == 0:
        print(f"  结果: 全部通过 — 可进入 D 级真实性核查")
    else:
        print(f"  结果: {errors}错误 {warns}警告 — 须修正后重新核查")
    print(f"{'='*60}\n")

    return errors == 0 and warns == 0


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("用法: python check_references.py <第一章_完整版_v1.0.md>")
        sys.exit(1)
    ok = check(sys.argv[1])
    sys.exit(0 if ok else 1)
