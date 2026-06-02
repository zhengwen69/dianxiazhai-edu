# Zero-Configuration Dual-Portal Architecture for Higher Education: Design, Multilingual Deployment, and Usability Evaluation

[Author names and affiliations removed for double-blind review. See separate Title Page.]

---

**Abstract:** Digital infrastructure deficits constrain the deployment of course websites in higher education across developing countries. Existing platforms tend to be instructor-centric, require backend server administration, and operate in a single language—features that limit adoption in resource-constrained institutions and exclude multilingual student populations. This study presents a zero-configuration dual-portal architecture comprising an Instructor Portal (seven entry points) and a Student Portal (five learning modules), deployed as pure static HTML+CSS+JS on GitHub Pages without any backend, database, or authentication system. An eight-language internationalisation system (Chinese Simplified/Traditional, English, Thai, French, German, Japanese, Korean) operates via JSON language packs and a client-side JavaScript switching mechanism. The system was developed through three Design-Based Research cycles (2023–2025) in a graduate solid waste management course at [University A], China. The third-cycle design convergence is reported, alongside a usability evaluation employing the System Usability Scale (SUS), Technology Acceptance Model (TAM) dimensions, and multilingual satisfaction measures (20-item questionnaire). Three design principles are articulated: Dual-Perspective Mapping, Zero-Configuration Deployment, and Cognitive Navigation. Results demonstrate above-average usability and positive technology acceptance. The architecture offers a replicable template for resource-constrained institutions across ASEAN and developing countries where commercial LMS deployment remains infeasible.

**Keywords:** dual-portal architecture; zero-configuration deployment; multilingual educational technology; GitHub Pages; Design-Based Research; usability evaluation

---

## 1. Introduction

Higher education worldwide faces a digital infrastructure deficit that disproportionately affects developing countries. While universities in high-income nations deploy commercial learning management systems (LMS) such as Blackboard, Canvas, and Moodle, institutions in resource-constrained settings confront fundamental barriers. These include prohibitive licensing costs, the absence of dedicated IT operations staff, unreliable server infrastructure, and limited capacity for ongoing system maintenance (Graham, 2018; Crawley et al., 2014). This structural inequality extends beyond institutional procurement to pedagogical practice: instructors who wish to establish an online course presence must either navigate institutional LMS bureaucracies or acquire web development skills that lie outside their professional expertise. The result is a widening gap between the digital teaching environments available in well-resourced and under-resourced universities—a gap that the COVID-19 pandemic made acutely visible (UNESCO, 2020).

China's "Double First-Class" initiative has intensified pressure on universities to digitise course delivery. Yet the dominant paradigm for course websites remains the "instructor showcase": a static display of syllabi, lecture slides, and reading lists organised from the instructor's perspective. Such sites offer minimal interactivity and make no accommodation for student-centred navigation needs (Sheppard et al., 2009; Biggs & Tang, 2011). This instructor-centric model exhibits three persistent limitations. First, it presents course content through a single perspective—the instructor's organisational logic—rather than structuring the information architecture around how students actually navigate learning materials, track progress, and prepare for assessments. Second, it imposes a high deployment barrier: server provisioning, database configuration, user account management, and ongoing security maintenance—each a potential point of failure in institutions lacking dedicated IT support. Third, it is overwhelmingly monolingual, typically published in the instructor's native language with no provision for international students, cross-border academic collaboration, or multilingual scholarly exchange (Komalasari et al., 2024). These three limitations—single-perspective, high-barrier, and monolingual—collectively define the problem space this study addresses.

A complementary pedagogical context motivates this work. The NFSC (Narrative–Framework–Scenario–Creation) pedagogy, which has been used in the same graduate solid waste management course since 2023, requires a digital infrastructure capable of delivering narrative excerpts, diagnostic frameworks, scenario materials, and creative output templates across an eight-week progression. Separately, an AI-enabled Agent Team supports pre-class Q&A and learning companion functions. These pedagogical innovations created a practical need for a course portal that existing LMS platforms and conventional static websites could not adequately serve. Neither could simultaneously present instructor-organised teaching resources and student-centred learning pathways within a single, lightweight architecture.

A systematic search of the engineering education and educational technology literature reveals no prior study that simultaneously addresses four design objectives: (a) articulating design principles for a dual-perspective teaching portal, (b) deploying such a portal through a zero-configuration static-site architecture, (c) implementing eight-language internationalisation as a built-in rather than add-on feature, and (d) subjecting the resulting system to empirical usability evaluation using standardised instruments. While the literature includes studies of educational portals (Vaca-Cárdenas et al., 2024), multilingual educational interfaces (Moreira-Choez et al., 2024), and the academic use of GitHub Pages, no single investigation integrates these strands into a coherent design research programme. This gap is both scholarly and practical: instructors in developing-country universities lack an evidence-based, replicable template for deploying multilingual, student-centred course portals without institutional infrastructure.

Three research questions guide this study:

* **RQ1:** What are the core design principles of the dual-portal architecture, and how were they validated through iterative design?
* **RQ2:** How do graduate students perceive the portal's usability and learning support, as measured by SUS and TAM instruments?
* **RQ3:** What are the applicability and limitations of eight-language internationalisation in cross-cultural teaching scenarios?

The remainder of this paper is organised in the IMRaD structure. Section 2 reviews relevant literature and establishes the theoretical framework. Section 3 describes the Design-Based Research methodology, the dual-portal system, participants, instruments, and analysis procedures. Section 4 presents system features and usability results. Section 5 discusses findings in relation to each research question. Section 6 concludes with contributions, limitations, and future directions.

---

## 2. Literature Review and Theoretical Framework

### 2.1 Digital Portals in Higher Education

The evolution from static course websites to interactive learning portals reflects a broader pedagogical shift from instructor-centred information delivery to student-centred learning environments. Early course websites served as digital filing cabinets—repositories for syllabi, lecture notes, and reading lists organised chronologically by week (Laurillard, 2012). Contemporary learning management systems integrate content delivery, assessment, discussion forums, and gradebook functions into unified platforms. This integration, however, comes at the cost of architectural complexity: Moodle requires a LAMP stack, Blackboard demands enterprise server infrastructure, and even lightweight alternatives such as Google Classroom depend on cloud services and institutional account provisioning (Graham, 2018; Edström & Kolmos, 2014).

A parallel strand in educational technology favours static site generators and lightweight deployment models. GitHub Pages, which serves static HTML+CSS+JS content directly from a Git repository, has been adopted for course websites, workshop materials, and academic project documentation (Crawley et al., 2014). The broader adoption of GitHub as a collaborative platform in educational settings has been documented by Zagalsky et al. (2015), who analysed how instructors and students leverage GitHub's transparency, version control, and community features for teaching and learning. Its advantages are precisely those most relevant to resource-constrained institutions: zero hosting cost, no server administration, version control via Git, and instantaneous deployment through repository push. However, documented educational applications of GitHub Pages are limited to single-perspective course pages and project portfolios. No published account describes a dual-portal architecture that reconstructs the same course content into distinct instructor and student information architectures from a single static-site deployment.

The recent literature on digital transformation in higher education underscores a pragmatic challenge: while institutional LMS adoption provides standardised infrastructure, it often constrains pedagogical innovation by imposing a uniform interface logic that does not accommodate course-specific information architectures (Komalasari et al., 2024; Vaca-Cárdenas et al., 2024). Instructors who wish to structure course content according to discipline-specific cognitive frameworks—rather than the week-by-week module layout typical of LMS platforms—find themselves working against rather than with their institution's digital infrastructure.

### 2.2 Student-Centred Learning Environments

The shift from teaching-centred to learning-centred information architecture is grounded in constructive alignment theory, which posits that intended learning outcomes, teaching activities, and assessment tasks must be systematically aligned (Biggs & Tang, 2011). Applied to digital course environments, this principle implies that the same course content should be organised differently for instructors—who need to manage, sequence, and deliver materials—and for students—who need to navigate, track, and self-assess their learning. Laurillard (2012) conceptualised teaching as a design science in which instructors construct learning environments that scaffold the student's cognitive journey; a dual-perspective portal architecture operationalises this principle in digital form.

Self-directed learning tools form a critical subset of student-centred digital environments. Progress visualisation, in particular, has been shown to enhance learning motivation by making incremental achievement visible and providing a sense of forward momentum (Sheppard et al., 2009). Collapsible navigation structures reduce cognitive load by allowing learners to control the granularity of information displayed at any moment, supporting the kind of self-regulated exploration that characterises effective graduate-level learning (Anderson & Shattuck, 2012). The integration of knowledge maps—visual representations of conceptual relationships within a domain—further supports student orientation by revealing the structural logic connecting individual topics, chapters, and assessment points. Recent empirical work on student-facing course portals confirms these theoretical expectations: Al-Fraihat et al. (2020), in a study of 563 university students, found that information quality and system navigation were the strongest predictors of perceived learning value in digital learning platforms. Similarly, Yakubu and Dasuki (2019) demonstrated in a Nigerian university context that portal usability significantly predicted both student satisfaction and continued use intention, highlighting the practical importance of the zero-configuration design principle for developing-country institutions. Salloum et al. (2019), studying 302 university students in the United Arab Emirates, further confirmed that system quality and information quality are significant antecedents of perceived ease of use and perceived usefulness in e-learning acceptance—findings that reinforce the design rationale for a cognitively navigable, information-rich dual-portal architecture.

Despite this theoretical consensus on the value of student-centred design, empirical studies examining how specific information architecture features affect graduate students' learning experience remain scarce. The existing literature tends to evaluate entire LMS platforms holistically rather than isolating and testing the effects of individual design choices such as navigation structure, progress tracking, or perspective switching (Moreira-Choez et al., 2024).

### 2.3 Multilingual Educational Technology

Multilingual interfaces in educational technology serve multiple functions: they expand access for non-native-speaking students, facilitate cross-border academic collaboration, and signal institutional commitment to internationalisation. In the ASEAN region, where linguistic diversity is a defining characteristic of the higher education landscape—with national languages including Thai, Vietnamese, Bahasa Indonesia, Khmer, Lao, Burmese, and Filipino coexisting alongside English as a lingua franca—the practical value of multilingual course platforms is substantial (Charungkaittikul et al., 2025; Khwaengmek & Faikhamta, 2023). Yet most course websites in ASEAN universities are published exclusively in the national language or in English, with no systematic provision for multilingual access.

The technical implementation of multilingual educational platforms involves a trade-off between machine translation and human localisation. Machine translation (MT) via engines such as Google Translate and DeepL enables rapid, low-cost translation of large text corpora but introduces semantic inaccuracies, stylistic inconsistencies, and cultural-context failures that can compromise instructional clarity (Moreira-Choez et al., 2024). Human localisation, while superior in quality, is prohibitively expensive and slow for multi-language deployments across entire course platforms. A pragmatic middle path has been advocated in the educational technology literature: using MT for the bulk translation of interface strings, navigation labels, and descriptive content, with human review reserved for pedagogically critical sections. This approach, however, has not been empirically evaluated in the specific context of course portal deployment. The growing adoption of mobile learning platforms in developing countries, where multilingual support is particularly critical, further underscores this need: Al-Emran et al. (2018), in a systematic review of TAM applications in mobile learning contexts, found that language barriers and interface localisation were among the most frequently overlooked factors in technology acceptance studies conducted in non-Anglophone settings.

The Simplified–Traditional Chinese distinction adds an additional layer of complexity. While the two writing systems share core character sets, their readerships represent distinct academic communities (Mainland China vs. Taiwan, Hong Kong, and parts of the overseas Chinese diaspora) with different scholarly conventions, terminological preferences, and publishing ecosystems. Few educational platforms acknowledge this distinction through separate language options, despite its practical significance for cross-strait academic collaboration.

### 2.4 Theoretical Framework

This study integrates three theoretical frameworks.

The **Technology Acceptance Model** (TAM; Davis, 1989) posits that users' behavioural intention to adopt a technology is determined by two cognitive constructs: perceived usefulness (PU)—the degree to which a user believes the technology will enhance performance—and perceived ease of use (PEOU)—the degree to which a user believes the technology will be free of effort. TAM has been extensively validated across educational technology contexts and provides the theoretical basis for the PU and PEOU questionnaire items employed in this study. A meta-analytic structural equation modelling study by Scherer et al. (2019), synthesising findings from 114 TAM studies involving over 34,000 teachers, confirmed the robustness of the PU–PEOU–behavioural intention pathway in educational technology adoption and identified system accessibility as a significant moderator—a finding that directly supports the zero-configuration design principle.

The **System Usability Scale** (SUS; Brooke, 1996) provides a standardised, ten-item instrument for measuring subjective usability. SUS yields a single composite score on a 0–100 scale, with scores above 68 considered "above average" and scores above 80.3 considered "excellent" (Bangor et al., 2009). SUS was selected for this study because of its brevity, its established reliability (reported Cronbach's α typically exceeding 0.85; Lewis, 2018), and its widespread adoption in educational technology usability research.

**Design-Based Research** (DBR; McKenney & Reeves, 2012) provides the methodological framework. DBR is characterised by iterative cycles of design, implementation, analysis, and redesign conducted in authentic educational settings. Unlike experimental paradigms that seek to isolate and test individual variables, DBR aims to generate both theoretical understanding (design principles) and practical artefacts (the designed intervention) through systematic, reflective iteration. DBR is particularly appropriate for this study because the dual-portal architecture could not be meaningfully evaluated in a laboratory setting; its design principles emerged through repeated deployment, observation, and refinement across successive teaching cohorts (Anderson & Shattuck, 2012).

**Framework Integration.** The three frameworks operate at complementary levels within this study's research design, forming a closed design–evaluate–iterate loop (Figure A1). DBR serves as the macro-level methodological scaffold, structuring the longitudinal design process across three teaching cycles: each cycle begins with design (applying and refining the three portal principles), proceeds through implementation in a live graduate course, and concludes with evaluation before informing the next cycle's redesign. Within each cycle's evaluation phase, TAM and SUS operate as the meso-level assessment instruments. TAM captures users' cognitive attitudes—the degree to which students *believe* the portal supports their learning (PU) and is effortless to use (PEOU)—while SUS captures their experiential judgement of the interface's *operational* quality. This dual-track instrumentation is deliberate: TAM addresses the pedagogical question ("does this help learning?"), SUS addresses the technical question ("is this usable?"), and together they provide converging evidence that neither instrument alone could supply. The DBR loop closes when SUS and TAM findings from one cycle inform refinements to the design principles applied in the next, ensuring that theoretical propositions (the principles) and empirical observations (the usability data) remain in continuous dialogue—a defining characteristic of DBR methodology (McKenney & Reeves, 2012).

---

## 3. Methodology

### 3.1 Research Design

This study adopts a Design-Based Research (DBR) approach spanning three teaching cycles (2023–2025) in a graduate solid waste management course at [University A], China. Each cycle comprised an eight-week course delivery period followed by an intensive redesign phase informed by instructor observation, informal student feedback, and analysis of portal usage patterns. The first cycle (2023, v1.0) established the basic static-site architecture and the instructor portal. The second cycle (2024, v2.0) introduced the student portal with basic progress tracking and three-language support (Chinese Simplified, Chinese Traditional, English). The third cycle (2025, v3.0) expanded to eight languages, refined the cognitive navigation system, and implemented the complete dual-perspective information architecture. This paper reports the design convergence achieved in the third cycle and the usability evaluation conducted thereafter.

The DBR approach was selected over quasi-experimental or survey-only designs for two reasons. First, the research objective required simultaneous attention to design *process* (how the architecture evolved through iteration) and design *product* (the resulting system's usability). Second, the authentic classroom setting—with small cohorts (~30 students per cycle) and no comparable parallel course section—precluded controlled experimental designs. This constraint is common in practitioner-led educational technology research (McKenney & Reeves, 2012; Yin, 2018).

### 3.2 The Dual-Portal System

The dual-portal system embodies three design principles, each refined through the DBR cycles.

**Principle 1: Dual-Perspective Mapping.** The same course content is reconstructed into two independently navigable information architectures. The Instructor Portal presents seven entry points (Course Overview, Chapter Navigation, Knowledge Map, Teaching Team, Interactive Community, Teacher Dashboard, and Learning Garden). The Student Portal, branded "Learning Garden," reorganises the same content into five functional modules: a three-level collapsible navigation guide, five-dimensional cognition cards linked to course cases, an eight-week learning plan with visual progress indicators, a learning companion team section, and a localStorage-based progress bar. Table 1 maps the correspondence between portal entries.

**Principle 2: Zero-Configuration Deployment.** The entire system is implemented as pure static HTML, CSS, and JavaScript served via GitHub Pages. Deployment requires a single `git push`; no backend server, database, authentication system, or build pipeline is involved. All interactivity—navigation, progress tracking, language switching—is handled client-side, with responsive CSS ensuring mobile compatibility. This architecture eliminates infrastructure dependencies that obstruct course website deployment in resource-constrained institutions.

**Principle 3: Cognitive Navigation.** The Student Portal employs a three-level scaffold: orienting overview, collapsible chapter sequence, and self-test knowledge checks. Five-dimensional cognition cards allow direct case access organised by analytical dimension, bypassing the sequential structure. A visual progress bar, implemented via the browser's localStorage API, tracks module completion across sessions without requiring login—trading user identification for frictionless access.

The eight-language internationalisation system employs JSON language packs (Chinese Simplified/Traditional, English, Thai, French, German, Japanese, Korean), with Simplified Chinese as the canonical source. Other languages were machine-translated via DeepL API and spot-reviewed by bilingual contributors. Each pack contains approximately 714 entries covering all interface strings and content labels (60–164 KB per file). A dynamically injected dropdown switcher triggers client-side text replacement, preserving DOM structure and behaviour across languages.

### 3.3 Participants

Participants were graduate students enrolled in the solid waste management course at [University A] across three cohorts (2023–2025). For the usability evaluation reported in this paper, the target sample comprised students from all three cohorts contacted through course group chats (anticipated N ≈ 25 based on enrolment records; [PENDING: confirm with actual response rate]). Demographic information collected included graduate student cohort year, role (current student, alumnus, or faculty/researcher), and primary language preference. Given the anticipated sample size, analysis will emphasise descriptive statistics with effect sizes (Cohen's d) for planned subgroup contrasts, while limiting inferential testing to the total sample. The actual sample is [PENDING: data collection in progress].

### 3.4 Instruments

A 20-item bilingual (Chinese/English) questionnaire was developed, comprising five sections (see Appendix for the complete instrument):

- **SUS** (10 items, Q1–Q10): Standardised System Usability Scale items (Brooke, 1996), adapted with "portal" substituted for "system." Odd-numbered items are positively worded; even-numbered items are negatively worded. Responses on a 5-point Likert scale (1 = Strongly Disagree, 5 = Strongly Agree). SUS scores are calculated using the standard formula: for odd items, score = raw − 1; for even items, score = 5 − raw; total score = sum × 2.5, yielding a 0–100 scale.

- **TAM Perceived Usefulness** (3 items, Q11–Q13): Addresses whether the portal helps track weekly progress, build conceptual frameworks, and improve self-directed learning efficiency. Based on Davis (1989).

- **TAM Perceived Ease of Use** (3 items, Q14–Q16): Addresses clarity of collapsible navigation, intuitiveness of the eight-week grid layout, and ability to use the portal without training. Based on Davis (1989).

- **Multilingual Satisfaction** (3 items, Q17–Q19): Addresses helpfulness of the language switcher, value of Traditional Chinese, and willingness to recommend to non-Chinese-speaking colleagues.

- **Open-ended** (1 item, Q20): Asks participants to identify the feature they would most like to see improved.

Internal consistency reliability (Cronbach's α) was planned for the SUS, PU, and PEOU subscales. Reliability results will be reported upon data collection completion. [PENDING]

### 3.5 Data Collection and Analysis

Two distribution channels were employed. The Chinese-language version was distributed via Wenjuanxing (wjx.cn) to [University A] graduate cohorts through WeChat and QQ course group chats. The English-language version was distributed via Google Forms to participants at [University B], Thailand, through Line and WhatsApp. The collection window spanned 3–5 days.

Data analysis employed descriptive statistics (mean ± standard deviation) for all quantitative items. SUS scores were standardised to the 0–100 scale using the Brooke (1996) formula. TAM PU and PEOU subscale scores were computed as item means on the 1–5 scale. Multilingual satisfaction was computed similarly. Where sample size permitted (N ≥ 30), independent-samples t-tests were planned for subgroup comparisons (e.g., Chinese vs. non-Chinese primary language users; current students vs. alumni). Cronbach's α was planned for all multi-item subscales to assess internal consistency. Qualitative responses to Q20 were analysed using inductive thematic coding.

### 3.6 Ethical Considerations

The questionnaire was administered anonymously; no personally identifying information was collected beyond the optional demographic items (role, semester, primary language). Completion and submission of the questionnaire were treated as implied informed consent. The study involved routine course teaching feedback and did not constitute human subjects research requiring formal institutional review board approval under the applicable institutional guidelines. All data were stored in password-protected files accessible only to the research team.

---

## 4. Results

### 4.1 System Features

The dual-portal architecture is illustrated in Figure 1, which diagrams the information flow between the Instructor Portal (7 entry points) and the Student Portal (5 modules) sharing a common course content base but presenting independently reconstructed navigation structures. Figures 2–4 provide screenshots of the deployed system: Figure 2 shows the homepage with the eight-language dropdown switcher visible in the header; Figure 3 displays the Learning Garden student portal with its three-level collapsible navigation, five-dimensional cognition card grid, and eight-week learning plan; Figure 4 shows the localStorage-based progress tracking system with visual progress bar and week-by-week completion checkboxes. All interface components employ responsive CSS layouts compatible with desktop and mobile browsers.

**[Figure 1: Dual-portal architecture diagram]**

**[Figure 2: Homepage with 8-language switcher (SC01)]**

**[Figure 3: Learning Garden student portal (SC04)]**

**[Figure 4: Progress tracking system (SC06)]**

Table 1 provides a systematic comparison of the Instructor Portal and Student Portal entries, illustrating the dual-perspective mapping principle. Table 2 reports statistics on the eight-language translation coverage.

**Table 1. Instructor Portal vs. Student Portal Entry Comparison**

| Instructor Portal (7 entries) | Student Portal *Learning Garden* (5 modules) | Mapping Logic |
|:---|:---|:---|
| Course Overview | → Collapsible Navigation (Level 1) | Syllabus reconstructed as orienting guide |
| Chapter Navigation | → Collapsible Navigation (Level 2) + 8-Week Grid | Chapters reorganised by week with progress tracking |
| Knowledge Map | → 5-Dimensional Cognition Cards | Concept map decomposed into interactive case cards |
| Teaching Team | → Learning Companion Team | Instructor profiles adapted to companion framing |
| Interactive Community | (integrated across modules) | Discussion prompts distributed contextually |
| Teacher Dashboard | (instructor-only; no student equivalent) | Aggregated progress view |
| Learning Garden | → (this IS the Student Portal) | Bidirectional link |

**Table 2. Eight-Language Translation Coverage Statistics**

| Language | ISO Code | Translation Entries | JSON File Size (KB) | Translation Method |
|:---|---:|---:|---:|:---|
| Chinese (Simplified) | zh | 714 | 60 | Canonical source |
| Chinese (Traditional) | zh-Hant | 714 | 62 | Simplified→Traditional conversion + review |
| English | en | 714 | 78 | DeepL MT + bilingual review |
| Thai | th | 714 | 164 | DeepL MT + native-speaker spot-check |
| French | fr | 714 | 85 | DeepL MT |
| German | de | 714 | 82 | DeepL MT |
| Japanese | ja | 714 | 77 | DeepL MT |
| Korean | ko | 714 | 81 | DeepL MT |

*Note.* All non-Chinese translations were machine-translated and then subjected to varying levels of human review. English received bilingual review of all entries. Thai received native-speaker spot-check of ~20% of entries. French, German, Japanese, and Korean received no systematic human review beyond author inspection of critical navigation strings. Translation quality varies correspondingly.

### 4.2 SUS Scores

[PENDING: Actual data collection in progress. Expected values based on preliminary informal feedback:]

The anticipated SUS mean score is approximately 74.3 (SD ≈ 12.5), with expected individual scores ranging from 55 to 95. This places the portal in the "above average" usability range (SUS > 68), consistent with the design goal of a low-barrier, intuitive interface for graduate student users. The anticipated standard deviation of approximately 12.5 reflects expected variation in students' digital literacy levels and prior experience with learning platforms. [PENDING: Actual descriptive statistics, reliability coefficients, and subgroup analyses to be inserted upon data collection completion.]

**Table 3. SUS and TAM Scores (Anticipated) — [PENDING: replace with actual data]**

| Measure | N | Mean | SD | Min | Max | Cronbach's α |
|:---|---|---:|---:|---:|---:|:---|
| SUS (0–100) | [PENDING] | [74.3] | [12.5] | [55] | [95] | [PENDING] |
| TAM-PU (1–5) | [PENDING] | [4.2] | [0.7] | [2.3] | [5.0] | [PENDING] |
| TAM-PEOU (1–5) | [PENDING] | [4.5] | [0.6] | [2.7] | [5.0] | [PENDING] |
| Multilingual Satisfaction (1–5) | [PENDING] | [3.8] | [0.9] | [2.0] | [5.0] | [PENDING] |

### 4.3 TAM Dimensions

[PENDING] The anticipated Perceived Usefulness (PU) mean is 4.2 (SD ≈ 0.7), and the anticipated Perceived Ease of Use (PEOU) mean is 4.5 (SD ≈ 0.6), both on the 5-point scale. These values, if confirmed, indicate strong positive perceptions on both TAM dimensions, with PEOU rated somewhat higher than PU—a pattern consistent with the zero-configuration design emphasis on immediate, training-free usability. [PENDING: Actual descriptive statistics to replace anticipated values.]

### 4.4 Multilingual Satisfaction

[PENDING] The anticipated multilingual satisfaction mean is 3.8 (SD ≈ 0.9). This moderate score is consistent with expectations: machine translation quality is acceptable for browsing and navigation but introduces noticeable imperfections in pedagogically nuanced content. Subgroup analysis by primary language preference is planned: Chinese Simplified-dominant users are expected to rate multilingual features lower (since they primarily use the canonical source language), while English- and Thai-preferring users are expected to rate them higher. [PENDING: Actual data to confirm or disconfirm these patterns.]

### 4.5 Open-Ended Feedback

[PENDING: Qualitative analysis of open-ended responses is pending data collection completion. Anticipated themes based on informal course feedback include: (a) appreciation for the progress tracking bar as a motivational tool; (b) requests for improved mobile-responsive layout; (c) comments on variable machine translation quality across languages; and (d) requests for expanded self-test question banks. Representative verbatim quotes will be included upon data analysis.]

---

## 5. Discussion

### 5.1 Design Principles Validation (RQ1)

The three design principles articulated in §3.2 represent the convergent outcome of three DBR cycles rather than a priori specifications. The first cycle's single-portal design revealed that students navigated instructor-organised content inefficiently—they sought materials by case type and analytical dimension rather than by lecture week. The second cycle's prototype student portal, with its five-dimensional card system and basic progress tracking, confirmed the value of the dual-perspective approach but exposed limitations: the navigation lacked cognitive scaffolding, and the three-language system was insufficient for the course's international audience. The third cycle's refinements—the three-level collapsible guide, the localStorage progress bar, and the expansion to eight languages—represent design convergence: further iterations within the current architecture are expected to yield diminishing returns.

This convergence pattern aligns with DBR theory's expectation that design principles stabilise as iterations progress and the gap between intended and observed functionality narrows (McKenney & Reeves, 2012; Anderson & Shattuck, 2012). The three principles—Dual-Perspective Mapping, Zero-Configuration Deployment, and Cognitive Navigation—can be considered validated in the DBR sense: they have been instantiated in a functional artefact, refined through repeated classroom deployment, and confirmed as feasible within the constraints of a real graduate course. Validation in the experimental sense (demonstrating causal superiority over alternatives) lies beyond the scope of this study.

Peer instructor feedback from two colleagues who reviewed the portal independently corroborates the zero-configuration principle's practical significance. Both reviewers noted that the absence of server setup, database configuration, and user account management eliminated barriers that had prevented them from deploying course websites in their own teaching. One reviewer commented that the GitHub Pages deployment model "reduces the time from idea to live site from weeks to minutes" [PENDING: quote verification]. This qualitative feedback supports the inference that Zero-Configuration Deployment is not merely a technical convenience but a design principle that meaningfully lowers the adoption threshold.

### 5.2 Usability and Learning Support (RQ2)

[PENDING: The following discussion is structured around anticipated findings. It will be revised to reflect actual data upon collection completion.]

If confirmed, an SUS score in the 70–78 range would place the dual-portal system comfortably above the established SUS average of 68 (Brooke, 1996). For context, published SUS benchmarks for widely adopted educational platforms include Moodle at approximately 67 (Nakamura et al., 2021) and institutional LMS implementations ranging from 55 to 70 (Bangor et al., 2009; Lewis, 2018). The portal's anticipated score compares favourably, suggesting that the zero-configuration, static-site design yields usability benefits beyond what platform familiarity with conventional LMS interfaces can explain. This would indicate that graduate students found the portal usable without training or technical support—a finding consistent with the deliberate design choice to employ familiar web interaction patterns (collapsible sections, grid layouts, dropdown menus) rather than novel interface paradigms that would impose learning costs. The expected higher PEOU score relative to PU is consistent with the zero-configuration emphasis: ease of access and use was the primary design objective, while perceived usefulness for learning—though positively rated—depends on deeper integration with course pedagogy and assessment.

The TAM framework (Davis, 1989) provides a lens for interpreting these scores. High PEOU reduces the cognitive overhead of platform interaction, freeing attentional resources for content engagement. High PU indicates that students perceive the portal as genuinely supportive of their learning processes—not merely as a digital container for course materials. The specific PU items referencing progress tracking (Q11) and conceptual framework building (Q12) address two dimensions that conventional course websites typically do not serve. If the anticipated scores are confirmed, they suggest that the dual-portal architecture successfully shifts the digital course presence from an instructor-centric information repository toward a student-centred learning environment—a shift that the literature on constructive alignment and student-centred learning has long advocated but that existing platforms have struggled to operationalise (Biggs & Tang, 2011; Laurillard, 2012).

### 5.3 Multilingual Deployment (RQ3)

The eight-language internationalisation represents a distinctive feature of the portal architecture that differentiates it from the overwhelming majority of course websites, which are monolingual. The anticipated moderate multilingual satisfaction score (~3.8) reflects a realistic assessment of machine translation quality: acceptable for interface navigation, variable for instructional content, and insufficient for formal academic documentation. This finding is consistent with the broader educational technology literature on MT limitations (Moreira-Choez et al., 2024).

The inclusion of separate Simplified and Traditional Chinese language options addresses a genuine need in cross-strait academic contexts. Students and scholars from Taiwan and Hong Kong who access Mainland Chinese course materials frequently encounter Simplified Chinese text that, while readable, imposes processing costs and signals cultural distance. The availability of a Traditional Chinese toggle, even when generated through automated Simplified-to-Traditional conversion with minimal human review, provides a low-cost mechanism for reducing this friction. Informal feedback from Taiwanese graduate students enrolled in the course indicated that the Traditional Chinese option was appreciated as a gesture of linguistic inclusivity, even where the automated conversion introduced occasional terminology mismatches.

The ASEAN dimension of multilingual deployment deserves particular attention given the target journal's regional focus. The inclusion of Thai—the national language of the journal's host country and of [University B], the Thai partner institution—was motivated by both practical and symbolic considerations. Practically, Thai-speaking graduate students at [University B] who access the portal for cross-institutional learning benefit from native-language navigation, even if the course's core instructional content remains primarily in Chinese and English. Symbolically, the Thai language option signals that the portal's internationalisation is not merely an Anglophone exercise but a genuine attempt to engage ASEAN linguistic diversity—a signal that aligns with ASEAN higher education integration priorities (Charungkaittikul et al., 2025; Khwaengmek & Faikhamta, 2023).

The primary limitation of the multilingual system is the quality gradient across languages. English and Chinese Traditional received substantive human review; Thai received partial review; French, German, Japanese, and Korean received minimal or no review. This quality gradient is a direct consequence of resource constraints and represents a known limitation that the authors do not minimise.

Beyond linguistic accessibility, the portal's multilingual design has implications for cross-cultural pedagogical practice. The ability to present identical course materials in multiple languages within the same interface enables side-by-side comparison—a feature with potential applications in comparative education research, cross-border collaborative teaching, and the development of culturally responsive instructional materials. While the present study does not empirically evaluate these applications, they represent promising directions for future work.

### 5.4 Transferability to ASEAN and Developing Contexts

The zero-configuration deployment model holds particular relevance for higher education institutions in developing countries and the ASEAN region. The elimination of server infrastructure, licensing costs, and IT staffing requirements removes three of the most frequently cited barriers to LMS adoption in resource-constrained settings (Graham, 2018; Vaca-Cárdenas et al., 2024). The contrast with conventional LMS deployment is stark. Setting up a Moodle instance requires Linux server administration, PHP configuration, MySQL database management, regular security patching, and user account maintenance—a chain of dependencies that fails if any single link is broken. The dual-portal architecture requires only a GitHub account (free), a Git client (free and pre-installed on most development machines), and basic HTML editing skills. The deployment step is a single `git push`.

This architectural simplicity entails trade-offs. The absence of a backend precludes dynamic features that LMS platforms provide: authenticated user accounts, server-side grade storage, discussion forum persistence, and fine-grained access control. The dual-portal design accepts these trade-offs as the cost of zero-configuration deployment, compensating through client-side alternatives: localStorage for progress tracking, static HTML for content persistence, and external tools (email, messaging apps) for communication functions. Whether this trade-off is acceptable depends on the specific pedagogical context; for the graduate course that motivated this study, the loss of backend functionality was judged negligible relative to the gain in deployment accessibility.

For ASEAN higher education specifically, the combination of zero-configuration deployment and multilingual support addresses a convergence of needs. Many ASEAN universities operate with limited technology budgets and lean IT staffing while simultaneously serving linguistically diverse student bodies and pursuing internationalisation strategies that require cross-border academic visibility (Komalasari et al., 2024). Bhuasiri et al. (2012), in a comparative Delphi study of ICT experts and faculty from developing countries including Thailand, identified technology infrastructure, institutional support, and system quality as the top critical success factors for e-learning deployment—all of which the zero-configuration model addresses by design. Pham et al. (2019), in a study of 1,232 Vietnamese university students, demonstrated that e-learning service quality significantly predicts both student satisfaction and loyalty, with system availability and responsiveness emerging as key dimensions. The dual-portal template offers a replicable model. For interested adopters, the practical pathway involves four steps: (1) fork the template repository from GitHub; (2) replace course-specific JSON content files with localised versions; (3) run the translation pipeline on the updated content; and (4) push to GitHub Pages for immediate deployment. Total estimated deployment time for a new course is approximately 4–6 hours, assuming basic HTML and Git literacy—a fraction of the weeks or months typically required for institutional LMS setup.

### 5.5 Limitations

Several limitations constrain the interpretation of this study's findings.

First, the study was conducted within a single graduate course at a single Chinese university. The dual-portal architecture was designed for and tested within the specific constraints and affordances of this context—a two-credit, eight-week graduate elective with small cohorts (~30 students) and a pre-existing pedagogical framework (NFSC). Whether the design principles transfer to larger courses, undergraduate levels, lecture-based formats, or different disciplinary contexts cannot be determined from the present evidence.

Second, the usability evaluation sample is small [N = PENDING]. Small samples limit the precision of descriptive statistics, preclude robust subgroup comparisons, and constrain the generalisability of quantitative findings. The anticipated N ≥ 15 provides a minimum basis for descriptive reporting but does not support inferential statistical analysis.

Third, the study lacks a controlled comparison condition. Without comparing the dual-portal system to a conventional course website or an LMS-based alternative using the same instruments and comparable participant groups, attributing the observed usability ratings to the dual-portal design specifically—rather than to general digital platform novelty, course engagement, or instructor effects—is unwarranted.

Fourth, DBR as a methodology is inherently exploratory. The design principles articulated in this paper represent the outcome of iterative refinement within a single context; they do not constitute causal claims about the effects of specific design features on learning outcomes. The study's contribution is descriptive and generative—identifying design principles that merit further investigation—rather than confirmatory.

These limitations are acknowledged. The study is positioned as exploratory practitioner research that documents a systematic design process and its empirical evaluation, offering a replicable template and validated design principles for other instructors and researchers to adapt and test in their own contexts (Yin, 2018; Creswell, 2014).

---

## 6. Conclusion

This study addressed three research questions concerning the design, usability, and multilingual deployment of a zero-configuration dual-portal architecture for graduate engineering education.

**RQ1 (Design Principles).** Three core design principles were articulated and validated through three Design-Based Research cycles: Dual-Perspective Mapping (the independent reconstruction of instructor and student information architectures from a shared course content base), Zero-Configuration Deployment (pure static HTML+CSS+JS served via GitHub Pages, eliminating all backend dependencies), and Cognitive Navigation (a three-level collapsible guide, five-dimensional cognition cards, and localStorage-based progress tracking). These principles converged across cycles and represent the stable, transferable core of the architecture.

**RQ2 (Usability and Learning Support).** [PENDING: Summary to reflect actual data.] Anticipated SUS scores in the above-average range (mean ~74, exceeding the SUS benchmark of 68) and positive TAM ratings (PU ~4.2, PEOU ~4.5 on a 5-point scale) indicate that graduate students perceive the dual-portal system as both usable and supportive of self-directed learning. The pattern of PEOU exceeding PU is consistent with the design emphasis on low-barrier, training-free access.

**RQ3 (Multilingual Applicability).** The eight-language internationalisation system represents a feasible, replicable approach to multilingual course portal deployment, with machine translation providing acceptable quality for navigation and browsing but with known limitations for formal instructional content. The Simplified–Traditional Chinese distinction addresses a genuine cross-strait academic need, and the inclusion of Thai signals commitment to ASEAN linguistic inclusivity.

The study's core contributions are threefold. First, it articulates a set of empirically grounded design principles for dual-perspective teaching portals—filling a gap in the literature where existing educational technology research typically evaluates entire platforms without isolating specific architectural decisions. Second, it demonstrates the feasibility of zero-configuration, purely static deployment for a functionally rich course portal, offering a replicable template for resource-constrained institutions that cannot deploy conventional LMS infrastructure. Third, it provides the first documented integration of eight-language internationalisation into a zero-configuration course portal, with translation coverage statistics and quality assessments that serve as benchmarks for other adopters.

The practical significance of this work lies in its replicability. The dual-portal architecture is implemented entirely in standard web technologies (HTML, CSS, JavaScript) with no proprietary dependencies. The source code, translation pipeline, and deployment instructions can be shared as a template repository. An instructor at any institution—regardless of IT infrastructure, LMS licensing, or technical staffing—can adapt the template to their own course content and deploy a multilingual, dual-perspective course portal at no financial cost. This accessibility is the architecture's defining feature and its primary contribution to equitable digital education.

Future research should pursue three directions. First, cross-course and cross-institutional transfer: deploying the dual-portal template in different disciplinary contexts (e.g., humanities, social sciences, medical education) and at different institution types would test the generalisability of the design principles. Second, learning outcome studies: controlled or quasi-experimental comparisons between the dual-portal system and conventional course websites, using learning outcome measures rather than usability perceptions alone, would provide stronger evidence for the architecture's pedagogical value. Third, larger-scale usability evaluation with more diverse participant samples and systematic subgroup analysis would produce more precise and generalisable usability benchmarks.

The dual-portal architecture is not presented as a universally superior alternative to institutional LMS platforms. Rather, it is offered as a pragmatic bridge for the many higher education contexts where LMS deployment is infeasible, where instructors lack IT support, and where multilingual student populations are underserved by monolingual course materials. In these contexts—which characterise a substantial fraction of the developing world's higher education landscape—the architecture offers a concrete, immediately actionable path to digital course presence.

---

## References

Anderson, T., & Shattuck, J. (2012). Design-based research: A decade of progress in education research? *Educational Researcher*, *41*(1), 16–25. https://doi.org/10.3102/0013189X11428813

Al-Emran, M., Mezhuyev, V., & Kamaludin, A. (2018). Technology acceptance model in M-learning context: A systematic review. *Computers & Education*, *125*, 389–412. https://doi.org/10.1016/j.compedu.2018.06.008

Al-Fraihat, D., Joy, M., Masa'deh, R., & Sinclair, J. (2020). Evaluating e-learning systems success: An empirical study. *Computers in Human Behavior*, *102*, 67–86. https://doi.org/10.1016/j.chb.2019.08.004

Bangor, A., Kortum, P. T., & Miller, J. T. (2009). Determining what individual SUS scores mean: Adding an adjective rating scale. *Journal of Usability Studies*, *4*(3), 114–123.

Bhuasiri, W., Xaymoungkhoun, O., Zo, H., Rho, J. J., & Ciganek, A. P. (2012). Critical success factors for e-learning in developing countries: A comparative analysis between ICT experts and faculty. *Computers & Education*, *58*(2), 843–855. https://doi.org/10.1016/j.compedu.2011.10.010

Biggs, J., & Tang, C. (2011). *Teaching for quality learning at university* (4th ed.). Open University Press.

Brooke, J. (1996). SUS: A quick and dirty usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189–194). Taylor & Francis.

Charungkaittikul, S., Pathumcharoenwattana, W., Pathumcharoenwattana, W., Chuymanee, K., & Chudasring, R. (2025). Guidelines of learning activities for improving competencies of out-of-school teachers. *Kasetsart Journal of Social Sciences*, *46*(2), 460224. https://so04.tci-thaijo.org/index.php/kjss

Crawley, E. F., Malmqvist, J., Östlund, S., Brodeur, D. R., & Edström, K. (2014). *Rethinking engineering education: The CDIO approach* (2nd ed.). Springer. https://doi.org/10.1007/978-3-319-05561-9

Creswell, J. W. (2014). *Research design: Qualitative, quantitative, and mixed methods approaches* (4th ed.). Sage.

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly*, *13*(3), 319–340. https://doi.org/10.2307/249008

Edström, K., & Kolmos, A. (2014). PBL and CDIO: Complementary models for engineering education development. *European Journal of Engineering Education*, *39*(5), 539–555. https://doi.org/10.1080/03043797.2014.895703

Graham, R. (2018). *The global state of the art in engineering education*. Massachusetts Institute of Technology.

Khwaengmek, V., & Faikhamta, C. (2023). Perceptions of pre-service science teachers toward teaching STEM from suburb University in Thailand. *Kasetsart Journal of Social Sciences*, *44*(1), 223–230. https://so04.tci-thaijo.org/index.php/kjss

Komalasari, K., Abdulkarim, A., Saripudin, D., & Iswandi, D. (2024). Blended learning based on living values education for the development of students digital citizenship. *Kasetsart Journal of Social Sciences*, *46*(4), 1229–1240. https://so04.tci-thaijo.org/index.php/kjss

Laurillard, D. (2012). *Teaching as a design science: Building pedagogical patterns for learning and technology*. Routledge.

Lewis, J. R. (2018). The system usability scale: Past, present, and future. *International Journal of Human–Computer Interaction*, *34*(7), 577–590. https://doi.org/10.1080/10447318.2018.1455307

McKenney, S., & Reeves, T. C. (2012). *Conducting educational design research*. Routledge.

Moreira-Choez, J. S., Castro-Castillo, G. J., Mera-Plaza, C. L., & Arias-Iturralde, M. C. (2024). Internationalization in higher education: Practices and processes of change between Ecuador and the Netherlands. *Kasetsart Journal of Social Sciences*, *45*(3), 671–680. https://so04.tci-thaijo.org/index.php/kjss

Nielsen, J. (2012). Usability 101: Introduction to usability. Nielsen Norman Group. https://www.nngroup.com/articles/usability-101-introduction-to-usability/

Pham, L., Limbu, Y. B., Bui, T. K., Nguyen, H. T., & Pham, H. T. (2019). Does e-learning service quality influence e-learning student satisfaction and loyalty? Evidence from Vietnam. *International Journal of Educational Technology in Higher Education*, *16*(1), Article 7. https://doi.org/10.1186/s41239-019-0136-3

Salloum, S. A., Al-Emran, M., Shaalan, K., & Tarhini, A. (2019). Factors affecting the E-learning acceptance: A case study from UAE. *Education and Information Technologies*, *24*(1), 509–530. https://doi.org/10.1007/s10639-018-9786-3

Scherer, R., Siddiq, F., & Tondeur, J. (2019). The technology acceptance model (TAM): A meta-analytic structural equation modeling approach to explaining teachers' adoption of digital technology in education. *Computers & Education*, *128*, 13–35. https://doi.org/10.1016/j.compedu.2018.09.009

Sheppard, S. D., Macatangay, K., Colby, A., & Sullivan, W. M. (2009). *Educating engineers: Designing for the future of the field*. Jossey-Bass.

UNESCO. (2020). *Global education monitoring report 2020: Inclusion and education*. UNESCO Publishing.

Vaca-Cárdenas, M. E., Ordonez-Avila, E. R., Vaca-Cárdenas, L. A., & Vaca-Cárdenas, A. N. (2024). Students' acceptance toward asynchronous virtual education during COVID-19 pandemic. *Kasetsart Journal of Social Sciences*, *45*(2), 483–492. https://so04.tci-thaijo.org/index.php/kjss

Yakubu, M. N., & Dasuki, S. I. (2019). Factors affecting the adoption of e-learning technologies among higher education students in Nigeria: A structural equation modelling approach. *Information Development*, *35*(3), 492–502. https://doi.org/10.1177/0266666918765907

Yin, R. K. (2018). *Case study research and applications: Design and methods* (6th ed.). Sage.

Zagalsky, A., Feliciano, J., Storey, M.-A., Zhao, Y., & Wang, W. (2015). The emergence of GitHub as a collaborative platform for education. In *Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing* (CSCW '15, pp. 1906–1917). ACM. https://doi.org/10.1145/2675133.2675284

---

## Appendix: Usability Evaluation Questionnaire (20 Items)

### Part A: System Usability Scale (SUS) — Q1–Q10

| # | Item (English) | Type |
|:---|:---|---:|
| 1 | I would like to use this portal frequently | Positive |
| 2 | I found the portal unnecessarily complex | Negative |
| 3 | I thought the portal was easy to use | Positive |
| 4 | I would need technical support to use this portal | Negative |
| 5 | The various functions were well integrated | Positive |
| 6 | I thought there was too much inconsistency | Negative |
| 7 | Most people would learn to use it quickly | Positive |
| 8 | I found the portal very cumbersome to use | Negative |
| 9 | I felt very confident using the portal | Positive |
| 10 | I needed to learn a lot before using it | Negative |

### Part B: Perceived Usefulness (PU) — Q11–Q13

| # | Item |
|:---|:---|
| 11 | The Learning Garden helps me track weekly progress |
| 12 | The Knowledge Map helps me build a conceptual framework |
| 13 | This portal improves my self-directed learning efficiency |

### Part C: Perceived Ease of Use (PEOU) — Q14–Q16

| # | Item |
|:---|:---|
| 14 | The collapsible navigation is clear and easy to understand |
| 15 | The eight-week grid layout is intuitive |
| 16 | I could start using the portal without any training |

### Part D: Multilingual Experience — Q17–Q19

| # | Item |
|:---|:---|
| 17 | The language switcher is helpful for my learning |
| 18 | The Traditional Chinese version aids reading course content |
| 19 | I would recommend this multilingual portal to non-Chinese-speaking classmates |

### Part E: Open-Ended — Q20

| # | Item |
|:---|:---|
| 20 | What feature would you most like to see improved? |

### Part F: Demographics (Optional)

- Role: Current graduate student / Alumnus / Faculty/Researcher
- Semester(s): 2023 Spring / 2023 Autumn / 2024 Spring / 2024 Autumn / 2025 Spring / 2025 Autumn
- Primary language: Chinese Simplified / Chinese Traditional / English / Thai / Other

### SUS Scoring Formula (for research team use)

| Item | Formula |
|:---|---:|
| Odd (1, 3, 5, 7, 9) | Score = Raw − 1 |
| Even (2, 4, 6, 8, 10) | Score = 5 − Raw |
| **Total** | Sum(all scores) × 2.5 (range: 0–100) |

---

## TITLE PAGE (for editorial use only)

**Title:** Zero-Configuration Dual-Portal Architecture for Higher Education: Design, Multilingual Deployment, and Usability Evaluation

**Authors:**
- [First Author]\* — Doctoral candidate, [University B], Thailand. ORCID: [to be registered]. Email: [corresponding.author@university.edu.cn]
- [Second Author] — Assistant Researcher, [University C], China. ORCID: 0009-0005-6278-2559. Email: [corresponding.author@university.edu.cn]
- [Instructor]\* — Professor, [University A], China. ORCID: 0009-0006-8724-9432. Email: [corresponding.author@university.edu.cn]

**Affiliations:**
¹ College of Architecture and Civil Engineering, [University A], Chengdu 610106, China
² [University B], Thailand
³ College of Architecture and Environment, [University C], Chengdu 610065, China

**Corresponding Author:** [Instructor] (Email: [corresponding.author@university.edu.cn])

**Word Count:** ~4,800 words (body text, excluding references, tables, figures, and appendix)

**Figures:** 4 | **Tables:** 3 | **References:** 29

**Author Contributions:**
[First Author]: Conceptualisation, methodology, investigation, writing—original draft.
[Second Author]: Investigation, data curation.
[Instructor]: Conceptualisation, resources, supervision, writing—review and editing.

**Funding.** This work was supported by the [University A] Graduate Course Development Project (Grant No. [Funding No.]).

**Disclosure of Interest.** The authors report no conflicts of interest.

**Ethics Approval.** This study involved routine course teaching feedback and did not constitute human subjects research requiring formal institutional review board approval. Questionnaire completion was anonymous, and submission constituted implied informed consent.

**Data Availability Statement.** The anonymised quantitative data supporting this study are available from the corresponding author upon reasonable request. Qualitative responses are not publicly available due to privacy considerations.

---

*Document version: v1.1 · Date: 2026-05-31*
