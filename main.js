/* ── scatter layout ── */
const scatter = document.getElementById('scatter');

function randomPositions(n, containerW, containerH) {
  const positions = [];
  const margin = 20;
  for (let i = 0; i < n; i++) {
    let x, y, ok, attempts = 0;
    do {
      x = margin + Math.random() * (containerW - 160);
      y = margin + Math.random() * (containerH - 160);
      ok = positions.every(p => Math.abs(p.x - x) > 100 || Math.abs(p.y - y) > 80);
      attempts++;
    } while (!ok && attempts < 30);
    positions.push({ x: Math.round(x), y: Math.round(y) });
  }
  return positions;
}

function buildScatter() {
  scatter.innerHTML = '';
  const W = scatter.parentElement.clientWidth - 40 || 600;
  const H = 560;
  scatter.style.minHeight = H + 'px';

  const positions = randomPositions(ITEMS.length, W, H);

  ITEMS.forEach((item, i) => {
    const p = positions[i];
    const el = document.createElement('div');
    el.className = 'item visible';
    el.dataset.id = item.id;
    el.dataset.cat = item.cat;
    el.style.left = p.x + 'px';
    el.style.top = p.y + 'px';
    el.style.width = item.w + 'px';

    let thumbHTML;
    if (item.thumb) {
      thumbHTML = `<img class="item-thumb" src="${item.thumb}" width="${item.w}" height="${item.h}" alt="${item.title}" loading="lazy">`;
    } else {
      thumbHTML = `<div class="item-thumb placeholder" style="width:${item.w}px;height:${item.h}px">${item.label}</div>`;
    }

    el.innerHTML = `${thumbHTML}<div class="item-label"><span class="dot dot-${item.cat}"></span>${item.label}</div>`;
    el.addEventListener('click', () => openDetail(item.id));
    scatter.appendChild(el);
  });
}

function filterItems(el, cat) {
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  el.classList.add('active');

  const W = scatter.parentElement.clientWidth - 40 || 600;
  const H = 560;
  const visible = ITEMS.filter(i => cat === 'all' || i.cat === cat);
  const positions = randomPositions(visible.length, W, H);

  let vi = 0;
  document.querySelectorAll('.item').forEach(item => {
    const match = cat === 'all' || item.dataset.cat === cat;
    if (match) {
      const p = positions[vi++];
      item.style.left = p.x + 'px';
      item.style.top  = p.y + 'px';
      item.classList.remove('hidden');
      item.classList.add('visible');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });
}

function openDetail(id) {
  const item = ITEMS.find(i => i.id === id);
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailMeta').innerHTML =
    `<span class="dot dot-${item.cat}"></span>${item.meta}`;

  const imgs = document.getElementById('detailImages');
  imgs.innerHTML = item.images.map(src =>
    src
      ? `<img src="${src}" alt="">`
      : `<div class="img-placeholder">imagen aquí</div>`
  ).join('');

  document.getElementById('detailBody').innerHTML = item.body;
  document.getElementById('quoteEl').style.display = 'none';
  document.getElementById('galleryView').style.display = 'none';
  document.getElementById('detailView').classList.add('active');
}

function closeDetail() {
  document.getElementById('quoteEl').style.display = '';
  document.getElementById('galleryView').style.display = '';
  document.getElementById('detailView').classList.remove('active');
}

function goHome() {
  closeDetail();
  setTimeout(() => {
    filterItems(document.querySelector('.sidebar-nav a'), 'all');
  }, 50);
}

buildScatter();
window.addEventListener('resize', buildScatter);
