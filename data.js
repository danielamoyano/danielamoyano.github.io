/*
  ─────────────────────────────────────────
  ITEMS — edita este archivo para agregar
  tus proyectos, clases y noticias
  ─────────────────────────────────────────
  Campos:
    id:     número único (no repetir)
    cat:    'projects' | 'teaching' | 'news'
    label:  nombre del archivo (aparece bajo la imagen)
    w, h:   tamaño del thumbnail en la galería (px)
    thumb:  ruta a la imagen thumbnail
            deja '' si aún no tienes imagen
    title:  título en la página de detalle
    meta:   línea de metadatos
    images: array de rutas para la página de detalle
    body:   HTML del contenido (párrafos, títulos, links)
  ─────────────────────────────────────────
*/
const ITEMS = [
  {
    id: 1, cat: 'projects',
    label: 'sofia.jpg', w: 120, h: 140,
    thumb: 'projects/sofia.jpg',
    title: 'Sof+IA, sistema de oída feminista',
    meta: 'Project · 2024',
    images: ['projects/sofia2.jpg', 'projects/sofia3.jpg'],
    body: `<p>This project is a first prototype of a reporting and guidance information system for Digital Gender-Based Violence (DBGV) situations in Chile. The main objective is the design and development of a conversational agent (chatbot type) using feminist principles (Guerrero, 2022, Fair+ Latinoamérica 2022) that consider ethical issues and prioritize the needs and context of women who experience these situations daily while exercising their right to freedom of expression and opinion on social networking platforms, particularly women with a public voice (activists, academics, women involved in politics, among others).
Sof+IA is designed to assist individuals in reporting incidents of Digital Gender-Based Violence and to provide guidance on various related topics, such as how to report abuse on social media, how to file a police report, and how to enhance personal digital security. In Chile, Digital Gender-Based Violence is not officially recognized as a crime, which means the scale of this issue is largely unknown. We developed Sof+IA to begin documenting these cases and to use this data for advocacy and awareness.
The development of Sof+IA was guided by feminist principles of Artificial Intelligence. These principles emphasize collaboration, participation, autonomy, community development, situated knowledge, and the use of open and free code. We ensured that the entire process involved all relevant stakeholders. In the initial stage, we conducted interviews with survivors and feminist activists to identify key needs. In the second stage, we held workshops with participants to collaboratively build the chatbot’s conversational framework.</p>
           <p><a href="https://sofiachat.cl/">sofiachat.cl</a>
           <a href="https://feministai.pubpub.org/pub/wjfw5sx9/release/1">article</a></p>`
  },
  {
    id: 2, cat: 'projects',
    label: 'odegi.jpg', w: 150, h: 150,
    thumb: 'projects/odegi.jpg',
    title: 'Observatorio de Datos y Estadísticas de Género e Interseccionalidades',
    meta: 'Project · 2020',
    images: ['projects/odegi.jpg', 'projects/odegi1.jpg','projects/odegi2.jpg'],
    body: `<p>DODEGI is a feminist observatory that seeks to expose, 
    problematize, and combat the inequities of patriarchy through data feminism. 
    It works to promote the production, visualization, and use of gender and 
    intersectionality data from a critical and democratic perspective. Its pillars 
    include Training for data literacy, Studies and Statistics for data production, 
    analysis, and visualization, and Public Policy and Advocacy for the use of 
    this data in decision-making and public debate.</p>`
  },

   {
    id: 2, cat: 'dissemination',
    label: 'dissemination.jpg', w: 150, h: 150,
    thumb: 'projects/odegi.jpg',
    title: 'Dissemination beyond scientific paper',
    meta: 'Project · 2026',
    images: ['projects/odegi.jpg', 'projects/odegi1.jpg','projects/odegi2.jpg'],
    body: `<p>Knowledge is shaped by the format in which we decide to disseminate it. 
    For many years, the scientific community has disseminated its findings through scientific 
    articles and conference presentations. However, this linear and clean format leaves out
    many things that happen during the research process. For this reason, I am currently working 
    on different dissemination projects through different artifacts, such as zines, posters, exhibitions, 
    and pictorials to communicate research in different formats. I want to understand how the format in 
    which we communicate our research also shapes the research itself, exploring new ethical and epistemic 
    implications of communicating for broader and/or different audiences.</p>`
  },
 
  {
    id: 4, cat: 'teaching',
    label: 'vis_feminista.jpg', w: 110, h: 90,
    thumb: 'teaching/vis_feminista.jpg',
    title: 'Data Visualization with a Feminist Approach— Datagénero 2026',
    meta: 'Teaching · Datagénero',
    images: ['teaching/vis_feminista.jpg', 'teaching/vis_feminista2.jpg'],
    body: `<p>Data visualization allows us to translate large volumes of information to a human scale, making complex realities understandable. In this course we question the entrenched logic that conceives data visualization as an objective and neutral representation. From a feminist and critical perspective, we explore other ways of communicating data and information, recognizing that every visualization involves decisions, contexts, and positionings.
Throughout the course we cover both basic concepts of data visualization and current debates around its forms of representation. We ask ourselves whether it is possible to create a feminist data visualization, and what forms, languages, and methodologies it might take.
The goal is to open a highly creative and experimental space that allows us to imagine and develop fairer, situated, and more conscious data communication strategies — capable of making inequalities visible and amplifying historically marginalized voices..</p>
           <h2>Sessions</h2>
           <p>Session 1 — Introduction to Feminist Data Visualization through Experimentation
What do we mean by data visualization? What is it for? Building a shared vocabulary. Visualization that doesn't harm: conscious use of colors, text, icons, and other visual elements. Visualization as a situated practice: decisions, context, and power.</p>
<p>Session 2 — Emotion in Data Visualization
Current debates from critical and feminist perspectives. Visualizing as a sensitive, embodied, and living act. Emotion, affect, and situated experience in data visualization. Key inspiring authors working with emotion, affect, and data.</p>
<p>Session 3 — If It's Not Represented, Does It Not Count?
Data production and its absences: what gets measured and what doesn't. Historical exclusions and epistemic violence in information production. Is it possible to represent a plurality of experiences? Can we represent silence, void, and error?</p>
<p>Session 4 — Visualization as Activism, Care, and Creativity
Data visualization as political and social transformation practice. Questioning extractive and normative logics. Creativity as a strategy for imagining other ways of representing and communicating data.</p>`
  },

  {
    id: 6, cat: 'news',
    label: 'chi-2026.jpg', w: 150, h: 90,
    thumb: 'news/chi2026.jpg',
    title: 'Attended CHI 2026',
    meta: 'News · April 2026',
    images: ['news/chi2026.jpg'],
    body: `<p>Next week I'll be at CHI Barcelona. I'm so excited to experience my first CHI!
I'll be attending the Craft-based Data Physicalization workshop, bringing a project I've been thinking about for a while: how we can introduce friction into data visualization as a form of resistance to the logics of productivity and efficiency 🐢  <a href="https://osf.io/9qdfp/files/kzxa3">Read more here</a>.</p>

<p>For my PhD, I'm also exploring the backstories of research 💭 — the nonlinear, complex, and emotionally charged processes that often go hidden. I would love to talk with you about how you navigate these messy, behind-the-scenes moments, but also about how these hidden aspects can be generative, and how we might find ways to disseminate them.</p>`
  },

 
  {
  id: 9, cat: 'papers',
  label: 'pictorial.jpg', w: 150, h: 110,
  thumb: 'papers/pictorial.jpg',
  title: 'Design Vibes in a Science Museum: from @Science to @🤗',
  meta: 'Pictorial · DIS 2026',
  images: ['papers/cover.jpg'],
  body: `<h2>Abstract</h2>
  <p>While feminist and critical data theories have long critiqued the use of
data to uphold a positivist-informed view about science, few examples
offer alternative methods to display scientific constructs. In response,
we present Data & Me: an exhibit informed by feminist and critical data
theories, which we designed and launched at a local science museum.
Data & Me introduces museum visitors to data using a @🤗 vibe – a vibe
that signals that data can be #slow, #handmade, and #personal. We
designed this vibe to be noticeably different than the @Science vibe
in the rest of the museum. Throughout our design process, we adapted
visualization vibes as an analytic and generative tool in the context
of a science museum. We present four design choices that enable the
design of a vibe: visual, topical, material, and crediting. We discuss how
our exhibit aligns with ongoing discussions about alternative research
outcomes and calls for plurality in HCI</p>`
},

{
  id: 10, cat: 'papers',
  label: 'non_oppression.jpg', w: 150, h: 150,
  thumb: 'papers/non_oppression.jpg',
  title: 'Data Visualization for Non-oppression and Liberation: A Feminist Approach',
  meta: 'Article · Diseña 2022',
  images: ['papers/non_oppression.jpg'],
  body: `<h2>Abstract</h2>
  <p>In this article, we address data visualization as a political artifact in 
  light of the work of the Observatory of Data and Statistics on Gender and Intersectionalities 
  (ODEGI). We show how a feminist approach explores political dimensions in data and turns data 
  visualization into a tool of subversion and resistance against the systems of oppression, in an 
  unequal society like the Chilean. The reflections in this article seek to create dialogue around 
  the question of how data visualization can be transformed into a tool of non-oppression and liberation, 
  from a feminist approach. In line with this, the first part of the article provides a brief contextualization 
  of the political and ethical attributes of data visualization. Then, we reflect on a framework that allows us 
  to understand it as a feminist tool. We will finally delve into the ODEGI case and our use of data visualization 
  to contribute to the fight against patriarchy and other systems of oppression, giving concrete examples of 
  the categories of analysis we use in our design and decision processes. <a href="https://revistas.uc.cl/en/disena/data-visualization-for-non-oppression-and-liberation-a-feminist-approach/">Link</a></p>`
},

{
  id: 11, cat: 'papers',
  label: 'water.jpg', w: 150, h: 150,
  thumb: 'papers/water.jpg',
  title: 'Data stories of water: studying the communicative role of data visualizations within long‐form journalismh',
  meta: 'Article · CG&A 2024',
  images: ['papers/water.jpg'],
  body: `<h2>Abstract</h2>
  <p>We present a methodology for making sense of the communicative role of data visualizations in journalistic 
  storytelling and share findings from surveying water-related data stories. Data stories are a genre of long-form 
  journalism that integrate text, data visualization, and other visual expressions (e.g., photographs, illustrations, 
  videos) for the purpose of data-driven storytelling. In the last decade, a considerable number of data stories about 
  a wide range of topics have been published worldwide. Authors use a variety of techniques to make complex phenomena 
  comprehensible and use visualizations as communicative devices that shape the understanding of a given topic. Despite 
  the popularity of data stories, we, as scholars, still lack a methodological framework for assessing the communicative 
  role of visualizations in data stories. To this extent, we draw from data journalism, visual culture, and multimodality 
  studies to propose an interpretative framework in six stages. The process begins with the analysis of content blocks and 
  framing elements and ends with the identification of dimensions, patterns, and relationships between textual and visual 
  elements. The framework is put to the test by analyzing 17 data stories about water-related issues. Our observations from 
  the survey illustrate how data visualizations can shape the framing of complex topics. 
  <a href="https://onlinelibrary.wiley.com/doi/10.1111/cgf.14815/">Link</a></p>`
},

{
  id: 12, cat: 'papers',
  label: 'manifiesto.jpg', w: 150, h: 150,
  thumb: 'papers/adela_manifiesto.jpg',
  title: 'Núcleo Adela’s manifesto: Identity as Collective Creation',
  meta: 'Article · CG&A 2024',
  images: ['papers/adela_manifiesto.jpg','papers/manifiesto.jpg' ],
  body: `<h2>Abstract</h2>
  <p>
Núcleo Adela emerged in Chile in 2024 when a group of designers and educators gathered around a common concern: How can feminist 
design be practiced and taught in the Global South? This question, which challenged the current design state, marked the beginning 
of a collective project seeking to define itself and express its vision publicly. The process made us question how we wanted to build 
our identity, driving us to reflect deeply on who we are and how we represent ourselves. This sparked an exercise in co-designing 
identity, where poetry and openness became key tools in shaping a sensitive and deliberately elusive definition. This text reflects 
that creative experience as an attempt to explore and share the journey toward an identity built through dialogue, collaboration, and introspection.
  <a href="https://dl.designresearchsociety.org/learnxdesign/learnxdesign2025/visualpapers/2/">Link</a></p>`
},

 {
    id: 13, cat: 'news',
    label: 'chi-2026.jpg', w: 150, h: 90,
    thumb: 'news/chi2026.jpg',
    title: 'Attended CHI 2026',
    meta: 'News · April 2026',
    images: ['news/chi2026.jpg'],
    body: `<p>Next week I'll be at CHI Barcelona. I'm so excited to experience my first CHI!
I'll be attending the Craft-based Data Physicalization workshop, bringing a project I've been thinking about for a while: how we can introduce friction into data visualization as a form of resistance to the logics of productivity and efficiency 🐢  <a href="https://osf.io/9qdfp/files/kzxa3">Read more here</a>.</p>

<p>For my PhD, I'm also exploring the backstories of research 💭 — the nonlinear, complex, and emotionally charged processes that often go hidden. I would love to talk with you about how you navigate these messy, behind-the-scenes moments, but also about how these hidden aspects can be generative, and how we might find ways to disseminate them.</p>`
  },

  {
  id: 14, cat: 'papers',
  label: 'sex-differences.jpg', w: 150, h: 123,
  thumb: 'papers/sex-differences.jpg',
  title: 'Sex differences in work-related accidents extracted from free text in Spanish using natural language processing',
  meta: 'Article · BMC Public Health',
  images: ['papers/sex-differences.jpg'],
  body: `<h2>Abstract</h2>
  <p><strong>Background</strong>
Evidence from the global north shows that women and men significantly differ in work accidents and occupational disease rates. However, more data is needed for countries elsewhere.
</p><p>
<strong>Methods</strong>
Using natural language processing (NLP), we extracted accident mechanisms from 350,000 admission reports from the largest occupational health provider in Chile. In addition, using the same technique, we normalize occupations written in free text, following the nomenclature from the International Labour Organization (ILO).
</p><p>
<strong>Results</strong>
We found that in 57.3% of accidents, a man is affected, while in 42.7% is a woman. The most common occupation for men is operator, while for women, it is related to cleaning duties. The most common form of accident for women is falling from the same height while for men is contact with sharp objects. In this work, we demonstrate the power of NLP in the massive analysis of work-related accidents by reporting the use of large language models with human expert annotation to evaluate mechanisms extraction.
</p><p>
<strong>Conclusion</strong>
By sharing our prompts and code, we aim to help other institutions and countries extract crucial information from free text to a controlled vocabulary of ILO. Future work includes the analysis of commuting accidents and occupational diseases.
 </p><p> <a href="https://link.springer.com/article/10.1186/s12889-025-24130-z">Link</a></p>`
},

];
