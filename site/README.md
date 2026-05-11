# Mi página web — Investigadora

Sitio estático listo para GitHub Pages. Sin dependencias, sin build, sin instalar nada.

---

## Cómo subir a GitHub Pages

1. Crea un repositorio en GitHub con el nombre `tunombre.github.io`
2. Sube todos los archivos de esta carpeta al repositorio
3. Ve a **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. En 2 minutos tu página estará en `https://tunombre.github.io`

---

## Estructura de archivos

```
/
├── index.html          ← página principal (galería + sidebar)
├── README.md           ← este archivo
├── projects/           ← pon aquí las fotos de proyectos
├── teaching/           ← fotos de teaching
└── news/               ← fotos de news
```

---

## Cómo personalizar

### 1. Tu nombre y bio
En `index.html`, busca estas líneas y edítalas:

```html
<div class="sidebar-name">Tu<br>Nombre<br>Aquí</div>
<div class="sidebar-bio">I am a researcher and designer studying [tu área]</div>
```

### 2. Tus links sociales
Busca la sección `sidebar-social` y cambia los href:

```html
<a href="https://linkedin.com/in/tu-perfil" target="_blank">↗ LinkedIn</a>
<a href="https://instagram.com/tu-usuario" target="_blank">↗ Instagram</a>
```

### 3. Agregar tus proyectos / items
En `index.html`, busca el array `const ITEMS = [...]` y edita cada entrada:

```js
{
  id: 1,                          // número único, no repetir
  cat: 'projects',                // 'projects' | 'teaching' | 'news'
  label: 'nombre-archivo.jpg',    // texto que aparece bajo la imagen
  w: 120, h: 140,                 // tamaño del thumbnail en la galería (px)
  thumb: 'projects/mi-foto.jpg',  // ruta a la imagen thumbnail
  title: 'Nombre del proyecto',   // título en la página de detalle
  meta: 'Project · 2024',         // metadatos (año, institución...)
  images: [                       // imágenes en la página de detalle
    'projects/foto1.jpg',
    'projects/foto2.jpg',
  ],
  body: `<p>Descripción del proyecto.</p>
         <h2>Approach</h2>
         <p>Más detalle aquí.</p>`
},
```

### 4. Agregar imágenes
- Sube tus fotos a las carpetas `projects/`, `teaching/`, `news/`
- Referencia la ruta en el campo `thumb` e `images` de cada item
- Formatos recomendados: `.jpg` o `.webp`
- Tamaño recomendado para thumbnails: 400px de ancho máximo

### 5. La frase del encabezado
Busca el div con id `quoteEl` y edita el texto:

```html
<div class="quote" id="quoteEl">
  The world is more of a mess<br>
  than we think.<br>
  ...
</div>
```

---

## Agregar más items

Solo copia y pega un bloque del array ITEMS, cambia el `id` y rellena los campos.
No hay límite de items — el scatter los posiciona automáticamente y de forma aleatoria cada vez que se carga la página.

---

## Preguntas frecuentes

**¿Puedo cambiar el color del sidebar?**
Sí, busca `--sidebar-bg: #fce8e2;` en el CSS y cambia el color hex.

**¿Las posiciones son siempre aleatorias?**
Sí, cada vez que recargas la página o filtras por categoría, las imágenes se reposicionan aleatoriamente.

**¿Puedo agregar una sección "About"?**
Sí, agrega un item con `cat: 'about'` y añade el filtro en el sidebar. O crea una página separada `about.html` y enlázala desde el sidebar.
