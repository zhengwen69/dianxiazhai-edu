# P2-EN 撰写大纲 · v2.0（修订版）

> 论文：*Zero-Configuration Dual-Portal Architecture for Higher Education: Design, Multilingual Deployment, and Cross-Cultural Application*  
> 目标期刊：*Kasetsart Journal of Social Sciences*（KJSS）· Scopus · TCI-G1  
> 结构：IMRaD（第1节 Introduction · 第2节 Lit Review & Theoretical Framework · 第3节 Methodology · 第4节 Results · 第5节 Discussion · 第6节 Conclusion）  
> 版本 v2.0 · 2026.05.31

---

## 第一节：Introduction（~700词 · 2页）

**1.1 钩子（Hook）**
- 全球高等教育面临"数字基础设施赤字"——发展中国家高校尤甚：无经费部署商业 LMS（Blackboard/Moodle）、无 IT 运维团队、无多语言本地化支持
- 中国"双一流"建设推动课程数字化，但大多数课程网站仍是"教师单视角橱窗"——展示"教了什么"而非支撑"怎么学"

**1.2 问题陈述（Problem Statement）**
- 现有课程网站的 3 个局限性：
  - ① 单视角（教师中心，学生被动浏览）
  - ② 高门槛（需服务器/数据库/管理员账号体系）
  - ③ 单语言（不回应国际学生/多语种学术交流需求）

**1.3 研究空白（Research Gap）**
- 零配置、纯静态、双视角协同的多语言教学门户在文献中未见系统的设计研究 + 实证评估报告

**1.4 研究目的与问题**
- RQ1: 双重门户架构的核心设计原则是什么？
- RQ2: 研究生用户对门户的可用性感知如何（SUS + TAM）？
- RQ3: 8 语种国际化在跨文化教学场景中的适用性与局限是什么？

**1.5 结构预告**
- Lit Review → Methodology → Results → Discussion → Conclusion

---

## 第二节：Literature Review & Theoretical Framework（~900词 · 2.5页）

**2.1 Digital Portals in Higher Education**
- 从课程网站到教学门户的演进
- LMS 的"重"与静态门户的"轻"——Graham (2018)、Edström & Kolmos (2014)
- GitHub Pages 在教育中的应用案例

**2.2 Student-Centered Learning Environments**
- 从"教"到"学"的信息架构转向——Laurillard (2012)、Biggs & Tang (2011)
- 自主学习支撑工具的设计原则
- 进度可视化在学习动机中的作用

**2.3 Multilingual Educational Technology**
- 多语言界面在发展中国家教育中的价值
- 机器翻译 vs 人工本地化的权衡
- ASEAN 多语教育语境下的技术需求
- 引用 KJSS 已发表的跨文化/多语言教育论文 ≥2 篇

**2.4 Theoretical Framework**
- Technology Acceptance Model（TAM, Davis 1989）：PU + PEOU → 使用意愿
- System Usability Scale（SUS, Brooke 1996）：可用性标准化测量
- Design-Based Research（McKenney & Reeves 2012）：三阶段迭代
- 三个框架的整合逻辑图

---

## 第三节：Methodology（~800词 · 2页）★新增

**3.1 Research Design**
- Design-Based Research（DBR）范式
- 三轮教学周期迭代（2023–2025）
- 本文报告第三轮（2025）的设计收敛结果与可用性评估

**3.2 The Dual-Portal System**
- **三条设计原则（压缩版，~500词）：**
  - 原则一：Dual-Perspective Mapping（双视角映射）——教师门户 7 入口，学生门户 5 功能模块，共享课程体系但信息架构各自独立重建
  - 原则二：Zero-Configuration Deployment（零配置部署）——纯静态 HTML+CSS+JS，GitHub Pages 推送即用，无后端无数据库无登录
  - 原则三：Cognitive Navigation（认知导航）——三折叠导览（概览→导航→自测）+ 五维框架直达 + localStorage 进度追踪
- **双门户协同架构**（Table 1：教师 vs 学生入口对照）
- **8 语种翻译引擎**：7 个 JSON 语言包 + 客户端 JS 动态加载 + 下拉菜单切换器（中文简/繁 + 英/泰/法/德/日/韩）

**3.3 Participants**
- 成都大学固废课程 2023–2025 三轮研究生
- 可用性评估样本：N = [PENDING]（目标 ≥15）
- 人口学信息：研究生年级、语言偏好

**3.4 Instruments**
- 问卷：SUS（10 题）+ TAM-PU（3 题）+ TAM-PEOU（3 题）+ 多语满意度（3 题）+ 开放题（1 题）＝ 20 题
- Cronbach's α 计算计划
- 专家走查：2 位同行教师质性反馈

**3.5 Data Collection & Analysis**
- 分发：问卷星（中文）+ Google Forms（英文）
- 回收周期：3–5 天
- 分析：描述统计（均值 ± 标准差），SUS 标准化计分（0–100）

**3.6 Ethical Considerations**
- 匿名填写，知情同意（完成即视为同意）
- 非人体实验，属常规课程教学反馈范畴

---

## 第四节：Results（~1000词 · 2.5页）

**4.1 System Features（设计结果）**
- Figure 1：双重门户协同架构图（新制）
- Figure 2：首页全景（8 语切换器可见）— SC01
- Figure 3：学习园地全景（折叠导览+五维框架+八周计划）— SC04
- Figure 4：进度追踪系统（进度条+勾选框）— SC06
- Table 1：教师门户 vs 学生门户入口与功能对照（新制）
- Table 2：8 语种翻译覆盖率统计（新制）

**4.2 SUS Scores（可用性评估结果）**
- Table 3：SUS 得分（均值 ± 标准差，按子群体拆分）
- [PENDING: 实际数据替换]
- 预期区间：70–78（above average）

**4.3 TAM Dimensions**
- PU 均值 ± SD：[PENDING]
- PEOU 均值 ± SD：[PENDING]

**4.4 Multilingual Satisfaction**
- 多语维度 3 题均值 ± SD：[PENDING]
- 按语言偏好分群描述 [PENDING]

**4.5 Open-ended Feedback**
- 质性归纳：高频主题（如"进度追踪""多语切换""移动端适配"）
- 代表性引用 2–3 条

---

## 第五节：Discussion（~900词 · 2.5页）

**5.1 Design Principles Validation（回应 RQ1）**
- 三条原则在第三轮迭代中的收敛证据
- 从设计实践中提炼的修正

**5.2 Usability and Learning Support（回应 RQ2）**
- SUS 得分在 "above average" 区间的含义
- TAM 维度对自主学习支撑的启示
- 专家走查质性反馈

**5.3 Multilingual Deployment（回应 RQ3）**
- 8 语种机器的翻译质量评估
- 简繁分离的价值（台湾/香港学术圈）
- 局限性：机器翻译的语义精度、文化适配

**5.4 Transferability to ASEAN and Developing Contexts** ★KJSS 重点
- 零配置范式对资源受限高校的可迁移性
- 不需要 LMS 许可证、不需要 IT 运维团队的"极简部署"模型
- 对东南亚多语种教育环境的适用性讨论

**5.5 Limitations**
- 单课程单案例，外部效度有限
- 样本量较小 [N=具体值]
- 无对照组（vs 传统课程网站）
- 稳健性声明：DBR 探索性研究，非因果推断

---

## 第六节：Conclusion（~500词 · 1页）

- RQ1–RQ3 的主要发现总结
- 核心贡献：三条设计原则 + 零配置架构 + 8 语部署方案
- 实践意义：为资源受限高校提供可复制的数字门户设计模板
- 研究局限：单案例、小样本、无对照
- 未来方向：跨课程迁移、学习效果实证、更大样本可用性评估

---

## 图表规划

| 编号 | 类型 | 内容 | 来源 | 所在节 |
|:--:|------|------|------|:--:|
| Figure 1 | 架构图 | 双重门户协同架构示意 | 新制 | 3.2 / 4.1 |
| Figure 2 | 截图 | 首页全景（含 8 语切换器） | SC01 | 4.1 |
| Figure 3 | 截图 | 学习园地全景 | SC04 | 4.1 |
| Figure 4 | 截图 | 进度追踪系统 | SC06 | 4.1 |
| Table 1 | 对照表 | 教师门户 vs 学生门户入口对照 | 新制 | 4.1 |
| Table 2 | 统计表 | 8 语种翻译覆盖率 | 新制 | 4.1 |
| Table 3 | 数据表 | SUS + TAM 得分 | [PENDING] | 4.2–4.4 |

---

## 篇幅预算

| 节 | 词数 | 页数 |
|----|:--:|:--:|
| 1. Introduction | 700 | 2 |
| 2. Literature Review | 900 | 2.5 |
| 3. Methodology | 800 | 2 |
| 4. Results | 1,000 | 2.5 |
| 5. Discussion | 900 | 2.5 |
| 6. Conclusion | 500 | 1 |
| References | — | 2 |
| 图表嵌入 | — | 2 |
| **合计** | **4,800** | **16.5** |

*安全余量：1.5 页，不超过 18 页上限。*

---

*大纲 v2.0 · 2026.05.31*
