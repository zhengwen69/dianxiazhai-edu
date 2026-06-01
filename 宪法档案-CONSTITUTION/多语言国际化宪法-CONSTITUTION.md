# 多语言国际化宪法 · CONSTITUTION

> 适用范围：《固体废弃物污染防治技术》研究生精品课程演示门户（`https://zhengwen69.github.io/dianxiazhai-edu/`）之国际化改造
> 语种：中文·简（zh）· 中文·繁（zh-Hant）· 英文（en）· 泰文（th）· 法文（fr）· 德文（de）· 日文（ja）· 韩文（ko）
> 版本 v3.1 · 2026.05.31
> 最高准则：凡国际化实现、翻译、维护之行为，均须符合本宪法之规定。

---

## 序言：总纲与宗旨

本宪法为演示门户八语国际化改造工程的最高准则。

**背景**：课题组成员在泰国攻读教育学博士学位，将在东南亚及国际期刊投稿论文中引用门户截图，门户须支持八语切换以满足国际学术论文的截图需求。法/德语系为国际学院国际合作需求增设，日/韩/中文繁体为潜在需求追加。

**目标**：
- 全站 16 个 HTML 页面均支持八语实时切换
- 语言切换器为下拉菜单，由 `i18n.js` 动态注入，截图包含语言标识
- 纯客户端方案，不依赖后端，兼容 GitHub Pages 静态托管
- 翻译由 AI Agent 团队完成机器自动翻译，不依赖人工翻译
- 后续新增语种仅需添加 JSON 翻译文件 + 更新 `i18n.js` 中 `LANGS` 数组

---

## 第一章：技术架构宪法

**第1条（架构原则）**

采用客户端 JavaScript i18n 方案：
- 翻译数据存储在 `lang/` 目录下的 8 个 JSON 文件（zh.json / zh-Hant.json / en.json / th.json / fr.json / de.json / ja.json / ko.json）
- 翻译引擎 `js/i18n.js` 负责语言检测、翻译加载、文本替换、切换器动态注入
- HTML 元素通过 `data-i18n` 属性标记待翻译文本
- 语言切换器为下拉菜单，由 i18n.js 通过 `injectSwitcher()` 方法动态创建 DOM 及注入 CSS，HTML 中不硬编码任何切换器代码
- 支持语种配置在 `i18n.js` 的 `LANGS` 数组中统一管理

**第2条（语言检测优先级）**

```
URL 参数 ?lang=  >  localStorage('cdu-gufei-lang')  >  默认中文(zh)
```

- 默认语言为中文（简体），HTML 源文本即为中文简体，中文简体模式下零开销渲染
- 切换至其他语种时，JS 从 JSON 加载翻译并替换 DOM 文本
- 中文繁体（zh-Hant）由 zh.json 通过简繁转换生成，htmlLang 设为 zh-Hant
- 语言偏好写入 localStorage，下次访问自动恢复

**第3条（翻译引擎核心功能）**

`js/i18n.js` 须实现：
- `data-i18n`：替换元素 textContent
- `data-i18n-html`：替换元素 innerHTML（用于含内联标签的文本）
- `data-i18n-placeholder`：替换 input/textarea placeholder
- `data-i18n-title`：替换元素 title 属性
- `document.title` 通过 documentElement 的 `data-i18n-title` 属性翻译
- `switchLang(lang)` 切换语言并重载页面（带 URL 参数）
- 防闪烁：非中文简体时先设置 visibility:hidden，翻译完成后再显示

**第4条（语言切换器规范）**

- 由 `i18n.js` 的 `injectSwitcher()` 方法动态创建，HTML 文件中不包含切换器代码
- 外观：下拉菜单，触发器显示当前语言国旗 + 名称 + ▼箭头
- 位置：固定定位于 `top: 20px; right: 20px; z-index: 9999`
- 交互：点击触发器展开/收起菜单；点击菜单外区域或按 Escape 键关闭
- 选项：每个支持语言一个选项，显示国旗 + 语言名称 + ✓选中标记
- 当前激活语言在触发器和菜单中均高亮
- 样式与站点整体风格一致（深色半透明背景，#5b9bd5 主色调）
- 移动端适配：边框/间距缩小

**第5条（目录结构）**

```
演示展示/
├── index.html              ← 首页（无切换器硬编码，由 i18n.js 动态注入）
├── ... (其余 15 个 HTML)   ← 同上
├── js/
│   └── i18n.js             ← 翻译引擎（含 LANGS 配置 + 动态切换器注入）
├── lang/
│   ├── zh.json             ← 中文·简（基准源）
│   ├── zh-Hant.json         ← 中文·繁（简繁转换）
│   ├── en.json             ← 英文翻译
│   ├── th.json             ← 泰文翻译
│   ├── fr.json             ← 法文翻译
│   ├── de.json             ← 德文翻译
│   ├── ja.json             ← 日文翻译
│   └── ko.json             ← 韩文翻译
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

- zh.json（中文·简）为本宪法认可的**唯一真实源文本**，zh-Hant.json 为其简繁转换衍生文本
- HTML 中的中文原文仅作为后备显示，逻辑上应以 zh.json 为准
- 凡修改中文文案，须同步更新 zh.json 及对应 HTML 的 data-i18n 属性
- zh.json 的每个键必须为原始中文文本，不可变形

---

## 第三章：翻译质量宪法

**第1条（翻译来源）**

本工程翻译由 AI Agent 团队完成机器自动翻译，不依赖人工翻译。翻译结果可接受机器翻译的流畅性水平，不追求出版级翻译质量。

**第2条（专业术语一致性）**

以下核心术语须在八语间保持翻译一致：

| 中文（简） | 中文（繁） | 英文 | 泰文 | 法文 | 德文 | 日文 | 韩文 |
|----------|----------|------|------|------|------|------|------|
| 固体废弃物污染防治技术 | 固體廢棄物污染防治技術 | Solid Waste Pollution Prevention and Control Technology | เทคโนโลยีการป้องกันและควบคุมมลพิษจากขยะมูลฝอย | Technologie de prévention et de contrôle de la pollution des déchets solides | Technologie zur Vermeidung und Kontrolle der Verschmutzung durch feste Abfälle | 固形廃棄物汚染防止・管理技術 | 고형폐기물 오염방지 및 관리기술 |
| 空间错配 | 空間錯配 | Spatial Mismatch | ความไม่สอดคล้องเชิงพื้นที่ | Mésappariement spatial | Räumliches Mismatch | 空間的ミスマッチ | 공간적 미스매치 |
| 技术错配 | 技術錯配 | Technical Mismatch | ความไม่สอดคล้องเชิงเทคนิค | Mésappariement technique | Technisches Mismatch | 技術的ミスマッチ | 기술적 미스매치 |
| 行为错配 | 行為錯配 | Behavioral Mismatch | ความไม่สอดคล้องเชิงพฤติกรรม | Mésappariement comportemental | Verhaltensbezogenes Mismatch | 行動的ミスマッチ | 행동적 미스매치 |
| 人文错配 | 人文錯配 | Humanistic Mismatch | ความไม่สอดคล้องเชิงมนุษยธรรม | Mésappariement humaniste | Humanistisches Mismatch | 人文的ミスマッチ | 인문적 미스매치 |
| 叙·框·境·创 | 敘·框·境·創 | Narrate · Framework · Scene · Create | เล่าเรื่อง · กรอบความคิด · สถานการณ์ · สร้างสรรค์ | Narration · Cadre · Scène · Création | Erzählen · Rahmen · Szene · Schaffen | 叙事・枠組・場面・創造 | 서사 · 프레임 · 장면 · 창조 |
| 四维教学法 | 四維教學法 | Four-Dimensional Pedagogy | วิธีสอนสี่มิติ | Pédagogie quadridimensionnelle | Vierdimensionale Pädagogik | 四次元教授法 | 4차원 교수법 |
| 好好学习 天天向上 | 好好學習 天天向上 | Study Hard, Make Progress Every Day | ตั้งใจเรียน ก้าวหน้าทุกวัน | Bien étudier, progresser chaque jour | Fleißig lernen, täglich Fortschritte machen | よく学び、日々向上せよ | 열심히 배우고 날마다 발전하자 |
| 绿水青山 = 金山银山 | 綠水青山 = 金山銀山 | Lucid Waters & Lush Mountains = Invaluable Assets | น้ำใสภูเขาเขียว = ขุนเขาทองคำ | Eaux limpides et montagnes luxuriantes = Montagnes d'or et d'argent | Klares Wasser und grüne Berge = Goldene Berge und silberne Flüsse | 清き水と緑の山 = 金の山銀の山 | 맑은 물과 푸른 산 = 금산은산 |
| 点暇斋 | 點暇齋 | Dianxia Studio | เตี่ยนเสียจ้าย | Studio Dianxia | Dianxia Studio | 點暇斎 | 점하재 |
| 黄正文 | 黃正文 | Huang Zhengwen | หวง เจิ้งเหวิน | Huang Zhengwen | Huang Zhengwen | 黄正文 | 황정문 |
| 成都大学 | 成都大學 | Chengdu University | มหาวิทยาลัยเฉิงตู | Université de Chengdu | Universität Chengdu | 成都大学 | 청두대학 |
| 雍葭 | 雍葭 | Yong Jia | ยงเจีย | Yong Jia | Yong Jia | 雍葭 | 옹가 |
| OBE | OBE | OBE | OBE | OBE | OBE | OBE | OBE |
| Agent | Agent | Agent | Agent | Agent | Agent | Agent | Agent |

**第3条（版权内容处理）**

- 小说书名保留原文+英文意译（如《龙栖湾》→ "Longqi Bay (Dragon Dwelling Bay)"）
- 小说节选内容的非中文翻译标注机器翻译标记（`[Machine translation]` / `[Traduction automatique]` / `[Maschinelle Übersetzung]` 等）
- 版权登记标记"© 已登记"翻译为"© Registered" / "© จดทะเบียนแล้ว" / "© Enregistré" / "© Registriert"

**第4条（术语不可变形原则）**

第2条术语表中列出的术语，在全部翻译文本中必须使用完全一致的形式，禁止出现同义词替换或变形。

---

## 第四章：页面改造宪法

**第1条（HTML 改造规范）**

每个 HTML 页面须进行以下改造：
1. `<html lang="zh-CN">` 保持不变（i18n.js 运行时动态更新）
2. `<head>` 中引入 `<script src="js/i18n.js"></script>`（位于 `</head>` 前）
3. **不得**在 HTML 中硬编码语言切换器 HTML 或 CSS（由 i18n.js 动态注入）
4. 所有包含中文文本的叶子元素添加 `data-i18n="键名"` 属性
5. 含中文的 title/placeholder 属性改用 `data-i18n-title` / `data-i18n-placeholder`

**第2条（切换器注入机制）**

语言切换器由 `i18n.js` 的 `injectSwitcher()` 方法在页面初始化时动态创建，包括：
- 注入 `<style>` 元素（id="i18n-styles"）包含下拉菜单全部 CSS
- 创建 `lang-drop` 容器（触发器 + 下拉选项列表），插入 `<body>` 首元素位置
- 绑定触发器点击、菜单选项点击、外部点击关闭、Escape 键关闭事件

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

**第1条（八语同步铁律）★核心**

凡浏览页新增或修改中文（简体）文案，须同步更新全部 8 个语种的翻译文件：
- 修改 `zh.json`（中文·简基准）
- 同步更新 `zh-Hant.json`（简繁转换）
- 同步更新 `en.json` / `th.json` / `fr.json` / `de.json` / `ja.json` / `ko.json`
- 同步更新 HTML 中的 `data-i18n` 属性

不得出现中文简体已更新而其他语种遗漏的情况。此为不可逾越之铁律。

**第2条（新增页面）**

凡新增 HTML 页面，须在创建之初即：
1. 添加 `data-i18n` 属性标注全部中文文本
2. 引入 `<script src="js/i18n.js"></script>`
3. 在 `zh.json` 中新增对应翻译键
4. 在其余 7 个语种 JSON 中同步新增翻译条目

**第3条（修改文案）**

凡修改页面中文文案，须同步：
1. 更新 HTML 中对应的 `data-i18n` 属性值
2. 更新 `zh.json` 中对应键的值
3. 更新其余 7 个语种 JSON 中对应键的值（如意义变更）

**第4条（新增语种）**

凡新增语种，须：
- 创建 `lang/xx.json`，基于 `zh.json` 结构逐键翻译
- 在 `i18n.js` 的 `LANGS` 数组中添加配置项
- 更新本宪法

**第5条（检验标准）**

每次改造后须验证：
- 中文模式：页面显示正常，无 `data-i18n` 属性泄漏为纯文本
- 8 语种模式：各页面所有文本均已翻译，无中文残留
- 切换器：下拉菜单正常展开，8 个选项均可切换，当前语言正确高亮
- 移动端：切换器位置不遮挡 back-btn

---

## 附件清单

| 附件 | 文件名 | 用途 |
|------|-------|------|
| 附件1 | `术语表-八语对照.md` | 全站核心术语的八语对照清单 |
| 附件2 | `翻译键索引.md` | 全站翻译键的完整索引（按页面分组） |

---

*多语言国际化宪法 · v3.1 · 2026.05.31*
