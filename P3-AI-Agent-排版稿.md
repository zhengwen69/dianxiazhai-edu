# AI Agent协同体系在研究生教学中的角色重塑——从"教"到"伴学"的双向映射

## ——以《固体废弃物污染防治技术》课程为例

黄正文¹，谢泽宇²，王鸿斌¹

（1. 成都大学 建筑与土木工程学院 环境工程系，成都 610106；2. 西那瓦国际大学 Shinawatra University，泰国）

**摘要**：人工智能赋能教育正从单点工具（查资料、写摘要、做PPT）向协同化的Agent体系演进。然而，当前的AI教育工具多服务于"教"——辅助教师备课、出题、批改——而面向"学"的Agent设计尚未得到系统性的关注。本文以成都大学研究生课程《固体废弃物污染防治技术》的9-Agent协同教学体系为案例，系统阐述Agent从"教"到"伴学"的角色重塑方法论。该体系在教师端定义了9个Agent的协同工作流（资料→文档→PPT→作业→教研→案例→场景→品牌→审核），覆盖教学材料的全生命周期；在学生端将同一套9个Agent重新定义为"学伴"——学程监理、资料导航员、知识梳理员、课件伴读、作业辅导员、学情分析师、案例解读员、角色扮演教练、研创向导，形成从预习到论文的全程护航。文章分析了角色重塑的三条设计原则（镜像而非简化、服务对象翻转、角色自主重定义），展示了Agent-S（故事化案例拆解→案例解读员）和Agent-B（学术品牌建设→研创向导）两个典型的双向映射案例，并讨论了Agent协同体系向其他工程课程的迁移路径。

**关键词**：AI Agent；协同教学；角色重塑；学伴系统；研究生课程；智能教学助手

**中图分类号**：G434 &nbsp;&nbsp;&nbsp; **文献标志码**：A &nbsp;&nbsp;&nbsp; **文章编号**：待定

---

## AI Agent Collaborative System in the Role Reconfiguration of Graduate Teaching: From "Teaching" to "Learning Companion" Dual Mapping

## — A Case Study of "Solid Waste Pollution Prevention and Control Technology"

HUANG Zhengwen¹, XIE Zeyu², WANG Hongbin¹

(1. Department of Environmental Engineering, College of Architecture and Civil Engineering, Chengdu University, Chengdu 610106, China; 2. Shinawatra University, Thailand)

**Abstract**: Artificial intelligence empowerment in education is evolving from standalone tools (literature search, abstract generation, PPT creation) toward collaborative agent systems. However, current AI educational tools predominantly serve the "teaching" side—assisting instructors with lesson preparation, question design, and grading—while agent design oriented toward "learning" has received insufficient systematic attention. This paper takes the 9-agent collaborative teaching system developed for the graduate course "Solid Waste Pollution Prevention and Control Technology" at Chengdu University as a case study to systematically elaborate the methodology of agent role reconfiguration from "teaching" to "learning companion." On the teacher side, the system defines a collaborative workflow of nine agents (archiving→documentation→PPT→assignment→quality assurance→case analysis→scenario design→brand building→auditing), covering the full lifecycle of teaching material production. On the student side, the same nine agents are redefined as "learning companions"—study supervisor, resource navigator, knowledge organizer, lecture companion, assignment tutor, learning analyst, case interpreter, role-play coach, and research-creation guide—forming a full-chain support system from preview to thesis. The paper analyzes three design principles of role reconfiguration (mirroring rather than simplification, user-flipping, and autonomous redefinition of roles), presents two typical dual mapping cases—Agent-S (from story decomposition to case interpretation) and Agent-B (from academic brand building to research-creation guidance), and discusses the migration pathways of the agent collaborative system to other engineering courses.

**Key words**: AI agent; collaborative teaching; role reconfiguration; learning companion system; graduate courses; intelligent teaching assistant

---

## 0 引言

人工智能在教育领域的应用正在经历从"单点工具"到"协同体系"的范式跃迁。早期的AI教育工具——智能批改、自动组卷、知识图谱生成——以独立功能模块的形式嵌入教学流程中，每个工具解决一个特定的教学任务。这种"工具箱"模式虽然降低了使用门槛，但也造成了三个结构性缺陷。第一，碎片化。教师需要使用多个独立工具完成一门课程的全流程教学支撑，不同工具之间缺乏信息共享和流程衔接。第二，教中心化。当前AI教育工具的产品逻辑主要面向教师端需求——辅助备课、出题、批改——而面向学生端"如何学"的Agent设计尚未得到系统性关注。第三，角色单薄。每个AI工具被赋予单一的功能角色（如"出题""批改""推荐"），而教学实践中真正需要的是一组各司其职又相互协作的"角色"—就像一支教学团队不只有"讲课的人"，还有"设计课程的人""批改作业的人""跟踪学情的人""打磨案例的人"。

Agent（智能体）技术为突破这些局限提供了新的可能。与单点工具不同，Agent是具有特定角色、明确职责和自主决策能力的智能实体。多个Agent可以组成一个协同工作体系，按照预设的流程和责任分工完成复杂的教学任务。这一理念在教育领域的应用尚处于早期探索阶段，但已经在课程开发[1]、个性化学习[2]和智能辅导[3]等方向展示了初步潜力。

本文以成都大学环境工程系研究生课程《固体废弃物污染防治技术》中实际运行的9-Agent协同教学体系为案例，系统阐述Agent角色从"教"到"伴学"的双向映射设计——即同一套9个Agent，如何通过重新定义角色职能，在教师端作为教学材料的生产力工具，在学生端作为学习过程的全程伴学系统。

## 1 教师端：9-Agent协同教学体系

### 1.1 体系设计理念

9-Agent协同教学体系的核心理念是"教学材料的全生命周期管理"——从原始素材（纪实网络小说、教学大纲、课程数据）到最终教学产出（PPT、作业、试卷、教改报告）的完整转化链条，每个关键环节由一个专属Agent负责。Agent之间的协作不是线性的流水线，而是一个以Agent-0（教务长·质量总控）为中心节点的审核反馈网络。

### 1.2 Agent角色定义

Agent-1（资料归档与标准化）：负责教学素材的文件命名规范、目录结构维护、版本历史管理和资料缺失检测。该Agent定期巡检教学资料库，生成"资料缺失清单"，驱动其他Agent按需产出。

Agent-2（教学文档生成）：基于OBE框架生成标准化教学文档——教学大纲（含课程目标-毕业要求矩阵）、16周/8周教学日历、详细教案。该Agent自动校验课程目标-教学内容-考核方式三者之间的闭合性。

Agent-3（PPT与讲稿设计）：按章节生成详细讲稿（导入→讲授→小结→思考题）和PPT内容框架，支持输出HTML格式的课堂演示页面。

Agent-4（作业与课程设计）：设计分层作业（基础/应用/拓展）、A/B双卷试卷（含参考答案与Rubric评分标准）以及工程课程设计任务书（填埋场/焚烧厂/堆肥厂）。

Agent-5（教研教改与质量监控）：基于成绩数据和教学反馈计算课程目标达成度，撰写教学反思与持续改进报告，辅助教改项目申报。

Agent-S（故事化案例拆解）：从黄正文教授已公开发布的纪实网络小说（7部，S001-S021）中提取教学选段，转化为五段式教学叙事（背景→冲突→决策→结局→启示），每案附方法论语块与研究空白标注。

Agent-I（场景沉浸设计）：设计课堂沉浸式场景脚本（听证会/论证会/模拟法庭/尽调模拟/碳交易谈判），含角色卡片、突发事件卡、教师引导手册和转化出口环节。

Agent-B（学术品牌建设）：凝练"叙·框·境·创"教育理念体系，撰写教改论文框架、教学成果奖申报书和个人学术简介。

Agent-0（教务长·质量总控）：对Agent-1至Agent-B的全部产出进行OBE合规性、内容准确性、格式规范性审核（图1）。

![图1：教师端11-Agent协同教学体系工作流](截图素材-SCREENSHOTS/SC07-Agent工作流.png)，出具A/B/C/D四级评分报告，交叉校验大纲→讲稿→PPT→试卷的一致性。

## 2 学生端：从"教"到"伴学"的角色重塑

### 2.1 角色重塑的三条设计原则

将9个Agent从"面向教"重新定义为"面向学"，不是简单的功能缩减或界面调整，而是一次彻底的角色重新设计。这一重构遵循三条原则。

第一条原则是"镜像而非简化"（Mirroring, Not Simplifying）。教师端和学生端保持相同的Agent数量和编号，形成一一对应的"镜像关系"。如果一个Agent在教师端的角色是"出题"，它在学生端的对应Agent不是"看答案"——而是"解题辅导"（给出解题思路、解读评分标准、推荐分层练习）。镜像关系确保了教师教学产出的每一项材料，学生在学习端都有一个对应的消费入口。

第二条原则是"服务对象翻转"（User Flipping）。教师端Agent的服务对象是教师——它接收教师的指令（"为第3周生成一份作业""检查大纲和试卷的一致性"），产出供教师使用的材料。学生端Agent的服务对象是学生——它接收学生的请求（"我第3周的知识点还没掌握，帮我梳理""我的课程论文框架需要建议"），产出供学生使用的学习支持。同一编号的Agent，同一知识领域，但决策逻辑完全不同。

第三条原则是"角色自主重定义"（Autonomous Redefinition）。学生端的9个Agent不是教师端Agent的"学生模式"切换——每个Agent都是独立重新定义的。Agent-S在教师端是"案例拆解员"（从小说中提取教学选段），在学生端不是"案例展示员"，而是"案例解读员"（引导学生阅读选段、拆解叙事结构、提示思辨角度）——两个角色的知识基础相同（都基于S001-S021选段和五段叙事拆解法），但交互方式和产出方向完全不同（图3）。

![图3：教师端Agent-S故事化案例拆解卡片](截图素材-SCREENSHOTS/SC08-Agent-S卡片.png)

### 2.2 9-Agent双向映射表

| 编号 | 教师端角色 | 学生端角色 | 角色重塑的核心转变 |
|------|-----------|-----------|------------------|
| Agent-0 | 教务长·质量总控 | 学程监理 | 从"审核产出"到"追踪进度"——检查OBE合规性→诊断学习薄弱环节 |
| Agent-1 | 资料归档与标准化 | 资料导航员 | 从"管理文件"到"导航资源"——维护目录结构→为学生提供检索策略 |
| Agent-2 | 教学文档生成 | 知识梳理员 | 从"编写大纲"到"解读大纲"——生成教学目标→提炼学生可理解的知识要点 |
| Agent-3 | PPT与讲稿设计 | 课件伴读 | 从"制作课件"到"伴读解析"——设计PPT→同步解析PPT重点和讲稿逻辑 |
| Agent-4 | 作业与课程设计 | 作业辅导员 | 从"出题"到"辅导"——设计题目→引导解题思路、解读评分标准 |
| Agent-5 | 教研教改与质量监控 | 学情分析师 | 从"课程评估"到"学情诊断"——计算达成度→识别个人知识缺口 |
| Agent-S | 故事化案例拆解 | 案例解读员 | 从"提取选段"到"引导思辨"——拆解五段叙事→导读并提示讨论维度 |
| Agent-I | 场景沉浸设计 | 角色扮演教练 | 从"编写脚本"到"角色准备"——设计角色卡片→协助学生理解角色立场 |
| Agent-B | 学术品牌建设 | 研创向导 | 从"品牌输出"到"学术入门"——撰写教改论文→指导学生论文/设计/教改产出 |

### 2.3 学习流6步与Agent的对应关系

学生学习门户将研究生学习过程定义为6步流程（图2）：课前预习→课中学习→课后作业→自测评估→研创设计→写论致用。

![图2：学生端学习流6步](截图素材-SCREENSHOTS/SC09-学习流6步.png)9个学伴Agent在这6步中各司其职。

预习阶段，Agent-1（资料导航员）提供课程资源的索引和检索策略，Agent-2（知识梳理员）解读本周教学大纲中的知识重点。学习阶段，Agent-3（课件伴读）同步解析课堂PPT的逻辑结构，Agent-S（案例解读员）引导学生拆解当周纪实网络小说选段的五段叙事，Agent-I（角色扮演教练）协助学生准备场景角色。作业阶段，Agent-4（作业辅导员）引导解题思路，Agent-5（学情分析师）诊断知识薄弱点并推荐补习方向。自测阶段，Agent-0（学程监理）汇总学习进度和知识掌握度评估。产出阶段（研创设计→写论致用），Agent-B（研创向导）贯通"创设写成"四义——科研思维创新（创）、课程设计方案（设）、学术论文写作（写）、成果转化应用（成）——全程导引学生的三轨结课产出。

### 2.4 双向映射的两个典型案例

Agent-S的映射是最完整的。在教师端，Agent-S的职责是从纪实网络小说中提取教学选段、拆解为五段叙事结构、配置分层讨论题、标注方法论语块和研究空白。在学生端，Agent-S被重新定义为"案例解读员"——当学生学习每周的"案例深潜"卡片时，Agent-S以"先行组织者"的方式呈现选段的核心矛盾，提出引导性的思辨问题（如"《龙栖湾》听证会上专家的沉默说明了什么？"），而不是直接给出"标准解读"。学生面对的是被引导的探索，而非被告知的结论。

Agent-B的映射是最创新的。在教师端，Agent-B的职责是凝练和输出黄正文教授的教育理念体系——撰写教改论文、申报教学成果奖、维护学术品牌话语。这是一个"外向输出"的角色。在学生端，Agent-B被彻底重新定义为"研创向导"（图4）——贯通"创设写成"四义

![图4：学生端Agent-B研创向导卡片](截图素材-SCREENSHOTS/SC10-Agent-B研创向导.png)。创（科研思维与创新方法）：引导学生理解"叙·框·境·创"的教育理念如何内化为自己的研究思维。设（课程设计方案框架）：为选择轨道B（课程设计）的学生提供工程问题建模与方案设计的框架指导。写（学术论文写作指导）：为选择轨道A（课程论文）和轨道C（教改论文）的学生提供文献综述方法、论文结构论证和写作规范。成（成果转化与应用路径）：帮助学生将课程产出对接至真实的研究和实践场景。Agent-B的双向映射是9个Agent中角色跨度最大的，但恰恰证明了"镜像而非简化"原则的可行性——同一个编号，同一套知识体系，可以通过角色重新设计服务于完全不同的使用者。

## 3 讨论

### 3.1 Agent协同体系与单点AI工具的比较

Agent协同体系相较于单点AI工具的核心差异不在于"功能更多"，而在于三个结构性的改进。第一，流程覆盖的完整性。单点工具覆盖的是"点"（如智能批改只覆盖作业环节），Agent体系覆盖的是"链"——从原始素材到最终教学/学习产出的全流程。第二，角色化设计带来的认知清晰度。当学生面对一个"通用型AI助手"时，他们需要自己判断这个助手在什么任务上擅长、应该如何与它交互；而当学生面对9个有明确命名和角色描述的Agent时，每个Agent的能力边界是清晰的——"我需要理解这个案例的背景和冲突，我应该找Agent-S（案例解读员），而非Agent-4（作业辅导员）。"第三，协同效应。9个Agent各自独立但共享同一套课程框架（叙·框·境·创四维教学法、错配-修复框架、8周教学设计），这种"独立运行、底层统一"的架构既不同于单点工具的"各自孤立"，也不同于大型语言模型的"一切都在一个模型里"的集中式设计。

### 3.2 迁移路径

Agent协同体系向其他工程课程迁移的前提条件是：课程有足够清晰和可操作的教学框架——框架越明确，Agent的角色定义就越精确。以固废课程为例，"错配-修复框架"的六个子框架为9个Agent提供了共同的认知基础——Agent-2在编写教学大纲时是一个"错配框架操作者"，Agent-3在设计PPT时是一个"错配框架的可视化呈现者"。框架本身充当了Agent之间的"共通语言"。对于其他工程课程而言，迁移的第一步不是编写Agent代码，而是梳理该课程的核心分析框架——有了框架，9个Agent的角色才能被重新参数化以适应新课程的知识领域。

### 3.3 局限性

本研究存在以下局限。第一，9-Agent协同体系目前处于设计阶段的概念验证和教学文档生产阶段，Agent的智能化程度（自动化水平、自然语言交互能力、主动性建议生成能力）受限于当前大语言模型的能力边界，尚未达到完全自主运行的成熟度。第二，学生端Agent的实际使用效果——学生是否真的会主动调用Agent、调用频率、调用后的学习效果改善——尚缺乏系统的用户行为数据。第三，9个Agent的"最优数量"是否恰好是9——更多或更少的Agent是否会产生不同的协同效果——尚未经过比较实验。第四，Agent体系的教学投入产出比——前期设计9个Agent的角色定义、提示词模板和协同流程所需的时间和专业成本，是否可以被教学效率的提升所抵消——尚未量化分析。

## 4 结论

本文基于《固体废弃物污染防治技术》研究生课程中实际运行的9-Agent协同教学体系，提出了Agent从"教"到"伴学"的角色重塑方法论。该方法的三个核心贡献在于：定义了Agent角色重塑的三条设计原则（镜像而非简化、服务对象翻转、角色自主重定义）；建立了9-Agent的教师↔学生双向映射表——在不改变Agent编号和知识领域的前提下，通过重新定义角色职能实现了同一Agent体系的"教"和"学"双用途；以Agent-S和Agent-B为典型案例展示了从"产出教学材料"到"引导学习过程"的角色转化深度。

对于AI赋能教育研究领域，本研究的启示是：未来的AI教育工具设计不应停留在"为教师减负"的工具思维层面，而应走向"为学生赋权"的Agent设计范式——学生需要的不是另一个"百科全书式的通用AI"，而是一组有明确分工、有专属能力、有协作机制的学伴Agent。这组Agent的"智能化"程度不一定需要达到全自动水平——即使在当前技术水平下，仅凭清晰的Agent角色定义和有针对性的交互设计，也可以为学生提供比通用型AI更有价值的学习支持。9-Agent协同体系的进一步智能化迭代、在不同工程课程中的迁移测试和学生端使用数据的实证分析，是后续研究的关键方向。

---

## 参考文献

[1] 黄正文. 固体废弃物污染防治技术研究生自编讲义（2025年版）[Z]. 成都大学, 2025.

[2] 黄正文. 固体废弃物污染防治技术研究生精品课程演示门户[EB/OL]. https://zhengwen69.github.io/cdu-gufei-web-demo/, 2026.

[3] 黄正文. 普惠教育咨询·读书改变命运秘笈系列纪实网络小说（七部，S001-S021教学选段）[M/OL]. QQ阅读/17K文学.

[4] WOOLF B P. Building Intelligent Interactive Tutors: Student-Centered Strategies for Revolutionizing E-Learning[M]. Burlington: Morgan Kaufmann, 2009.

[5] RUSSELL S, NORVIG P. Artificial Intelligence: A Modern Approach[M]. 4th ed. London: Pearson, 2021.

[6] 教育部. 教育信息化2.0行动计划[Z]. 2018.

[7] LUCKIN R, HOLMES W, GRIFFITHS M, et al. Intelligence Unleashed: An Argument for AI in Education[M]. London: Pearson, 2016.

---

**收稿日期**：2026-05-25 &nbsp;&nbsp;&nbsp; **修回日期**：待定

**基金项目**：成都大学精品课程建设项目

**作者简介**：黄正文（19XX—），男，教授，硕士生导师，研究方向：资源与环境普惠教育.E-mail:xxxx@cdu.edu.cn。

**利益冲突声明**：无。

---

*叙·框·境·创 四维教学法 · 故事云驱动 · 点暇叙事 匠心教学 · 黄正文（点暇斋）· 全部作品版权登记*
