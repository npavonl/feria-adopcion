/* Lógica común a todas las fundaciones. NO editar por fundación:
   los datos (contacto y peluditos) viven en js/pets.js. */
const {name: ORG_NAME, phone: PHONE, mail: MAIL} = ORG;
PETS.forEach(p => { p.text = p.lines.join(' '); });
/* Última ficha de cada fundación: invitación a apadrinar (igual en todas) */
const APADRINA = {
  id: 'apadrina', special: true, name: '¡Apadrínalo!', sp: 'perro', label: 'Apadrinamiento', age: '',
  lines: ['Adoptar es un acto de amor y un', 'compromiso de vida; si no puedes', 'asumirlo pero quieres ayudar a un', 'peludito rescatado, ¡APADRÍNALO!']
};
APADRINA.text = APADRINA.lines.join(' ');
const ALL = [...PETS, APADRINA];

const female = p => /a$/i.test(p.label.split(' ')[0]);   // Perrita, Gatita, Cachorra…
const healthChips = p => {
  const h = p.health || {}, f = female(p) ? 'a' : 'o', out = [];
  if (h.esterilizado) out.push(`<span class="chip ok">Esterilizad${f}</span>`);
  if (h.desparasitado) out.push(`<span class="chip ok">Desparasitad${f}</span>`);
  if (h.vacunas) out.push('<span class="chip ok">Vacunas al día</span>');
  (p.notes || []).forEach(n => out.push(`<span class="chip">${n}</span>`));
  return out.join('');
};
const species = p => p.sp === 'gato' ? 'Gato' : 'Perro';
const layers = p => p.sp === 'gato' ? 'gatos' : 'perros';

const $ = s => document.querySelector(s);
const grid = $('#grid'), dlg = $('#dlg'), feed = $('#feed'), dlgm = $('#dlgm'), mficha = $('#mficha');
const isMobile = () => matchMedia('(max-width: 767px)').matches;
const wa = t => `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
$('#wa-main').href = wa(`Hola ${ORG_NAME}, quisiera información sobre la adopción.`);

/* Filtro por especie (solo aparece si la fundación tiene perros y gatos) */
let filter = 'todos';
let list = PETS;
const visible = () => PETS.filter(p => filter === 'todos' || p.sp === filter);

function cardHTML(p){
  if (p.special) return `
    <li><button class="card apadrina" data-id="${p.id}" aria-label="Ver cómo apadrinar a un peludito">
      <span class="tag">Apadrina</span>
      <span class="ph"><img src="img/logo.webp" alt="Logo de ${ORG_NAME}" loading="lazy"></span>
      <span class="meta"><span class="nm">${p.name}</span><span class="sub">Ayuda sin adoptar</span></span>
    </button></li>`;
  return `
    <li><button class="card" data-id="${p.id}" aria-label="Ver ficha de ${p.name}">
      <span class="tag">${species(p)}</span>
      <span class="ph"><img src="img/peluditos/${p.id}.webp" alt="${p.name}, ${p.label.toLowerCase()} de ${p.age}" loading="lazy"></span>
      <span class="meta"><span class="nm">${p.name}</span><span class="sub">${p.label} · ${p.age}</span></span>
    </button></li>`;
}
function renderGrid(){
  const pets = visible();
  list = [...pets, APADRINA];
  grid.innerHTML = list.map(cardHTML).join('');
  $('#count').textContent = pets.length ? `(${pets.length})` : '';
  $('#empty').classList.toggle('show', !pets.length);
  renderFeed();
}
document.querySelectorAll('.pill').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.f;
  document.querySelectorAll('.pill').forEach(x => x.setAttribute('aria-pressed', x === b));
  renderGrid();
}));

/* Ficha = una sola pieza escalable: capas + foto + textos (%, cqw) */
function fichaHTML(p){
  if (p.special) return `<div class="ficha apadrina" role="img" aria-label="${p.text}">
    <img class="l" src="../comun/img/capas/perros_1_izquierda.webp" alt="">
    <img class="c" src="../comun/img/capas/perros_2_centro_superior.webp" alt="">
    <img class="r" src="../comun/img/capas/perros_3_derecha.webp" alt="">
    <img class="logo-big" src="img/logo.webp" alt="" decoding="async">
    <p class="hello">¿No puedes adoptar?</p>
    <h2 class="pname">${p.name}</h2>
    <p class="story">${p.lines.map(l => `<span>${l}</span>`).join('')}</p>
  </div>`;
  const fs = p.fs ? ` style="font-size:${p.fs}cqw"` : '';
  return `<div class="ficha" role="img" aria-label="Ficha de adopción de ${p.name}: ${p.text}">
    <img class="l" src="../comun/img/capas/${layers(p)}_1_izquierda.webp" alt="">
    <img class="c" src="../comun/img/capas/${layers(p)}_2_centro_superior.webp" alt="">
    <img class="r" src="../comun/img/capas/${layers(p)}_3_derecha.webp" alt="">
    <img class="pet" src="img/peluditos/${p.id}.webp" alt="" loading="lazy" decoding="async" style="left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%">
    <p class="hello">Conoce a:</p>
    <h2 class="pname">${p.name}</h2>
    <p class="story"${fs}>${p.lines.map(l => `<span>${l}</span>`).join('')}</p>
  </div>`;
}
// Encoge el nombre si no cabe (mide el texto real, no el contenedor)
// Si el nombre tiene letras que no están en la fuente recortada (fonts/), se usa la fuente completa
// en todo el nombre para no mezclar dos tipografías en la misma palabra.
const LB_GLYPHS = new Set(' :ABCDEGHIJKLMNOPQRSTUZ');
function fitNames(root = feed){
  root.querySelectorAll('.pname').forEach(n => {
    if ([...n.textContent.toUpperCase()].some(c => !LB_GLYPHS.has(c))) n.classList.add('full');
    n.style.fontSize = '';
    const max = n.parentElement.clientWidth * 0.76;
    const r = document.createRange(); r.selectNodeContents(n);
    const w = r.getBoundingClientRect().width;
    if (w > max) n.style.fontSize = (parseFloat(getComputedStyle(n).fontSize) * max / w) + 'px';
  });
}
const mailTo = p => p.special
  ? `mailto:${MAIL}?subject=${encodeURIComponent('Apadrinamiento')}&body=${encodeURIComponent(`Hola ${ORG_NAME}, me gustaría apadrinar a un peludito. ¿Cómo puedo ayudar?`)}`
  : `mailto:${MAIL}?subject=${encodeURIComponent('Adopción de ' + p.name)}&body=${encodeURIComponent(`Hola ${ORG_NAME}, me interesa adoptar a ${p.name}.`)}`;
const waPet = p => p.special
  ? wa(`Hola ${ORG_NAME}, me gustaría apadrinar a un peludito. ¿Cómo puedo ayudar?`)
  : wa(`Hola ${ORG_NAME}, me interesa adoptar a ${p.name}. ¿Podrían darme más información?`);
// Textos de los botones y de la barra según sea adopción o apadrinamiento
const NOTE = document.querySelector('#dlgm .info .note:not(#i-text)');
function setMode(p){
  const ap = !!p.special;
  document.querySelectorAll('#i-wa span, #b-wa span').forEach(s => s.textContent = ap ? 'Quiero apadrinar' : 'Quiero adoptar');
  const who = document.querySelector('.adoptbar .who');
  who.firstChild.textContent = ap ? 'Apadrina a ' : 'Adopta a ';
  if (NOTE) NOTE.textContent = ap ? 'Escríbenos y te contamos cómo apadrinar.' : 'Escríbenos y coordinamos la adopción.';
}

let current = null;
function setCurrent(id){
  if (id === current) return; current = id;
  const i = list.findIndex(p => p.id === id), p = list[i];
  setMode(p);
  $('#b-name').textContent = p.special ? 'un peludito' : p.name;
  $('#counter').textContent = `${i + 1} / ${list.length}`;
  $('#b-wa').href = waPet(p);
  $('#b-mail').href = mailTo(p);
  if (dlg.open && history.state && history.state.adopt) history.replaceState({adopt:true}, '', '#' + id);
}
// La ficha más visible define el peludito actual (nombre en la barra, enlace de WhatsApp y #hash)
// Se guarda la visibilidad de TODAS las fichas, no solo las del último aviso
const vis = new Map();
const io = new IntersectionObserver(es => {
  es.forEach(e => vis.set(e.target.dataset.id, e.isIntersecting ? e.intersectionRatio : 0));
  let bestId = null, bestR = 0;
  vis.forEach((r, id) => { if (r > bestR){ bestR = r; bestId = id; } });
  if (bestId && bestR > 0.2) setCurrent(bestId);
}, {root: feed, threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]});
function renderFeed(){
  io.disconnect(); vis.clear();
  feed.innerHTML = list.map(p => `<article id="f-${p.id}" data-id="${p.id}">${fichaHTML(p)}</article>`).join('');
  feed.querySelectorAll('article').forEach(a => io.observe(a));
}

/* ---- Tablet / escritorio: modal ---- */
let mIndex = 0;
function openModal(id, push = true){
  mIndex = list.findIndex(p => p.id === id); const p = list[mIndex];
  mficha.innerHTML = fichaHTML(p).replace('loading="lazy" ', '');
  setMode(p);
  $('#i-eyebrow').textContent = p.special ? 'Apadrinamiento' : `${species(p)} en adopción`;
  $('#i-name').textContent = p.name;
  $('#i-chips').innerHTML = p.special ? '<span class="chip">Ayuda sin adoptar</span>'
    : `<span class="chip">${p.label}</span><span class="chip">${p.age}</span>${healthChips(p)}`;
  $('#i-text').textContent = p.text;
  $('#i-wa').href = waPet(p); $('#i-mail').href = mailTo(p);
  if (!dlgm.open){ dlgm.showModal(); document.body.style.overflow = 'hidden'; if (push) history.pushState({adopt:true}, '', '#' + id); }
  else history.replaceState({adopt:true}, '', '#' + id);
  current = id; dlgm.scrollTop = 0;
  requestAnimationFrame(() => fitNames(mficha));
  if (document.fonts) document.fonts.ready.then(() => fitNames(mficha));
}
const step = d => openModal(list[(mIndex + d + list.length) % list.length].id);
$('#prev').onclick = () => step(-1); $('#next').onclick = () => step(1);
$('#m-close').onclick = () => closeView();
dlgm.addEventListener('click', e => { if (e.target === dlgm || e.target === $('#sheet')) closeView(); });
dlgm.addEventListener('cancel', e => { e.preventDefault(); closeView(); });
dlgm.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
dlgm.addEventListener('close', () => { document.body.style.overflow = ''; const c = current && grid.querySelector(`[data-id="${current}"]`); if (c) c.focus({preventScroll: true}); });

/* ---- Móvil: scroll con todas las fichas ---- */
function openPet(id, push = true){
  if (!list.some(p => p.id === id)){ filter = 'todos'; const t = document.querySelector('.pill[data-f=todos]'); if (t) t.click(); else renderGrid(); }
  if (!isMobile()) return openModal(id, push);
  if (!dlg.open){ dlg.showModal(); document.body.style.overflow = 'hidden'; if (push) history.pushState({adopt:true}, '', '#' + id); }
  fitNames();
  const el = document.getElementById('f-' + id);
  feed.style.scrollSnapType = 'none';          // salto directo al peludito elegido
  el.scrollIntoView({block: 'center'});
  requestAnimationFrame(() => { feed.style.scrollSnapType = ''; });
  current = null; setCurrent(id);
  $('#close').focus({preventScroll: true});
}
function closeAll(){ if (dlg.open) dlg.close(); if (dlgm.open) dlgm.close(); }
function closeView(){ if (history.state && history.state.adopt) history.back(); else closeAll(); }
grid.addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openPet(c.dataset.id); });
$('#close').onclick = closeView;
dlg.addEventListener('cancel', e => { e.preventDefault(); closeView(); });   // tecla Esc
dlg.addEventListener('close', () => {
  document.body.style.overflow = '';
  const card = current && grid.querySelector(`[data-id="${current}"]`);
  if (card){ card.scrollIntoView({block: 'center'}); card.focus({preventScroll: true}); }
});
// Atrás/adelante: la URL manda (si tiene #peludito se abre, si no se cierra)
addEventListener('popstate', () => {
  const id = location.hash.slice(1);
  if (ALL.some(p => p.id === id)){ if (isMobile()) openPet(id, false); else openModal(id, false); }
  else closeAll();
});
// Flechas arriba/abajo: peludito anterior / siguiente
dlg.addEventListener('keydown', e => {
  if (!['ArrowDown','ArrowUp','PageDown','PageUp'].includes(e.key)) return;
  e.preventDefault();
  const i = list.findIndex(p => p.id === current), d = (e.key === 'ArrowDown' || e.key === 'PageDown') ? 1 : -1;
  const n = list[Math.min(list.length - 1, Math.max(0, i + d))];
  document.getElementById('f-' + n.id).scrollIntoView({block: 'center', behavior: 'smooth'});
});
addEventListener('resize', () => { if (dlg.open) fitNames(); if (dlgm.open) fitNames(mficha); });
if (document.fonts) document.fonts.ready.then(() => dlg.open && fitNames());

renderGrid();
// Enlace compartido (#zuko): se crea primero una entrada "catálogo" para que cerrar/atrás vuelva aquí
const h = location.hash.slice(1);
if (ALL.some(p => p.id === h)){ history.replaceState(null, '', location.pathname + location.search + '#peluditos'); openPet(h, true); }
