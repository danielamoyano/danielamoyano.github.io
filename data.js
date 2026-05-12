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
    label: 'feminist-dataviz.jpg', w: 120, h: 140,
    thumb: '',
    title: 'Feminist Data Visualization',
    meta: 'Project · 2024',
    images: ['', ''],
    body: `<p>Describe aquí tu proyecto.</p>
           <h2>Approach</h2>
           <p>Explica cómo lo abordaste y qué encontraste.</p>`
  },
  {
    id: 2, cat: 'projects',
    label: 'scatter-study.jpg', w: 95, h: 110,
    thumb: '',
    title: 'Scatter Study',
    meta: 'Project · 2023',
    images: [''],
    body: `<p>Descripción del proyecto.</p>`
  },
  {
    id: 3, cat: 'projects',
    label: 'qual-methods.jpg', w: 130, h: 100,
    thumb: '',
    title: 'Qualitative Methods in Vis',
    meta: 'Project · 2023',
    images: ['', '', ''],
    body: `<p>Descripción del proyecto.</p>`
  },
  {
    id: 4, cat: 'teaching',
    label: 'datavis-course.jpg', w: 110, h: 90,
    thumb: '',
    title: 'Data Visualization — Spring 2024',
    meta: 'Teaching · Linköping University · 7.5 hp',
    images: ['', ''],
    body: `<p>Describe el curso: objetivos, estructura, metodología.</p>
           <h2>Materials</h2>
           <p>Links a syllabus, lecturas, ejercicios.</p>`
  },
  {
    id: 5, cat: 'teaching',
    label: 'workshop-methods.jpg', w: 90, h: 115,
    thumb: '',
    title: 'Research Methods Workshop',
    meta: 'Teaching · 2023',
    images: [''],
    body: `<p>Workshop de un día sobre métodos cualitativos para investigadoras en diseño.</p>`
  },
  {
    id: 6, cat: 'news',
    label: 'chi-2024.jpg', w: 100, h: 85,
    thumb: '',
    title: 'Paper accepted at CHI 2024',
    meta: 'News · March 2024',
    images: [''],
    body: `<p>Nuestro paper fue aceptado en ACM CHI 2024. Puedes leerlo <a href="#">aquí</a>.</p>`
  },
  {
    id: 7, cat: 'news',
    label: 'talk-stockholm.jpg', w: 85, h: 100,
    thumb: '',
    title: 'Talk at Stockholm University',
    meta: 'News · January 2024',
    images: [''],
    body: `<p>Gave an invited talk on feminist approaches to information visualization.</p>`
  },
  {
    id: 8, cat: 'news',
    label: 'seminar-phd.jpg', w: 105, h: 95,
    thumb: '',
    title: 'New PhD seminar series',
    meta: 'News · Ongoing',
    images: [''],
    body: `<p>Monthly seminars for PhD students on research writing and academic presentation.</p>`
  },
];
