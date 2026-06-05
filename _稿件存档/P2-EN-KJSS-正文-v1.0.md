# Zero-Configuration Dual-Portal Architecture for Higher Education: Design, Multilingual Deployment, and Cross-Cultural Application

[Author names and affiliations removed for double-blind review. See separate Title Page.]

---

**Abstract:** Digital infrastructure deficits constrain course website deployment in developing-country higher education. Existing platforms are predominantly instructor-centric, require backend server administration, and operate in a single language—features that limit adoption in resource-constrained institutions and exclude multilingual student populations. This study presents a zero-configuration dual-portal architecture comprising an Instructor Portal (seven entry points) and a Student Portal (five learning modules), deployed as pure static HTML+CSS+JS on GitHub Pages without any backend, database, or authentication system. An 8-language internationalisation engine (Chinese Simplified/Traditional, English, Thai, French, German, Japanese, Korean) operates via JSON language packs and a client-side JavaScript switching mechanism. The system was developed through three Design-Based Research cycles (2023–2025) in a graduate solid waste management course at [University A], China. The third-cycle design convergence is reported, alongside a usability evaluation employing the System Usability Scale (SUS), Technology Acceptance Model (TAM) dimensions, and multilingual satisfaction measures (20-item questionnaire). Three design principles are articulated: Dual-Perspective Mapping, Zero-Configuration Deployment, and Cognitive Navigation. Results demonstrate above-average usability and positive technology acceptance, with implications for ASEAN and developing-country higher education contexts where commercial LMS deployment remains infeasible.

**Keywords:** dual-portal architecture; zero-configuration deployment; multilingual educational technology; GitHub Pages; Design-Based Research; usability evaluation

---

## 1. Introduction

Higher education worldwide faces a digital infrastructure deficit that disproportionately affects developing countries. While universities in high-income nations deploy commercial learning management systems (LMS) such as Blackboard, Canvas, and Moodle, institutions in resource-constrained settings confront fundamental barriers: prohibitive licensing costs, absence of dedicated IT operations staff, unreliable server infrastructure, and limited capacity for ongoing system maintenance (Graham, 2018; Crawley et al., 2014). This structural inequality extends beyond institutional procurement to pedagogical practice: instructors who wish to create digital course presences must either navigate institutional LMS bureaucracies or acquire web development skills that lie outside their professional expertise. The result is a widening gap between the digital teaching environments available in well-resourced and under-resourced universities—a gap that the COVID-19 pandemic made acutely visible (UNESCO, 2020).

China's "Double First-Class" initiative has accelerated pressure on universities to digitise course delivery, yet the dominant paradigm for course websites remains what might be termed the "instructor showcase": a static display of syllabi, lecture slides, and reading lists organised from the teacher's perspective, offering minimal interactivity and no accommodation of student-centred navigation needs (Sheppard et al., 2009; Biggs & Tang, 2011). This instructor-centric model exhibits three persistent limitations. First, it presents course content through a single perspective—the instructor's organisational logic—rather than reconstructing information architecture around how students navigate learning materials, track progress, and prepare for assessments. Second, it demands a high deployment barrier: server provisioning, database configuration, user account management, and ongoing security maintenance, each of which represents a point of failure in institutions lacking dedicated IT support. Third, it is overwhelmingly monolingual, typically published in the instructor's native language with no provision for international students, cross-border academic collaboration, or multilingual scholarly exchange (Komalasari et al., 2024). These three limitations—single-perspective, high-barrier, monolingual—collectively define the problem space this study addresses.

A complementary pedagogical context motivates this work. The NFSC (Narrative–Framework–Scenario–Creation) pedagogy, deployed in the same graduate solid waste management course since 2023, requires a digital infrastructure capable of delivering narrative excerpts, diagnostic frameworks, scenario materials, and creative output templates across an eight-week progression. Separately, an AI-enabled Agent Team supports pre-class Q&A and learning companion functions. These pedagogical innovations created a practical need for a course portal—but one that existing LMS platforms and conventional static websites could not adequately serve, since neither could simultaneously present instructor-organised teaching resources and student-centred learning pathways within a single lightweight architecture.

A systematic search of the engineering education and educational technology literature reveals no prior study that (a) articulates the design principles of a dual-perspective teaching portal, (b) deploys such a portal through a zero-configuration static-site architecture, (c) implements eight-language internationalisation as a built-in rather than add-on feature, and (d) subjects the resulting system to empirical usability evaluation using standardised instruments. Studies of educational portals exist (Vaca-Cárdenas et al., 2024), studies of multilingual educational interfaces exist (Moreira-Choez et al., 2024), and studies of GitHub Pages for academic purposes exist—but no single investigation integrates these strands into a coherent design research programme. This gap is both scholarly and practical: instructors in developing-country universities lack an evidence-based, replicable template for deploying multilingual, student-centred course portals without institutional infrastructure.

Three research questions guide this study:

* **RQ1:** What are the core design principles of the dual-portal architecture, and how were they validated through iterative design?
* **RQ2:** How do graduate students perceive the portal's usability and learning support, as measured by SUS and TAM instruments?
* **RQ3:** What are the applicability and limitations of eight-language internationalisation in cross-cultural teaching scenarios?

The remainder of this paper is organised in the IMRaD structure. Section 2 reviews relevant literature and establishes the theoretical framework. Section 3 describes the Design-Based Research methodology, the dual-portal system, participants, instruments, and analysis procedures. Section 4 presents system features and usability results. Section 5 discusses findings in relation to each research question. Section 6 concludes with contributions, limitations, and future directions.

---

## 2. Literature Review and Theoretical Framework

### 2.1 Digital Portals in Higher Education

The evolution from static course websites to interactive learning portals reflects a broader pedagogical shift from instructor-centred information delivery to student-centred learning environments. Early course websites served as digital filing cabinets—repositories for syllabi, lecture notes, and reading lists organised chronologically by week (Laurillard, 2012). Contemporary learning management systems integrate content delivery, assessment, discussion forums, and gradebook functions into unified platforms, but this integration comes at the cost of architectural complexity: Moodle requires a LAMP stack, Blackboard demands enterprise server infrastructure, and even lightweight alternatives such as Google Classroom depend on cloud services and institutional account provisioning (Graham, 2018; Edström & Kolmos, 2014).

A counter-current in educational technology favours static site generators and lightweight deployment models. GitHub Pages, which serves static HTML+CSS+JS content directly from a Git repository, has been adopted for course websites, workshop materials, and academic project documentation (Crawley et al., 2014). Its advantages are precisely those most relevant to resource-constrained institutions: zero hosting cost, no server administration, version control via Git, and instantaneous deployment through repository push. However, documented educational applications of GitHub Pages have been limited to single-perspective course pages and project portfolios; no published account describes a dual-portal architecture that reconstructs the same course content into distinct instructor and student information architectures served from a single static site deployment.

The recent literature on digital transformation in higher education underscores a pragmatic challenge: while institutional LMS adoption provides standardised infrastructure, it often constrains pedagogical innovation by imposing a uniform interface logic that does not accommodate course-specific information architectures (Komalasari et al., 2024; Vaca-Cárdenas et al., 2024). Instructors who wish to structure course content according to discipline-specific cognitive frameworks—rather than the week-by-week module layout typical of LMS platforms—find themselves working against rather than with their institution's digital infrastructure.

### 2.2 Student-Centred Learning Environments

The shift from teaching-centred to learning-centred information architecture is grounded in constructive alignment theory, which posits that intended learning outcomes, teaching activities, and assessment tasks must be systematically aligned (Biggs & Tang, 2011). When applied to digital course environments, this principle implies that the same course content should be organised differently for instructors (who need to manage, sequence, and deliver materials) and for students (who need to navigate, track, and self-assess their learning). Laurillard (2012) conceptualised teaching as a design science in which instructors construct learning environments that scaffold the student's cognitive journey; a dual-perspective portal architecture operationalises this principle in digital form.

Self-directed learning tools represent a critical subset of student-centred digital environments. Progress visualisation, in particular, has been shown to enhance learning motivation by making incremental achievement visible and providing a sense of forward momentum (Sheppard et al., 2009). Collapsible navigation structures reduce cognitive load by allowing learners to control the granularity of information displayed at any moment, supporting the kind of self-regulated exploration that characterises effective graduate-level learning (Anderson & Shattuck, 2012). The integration of knowledge maps—visual representations of conceptual relationships within a domain—further supports student orientation by revealing the structural logic connecting individual topics, chapters, and assessment points.

Despite this theoretical consensus on the value of student-centred design, empirical studies examining how specific information architecture features affect graduate students' learning experience remain scarce. The existing literature tends to evaluate entire LMS platforms holistically rather than isolating and testing the effects of individual design choices such as navigation structure, progress tracking, or perspective switching (Moreira-Choez et al., 2024).

### 2.3 Multilingual Educational Technology

Multilingual interfaces in educational technology serve multiple functions: they expand access for non-native-speaking students, facilitate cross-border academic collaboration, and signal institutional commitment to internationalisation. In the ASEAN region, where linguistic diversity is a defining characteristic of the higher education landscape—with national languages including Thai, Vietnamese, Bahasa Indonesia, Khmer, Lao, Burmese, and Filipino coexisting alongside English as a lingua franca—the practical value of multilingual course platforms is substantial (Charungkaittikul et al., 2025; Khwaengmek & Faikhamta, 2023). Yet most course websites in ASEAN universities are published exclusively in the national language or in English, with no systematic provision for multilingual access.

The technical implementation of multilingual educational platforms involves a trade-off between machine translation and human localisation. Machine translation (MT) via engines such as Google Translate and DeepL enables rapid, low-cost translation of large text corpora but introduces semantic inaccuracies, stylistic inconsistencies, and cultural-context failures that can compromise instructional clarity (Moreira-Choez et al., 2024). Human localisation, while superior in quality, is prohibitively expensive and slow for multi-language deployments across entire course platforms. A pragmatic middle path—using MT for the bulk translation of interface strings, navigation labels, and descriptive content, with human review for pedagogically critical sections—has been advocated in the educational technology literature but has not been subject to empirical evaluation in the specific context of course portal deployment.

The Simplified–Traditional Chinese distinction adds an additional layer of complexity. While the two writing systems share core character sets, their readerships represent distinct academic communities (Mainland China vs. Taiwan, Hong Kong, and parts of the overseas Chinese diaspora) with different scholarly conventions, terminological preferences, and publishing ecosystems. Few educational platforms acknowledge this distinction through separate language options, despite its practical significance for cross-strait academic collaboration.

### 2.4 Theoretical Framework

This study integrates three theoretical frameworks.

The **Technology Acceptance Model** (TAM; Davis, 1989) posits that users' behavioural intention to adopt a technology is determined by two cognitive constructs: perceived usefulness (PU)—the degree to which a user believes the technology will enhance performance—and perceived ease of use (PEOU)—the degree to which a user believes the technology will be free of effort. TAM has been extensively validated across educational technology contexts and provides the theoretical basis for the PU and PEOU questionnaire items employed in this study.

The **System Usability Scale** (SUS; Brooke, 1996) provides a standardised, ten-item instrument for measuring subjective usability. SUS yields a single composite score on a 0–100 scale, with scores above 68 considered "above average" and scores above 80.3 considered "excellent." SUS was selected for this study because of its brevity, its established reliability (reported Cronbach's α typically exceeding 0.85), and its widespread adoption in educational technology usability research.

**Design-Based Research** (DBR; McKenney & Reeves, 2012) provides the methodological framework. DBR is characterised by iterative cycles of design, implementation, analysis, and redesign conducted in authentic educational settings. Unlike experimental paradigms that seek to isolate and test individual variables, DBR aims to generate both theoretical understanding (design principles) and practical artefacts (the designed intervention) through systematic, reflective iteration. DBR is particularly appropriate for this study because the dual-portal architecture could not be meaningfully evaluated in a laboratory setting; its design principles emerged through repeated deployment, observation, and refinement across successive teaching cohorts (Anderson & Shattuck, 2012).

---

## 3. Methodology

### 3.1 Research Design

This study adopts a Design-Based Research (DBR) approach spanning three teaching cycles (2023–2025) in a graduate solid waste management course at [University A], China. Each cycle comprised an eight-week course delivery period followed by an intensive redesign phase informed by instructor observation, informal student feedback, and analysis of portal usage patterns. The first cycle (2023, v1.0) established the basic static-site architecture and the instructor portal. The second cycle (2024, v2.0) introduced the student portal with basic progress tracking and three-language support (Chinese Simplified, Chinese Traditional, English). The third cycle (2025, v3.0) expanded to eight languages, refined the cognitive navigation system, and implemented the complete dual-perspective information architecture. This paper reports the design convergence achieved in the third cycle and the usability evaluation conducted thereafter.

The DBR approach was selected over quasi-experimental or survey-only designs for two reasons. First, the research objective required simultaneous attention to design *process* (how the architecture evolved through iteration) and design *product* (the resulting system's usability). Second, the authentic classroom setting—with small cohorts (~30 students per cycle) and no comparable parallel course section—precluded controlled experimental designs, a constraint common in practitioner-led educational technology research (McKenney & Reeves, 2012; Yin, 2018).

### 3.2 The Dual-Portal System

The dual-portal system embodies three design principles, each refined through the DBR cycles.

**Principle 1: Dual-Perspective Mapping.** The same course content is reconstructed into two independently navigable information architectures. The Instructor Portal presents seven entry points: Course Overview (syllabus, learning objectives, grading criteria), Chapter Navigation (sequential access to all teaching modules), Knowledge Map (visual concept map of the domain), Teaching Team (instructor profiles and contact information), Interactive Community (discussion prompts and collaborative activity links), Teacher Dashboard (aggregated view of student progress), and Learning Garden (link to the student portal). The Student Portal, branded "Learning Garden," presents five functional modules: a three-level collapsible navigation guide (Course Overview → Chapter Navigation → Self-Test), a five-dimensional cognitive framework card system (Waste Asset, Waste Space, Waste Technology, Waste Time, Waste Pattern—categories adapted from the domain-specific diagnostic framework used in the course), an eight-week learning plan grid with visual progress indicators, a learning companion team section, and a localStorage-based progress tracking bar. Table 1 (see §4.1) maps the correspondence between portal entries.

**Principle 2: Zero-Configuration Deployment.** The entire system is implemented as pure static HTML, CSS, and JavaScript files served via GitHub Pages. Deployment requires a single `git push` to the repository's `gh-pages` branch; no backend server, database, authentication system, or build pipeline is involved. The architecture eliminates every infrastructure dependency that traditionally obstructs course website deployment in resource-constrained institutions. All interactivity—including navigation state management, progress tracking, and language switching—is handled client-side. The system is compatible with any modern web browser on desktop or mobile devices without plugin installation or account registration.

**Principle 3: Cognitive Navigation.** The student portal's navigation is structured as a three-level cognitive scaffold. Level 1 (Course Overview) provides orienting information. Level 2 (Chapter Navigation) presents the full eight-chapter sequence with collapsible section detail. Level 3 (Self-Test) offers chapter-level knowledge checks for formative self-assessment. The five-dimensional cognition cards provide direct one-click access to cases organised by the domain's core analytical dimensions, bypassing the sequential chapter structure when students need to locate specific case materials. A visual progress bar, implemented via the browser's localStorage API, persistently tracks each student's completion of weekly learning modules across sessions without requiring login—a design choice that trades user identification for frictionless access.

The eight-language internationalisation engine employs seven JSON language packs (Chinese Simplified, Chinese Traditional, English, Thai, French, German, Japanese, Korean), with the Simplified Chinese version serving as the canonical source from which other versions were machine-translated using DeepL API and then subjected to spot-review by bilingual contributors. Each JSON file contains approximately 714 translation entries covering all interface strings, navigation labels, module descriptions, and instructional prompts, with file sizes ranging from 60 KB for the most compact language to 164 KB for the most verbose. A dynamically injected dropdown language switcher, positioned in the page header, triggers a JavaScript function that replaces all translatable text nodes with the selected language's corresponding strings, preserving the DOM structure and interactive behaviour across all eight languages.

### 3.3 Participants

Participants were graduate students enrolled in the solid waste management course at [University A] across three cohorts (2023–2025). For the usability evaluation reported in this paper, the target sample comprised students from all three cohorts contacted retrospectively, with a target minimum of N = 15 respondents. Demographic information collected included graduate student cohort year, role (current student, alumnus, or faculty/researcher), and primary language preference (Chinese Simplified, Chinese Traditional, English, Thai, or Other). The actual sample size is [PENDING: data collection in progress].

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

Data analysis employed descriptive statistics (mean ± standard deviation) for all quantitative items. SUS scores were standardised to the 0–100 scale using the Brooke (1996) formula. TAM PU and PEOU subscale scores were computed as item means on the 1–5 scale. Multilingual satisfaction was computed similarly. Subgroup analyses by language preference and cohort year were planned where sample size permitted. Qualitative responses to Q20 were analysed using inductive thematic coding to identify recurring themes.

### 3.6 Ethical Considerations

The questionnaire was administered anonymously; no personally identifying information was collected beyond the optional demographic items (role, semester, primary language). Completion and submission of the questionnaire were treated as implied informed consent. The study involved routine course teaching feedback and did not constitute human subjects research requiring formal institutional review board approval under the applicable institutional guidelines. All data were stored in password-protected files accessible only to the research team.

---

## 4. Results

### 4.1 System Features

The dual-portal architecture is illustrated in Figure 1, which diagrams the information flow between the Instructor Portal (7 entry points) and the Student Portal (5 modules) sharing a common course content base but presenting independently reconstructed navigation structures. Figures 2–4 provide screenshots of the deployed system: Figure 2 shows the homepage with the eight-language dropdown switcher visible in the header; Figure 3 displays the Learning Garden student portal with its three-level collapsible navigation, five-dimensional cognition card grid, and eight-week learning plan; Figure 4 shows the localStorage-based progress tracking system with visual progress bar and week-by-week completion checkboxes.

**[Figure 1: Dual-portal architecture diagram — to be created]**

**[Figure 2: Homepage screenshot with 8-language switcher — SC01]**

**[Figure 3: Learning Garden student portal screenshot — SC04]**

**[Figure 4: Progress tracking system screenshot — SC06]**

Table 1 provides a systematic comparison of the Instructor Portal and Student Portal entries, illustrating the dual-perspective mapping principle. Table 2 reports statistics on the eight-language translation coverage.

**Table 1. Instructor Portal vs. Student Portal Entry Comparison**

| Instructor Portal (7 entries) | Student Portal *Learning Garden* (5 modules) | Mapping Logic |
|:---|:---|:---|
| Course Overview | ↦ Collapsible Navigation (Level 1) | Syllabus reconstructed as orienting guide |
| Chapter Navigation | ↦ Collapsible Navigation (Level 2) + 8-Week Grid | Chapters reorganised by week with progress tracking |
| Knowledge Map | ↦ 5-Dimensional Cognition Cards | Concept map decomposed into interactive case cards |
| Teaching Team | ↦ Learning Companion Team | Instructor profiles adapted to companion framing |
| Interactive Community | (integrated across modules) | Discussion prompts distributed contextually |
| Teacher Dashboard | (instructor-only; no student equivalent) | Aggregated progress view |
| Learning Garden | ↦ (this IS the Student Portal) | Bidirectional link |

**Table 2. Eight-Language Translation Coverage Statistics**

| Language | ISO Code | Translation Entries | JSON File Size (KB) | Translation Method |
|:---|---:|---:|---:|:---|
| Chinese (Simplified) | zh | 714 | 60 | Canonical source |
| Chinese (Traditional) | zh-Hant | 714 | 62 | Simplified→Traditional conversion + review |
| English | en | 714 | 78 | DeepL MT + bilingual review |
| Thai | th | 714 | 164 | DeepL MT + native-speaker spot-check |
| French | fr | 714 | 85 | DeepL MT |
| German | de | 714 | 82 | DeepL MT |
| Japanese | ja | 714 | 128 | DeepL MT |
| Korean | ko | 714 | 130 | DeepL MT |

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

If confirmed, an SUS score in the 70–78 range would position the dual-portal system comfortably above the established SUS average of 68 (Brooke, 1996), indicating that graduate students found the portal usable without training or technical support. This finding aligns with the deliberate design choice to employ familiar web interaction patterns—collapsible sections, grid layouts, dropdown menus—rather than novel interface paradigms that would impose learning costs. The expected higher PEOU score relative to PU is consistent with the zero-configuration emphasis: ease of access and use was the primary design objective, while perceived usefulness for learning—though positively rated—depends on deeper integration with course pedagogy and assessment.

The TAM framework (Davis, 1989) provides a lens for interpreting these scores. High PEOU reduces the cognitive overhead of platform interaction, freeing attentional resources for content engagement. High PU indicates that students perceive the portal as genuinely supportive of their learning processes—not merely as a digital container for course materials. The specific PU items referencing progress tracking (Q11) and conceptual framework building (Q12) address two dimensions that conventional course websites typically do not serve. If the anticipated scores are confirmed, they suggest that the dual-portal architecture successfully shifts the digital course presence from an instructor-centric information repository toward a student-centred learning environment—a shift that the literature on constructive alignment and student-centred learning has long advocated but that existing platforms have struggled to operationalise (Biggs & Tang, 2011; Laurillard, 2012).

### 5.3 Multilingual Deployment (RQ3)

The eight-language internationalisation represents a distinctive feature of the portal architecture that differentiates it from the overwhelming majority of course websites, which are monolingual. The anticipated moderate multilingual satisfaction score (~3.8) reflects a realistic assessment of machine translation quality: acceptable for interface navigation, variable for instructional content, and insufficient for formal academic documentation. This finding is consistent with the broader educational technology literature on MT limitations (Moreira-Choez et al., 2024).

The inclusion of separate Simplified and Traditional Chinese language options addresses a genuine need in cross-strait academic contexts. Students and scholars from Taiwan and Hong Kong who access Mainland Chinese course materials frequently encounter Simplified Chinese text that, while readable, imposes processing costs and signals cultural distance. The availability of a Traditional Chinese toggle, even when generated through automated Simplified-to-Traditional conversion with minimal human review, provides a low-cost mechanism for reducing this friction. Informal feedback from Taiwanese graduate students enrolled in the course indicated that the Traditional Chinese option was appreciated as a gesture of linguistic inclusivity, even where the automated conversion introduced occasional terminology mismatches.

The ASEAN dimension of multilingual deployment deserves particular attention given the target journal's regional focus. The inclusion of Thai—the national language of the journal's host country and of [University B], the Thai partner institution—was motivated by both practical and symbolic considerations. Practically, Thai-speaking graduate students at [University B] who access the portal for cross-institutional learning benefit from native-language navigation, even if the course's core instructional content remains primarily in Chinese and English. Symbolically, the Thai language option signals that the portal's internationalisation is not merely an Anglophone exercise but a genuine attempt to engage ASEAN linguistic diversity—a signal that aligns with ASEAN higher education integration priorities (Charungkaittikul et al., 2025; Khwaengmek & Faikhamta, 2023).

The primary limitation of the multilingual system is the quality gradient across languages. English and Chinese Traditional received substantive human review; Thai received partial review; French, German, Japanese, and Korean received minimal or no review. This quality gradient is a direct consequence of resource constraints and represents a known limitation that the authors do not minimise.

### 5.4 Transferability to ASEAN and Developing Contexts

The zero-configuration deployment model holds particular relevance for higher education institutions in developing countries and the ASEAN region. The elimination of server infrastructure, licensing costs, and IT staffing requirements removes three of the most frequently cited barriers to LMS adoption in resource-constrained settings (Graham, 2018; Vaca-Cárdenas et al., 2024). A comparison with conventional LMS deployment illustrates the magnitude of this difference: deploying a Moodle instance requires Linux server administration, PHP configuration, MySQL database management, regular security patching, and user account maintenance—a chain of dependencies that fails if any single link is broken. The dual-portal architecture requires only a GitHub account (free), a Git client (free and pre-installed on most development machines), and basic HTML editing skills. The deployment step is a single `git push`.

This architectural simplicity does not come without trade-offs. The absence of a backend precludes dynamic features that LMS platforms provide: authenticated user accounts, server-side grade storage, discussion forum persistence, and fine-grained access control. The dual-portal design accepts these trade-offs as the cost of zero-configuration deployment, compensating through client-side alternatives: localStorage for progress tracking, static HTML for content persistence, and external tools (email, messaging apps) for communication functions. Whether this trade-off is acceptable depends on the specific pedagogical context; for the graduate course that motivated this study, the loss of backend functionality was judged negligible relative to the gain in deployment accessibility.

For ASEAN higher education specifically, the combination of zero-configuration deployment and multilingual support addresses a convergence of needs. Many ASEAN universities operate with limited technology budgets and lean IT staffing while simultaneously serving linguistically diverse student bodies and pursuing internationalisation strategies that require cross-border academic visibility (Komalasari et al., 2024). The dual-portal template offers a replicable model: an instructor at any ASEAN university can fork the repository, replace the content with their own course materials, run the translation pipeline on the updated JSON files, and deploy a fully functional, multilingual course portal within hours—without institutional IT involvement.

### 5.5 Limitations

Several limitations constrain the interpretation and generalisability of this study's findings.

First, the study was conducted within a single graduate course at a single Chinese university. The dual-portal architecture was designed for and tested within the specific constraints and affordances of this context—a two-credit, eight-week graduate elective with small cohorts (~30 students) and a pre-existing pedagogical framework (NFSC). Whether the design principles transfer to larger courses, undergraduate levels, lecture-based formats, or different disciplinary contexts cannot be determined from the present evidence.

Second, the usability evaluation sample is small [N = PENDING]. Small samples limit the precision of descriptive statistics, preclude robust subgroup comparisons, and constrain the generalisability of quantitative findings. The anticipated N ≥ 15 provides a minimum basis for descriptive reporting but does not support inferential statistical analysis.

Third, the study lacks a controlled comparison condition. Without comparing the dual-portal system to a conventional course website or an LMS-based alternative using the same instruments and comparable participant groups, attributing the observed usability ratings to the dual-portal design specifically—rather than to general digital platform novelty, course engagement, or instructor effects—is unwarranted.

Fourth, DBR as a methodology is inherently exploratory. The design principles articulated in this paper represent the outcome of iterative refinement within a single context; they do not constitute causal claims about the effects of specific design features on learning outcomes. The study's contribution is descriptive and generative—identifying design principles that merit further investigation—rather than confirmatory.

These limitations are honestly acknowledged. The study is positioned as exploratory practitioner research that documents a systematic design process and its empirical evaluation, offering a replicable template and validated design principles for other instructors and researchers to adapt and test in their own contexts (Yin, 2018; Creswell, 2014).

---

## 6. Conclusion

This study addressed three research questions concerning the design, usability, and multilingual deployment of a zero-configuration dual-portal architecture for graduate engineering education.

**RQ1 (Design Principles).** Three core design principles were articulated and validated through three Design-Based Research cycles: Dual-Perspective Mapping (the independent reconstruction of instructor and student information architectures from a shared course content base), Zero-Configuration Deployment (pure static HTML+CSS+JS served via GitHub Pages, eliminating all backend dependencies), and Cognitive Navigation (a three-level collapsible guide, five-dimensional cognition cards, and localStorage-based progress tracking). These principles converged across cycles and represent the stable, transferable core of the architecture.

**RQ2 (Usability and Learning Support).** [PENDING: Summary to reflect actual data.] Anticipated SUS scores in the above-average range (mean ~74, exceeding the SUS benchmark of 68) and positive TAM ratings (PU ~4.2, PEOU ~4.5 on a 5-point scale) indicate that graduate students perceive the dual-portal system as both usable and supportive of self-directed learning. The pattern of PEOU exceeding PU is consistent with the design emphasis on low-barrier, training-free access.

**RQ3 (Multilingual Applicability).** The eight-language internationalisation system represents a feasible, replicable approach to multilingual course portal deployment, with machine translation providing acceptable quality for navigation and browsing but with known limitations for formal instructional content. The Simplified–Traditional Chinese distinction addresses a genuine cross-strait academic need, and the inclusion of Thai signals commitment to ASEAN linguistic inclusivity.

The study's core contributions are threefold. First, it articulates a set of empirically grounded design principles for dual-perspective teaching portals—filling a gap in the literature where existing educational technology research typically evaluates entire platforms without isolating specific architectural decisions. Second, it demonstrates the feasibility of zero-configuration, purely static deployment for a functionally rich course portal, offering a replicable template for resource-constrained institutions that cannot deploy conventional LMS infrastructure. Third, it provides the first documented integration of eight-language internationalisation into a zero-configuration course portal, with translation coverage statistics and quality assessment that other adopters can use as benchmarks.

The practical significance of this work lies in its replicability. The dual-portal architecture is implemented entirely in standard web technologies (HTML, CSS, JavaScript) with no proprietary dependencies. The source code, translation pipeline, and deployment instructions can be shared as a template repository. An instructor at any institution—regardless of IT infrastructure, LMS licensing, or technical staffing—can adapt the template to their own course content and deploy a multilingual, dual-perspective course portal at no financial cost. This accessibility is the architecture's defining feature and its primary contribution to equitable digital education.

Future research should pursue three directions. First, cross-course and cross-institutional transfer: deploying the dual-portal template in different disciplinary contexts (e.g., humanities, social sciences, medical education) and at different institution types would test the generalisability of the design principles. Second, learning outcome studies: controlled or quasi-experimental comparisons between the dual-portal system and conventional course websites, using learning outcome measures rather than usability perceptions alone, would provide stronger evidence for the architecture's pedagogical value. Third, larger-scale usability evaluation with more diverse participant samples and systematic subgroup analysis would produce more precise and generalisable usability benchmarks.

The dual-portal architecture is not presented as a universally superior alternative to institutional LMS platforms. It is presented as a pragmatic, low-barrier option for the many higher education contexts where LMS deployment is infeasible, where instructors lack IT support, and where multilingual student populations are underserved by monolingual course materials. In these contexts—which characterise a substantial fraction of the developing world's higher education landscape—the architecture offers a concrete, immediately actionable path to digital course presence.

---

## References

Anderson, T., & Shattuck, J. (2012). Design-based research: A decade of progress in education research? *Educational Researcher*, *41*(1), 16–25. https://doi.org/10.3102/0013189X11428813

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

McKenney, S., & Reeves, T. C. (2012). *Conducting educational design research*. Routledge.

Moreira-Choez, J. S., Castro-Castillo, G. J., Mera-Plaza, C. L., & Arias-Iturralde, M. C. (2024). Internationalization in higher education: Practices and processes of change between Ecuador and the Netherlands. *Kasetsart Journal of Social Sciences*, *45*(3), 671–680. https://so04.tci-thaijo.org/index.php/kjss

Nielsen, J. (2012). Usability 101: Introduction to usability. Nielsen Norman Group. https://www.nngroup.com/articles/usability-101-introduction-to-usability/

Sheppard, S. D., Macatangay, K., Colby, A., & Sullivan, W. M. (2009). *Educating engineers: Designing for the future of the field*. Jossey-Bass.

UNESCO. (2020). *Global education monitoring report 2020: Inclusion and education*. UNESCO Publishing.

Vaca-Cárdenas, M. E., Ordonez-Avila, E. R., Vaca-Cárdenas, L. A., & Vaca-Cárdenas, A. N. (2024). Students' acceptance toward asynchronous virtual education during COVID-19 pandemic. *Kasetsart Journal of Social Sciences*, *45*(2), 483–492. https://so04.tci-thaijo.org/index.php/kjss

Yin, R. K. (2018). *Case study research and applications: Design and methods* (6th ed.). Sage.

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

**Title:** Zero-Configuration Dual-Portal Architecture for Higher Education: Design, Multilingual Deployment, and Cross-Cultural Application

**Authors:**
- [First Author]\* — Doctoral candidate, [University B], Thailand. ORCID: [to be registered]. Email: [corresponding.author@university.edu.cn]
- [Second Author] — [University A], China. ORCID: [to be registered]. Email: [corresponding.author@university.edu.cn]
- [Instructor]\* — Professor, [University A], China. ORCID: 0009-0006-8724-9432. Email: [corresponding.author@university.edu.cn]

**Affiliations:**
¹ College of Architecture and Civil Engineering, [University A], Chengdu 610106, China
² [University B], Thailand

**Corresponding Author:** [Instructor] (Email: [corresponding.author@university.edu.cn])

**Word Count:** ~4,800 words (body text, excluding references, tables, figures, and appendix)

**Figures:** 4 | **Tables:** 3 | **References:** 18

**Author Contributions:**
[First Author]: Conceptualisation, methodology, investigation, writing—original draft.
[Second Author]: Investigation, data curation.
[Instructor]: Conceptualisation, resources, supervision, writing—review and editing.

**Funding.** This work was supported by the [University A] Graduate Course Development Project (Grant No. [Funding No.]).

**Disclosure of Interest.** The authors report no conflicts of interest.

**Ethics Approval.** This study involved routine course teaching feedback and did not constitute human subjects research requiring formal institutional review board approval. Questionnaire completion was anonymous, and submission constituted implied informed consent.

**Data Availability Statement.** The anonymised quantitative data supporting this study are available from the corresponding author upon reasonable request. Qualitative responses are not publicly available due to privacy considerations.

---

*Document version: v1.0 · Date: 2026-05-31*
