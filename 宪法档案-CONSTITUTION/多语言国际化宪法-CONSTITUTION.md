# 多语言国际化宪法 · CONSTITUTION

> 适用范围：《固体废弃物污染防治技术》研究生精品课程演示门户（`https://zhengwen69.github.io/cdu-gufei-web-demo/`）之国际化改造
> 语种：中文（zh）· 英文（en）· 泰文（th）
> 版本 v1.0 · 2026.05.31
> 最高准则：凡国际化实现、翻译、维护之行为，均须符合本宪法之规定。

---

## 序言：总纲与宗旨

本宪法为演示门户三语国际化改造工程的最高准则。

**背景**：课题组成员在泰国攻读教育学博士学位，将在东南亚地区期刊投稿论文中引用门户截图，门户须支持中文、英文、泰文三语切换，以满足国际学术论文的截图需求。

**目标**：
- 全站 16 个 HTML 页面均支持三语实时切换
- 语言切换器固定可见，截图包含语言标识
- 纯客户端方案，不依赖后端，兼容 GitHub Pages 静态托管
- 翻译由 AI Agent 团队完成机器自动翻译，不依赖人工翻译

---

## 第一章：技术架构宪法

**第1条（架构原则）**

采用客户端 JavaScript i18n 方案：
- 翻译数据存储在 `lang/` 目录下的 JSON 文件（zh.json / en.json / th.json）
- 翻译引擎 `js/i18n.js` 负责语言检测、翻译加载、文本替换
- HTML 元素通过 `data-i18n` 属性标记待翻译文本
- 语言切换器为固定定位按钮组，位于页面右上角

**第2条（语言检测优先级）**

```
URL 参数 ?lang=  >  localStorage('cdu-gufei-lang')  >  默认中文(zh)
```

- 默认语言为中文，HTML 源文本即为中文，中文模式下零开销渲染
- 切换至 en/th 时，JS 从 JSON 加载翻译并替换 DOM 文本
- 语言偏好写入 localStorage，下次访问自动恢复

**第3条（翻译引擎核心功能）**

`js/i18n.js` 须实现：
- `data-i18n`：替换元素 textContent
- `data-i18n-html`：替换元素 innerHTML（用于含内联标签的文本）
- `data-i18n-placeholder`：替换 input/textarea placeholder
- `data-i18n-title`：替换元素 title 属性
- `document.title` 通过 documentElement 的 `data-i18n-title` 属性翻译
- `switchLang(lang)` 切换语言并重载页面（带 URL 参数）
- 防闪烁：非中文时先设置 opacity:0，翻译完成后再显示

**第4条（语言切换器规范）**

- 固定定位于 `top: 20px; right: 20px; z-index: 9999`
- 三个按钮：🇨🇳 中文 · 🇬🇧 English · 🇹🇭 ไทย
- 当前激活语言高亮（border-color 使用 #5b9bd5）
- 按钮 hover 效果与站点整体风格一致
- 移动端适配：按钮尺寸缩小至 28px，top: 10px, right: 10px

**第5条（目录结构）**

```
演示展示/
├── index.html              ← 首页
├── 课程概览.html           ← 含幻灯片 JS
├── ... (其余 14 个 HTML)   ← 均需引入 i18n.js + 切换器
├── js/
│   └── i18n.js             ← 翻译引擎
├── lang/
│   ├── zh.json             ← 中文基准（唯一真实源文本）
│   ├── en.json             ← 英文翻译
│   └── th.json             ← 泰文翻译
└── 宪法档案-CONSTITUTION/
    └── 多语言国际化宪法-CONSTITUTION.md  ← 本宪法
```

---

## 第二章：翻译键命名宪法

**第1条（命名结构）**

翻译键采用点分隔层级结构：`页面.区域.元素`

| 前缀 | 页面 | 示例键 |
|------|------|--------|
| `common.` | 跨页面共享文本 | `common.back` = "返回首页" |
| `index.` | 首页 | `index.hero.title` = "固体废弃物污染防治技术" |
| `overview.` | 课程概览 | `overview.slide0.uni` = "成都大学 · 环境工程系" |
| `nav.` | 章节导航 | `nav.week1.title` = "第1周 空间错配Ⅰ" |
| `mindmap.` | 知识导图 | `mindmap.xxx` |
| `agents.` | 教学团队 | `agents.agent0.title` |
| `community.` | 互动社区 | `community.xxx` |
| `dashboard.` | 教师仪表盘 | `dashboard.xxx` |
| `garden.` | 学习园地 | `garden.xxx` |
| `w1.` ~ `w8.` | 第1-8周教学页 | `w1.core.question` |

**第2条（键名规范）**

- 使用小写英文字母、数字、下划线
- 层级不超过 4 层
- 语义化命名，反映内容角色（title/subtitle/desc/card/table等）
- 对于重复结构（如多张卡片），使用序号后缀：`w1.case.title01`、`w1.case.title02`

**第3条（zh.json 的源真理性）**

- zh.json 为本宪法认可的**唯一真实源文本**
- HTML 中的中文原文仅作为后备显示，逻辑上应以 zh.json 为准
- 凡修改中文文案，须同步更新 zh.json 及对应 HTML 的 data-i18n 属性
- zh.json 的每个键必须为原始中文文本，不可变形

---

## 第三章：翻译质量宪法

**第1条（翻译来源）**

本工程翻译由 AI Agent 团队完成机器自动翻译，不依赖人工翻译。翻译结果可接受机器翻译的流畅性水平，不追求出版级翻译质量。

**第2条（专业术语一致性）**

以下核心术语须在三语间保持翻译一致：

| 中文 | 英文 | 泰文 |
|------|------|------|
| 固体废弃物污染防治技术 | Solid Waste Pollution Prevention and Control Technology | เทคโนโลยีการป้องกันและควบคุมมลพิษจากขยะมูลฝอย |
| 空间错配 | Spatial Mismatch | ความไม่สอดคล้องเชิงพื้นที่ |
| 技术错配 | Technical Mismatch | ความไม่สอดคล้องเชิงเทคนิค |
| 行为错配 | Behavioral Mismatch | ความไม่สอดคล้องเชิงพฤติกรรม |
| 人文错配 | Humanistic Mismatch | ความไม่สอดคล้องเชิงมนุษยธรรม |
| 叙·框·境·创 | Narrate · Framework · Scene · Create | เล่าเรื่อง · กรอบความคิด · สถานการณ์ · สร้างสรรค์ |
| 四维教学法 | Four-Dimensional Pedagogy | วิธีสอนสี่มิติ |
| 好好学习 天天向上 | Study Hard, Make Progress Every Day | ตั้งใจเรียน ก้าวหน้าทุกวัน |
| 绿水青山 = 金山银山 | Lucid Waters & Lush Mountains = Invaluable Assets | น้ำใสภูเขาเขียว = ขุนเขาทองคำ |
| 点暇斋 | Dianxia Studio | เตี่ยนเสียจ้าย |
| 黄正文 | Huang Zhengwen | หวง เจิ้งเหวิน |
| 成都大学 | Chengdu University | มหาวิทยาลัยเฉิงตู |
| 雍葭 | Yong Jia | ยงเจีย |
| OBE | OBE | OBE |
| Agent | Agent | Agent |

**第3条（版权内容处理）**

- 小说书名保留原文+英文意译（如《龙栖湾》→ "Longqi Bay (Dragon Dwelling Bay)"）
- 小说节选内容的英文/泰文翻译标注"Machine-translated excerpt"
- 版权登记标记"© 已登记"翻译为"© Registered" / "© จดทะเบียนแล้ว"

**第4条（术语不可变形原则）**

第2条术语表中列出的术语，在全部翻译文本中必须使用完全一致的形式，禁止出现同义词替换或变形。

---

## 第四章：页面改造宪法

**第1条（HTML 改造规范）**

每个 HTML 页面须进行以下改造：
1. `<html lang="zh-CN">` 改为动态属性（i18n.js 运行时更新）
2. `<head>` 引入 `<script src="js/i18n.js"></script>`（位于 `</head>` 前）
3. `<body>` 顶部（第一个子元素）插入语言切换器 HTML 片段
4. 所有包含中文文本的叶子元素添加 `data-i18n="键名"` 属性
5. 含中文的 title/placeholder 属性改用 `data-i18n-title` / `data-i18n-placeholder`

**第2条（切换器插入位置）**

语言切换器 HTML 须插入在 `<body>` 的第一个子元素位置，在所有其他内容之前。

**第3条（改造范围）**

以下 16 个页面均须改造：

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | `index.html` | 首页导航 |
| 2 | `课程概览.html` | 幻灯片呈现 |
| 3 | `章节导航.html` | 8周方案 |
| 4 | `知识导图.html` | 知识树 |
| 5 | `agent团队演示.html` | 教学团队 |
| 6 | `互动社区.html` | 签到/周报 |
| 7 | `教师仪表盘.html` | 教师管理 |
| 8 | `学习园地.html` | 学习子门户 |
| 9 | `第1周-空间错配.html` | 空间错配Ⅰ |
| 10 | `第2周-空间错配Ⅱ.html` | 空间错配Ⅱ |
| 11 | `第3周-技术错配Ⅰ.html` | 技术错配Ⅰ |
| 12 | `第4周-技术错配Ⅱ.html` | 技术错配Ⅱ |
| 13 | `第5周-行为错配Ⅰ.html` | 行为错配Ⅰ |
| 14 | `第6周-行为错配Ⅱ.html` | 行为错配Ⅱ |
| 15 | `第7周-人文错配.html` | 人文错配 |
| 16 | `第8周-思维整合.html` | 思维整合 |

---

## 第五章：维护与更新宪法

**第1条（新增页面）**

凡新增 HTML 页面，须在创建之初即完成 i18n 改造（添加 data-i18n 属性、引入 i18n.js、插入切换器），并在 zh.json / en.json / th.json 中同步添加翻译条目。

**第2条（修改文案）**

凡修改页面中文文案，须同步：
1. 更新 HTML 中对应的 data-i18n 属性值（中文文本）
2. 更新 zh.json 中对应键的值
3. 如修改涉及意义变更，同步更新 en.json 和 th.json

**第3条（新增语种）**

凡新增语种（如日语），须：
- 创建 `lang/ja.json`，基于 zh.json 结构逐键翻译
- 在语言切换器中添加对应按钮
- 更新本宪法

**第4条（检验标准）**

每次改造后须验证：
- 中文模式：页面显示正常，无 data-i18n 属性泄漏为纯文本
- 英文/泰文模式：页面所有文本均已翻译，无遗漏的中文残留
- 语言切换器：三个按钮均可单击切换，激活状态正确高亮
- 移动端：切换器位置不遮挡 back-btn 按钮

---

## 附件清单

| 附件 | 文件名 | 用途 |
|------|-------|------|
| 附件1 | `术语表-三语对照.md` | 全站核心术语的三语对照清单 |
| 附件2 | `翻译键索引.md` | 全站翻译键的完整索引（按页面分组） |

---

*多语言国际化宪法 · v1.0 · 2026.05.31*
