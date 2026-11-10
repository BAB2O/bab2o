// bab2o
"use strict";
const EMBED = window.name === "hb-embed";
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
root.lang = "fr";
if (EMBED) root.classList.add("embed");
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

const T = {
  fr: { n3t: "Ce que j'apporte", continueTour: "Continuer la visite",
    skip: "Aller au contenu", home: "Housna Baboorally, retour en haut de page", navLabel: "Navigation principale", langLabel: "Langue", menu: "Menu", close: "Fermer",
    legalLink: "Mentions légales", toTop: "Retour en haut", n1: "Projets", n2: "À propos", n3: "Expertises", n4: "Outils", n5: "Contact", ctaHead: "Me contacter",
    toast: "Ce portfolio est aussi pensé pour mobile.", toastBtn: "Voir sur iPhone Duo", demoLbl: "Style des boutons", sharp: "Net", soft: "Doux", foldLbl: "Position de l'iPhone Duo", closed: "Fermé", opened: "Ouvert",
    role: "UX/UI Designer",
    statement: 'Je conçois des interfaces <span class="rot" aria-hidden="true"><span>claires</span><span>accessibles</span><span>intuitives</span><span>sur mesure</span></span><span class="sr">claires, accessibles et intuitives</span>, <span class="dim">de la recherche utilisateur jusqu\'à la mise en ligne.</span>',
    scroll: "Découvrir les projets", seek: "Je recherche un CDI à partir de janvier 2027.", n2s: "À propos", n3s: "Expertises",
    seeProjects: "Voir les projets", badge: "CDI", avail: "Ouverte à un CDI dès janvier 2027",
    lines: ["Je conçois des parcours UX à partir de la recherche utilisateur.", "Je dessine l'UI dans Figma, puis je l'intègre en HTML et CSS.", "Design system, responsive et accessibilité, jusqu'à la mise en ligne."], mobileLink: "Voir la version iPhone Duo", cDrag: "Glisser", cView: "Voir",
    prev: "Projet précédent", next: "Projet suivant", carLabel: "Projets", open: "Voir le projet",
    aboutText: 'Je suis Housna, UX/UI designer basée à Paris. Ma démarche part des personnes qui utiliseront l\'interface : comprendre leurs besoins, concevoir des parcours, puis les intégrer moi-même en code. <span class="dim">En dehors des écrans, j\'essaie d\'apprendre plein de choses, et j\'ai une passion pour les anecdotes nulles. <a class="ask" href="#contact">Demandez-moi l’histoire d’Ubre Blanca.</a></span>',
    minName: "Ministère de l'Économie", minRole: "Designer de politique publique", strate: "Diplôme de designer, filière interaction",
    portraitAlt: "Portrait de Housna Baboorally, en train de rire, dessiné avec des mots",
    c1h: "Comprendre avant de concevoir.", c1p: "Des parcours simples et intuitifs, nourris par l'écoute et les tests utilisateurs, pour répondre à de vrais besoins.",
    c2h: "Penser avant de construire.", c2p: "Des bibliothèques de composants documentées, pour que l'équipe parle le même langage et que le produit évolue avec cohérence.",
    c3h: "De Figma au code.", c3p: "Des interfaces intégrées en HTML et CSS, pour passer du design au code sans perdre en fidélité.",
    c4l: "Accessibilité", c4h: "Concevoir pour toutes et tous.", c4p: "Des contrastes lisibles, des textes qui s'adaptent, une navigation au clavier : des produits accessibles, pensés dès le départ.",
    pause: "Mettre en pause", play: "Relancer", toolsLabel: "Outils utilisés",
    kicker: "05", contactH: 'Et si on travaillait<br><span class="dim">ensemble ?</span>', copy: "Copier", copied: "Copié", write: "Écrire", network: "Réseau", newTab: " (nouvel onglet)", cvLbl: "Parcours complet", cv: "Mon CV", actOpen: "Ouvrir", actDl: "Télécharger", a11yLink: "Accessibilité et design system", phoneLink: "iPhone Duo", foot: "Conçu sur Figma et développé à Paris",
    p1: "Contexte", p1t: "Le client, le rôle, la durée, l'équipe.", p2: "Problème", p2t: "Ce qui n'allait pas, ou l'objectif à atteindre.", p3: "Démarche", p3t: "Recherche, parcours, wireframes, itérations.", p4: "Solution", p4t: "Les maquettes finales, en grand.", p5: "Résultats", p5t: "Chiffres, retours, enseignements.",
    soon: "Les visuels détaillés de ce projet arrivent bientôt.", nextProj: "Projet suivant",
    deviceLabel: "Aperçu sur iPhone Duo", capClosed: "iPhone Duo fermé · écran extérieur 5,4 pouces · proportions approximatives", capOpen: "iPhone Duo ouvert · écran intérieur 7,6 pouces · proportions approximatives", of: "sur",
    toMode: m => m === "light" ? "Passer en mode sombre" : "Passer en mode clair",
  },
  en: {
 n3t: "What I bring", continueTour: "Continue the tour",
    skip: "Skip to content", home: "Housna Baboorally, back to top", navLabel: "Main navigation", langLabel: "Language", menu: "Menu", close: "Close",
    legalLink: "Legal notice", toTop: "Back to top", n1: "Projects", n2: "About", n3: "Expertise", n4: "Tools", n5: "Contact", ctaHead: "Get in touch",
    toast: "This portfolio is also designed for mobile.", toastBtn: "View on iPhone Duo", demoLbl: "Button style", sharp: "Sharp", soft: "Soft", foldLbl: "iPhone Duo position", closed: "Folded", opened: "Unfolded",
    role: "UX/UI Designer",
    statement: 'I design <span class="rot" aria-hidden="true"><span>clear</span><span>accessible</span><span>intuitive</span><span>tailored</span></span><span class="sr">clear, accessible and intuitive</span> interfaces, <span class="dim">from user research all the way to launch.</span>',
    scroll: "Explore the projects", seek: "I'm looking for a permanent role starting January 2027.", n2s: "About", n3s: "Expertise",
    seeProjects: "See projects", badge: "Full-time", avail: "Open to a permanent role from January 2027",
    lines: ["I shape UX journeys grounded in user research.", "I design the UI in Figma, then build it in HTML and CSS.", "Design systems, responsive and accessibility, all the way to launch."], mobileLink: "View the iPhone Duo version", cDrag: "Drag", cView: "View",
    prev: "Previous project", next: "Next project", carLabel: "Projects", open: "View project",
    aboutText: 'I\'m Housna, a UX/UI designer based in Paris. My work starts with the people who will use the interface: understanding their needs, designing journeys, then building them in code myself. <span class="dim">Away from screens, I try to learn all sorts of things, and I have a soft spot for useless trivia. <a class="ask" href="#contact">Ask me for the story of Ubre Blanca.</a></span>',
    minName: "French Ministry of the Economy", minRole: "Public policy designer", strate: "Design degree, interaction track",
    portraitAlt: "Portrait of Housna Baboorally laughing, drawn with words",
    c1h: "Understand before designing.", c1p: "Simple, intuitive journeys shaped by listening and user testing, to meet real needs.",
    c2h: "Think before building.", c2p: "Documented component libraries, so the team speaks the same language and the product grows consistently.",
    c3h: "From Figma to code.", c3p: "Interfaces built in HTML and CSS, moving from design to code without losing fidelity.",
    c4l: "Accessibility", c4h: "Designing for everyone.", c4p: "Readable contrast, text that scales, keyboard navigation: accessible products, designed in from the start.",
    pause: "Pause", play: "Play", toolsLabel: "Tools I use",
    kicker: "05", contactH: 'Shall we work<br><span class="dim">together?</span>', copy: "Copy", copied: "Copied", write: "Write", network: "Network", newTab: " (new tab)", cvLbl: "Full résumé", cv: "My CV", actOpen: "Open", actDl: "Download", a11yLink: "Accessibility & design system", phoneLink: "iPhone Duo", foot: "Designed in Figma and built in Paris",
    p1: "Context", p1t: "The client, the role, the timeline, the team.", p2: "Problem", p2t: "What wasn't working, or the goal to reach.", p3: "Process", p3t: "Research, journeys, wireframes, iterations.", p4: "Solution", p4t: "The final designs, large.", p5: "Results", p5t: "Numbers, feedback, lessons learned.",
    soon: "Detailed visuals for this project are coming soon.", nextProj: "Next project",
    deviceLabel: "Preview on iPhone Duo", capClosed: "iPhone Duo folded · 5.4-inch cover screen · approximate proportions", capOpen: "iPhone Duo unfolded · 7.6-inch inner screen · approximate proportions", of: "of",
    toMode: m => m === "light" ? "Switch to dark mode" : "Switch to light mode",
  },
};
const PROJ = {
  fr: [
    { kind: "Front-End UI Designer, 2026", role: "Front-End UI Designer, 2026", tags: ["Intégration", "UI design", "Lookbook"], lead: "Homepage de Noël, lookbooks intégrés, newsletters et veille UX pour une marque de mode parisienne.", alt: "Site Maison 123 affiché sur un ordinateur portable posé dans un fauteuil" },
    { kind: "Un musée sur les procès des Khmers rouges, au Cambodge", role: "Un musée sur les procès des Khmers rouges, au Cambodge", tags: ["Responsive", "Expérience interactive"], lead: "Adaptation mobile d'un site, puis conception d'un musée interactif aujourd'hui ouvert au public.", alt: "Salle du musée interactif de l'ECCC avec un mur d'écrans" },
    { kind: "Sensibiliser à l'autisme en entreprise", role: "Sensibiliser à l'autisme en entreprise", tags: ["Recherche", "Co-conception", "Facilitation"], lead: "Une recherche menée en co-conception, jusqu'à une expérience VR et un atelier de sensibilisation.", alt: "Le menu de l'expérience VRBAL affiché sur un écran dans un salon" },
    { kind: "Une appli de rencontre par les histoires", role: "Une appli de rencontre par les histoires", tags: ["UI design", "Design system", "Mobile"], lead: "L'interface complète d'une nouvelle application de rencontre, de l'identité visuelle au design system.", alt: "Écran « C'est un match » de l'application Readz sur un téléphone" },
  ],
  en: [
    { kind: "Front-End UI Designer, 2026", role: "Front-End UI Designer, 2026", tags: ["Front-end", "UI design", "Lookbook"], lead: "Christmas homepage, built lookbooks, newsletters and UX research for a Parisian fashion brand.", alt: "Maison 123 website on a laptop resting in an armchair" },
    { kind: "A museum on the Khmer Rouge trials, in Cambodia", role: "A museum on the Khmer Rouge trials, in Cambodia", tags: ["Responsive", "Interactive experience"], lead: "A website adapted for mobile, then the design of an interactive museum now open to the public.", alt: "ECCC interactive museum room with a wall of screens" },
    { kind: "Autism awareness in the workplace", role: "Autism awareness in the workplace", tags: ["Research", "Co-design", "Facilitation"], lead: "Research led through co-design, all the way to a VR experience and an awareness workshop.", alt: "Vrbal interface on a screen in a living room" },
    { kind: "A story-based dating app", role: "A story-based dating app", tags: ["UI design", "Design system", "Mobile"], lead: "The complete interface of a new dating app, from visual identity to design system.", alt: "The Readz app's match screen on a phone" },
  ],
};
let lang = "fr";
function syncCv() {
  const a = document.getElementById("cvLink"); if (!a) return;
  const en = document.documentElement.lang === "en", light = document.documentElement.dataset.mode === "light";
  a.href = "cv/cv-housna-baboorally-" + (en ? "en" : "fr") + (light ? "-clair" : "-sombre") + ".pdf";
}
new MutationObserver(syncCv).observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "data-mode"] });
document.addEventListener("DOMContentLoaded", syncCv); syncCv();
function applyLang(l) {
  lang = l; root.lang = l;
  const t = T[l];
  $$("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = t[el.dataset.i18nHtml]; });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t[el.dataset.i18nAria]));
  $$("[data-i18n-alt]").forEach(el => el.alt = t[el.dataset.i18nAlt]);
  $$("[data-lang-seg]").forEach(s => { s.dataset.lang = l; s.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l)); });
  $("#phoneFrame").title = l === "fr" ? "Portfolio sur iPhone Duo" : "Portfolio on iPhone Duo";
  if (window.__fold) window.__fold();
  setMode(root.dataset.mode || "dark", false);
  pauseLabel();
  splitStatement(false);
  if (window.__car) window.__car.refresh();
  if (typeof caseEl !== "undefined" && !caseEl.hidden) fillCase(caseIdx);
  store.set("hb-lang", l);
  if (typeof syncPhone === "function") syncPhone();
  requestAnimationFrame(moveInd);
}
$$("[data-lang-seg] button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

function setMode(m, save = true) {
  root.dataset.mode = m;
  $$("[data-mode-btn]").forEach(b => b.setAttribute("aria-label", T[lang].toMode(m)));
  const meta = $('meta[name="theme-color"]'); if (meta) meta.content = m === "light" ? "#F9F9F9" : "#101010";
  if (save) store.set("hb-mode", m);
  syncPhone();
}
function syncPhone() { try { const fw = document.getElementById("phoneFrame")?.contentWindow; if (fw && fw !== window && fw.setMode && fw.applyLang) { fw.setMode(root.dataset.mode, false); if (fw.lang !== lang) fw.applyLang(lang); } } catch (e) {} }
$$("[data-mode-btn]").forEach(b => b.addEventListener("click", () => setMode(root.dataset.mode === "light" ? "dark" : "light")));
{ const hr = new Date().getHours(); setMode(hr >= 7 && hr < 17 ? "light" : "dark", false); }

let nameBuilt = false;
function buildName(animate) {
  if (nameBuilt) return; nameBuilt = true;
  const lines = $$("#nm .ln");
  let k = 0;
  const anim = animate && !reduce, START = 420;
  lines.forEach(ln => {
    const txt = ln.textContent; ln.textContent = "";
    [...txt].forEach(ch => { const s = document.createElement("span"); s.className = "ch"; s.textContent = ch; s.style.transitionDelay = (anim ? START + k++ * 35 : 0) + "ms"; ln.append(s); });
  });
  const open = document.createElement("span"); open.className = "tag t-open"; open.setAttribute("aria-hidden", "true");
  const close = document.createElement("span"); close.className = "tag t-close"; close.setAttribute("aria-hidden", "true");
  const caret = document.createElement("span"); caret.className = "caret"; caret.setAttribute("aria-hidden", "true");
  lines[0].prepend(open); lines[lines.length - 1].append(close, caret);
  const type = (el, txt, at, done) => { if (!anim) { el.textContent = txt; done && done(); return; } [...txt].forEach((c, i) => setTimeout(() => { el.textContent = txt.slice(0, i + 1); if (i === txt.length - 1 && done) done(); }, at + i * 55)); };
  type(open, "<h1>", 60);
  type(close, "</h1>", START + k * 35 + 500, () => setTimeout(() => caret.classList.add("off"), anim ? 2600 : 0));
  const go = () => { $("#nm").classList.add("in"); $(".hero").classList.add("in"); setTimeout(() => $("#nm").classList.add("ready"), reduce || !animate ? 0 : 1900); };
  if (animate && !reduce) requestAnimationFrame(() => requestAnimationFrame(go)); else go();
  if (matchMedia("(hover: hover)").matches && !reduce) {
    const chars = $$("#nm .ch");
    $("#nm").addEventListener("pointermove", e => chars.forEach(c => { const r = c.getBoundingClientRect(); const d = Math.abs(e.clientX - (r.left + r.width / 2)) + Math.abs(e.clientY - (r.top + r.height / 2)) * .6; c.style.setProperty("--lift", (Math.max(0, 1 - d / 140) * -10).toFixed(1) + "px"); }));
    $("#nm").addEventListener("pointerleave", () => chars.forEach(c => c.style.setProperty("--lift", "0px")));
  }
}
let lineTimer = null, linesPaused = false;
function splitStatement(animate) {
  buildName(animate);
  clearInterval(lineTimer);
  const box = $("#lines"), list = T[lang].lines;
  box.innerHTML = list.map((t, i) => `<span class="${i === 0 ? "on" : ""}">${t}</span>`).join("");
  $("#linesSr").textContent = list.join(" ");
  if (reduce) return;
  const items = [...box.children]; let k = 0;
  if (!box.dataset.hov) { box.dataset.hov = 1; box.addEventListener("pointerenter", () => linesPaused = true); box.addEventListener("pointerleave", () => linesPaused = false); }
  lineTimer = setInterval(() => {
    if (linesPaused) return;
    const prev = items[k]; k = (k + 1) % items.length;
    items.forEach(it => { if (it !== prev) it.className = ""; });
    prev.className = "out"; items[k].className = "on";
  }, 3400);
}

const nav = $("#mainNav"), ind = nav.querySelector(".ind"), navLinks = [...nav.querySelectorAll("a")];
let currentId = null;
function moveInd() {
  const a = navLinks.find(l => l.getAttribute("href") === "#" + currentId);
  navLinks.forEach(l => l.setAttribute("aria-current", l === a ? "true" : "false"));
  if (!a) { ind.style.opacity = 0; return; }
  ind.style.opacity = 1; ind.style.width = a.offsetWidth + "px"; ind.style.transform = `translateX(${a.offsetLeft}px)`;
}
const sections = ["projets", "apropos", "expertises", "outils"].map(id => document.getElementById(id));
const tabs = [];
function spy() {
  $("#top").classList.toggle("compact", scrollY > 24);
  if (scrollY > 500 && toast.classList.contains("show")) hideToast();
  const y = innerHeight * .45; let id = null;
  sections.forEach(s => { const r = s.getBoundingClientRect(); if (r.top <= y && r.bottom > y) id = s.id; });
  if ($("#contact").getBoundingClientRect().top < y) id = "contact";
  if (id !== currentId) { currentId = id; moveInd(); }
  tabs.forEach(t => t.setAttribute("aria-current", t.dataset.tab === (id === "outils" ? "expertises" : id) ? "true" : "false"));
}
addEventListener("scroll", spy, { passive: true }); addEventListener("resize", moveInd);

const menuBtn = $("#menuBtn"), sheet = $("#sheet");
function setMenu(open) {
  menuBtn.setAttribute("aria-expanded", open); sheet.classList.toggle("open", open); sheet.setAttribute("aria-hidden", !open);
  menuBtn.querySelector(".mtxt").textContent = open ? T[lang].close : T[lang].menu;
  document.body.style.overflow = open ? "hidden" : "";
  $("#contenu").inert = open;
  if (open) sheet.querySelector("a").focus({ preventScroll: true });
}
menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
sheet.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", e => { if (e.key === "Escape" && sheet.classList.contains("open")) { setMenu(false); menuBtn.focus(); } });

const view = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return; view.tx = clamp(e.clientX / innerWidth * 2 - 1, -1, 1); view.ty = clamp(e.clientY / innerHeight * 2 - 1, -1, 1); }, { passive: true });
const TILT = { gain: matchMedia("(hover: none)").matches ? 1.8 : 1 };
let tiltBase = null;
function onTilt(e) {
  if (e.gamma == null || e.beta == null) return;
  const ang = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  let x = e.gamma, y = e.beta;
  if (ang === 90) { x = e.beta; y = -e.gamma; } else if (ang === -90 || ang === 270) { x = -e.beta; y = e.gamma; } else if (ang === 180) { x = -e.gamma; y = -e.beta; }
  if (!tiltBase) tiltBase = { x, y };
  tiltBase.x += (x - tiltBase.x) * .01; tiltBase.y += (y - tiltBase.y) * .01;
  view.tx = clamp((x - tiltBase.x) / 18, -1, 1); view.ty = clamp((y - tiltBase.y) / 18, -1, 1);
}
addEventListener("orientationchange", () => { tiltBase = null; });
if (screen.orientation) screen.orientation.addEventListener("change", () => { tiltBase = null; });
if (matchMedia("(hover: none)").matches && "DeviceOrientationEvent" in window) {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    const ask = () => DeviceOrientationEvent.requestPermission().then(st => { if (st === "granted") { addEventListener("deviceorientation", onTilt); removeEventListener("touchend", ask); removeEventListener("click", ask); } }).catch(() => {});
    addEventListener("touchend", ask, { passive: true }); addEventListener("click", ask);
  } else addEventListener("deviceorientation", onTilt);
}

(() => {
  const stage = $("#stage"), ring = $("#ring"), cards = [...ring.children], NP = cards.length;
  const prev = $("#prev"), next = $("#next"), count = $("#count"), pcap = $("#pcap"), prole = $("#prole"), ptags = $("#ptags"), live = $("#carLive");
  const STEP = 45 * Math.PI / 180;
  let pos = 0, target = 0, shown = -1, running = false;
  let updDots = () => {};
  const wrap = (v, n) => ((v % n) + n) % n;
  const cur = () => wrap(Math.round(target), NP);
  function caption(i, force) {
    if (i === shown && !force) return; shown = i;
    const p = PROJ[lang][i];
    count.textContent = String(i + 1).padStart(2, "0") + " / " + String(NP).padStart(2, "0");
    live.textContent = `${cards[i].querySelector(".ttl").textContent}, ${i + 1} ${T[lang].of} ${NP}. ${p.role}`;
    pcap.classList.add("swap");
    setTimeout(() => { prole.textContent = p.role; ptags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join(""); pcap.classList.remove("swap"); }, reduce ? 0 : 160);
  }
  function labels() {
    cards.forEach((c, i) => {
      const name = c.querySelector(".ttl").textContent, active = i === cur();
      c.setAttribute("aria-label", `${name}, ${i + 1} ${T[lang].of} ${NP}${active ? ". " + T[lang].open : ""}`);
      c.querySelector("img").alt = PROJ[lang][i].alt;
    });
  }
  function layout() {
    const sw = stage.clientWidth, byW = Math.min(sw * (sw < 520 ? .64 : sw < 1040 ? .4 : .26), sw > 1500 ? 470 : 380);
    const vh = innerHeight, stageMax = Math.max(300, vh - 290 - (innerWidth > 1500 ? 80 : 0)), byH = (stageMax / 1.36) * 496 / 579;
    const cw = sw < 760 ? byW : Math.max(190, Math.min(byW, byH));
    stage.style.setProperty("--cw", cw + "px");
    stage.style.height = sw < 760 ? "" : Math.round(Math.min(sw > 1500 ? 800 : 620, Math.max(300, cw * 579 / 496 * 1.36 + (sw > 1500 ? 40 : 0)))) + "px";
    const R = (cw / 2 + 16) / Math.tan(STEP / 2);
    const c = cur();
    cards.forEach((card, i) => {
      const rel = wrap(i - pos + NP / 2, NP) - NP / 2, k = Math.abs(rel);
      card.style.transform = `translateZ(${R}px) rotateY(${-rel * STEP}rad) translateZ(${-R}px)`;
      card.style.opacity = clamp(1.75 - k).toFixed(3);
      card.style.visibility = k > 1.7 ? "hidden" : "visible";
      card.style.zIndex = String(10 - Math.round(k * 2));
      card.querySelector(".ttl").style.opacity = clamp(1 - k * .6, .35, 1).toFixed(2);
      card.querySelector("img").style.filter = `brightness(${(1 - Math.min(k, 1) * .4).toFixed(2)})`;
      card.classList.toggle("active", i === c && k < .3);
      card.tabIndex = i === c ? 0 : -1;
    });
    caption(c);
    updDots();
  }
  function loop() {
    pos += (target - pos) * (reduce ? 1 : .12);
    if (Math.abs(target - pos) < .0005) pos = target;
    layout();
    if (pos !== target || drag) requestAnimationFrame(loop); else running = false;
  }
  const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };
  const goTo = t => { target = t; labels(); kick(); };
  {
    const pd = document.createElement("div"); pd.className = "pdots"; pd.setAttribute("role", "group"); pd.setAttribute("data-i18n-aria", "carLabel"); pd.setAttribute("aria-label", T[lang].carLabel || "Projets");
    pd.innerHTML = '<span class="cpill" aria-hidden="true"></span>' + cards.map(() => '<button type="button"></button>').join("");
    pcap.after(pd);
    const pbs = [...pd.querySelectorAll("button")], pill = pd.querySelector(".cpill");
    pbs.forEach((b, k) => b.addEventListener("click", () => goTo(Math.round(target) + (wrap(k - cur() + NP / 2, NP) - NP / 2))));
    updDots = () => {
      if (!pbs[0].offsetWidth) return;
      const p = wrap(pos, NP), i = Math.floor(p) % NP, f = p - Math.floor(p), j = (i + 1) % NP, D = 9;
      const cx = k => pbs[k].offsetLeft + pbs[k].offsetWidth / 2;
      let left, right;
      if (j === 0) { const k = f < .5 ? i : 0; left = right = cx(k); }
      else { const a = cx(i), b = cx(j); left = a + (b - a) * Math.max(0, f * 2 - 1); right = a + (b - a) * Math.min(1, f * 2); }
      pill.style.width = (right - left + D) + "px"; pill.style.transform = `translateX(${left - D / 2}px)`;
      const c = cur(); pbs.forEach((b, k) => { b.setAttribute("aria-current", k === c ? "true" : "false"); b.setAttribute("aria-label", cards[k].querySelector(".ttl").textContent); });
    };
    addEventListener("resize", () => updDots());
  }
  prev.addEventListener("click", () => goTo(Math.round(target) - 1));
  next.addEventListener("click", () => goTo(Math.round(target) + 1));
  let drag = null, justDragged = false;
  stage.addEventListener("pointerdown", e => { if (e.button !== 0) return; drag = { id: e.pointerId, x: e.clientX, t: target, moved: false }; });
  stage.addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 8) { drag.moved = true; stage.classList.add("dragging"); try { stage.setPointerCapture(e.pointerId); } catch (_) {} }
    if (drag.moved) { drag.dx = dx; target = drag.t - dx / (stage.clientWidth * .45); kick(); }
  });
  const end = () => { if (!drag) return; if (!drag.moved) { goTo(Math.round(target)); } if (drag.moved) { justDragged = true; setTimeout(() => justDragged = false, 50); const dx = drag.dx || 0; goTo(Math.abs(dx) > 36 ? Math.round(drag.t) - Math.sign(dx) : Math.round(drag.t)); } stage.classList.remove("dragging"); drag = null; };
  stage.addEventListener("pointerup", end); stage.addEventListener("pointercancel", end);
  stage.addEventListener("contextmenu", e => e.preventDefault());
  let wheelT = null;
  stage.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault(); target += e.deltaX / 420; kick();
    clearTimeout(wheelT); wheelT = setTimeout(() => goTo(Math.round(target)), 140);
  }, { passive: false });
  stage.addEventListener("keydown", e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault(); goTo(Math.round(target) + (e.key === "ArrowLeft" ? -1 : 1));
    cards[cur()].focus({ preventScroll: true });
  });
  cards.forEach((card, i) => card.addEventListener("click", () => {
    if (justDragged) return;
    if (i === cur()) { openCase(i); return; }
    goTo(Math.round(target) + (wrap(i - cur() + NP / 2, NP) - NP / 2));
  }));
  addEventListener("resize", () => { layout(); });
  window.__car = { refresh() { labels(); caption(cur(), true); }, go: i => goTo(Math.round(target) + (wrap(i - cur() + NP / 2, NP) - NP / 2)), cur, NP, cards };
  labels(); layout(); caption(0, true);
})();

const caseEl = $("#case");
let lastFocus = null, caseIdx = 0;
function trap(container, e) {
  if (e.key !== "Tab") return;
  const f = [...container.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')].filter(x => x.offsetParent !== null || x === document.activeElement);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

const BRIEF = {
  fr: { h: ["Rôle", "Contexte", "Livrables", "Résultat"], p: [
    ["Front-End UI Designer", "Maison 123, Groupe Etam, de juillet à décembre 2026", "Homepage de Noël, lookbooks, newsletters, veille UX", "En ligne sur les huit déclinaisons du site"],
    ["Version mobile du site, puis conception du musée en équipe", "Melon Rouge Agency, en 2025, avec un designer senior", "Maquettes mobiles, plan, parcours, stations interactives", "Musée ouvert au public en 2026"],
    ["Toute la conception, seule : recherche, VR, kit, atelier et sensibilisation", "Strate École de Design, filière interaction", "Expérience VR, kit d'atelier", "Un atelier de sensibilisation prêt à l'emploi"],
    ["Brainstorming et conception", "Projet de groupe à Strate", "Identité, parcours, UI, design system", "Un prototype de l'app de bout en bout"] ] },
  en: { h: ["Role", "Context", "Deliverables", "Outcome"], p: [
    ["Front-End UI Designer", "Maison 123, Etam Group, July to December 2026", "Christmas homepage, lookbooks, newsletters, UX research", "Live on all eight versions of the site"],
    ["Mobile version of the site, then museum design as a team", "Melon Rouge Agency, 2025, with a senior designer", "Mobile mockups, floor plan, visitor path, interactive stations", "Museum open to the public in 2026"],
    ["The whole design, solo: research, VR, kit, workshop and awareness-raising", "Strate School of Design, interaction track", "VR experience, workshop kit", "A ready-to-run awareness workshop"],
    ["Brainstorming and design", "Group project at Strate", "Identity, journey, UI, design system", "An end-to-end prototype of the app"] ] },
};
const SECT = {
  fr: [["Une marque, huit sites", "Entre la DA et le code", "À parcourir comme en ligne", "Au quotidien"],
       ["Raconter un procès", "Du site au musée", "Quatre zones, neuf stations", "Ouvert depuis juillet 2026"],
       ["Une personne réelle", "Une cinquantaine de vécus", "Ressentir, puis agir", "L'atelier"],
       ["Read + Rizz", "Trois partis pris", "Quatre étapes", "Jusqu'à l'App Store"]],
  en: [["One brand, eight sites", "Between art direction and code", "Browse it like the live site", "Day to day"],
       ["Telling the story of a trial", "From website to museum", "Four zones, nine stations", "Open since July 2026"],
       ["A real person", "Around fifty lived experiences", "Feel, then act", "The workshop"],
       ["Read + Rizz", "Three design calls", "Four steps", "All the way to the App Store"]] };
function applyBrief(i) {
  heroLayout();
  $$("#caseCustom [data-sec]").forEach(el => el.textContent = SECT[lang][i][+el.dataset.sec]);
  const m = $("#caseCustom .m-meta"); if (!m) return;
  const b = BRIEF[lang];
  m.className = "m-meta m-brief";
  m.innerHTML = b.h.map((h, j) => `<div${j === 3 ? ' class="res"' : ""}><dt>${h}</dt><dd>${b.p[i][j]}</dd></div>`).join("");
}
let caseSeen = new Set();
function fillCase(i) {
  caseIdx = i;
  caseSeen.add(i);
  { const nb = $("#caseNext [data-i18n]"); if (nb) { const last = caseSeen.size >= window.__car.NP; nb.dataset.i18n = last ? "continueTour" : "nextProj"; nb.textContent = T[lang][nb.dataset.i18n]; } }
  const custom = true;
  $$("#caseCustom video").forEach(v => v.pause());
  $("#caseGeneric").hidden = custom; $("#caseCustom").hidden = !custom;
  caseEl.setAttribute("aria-labelledby", i === 3 ? "caseTitleR" : custom ? "caseTitleM" : "caseTitle");
  if (i === 1) { caseEl.setAttribute("aria-labelledby", "caseTitleE"); buildEccc(); applyBrief(1); $("#caseNum").textContent = "02 / 0" + window.__car.NP; return; }
  if (i === 2) { caseEl.setAttribute("aria-labelledby", "caseTitleV"); buildVrbal(); applyBrief(2); $("#caseNum").textContent = "03 / 0" + window.__car.NP; return; }
  if (i === 3) { buildReadz(); applyBrief(3); $("#caseNum").textContent = "04 / 0" + window.__car.NP; return; }
  if (custom) { buildM123(); applyBrief(0); $("#caseNum").textContent = "01 / 0" + window.__car.NP; requestAnimationFrame(() => requestAnimationFrame(scrollFrames)); return; }
  $("#caseCustom").innerHTML = "";
  const p = PROJ[lang][i], card = window.__car.cards[i];
  $("#caseNum").textContent = String(i + 1).padStart(2, "0") + " / 0" + window.__car.NP;
  $("#caseKind").textContent = p.kind;
  $("#caseTitle").textContent = card.querySelector(".ttl").textContent;
  $("#caseLead").textContent = p.lead;
  $("#caseTags").innerHTML = p.tags.map(t => `<span>${t}</span>`).join("");
  const im = card.querySelector("img").cloneNode(); im.style.filter = ""; im.alt = p.alt;
  const cover = $("#caseCover"); cover.innerHTML = ""; cover.append(im);
}
function openCase(i) {
  lastFocus = document.activeElement; caseSeen = new Set(); fillCase(i);
  caseEl.hidden = false; caseEl.scrollTop = 0;
  $("#contenu").inert = true; $("#top").inert = true;
  requestAnimationFrame(() => requestAnimationFrame(() => caseEl.classList.add("open")));
  document.body.style.overflow = "hidden";
  $("#caseClose").focus({ preventScroll: true, focusVisible: false });
}
function closeCase() {
  $$("#caseCustom video").forEach(v => v.pause());
  caseEl.classList.remove("open"); document.body.style.overflow = "";
  $("#contenu").inert = false; $("#top").inert = false;
  setTimeout(() => { caseEl.hidden = true; }, reduce ? 0 : 650);
  lastFocus?.focus({ preventScroll: true });
}
$("#caseClose").addEventListener("click", closeCase);
$("#caseNext").addEventListener("click", () => { if (caseSeen.size >= window.__car.NP) { closeCase(); setTimeout(() => document.getElementById("apropos").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }), reduce ? 0 : 680); return; } const n = (caseIdx + 1) % window.__car.NP; fillCase(n); caseEl.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); window.__car.go(n); $("#caseClose").focus({ preventScroll: true, focusVisible: false }); });
caseEl.addEventListener("keydown", e => { if (e.key === "Escape") closeCase(); trap(caseEl, e); });

(() => {
  const host = document.querySelector(".avail"), path = host && host.querySelector(".bloom path");
  if (!path) return;
  const N = 120, PETALS = 8;
  const shape = k => {
    const R = 4 + 3.2 * k, A = .75 * k, rot = k * Math.PI / 8;
    let d = "";
    for (let i = 0; i <= N; i++) { const t = i / N * Math.PI * 2, r = R + A * Math.cos(PETALS * t); d += (i ? "L" : "M") + (Math.cos(t + rot) * r).toFixed(2) + " " + (Math.sin(t + rot) * r).toFixed(2); }
    d += "Z";
    const q = 0;
    if (q > .05) d += `M${-q} ${-q}H${q}V${q}H${-q}Z`;
    return d;
  };
  let k = 0, target = 0, raf = 0;
  const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const go = to => { target = to; if (reduce) { k = to; path.setAttribute("d", shape(k)); return; } cancelAnimationFrame(raf); const from = k, t0 = performance.now(), dur = 520;
    const step = now => { const p = Math.min(1, (now - t0) / dur); k = from + (target - from) * ease(p); path.setAttribute("d", shape(k)); if (p < 1) raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); };
  path.setAttribute("d", shape(0)); return;
  host.addEventListener("mouseenter", () => go(1)); host.addEventListener("mouseleave", () => go(0));
  host.addEventListener("focus", () => go(1)); host.addEventListener("blur", () => go(0));
  if (matchMedia("(hover: none)").matches && !reduce) { const loop = () => { go(1); setTimeout(() => go(0), 1800); }; setTimeout(loop, 1400); setInterval(loop, 5200); }
  
})();

(() => {
  const row = document.querySelector("[data-cards]"), box = document.querySelector("[data-cdots]");
  if (!row || !box) return;
  const cs = [...row.children], bs = [...box.querySelectorAll("button")], pill = box.querySelector(".cpill");
  const step = () => cs.length > 1 ? cs[1].offsetLeft - cs[0].offsetLeft : 1;
  const upd = () => {
    if (!bs[0].offsetWidth) return;
    const p = Math.max(0, Math.min(cs.length - 1, row.scrollLeft / step())), i = Math.floor(p), f = p - i;
    const cx = k => bs[k].offsetLeft + bs[k].offsetWidth / 2, D = 9;
    const a = cx(i), b = cx(Math.min(i + 1, bs.length - 1));
    const left = a + (b - a) * Math.max(0, f * 2 - 1), right = a + (b - a) * Math.min(1, f * 2);
    pill.style.width = (right - left + D) + "px"; pill.style.transform = `translateX(${left - D / 2}px)`;
    bs.forEach((x, k) => x.setAttribute("aria-current", k === Math.round(p) ? "true" : "false"));
  };
  bs.forEach((x, k) => x.addEventListener("click", () => row.scrollTo({ left: k * step(), behavior: reduce ? "auto" : "smooth" })));
  row.addEventListener("scroll", () => requestAnimationFrame(upd), { passive: true }); addEventListener("resize", upd); upd();
})();

const TOOLS = ["Figma", "Adobe", "Miro", "HTML", "CSS", "JavaScript", "VS Code", "Salesforce", "Contentstack", "Algolia", "Insider One", "JustRelate", "WinSCP", "Notion", "Claude", "Microsoft Office"];
const TOOLS_KEY = 6;
$("#mrow").innerHTML = [...TOOLS, ...TOOLS].map((t, i) => `<span class="${i % TOOLS.length < TOOLS_KEY ? "key" : ""}${i % TOOLS.length === 0 ? " first" : ""}">${t}</span>`).join("");
{ const mq = $("#marquee"); mq.classList.add("wait"); const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { mq.classList.remove("wait"); io.disconnect(); } }), { threshold: .4 }); io.observe(mq); }
const marquee = $("#marquee");
function pauseLabel() { marquee.classList.toggle("paused", reduce); }
if (matchMedia("(hover: none)").matches) marquee.addEventListener("click", () => marquee.classList.toggle("held"));

const toast = $("#toast"), device = $("#device"), phone = $("#phone"), frame = $("#phoneFrame");
const FOLD = { closed: { w: 376, h: 816, r: 58 }, open: { w: 736, h: 868, r: 44 } };
let fold = "closed";
function fitPhone() {
  const f = FOLD[fold];
  device.style.setProperty("--pw", f.w + "px"); device.style.setProperty("--ph", f.h + "px"); device.style.setProperty("--pr", (f.r + 12) + "px");
  device.dataset.fold = fold;
  const s = Math.min(1, (innerHeight - 170) / (f.h + 24), (innerWidth - 48) / (f.w + 24));
  phone.style.setProperty("--s", s.toFixed(3));
  frame.style.transform = `scale(${s.toFixed(3)})`;
  $("#devCap").textContent = fold === "open" ? T[lang].capOpen : T[lang].capClosed;
  $$("#foldSeg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === fold));
  $("#foldSeg").dataset.lang = fold === "open" ? "en" : "fr";
}
window.__fold = () => fitPhone();
$$("#foldSeg button").forEach(b => b.addEventListener("click", () => { fold = b.dataset.f; fitPhone(); }));
function openDevice() {
  lastFocus = document.activeElement;
  if (!frame.getAttribute("src")) { frame.addEventListener("load", syncPhone); frame.src = location.pathname; } else syncPhone();
  fitPhone(); device.hidden = false;
  requestAnimationFrame(() => device.classList.add("open"));
  $("#contenu").inert = true; $("#top").inert = true;
  $("#deviceClose").focus({ preventScroll: true });
  hideToast();
}
function closeDevice() {
  device.classList.remove("open"); $("#contenu").inert = false; $("#top").inert = false;
  setTimeout(() => device.hidden = true, reduce ? 0 : 350);
  lastFocus?.focus({ preventScroll: true });
}
function hideToast() { toast.classList.remove("show"); setTimeout(() => toast.hidden = true, 400); store.set("hb-toast", "1"); }
$("#seePhone").addEventListener("click", openDevice);
$("#toastX").addEventListener("click", hideToast);
$("#deviceClose").addEventListener("click", closeDevice);
device.addEventListener("click", e => { if (e.target === device) closeDevice(); });
device.addEventListener("keydown", e => { if (e.key === "Escape") closeDevice(); trap(device, e); });
addEventListener("resize", fitPhone);
$("#seePhone2").addEventListener("click", openDevice);
{ const tt = $(".foot-top"); if (tt) tt.addEventListener("click", e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }); }

(() => {
  const fig = $("#portrait"), pre = $("#face"), img = fig.querySelector("img"), wordEl = fig.querySelector(".face-word");
  const COLS = 128, ROWS = 96, N = COLS * ROWS;
  const ss = (a, b, v) => { v = clamp((v - a) / (b - a)); return v * v * (3 - 2 * v); };
  const WORDS_FR = "comprendre observer concevoir prototyper tester itérer intégrer écouter wireframe parcours composant grille accessibilité ";
  const WORDS_EN = "wireframe prototype user flow design system typography 12-column grid AA contrast accessibility responsive component visual hierarchy persona user journey user testing mockup Figma UX research micro-interaction call to action white space mobile first palette iconography feedback onboarding affordance empathy layout auto layout variants tokens interface usability journey map A/B test heuristics navigation storyboard moodboard rhythm alignment hover states ";
  let WORDS = WORDS_FR;
  const GL = "·:-=+*/<>";
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let L = null, M = null, visible = true, last = 0;
  const ptr = { x: -1, y: -1, in: false, px: 0, py: 0 }, waves = [];
    const wordAt = (x, y) => { x = Math.round(x); y = Math.round(y); const k = (y * COLS + x) % WORDS.length; if (WORDS[k] === " ") return null; let a = k, b = k; while (a > 0 && WORDS[a - 1] !== " ") a--; while (b < WORDS.length && WORDS[b] !== " ") b++; const x0 = Math.max(0, x - (k - a)), x1 = Math.min(COLS, x + (b - k)); return { w: WORDS.slice(a, b).slice(x0 - (x - (k - a)), (x0 - (x - (k - a))) + (x1 - x0)), x0, y, key: y * COLS + x0 }; };
  let dwellKey = -1, dwellT = 0;
  const move = e => { const r = pre.getBoundingClientRect(); ptr.x = (e.clientX - r.left) / r.width * COLS; ptr.y = (e.clientY - r.top) / r.height * ROWS; ptr.px = e.clientX - fig.getBoundingClientRect().left; ptr.py = e.clientY - fig.getBoundingClientRect().top; ptr.in = true; };
  fig.addEventListener("pointermove", move);
  fig.addEventListener("pointerleave", () => { ptr.in = false; wordEl.classList.remove("on"); });
  fig.addEventListener("pointerdown", e => { move(e); waves.push({ x: ptr.x, y: ptr.y, t: performance.now() }); if (waves.length > 4) waves.shift(); dwellT = 0; if (e.pointerType !== "mouse") setTimeout(() => { ptr.in = false; wordEl.classList.remove("on"); }, 1400); });
  if ("IntersectionObserver" in window) new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(fig);
  const fit = () => { const pr = document.createElement("span"); pr.style.cssText = "position:absolute;visibility:hidden;white-space:pre;font:inherit;font-size:100px"; pr.textContent = "x".repeat(100); pre.appendChild(pr); const cw = pr.getBoundingClientRect().width / 100 / 100; pr.remove(); const w = fig.clientWidth, h = fig.clientHeight; const fs = Math.min(w / (COLS * cw), h / (ROWS * 1.1)); pre.style.fontSize = fs.toFixed(3) + "px"; pre.style.lineHeight = "1.1"; pre.style.width = (COLS * cw * fs) + "px"; pre.style.left = ((w - COLS * cw * fs) / 2) + "px"; };
  fit(); addEventListener("resize", fit); if (window.ResizeObserver) new ResizeObserver(fit).observe(fig); document.fonts && document.fonts.ready.then(fit);
  function sample() {
    const cv = document.createElement("canvas"); cv.width = COLS; cv.height = ROWS;
    const ctx = cv.getContext("2d"); ctx.imageSmoothingQuality = "high"; ctx.drawImage(img, 0, 0, COLS, ROWS);
    const d = ctx.getImageData(0, 0, COLS, ROWS).data;
    L = new Float32Array(N); M = new Float32Array(N);
    for (let i = 0; i < N; i++) { M[i] = d[i * 4 + 3] / 255; L[i] = M[i] > .02 ? d[i * 4] / 255 : 0; }
  }
  const idx = (x, y) => clamp(Math.round(y), 0, ROWS - 1) * COLS + clamp(Math.round(x), 0, COLS - 1);
  const R = 10;
  function render(now) {
    if (L && visible && now - last > 50) {
      last = now;
      view.x += (view.tx - view.x) * .2; view.y += (view.ty - view.y) * .2;
      while (waves.length && now - waves[0].t > 1400) waves.shift();
      const light = root.dataset.mode === "light";
      WORDS = root.lang === "en" ? WORDS_EN : WORDS_FR;
      let out = "", onFace = false;
      for (let y = 0; y < ROWS; y++) {
        let cur = -1, buf = "";
        const flush = () => { if (buf) out += cur > 0 ? `<span class="c${cur}">${esc(buf)}</span>` : buf; buf = ""; };
        for (let x = 0; x < COLS; x++) {
          const d0 = L[y * COLS + x];
          let sx = x - view.x * (d0 - .35) * 5 * TILT.gain, sy = y - view.y * (d0 - .35) * 2.6 * TILT.gain, boost = 0, glitch = 0;
          if (ptr.in) {
            const dx = (x - ptr.x) * .6, dy = (y - ptr.y) * 1.1, dist = Math.hypot(dx, dy);
            if (dist < R) { const k = dist / R, f = 1; sx = ptr.x + (sx - ptr.x) * f; sy = ptr.y + (sy - ptr.y) * f; boost += (1 - k) * .14; }
          }
          for (const w of waves) {
            const age = (now - w.t) / 1400, rad = age * 80, dist = Math.hypot((x - w.x) * .6, (y - w.y) * 1.1), band = Math.abs(dist - rad);
            if (band < 2.4) { const a = (1 - band / 2.4) * (1 - age); boost += a * .22; glitch = Math.max(glitch, a * .5); }
          }
          const i = idx(sx, sy), me = M[i]; let b = L[i];
          b = light ? me * ss(.4, .92, 1 - b) * (1 - ss(.72, 1, sy / ROWS) * .7) : me * Math.pow(ss(.1, .78, b), .85);
          b = Math.min(1, b + (me > .05 ? boost : boost * .25));
          let ch = WORDS[(y * COLS + x) % WORDS.length];
          if (!reduce && glitch > 0 && Math.random() < glitch * .35) ch = GL[(Math.random() * GL.length) | 0];
          const lv = b < .07 ? 0 : Math.min(6, 1 + Math.floor(b * 6));
          if (ptr.in && Math.round(x) === Math.round(ptr.x) && Math.round(y) === Math.round(ptr.y)) onFace = lv > 0 && me > .05;
          if (lv !== cur) { flush(); cur = lv; }
          buf += lv ? (ch === " " ? "·" : ch) : " ";
        }
        flush(); out += "\n";
      }
      pre.innerHTML = out;
      const hit = ptr.in && onFace ? wordAt(ptr.x, ptr.y) : null;
      if (hit && hit.w.length > 2) {
        if (hit.key !== dwellKey) { dwellKey = hit.key; dwellT = now; wordEl.classList.remove("on"); }
        else if (now - dwellT > 420 && !wordEl.classList.contains("on")) {
          const fs = parseFloat(getComputedStyle(pre).fontSize), cw = pre.getBoundingClientRect().width / COLS;
          wordEl.style.fontSize = fs + "px"; wordEl.textContent = hit.w;
          wordEl.style.left = (pre.offsetLeft + hit.x0 * cw) + "px"; wordEl.style.top = (hit.y * fs * 1.1) + "px";
          wordEl.classList.add("on");
        }
      } else { dwellKey = -1; wordEl.classList.remove("on"); }
    }
    if (!reduce) requestAnimationFrame(render);
  }
  (img.complete ? Promise.resolve() : new Promise(r => img.onload = r)).then(() => { sample(); render(1e9); last = 0; if (!reduce) requestAnimationFrame(render); });
  new MutationObserver(() => { if (reduce && L) { last = 0; render(performance.now() + 1e9); } }).observe(root, { attributes: true, attributeFilter: ["lang", "data-mode"] });
})();

(() => {
  const NS = "http://www.w3.org/2000/svg";
  const mk = (svg, tag, attrs = {}) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); svg.appendChild(e); return e; };
  const rot = ([x, y, z], ax, ay) => { let c = Math.cos(ay), s = Math.sin(ay); [x, z] = [x * c + z * s, -x * s + z * c]; c = Math.cos(ax); s = Math.sin(ax); [y, z] = [y * c - z * s, y * s + z * c]; return [x, y, z]; };
  function wire(svg, verts, edges) {
    const lines = edges.map(() => mk(svg, "line"));
    return (ax, ay, scale, cx = 60, cy = 40) => {
      const p = verts.map(v => rot(v, ax, ay));
      edges.forEach(([a, b], i) => { const A = p[a], B = p[b], z = (A[2] + B[2]) / 2, l = lines[i];
        l.setAttribute("x1", (cx + A[0] * scale).toFixed(2)); l.setAttribute("y1", (cy + A[1] * scale).toFixed(2));
        l.setAttribute("x2", (cx + B[0] * scale).toFixed(2)); l.setAttribute("y2", (cy + B[1] * scale).toFixed(2));
        l.setAttribute("opacity", clamp(.85 - z * .35, .2, 1).toFixed(2)); });
    };
  }
  const cubeV = []; for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) cubeV.push([x, y, z]);
  const cubeE = []; cubeV.forEach((a, i) => cubeV.forEach((b, j) => { if (j > i && a.filter((v, k) => v !== b[k]).length === 1) cubeE.push([i, j]); }));
  const sc = $("#absCircles"), rings = [[33, 0], [28, 3], [17, 8]].map(([r, k]) => ({ el: mk(sc, "circle", { r, cx: 60, cy: 40 }), k }));
  const sv = $("#absCubes"), outer = wire(sv, cubeV, cubeE), inner = wire(sv, cubeV, cubeE);
  const sb = $("#absBento"), LAYOUTS = [
    [[20, 6, 30, 18], [52, 6, 48, 18], [20, 26, 30, 48], [52, 26, 22, 20], [76, 26, 24, 48], [52, 48, 22, 26]],
    [[20, 6, 48, 30], [70, 6, 30, 18], [20, 38, 22, 36], [44, 38, 24, 36], [70, 26, 30, 22], [70, 50, 30, 24]],
    [[20, 6, 80, 18], [20, 26, 39, 24], [61, 26, 39, 24], [20, 52, 25, 22], [47, 52, 26, 22], [75, 52, 25, 22]],
  ];
  const boxes = LAYOUTS[0].map(r => mk(sb, "rect", { rx: 1.5, x: r[0], y: r[1], width: r[2], height: r[3] }));
  
  let lit = 0;
  let lay = 0, layAt = 0;
  const ssv = $("#absSphere"), SV = [], SE = [], SEG = 28;
  [-60, -30, 0, 30, 60].forEach(lat => { const b = SV.length, r = Math.cos(lat * Math.PI / 180), y = Math.sin(lat * Math.PI / 180); for (let i = 0; i < SEG; i++) { const a = i / SEG * Math.PI * 2; SV.push([Math.cos(a) * r, y, Math.sin(a) * r]); SE.push([b + i, b + (i + 1) % SEG]); } });
  for (let m = 0; m < 6; m++) { const b = SV.length, lon = m / 6 * Math.PI; for (let i = 0; i < SEG; i++) { const a = i / SEG * Math.PI * 2; SV.push([Math.cos(a) * Math.cos(lon), Math.sin(a), Math.cos(a) * Math.sin(lon)]); SE.push([b + i, b + (i + 1) % SEG]); } }
  const sphere = wire(ssv, SV, SE);
  const tilts = $$(".tilt"), ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  let visible = true;
  if ("IntersectionObserver" in window) new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe($("#expertises"));
  function draw(now) {
    const t = now / 1000;
    if (visible) {
      view.x += (view.tx - view.x) * .1; view.y += (view.ty - view.y) * .1;
      rings.forEach(({ el, k }, i) => { el.setAttribute("cx", (60 + view.x * k * 1.4 + Math.sin(t * .5 + i) * k * .15).toFixed(2)); el.setAttribute("cy", (40 + view.y * k * .8 + Math.cos(t * .4 + i) * k * .12).toFixed(2)); });
      const ax = -.45 + view.y * .6, ay = .65 + view.x * .9 + (reduce ? 0 : t * .12);
      outer(ax, ay, 19); inner(ax + .3, ay - (reduce ? 0 : t * .35) + .6, 8.5);
      sphere(-.35 + view.y * .6, view.x * .9 + (reduce ? 0 : t * .2), 30);
      if (!reduce) {
        const HOLD = 1500, MOVE = 1100, el = now - layAt;
        if (el > HOLD + MOVE) { lay = (lay + 1) % LAYOUTS.length; layAt = now; }
        const k = ease(clamp((now - layAt - HOLD) / MOVE)), A = LAYOUTS[lay], B = LAYOUTS[(lay + 1) % LAYOUTS.length];
        boxes.forEach((bx, i) => { const r = A[i].map((v, j) => v + (B[i][j] - v) * k), px = view.x * (1 + i * .25), py = view.y * (.6 + i * .15);
          bx.setAttribute("x", (r[0] + px).toFixed(2)); bx.setAttribute("y", (r[1] + py).toFixed(2)); bx.setAttribute("width", r[2].toFixed(2)); bx.setAttribute("height", r[3].toFixed(2)); });
      }
      tilts.forEach(s => { s.style.setProperty("--ry", (view.x * 12 * TILT.gain).toFixed(2) + "deg"); s.style.setProperty("--rx", (-view.y * 10 * TILT.gain).toFixed(2) + "deg"); });
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  draw(0); if (!reduce) requestAnimationFrame(draw);
})();

$$(".card").forEach(c => c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px"); }));

(() => {
  if (EMBED || reduce || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const cur = $("#cur"), dot = cur.querySelector(".cur-dot"), ring = cur.querySelector(".cur-ring"), lbl = cur.querySelector(".cur-lbl");
  let x = -100, y = -100, rx = -100, ry = -100, down = 1, shown = false;
  addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    x = e.clientX; y = e.clientY;
    if (!shown) { rx = x; ry = y; shown = true; cur.classList.remove("hide"); }
    const t = e.target;
    const zone = t.closest && t.closest("[data-cursor]");
    const card = t.closest && t.closest(".pcard");
    let label = "";
    if (card && card.classList.contains("active")) label = T[lang].cView;
    else if (zone && zone.dataset.cursor === "drag") label = T[lang].cDrag;
    else if (zone && zone.dataset.cursor === "view") label = T[lang].cView;
    const link = t.closest && t.closest("a, button, [role=button], label, select");
    cur.classList.toggle("label", !!label);
    cur.classList.toggle("link", !label && !!link);
    if (label) lbl.textContent = label;
  }, { passive: true });
  addEventListener("pointerdown", () => { down = .82; });
  addEventListener("pointerup", () => { down = 1; });
  document.documentElement.addEventListener("mouseleave", () => { cur.classList.add("hide"); shown = false; });
  (function loop() {
    rx += (x - rx) * .16; ry += (y - ry) * .16;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) scale(${down})`;
    requestAnimationFrame(loop);
  })();
})();

const tickClock = () => { const t = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" }).format(new Date()); $("#hclock").textContent = "Paris " + t; $("#sclock").textContent = "Paris " + t; };
setInterval(tickClock, 15000);

const VB = {
  fr: { c1: "Le projet part d'un jeune homme autiste non-oralisant et s'adresse à ses collègues.", c2: "Tout part du terrain.", dm1: "Un questionnaire Google Forms, une cinquantaine de réponses, pour recueillir des vécus et des besoins", dm2: "Une co-conception avec un jeune homme autiste non-oralisant", dm3: "Trois situations retenues pour l'expérience en réalité virtuelle", c3: "Une expérience en réalité virtuelle pour ressentir, puis un kit pour agir.", c4: "Un atelier pour transformer ce qu'on a ressenti en aménagements concrets.", k1: "situations vécues en réalité virtuelle", k2: "familles de cartes dans le kit", k3: "fresque collective pour l'atelier", kick: "Projet de fin d'études à Strate", title: "Atelier de sensibilisation à l'autisme non-oralisant en entreprise",
    lead: "Une expérience en réalité virtuelle pour se mettre à la place d'un collègue autiste non-oralisant, puis un atelier pour imaginer ensemble des solutions concrètes.",
    vLabel: "Extrait de l'expérience VR",
    mRole: "Rôle", mRoleV: "Recherche, co-conception et facilitation", mCtx: "Contexte", mCtxV: "Projet de fin d'études à Strate", mFmt: "Format", mFmtV: "Expérience VR et atelier collectif", mFor: "Pour", mForV: "Les équipes en entreprise",
    s1: "Le point de départ", s1p: "Un projet construit autour d'une personne réelle, et conçu avec elle.",
    persona: "Il vient de commencer dans un magasin de surgelés. Quand le stress monte, il ne peut plus mettre de mots sur ce qu'il ressent, et ses collègues ne le voient pas.",
    tr1: "Des difficultés de communication, surtout face aux consignes floues", tr2: "Une hypersensibilité au bruit", tr3: "Une hypersensibilité à la lumière",
    s2: "Ressentir", s2p: "Casque sur la tête, les participants vivent une journée de travail à sa place, dans un magasin recréé sous Unity.",
    sc1: "Une consigne floue", sc1p: "Une collègue donne une consigne rapide et implicite. Le texte défile, les mots se mélangent : impossible de savoir quoi faire.",
    sc2: "Trop de lumière", sc2p: "Les néons et les reflets des congélateurs deviennent éblouissants. Ranger la bonne pizza devient une épreuve.",
    sc3: "Trop de bruit", sc3p: "Le son envahit l'espace et brouille l'attention. La scène montre comment un environnement plus calme rend la tâche possible.",
    s3: "Le magasin", s3p: "Vue de dessus du magasin reconstitué, avec ses rayons, ses congélateurs et ses néons.",
    calm: "Vue normale", loud: "Ce qu'il ressent", mapNote: "Basculez pour voir la surcharge lumineuse : chaque néon devient une source d'agression.",
    s4: "Le kit d'atelier", s4p: "Après l'immersion, l'équipe reçoit un kit pour passer à l'action : une lettre, une consigne et trois familles de cartes.",
    readLetter: "Lire la lettre de Sarah", hideLetter: "Masquer la lettre",
    s5: "L'atelier", s5p: "Une fresque collective pour transformer ce qu'on a ressenti en aménagements concrets de son poste.",
    r1: "Lisez les cartes et placez-les sur la fresque", r2: "Échangez ensemble et cherchez des solutions", r3: "Notez, dessinez et reliez vos idées sur la fresque",
    alt: { map: "Plan vu de dessus du magasin reconstitué dans Unity, avec les néons au plafond", kit: "Kit d'atelier : une lettre, la pochette numérotée et les trois familles de cartes", letter: "", fresque: "Fresque de l'atelier, avec les trois consignes", vHero: "Extrait de l'expérience VR" } },
  en: { c1: "The project starts from a young non-speaking autistic man and is aimed at his colleagues.", c2: "Everything starts in the field.", dm1: "A Google Form survey (around fifty responses) to gather experiences and needs", dm2: "Co-design with a young non-speaking autistic man", dm3: "Three situations kept for the virtual reality experience", c3: "A virtual reality experience to feel it, then a kit to act on it.", c4: "A workshop to turn what people felt into concrete adjustments.", k1: "situations experienced in virtual reality", k2: "card families in the kit", k3: "shared mural for the workshop", kick: "Graduation project at Strate", title: "A workplace awareness workshop on non-speaking autism",
    lead: "A virtual reality experience to step into the shoes of a non-speaking autistic colleague, followed by a workshop to come up with practical solutions together.",
    vLabel: "VR experience excerpt",
    mRole: "Role", mRoleV: "Research, co-design and facilitation", mCtx: "Context", mCtxV: "Graduation project at Strate", mFmt: "Format", mFmtV: "VR experience and group workshop", mFor: "For", mForV: "Teams in the workplace",
    s1: "The starting point", s1p: "A project built around a real person, and designed with him.",
    persona: "He has just started working at a frozen-food store. When stress builds up, he can no longer put what he feels into words, and his colleagues don't see it.",
    tr1: "Communication difficulties, especially with vague instructions", tr2: "Hypersensitivity to noise", tr3: "Hypersensitivity to light",
    s2: "Feel it", s2p: "With a headset on, participants live a workday in his place, in a store rebuilt in Unity.",
    sc1: "A vague instruction", sc1p: "A colleague gives a quick, implicit instruction. The text scrolls, the words blur: there's no way to know what to do.",
    sc2: "Too much light", sc2p: "The neon lights and freezer reflections become blinding. Putting away the right pizza becomes an ordeal.",
    sc3: "Too much noise", sc3p: "Sound fills the space and scatters attention. The scene shows how a calmer environment makes the task possible.",
    s3: "The store", s3p: "Top view of the rebuilt store, with its aisles, freezers and neon lights.",
    calm: "Normal view", loud: "What he feels", mapNote: "Switch to see the light overload: every neon becomes a source of strain.",
    s4: "The workshop kit", s4p: "After the immersion, the team receives a kit to take action: a letter, a brief and three families of cards.",
    readLetter: "Read Sarah's letter", hideLetter: "Hide the letter",
    s5: "The workshop", s5p: "A shared mural to turn what people felt into concrete adjustments to his job.",
    r1: "Read the cards and place them on the mural", r2: "Talk it through and look for solutions", r3: "Write, draw and connect your ideas on the mural",
    alt: { map: "Top view of the store rebuilt in Unity, with neon lights on the ceiling", kit: "Workshop kit: a letter, the numbered folder and the three families of cards", letter: "", fresque: "Workshop mural, with the three instructions", vHero: "VR experience excerpt" } },
};
function buildVrbal() {
  const host = $("#caseCustom"), t = VB[lang];
  host.innerHTML = ""; host.append($("#tplVrbal").content.cloneNode(true));
  host.querySelectorAll("[data-t]").forEach(el => el.textContent = t[el.dataset.t]);
  host.querySelectorAll("[data-alt]").forEach(el => el.alt = t.alt[el.dataset.alt]);
  const hero = host.querySelector("[data-auto]"), ph = host.querySelector("[data-hover-pause]");
  vidCtl(ph, hero);
  initSV(host, t);
  const map = host.querySelector("[data-map]"), ms = host.querySelector("[data-mapseg]");
  ms.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { const loud = b.dataset.m === "loud"; map.classList.toggle("loud", loud); ms.dataset.lang = loud ? "en" : "fr"; ms.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); }));
  initKit(host, t);
}
function initKit(host, t) {
  const box = host.querySelector("[data-vk]"); if (!box) return;
  const k = t.kit, P = "assets/img/vrbal/kit/", panel = box.querySelector("[data-vkpanel]"), cta = box.querySelector("[data-vkopen]");
  const X = { fr: { closedH: "Dans le carnet", closedP: "Remis à l'équipe après l'immersion pour mener l'atelier sur la fresque collective : une lettre, une consigne recto verso et trois familles de cartes.", openH: "À vous de jouer", openP: "Touchez un point sur le carnet pour sortir un élément du kit.", flip: "Retourner la fiche", recto: "Recto", verso: "Verso", letterAlt: "Lettre manuscrite de Sarah, job coach, adressée au salarié (prénom et magasin masqués)", rectoAlt: "Recto de la consigne : « À vous de jouer l'équipe ! », le but de l'atelier", versoAlt: "Verso de la consigne : les trois étapes de l'atelier sur la fresque" },
              en: { closedH: "Inside the booklet", closedP: "Handed to the team after the immersion to run the workshop on the shared mural: a letter, a two-sided brief and three families of cards.", openH: "Your turn", openP: "Tap a dot on the booklet to take an item out of the kit.", flip: "Flip the brief", recto: "Front", verso: "Back", letterAlt: "Handwritten letter from Sarah, job coach, to the employee (name and store hidden)", rectoAlt: "Front of the brief: “Your turn, team!”, the workshop's goal", versoAlt: "Back of the brief: the three workshop steps on the fresco" } }[lang];
  const A = box.querySelector("[data-vkimg=a]"), B = box.querySelector("[data-vkimg=b]"), back = box.querySelector("[data-vkback]");
  const hots = [...box.querySelectorAll("[data-vkp]")];
  const STATE = { letter: "carnet", fiche: "carnet-consigne", g: "carnet-cartes-g", y: "carnet-cartes-y", p: "carnet-cartes-p" };
  let cur = null, opened = false, idx = 0, front = A;
  const sfx = () => root.dataset.mode === "light" ? "-clair" : "-sombre";
  const src = () => P + (cur ? STATE[cur] : "carnet") + sfx() + ".webp";
  const preload = () => Object.values(STATE).forEach(s => { const i = new Image(); i.src = P + s + sfx() + ".webp"; });
  const swap = () => { const nb = front === A ? B : A, s = src(); if (front.getAttribute("src") === s) return;
    const go = () => { nb.classList.add("on"); front.classList.remove("on"); front = nb; };
    nb.src = s; nb.decode ? nb.decode().then(go, go) : go(); };
  const flap = box.querySelector("[data-vkflap]");
  A.src = src(); back.src = flap.src = P + "carnet" + sfx() + ".webp"; preload();
  cta.textContent = k.open;
  hots.forEach(b => { b.setAttribute("aria-label", k[b.dataset.vkp]); b.tabIndex = -1; b.querySelector(".vk-tip").textContent = k[b.dataset.vkp]; });
  const intro = () => { panel.dataset.kind = "intro"; panel.innerHTML = `<div class="vk-intro"><h5>${opened ? X.openH : X.closedH}</h5><p>${opened ? X.openP : X.closedP}</p></div>`; };
  intro();
  const open = () => { if (opened) return; opened = true; box.classList.add("open"); cta.tabIndex = -1; cta.setAttribute("aria-hidden", "true");
    hots.forEach(b => b.tabIndex = 0); if (!cur) intro();
    setTimeout(() => hots[0].focus({ preventScroll: true }), reduce ? 0 : 1300); setTimeout(() => box.classList.add("ready"), reduce ? 0 : 2600); };
  cta.addEventListener("click", open); box.querySelector(".vk-cover").addEventListener("click", open);
  const deck = f => {
    panel.insertAdjacentHTML("beforeend", `<div class="vk-deck"><div class="vk-cards" tabindex="0">${[1, 2, 3, 4].map(n => `<img src="${P}carte-${f}${n}.webp" alt="${k.cardAlt} ${n}" draggable="false">`).join("")}</div>
      <ol class="vk-steps">${k.steps.map((s, i) => `<li><button type="button" data-s="${i}"><span>${i + 1}</span>${s}</button></li>`).join("")}</ol></div>`);
    const imgs = [...panel.querySelectorAll(".vk-cards img")], steps = [...panel.querySelectorAll(".vk-steps button")];
    const show = n => { idx = (n + 4) % 4; imgs.forEach((im, i) => { const r = (i - idx + 4) % 4; im.style.setProperty("--r", r); im.classList.toggle("on", r === 0); im.setAttribute("aria-hidden", r === 0 ? "false" : "true"); });
      steps.forEach((b, i) => b.setAttribute("aria-current", i === idx ? "step" : "false")); };
    steps.forEach(b => b.addEventListener("click", () => show(+b.dataset.s)));
    const cw = panel.querySelector(".vk-cards");
    imgs.forEach(im => im.addEventListener("click", () => show(idx + 1)));
    let sx = null;
    cw.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
    cw.addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1)); }, { passive: true });
    cw.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); show(idx + 1); } if (e.key === "ArrowLeft") { e.preventDefault(); show(idx - 1); } });
    show(0);
  };
  const pick = p => {
    if (!opened) open();
    cur = cur === p ? null : p; swap();
    hots.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.vkp === cur)));
    box.dataset.pick = cur || "";
    panel.classList.remove("in"); void panel.offsetWidth; panel.classList.add("in");
    if (!cur) { intro(); return; }
    panel.dataset.kind = cur; panel.innerHTML = "";
    if (cur === "letter") panel.innerHTML = `<figure class="vk-paper"><img src="${P}lettre.webp" alt="${X.letterAlt}"></figure><div class="sr">${k.letterHtml}</div>`;
    else if (cur === "fiche") {
      panel.innerHTML = `<button type="button" class="vk-flip" aria-label="${X.flip}"><span class="vk-fi"><img class="vk-fr" src="${P}consigne-recto.webp" alt="${X.rectoAlt}"><img class="vk-fv" src="${P}consigne-verso.webp" alt="${X.versoAlt}"></span></button><div class="vk-seg" role="group" aria-label="${X.flip}"><button type="button" class="vk-fbtn" aria-pressed="true">${X.recto}</button><button type="button" class="vk-fbtn" aria-pressed="false">${X.verso}</button></div>`;
      const fl = panel.querySelector(".vk-flip"), sb = [...panel.querySelectorAll(".vk-fbtn")];
      const setF = v => { fl.classList.toggle("turned", v); sb.forEach((b, i) => b.setAttribute("aria-pressed", String(!!i === v))); };
      fl.addEventListener("click", () => setF(!fl.classList.contains("turned"))); sb.forEach((b, i) => b.addEventListener("click", () => setF(!!i)));
    } else deck(cur);
    panel.insertAdjacentHTML("afterbegin", `<div class="vk-ph"><h5>${k[cur]}</h5><button type="button" class="vk-back">${k.back} <span aria-hidden="true">✕</span></button></div>`);
    panel.querySelector(".vk-back").addEventListener("click", () => { const c = hots.find(x => x.dataset.vkp === cur); pick(cur); c && c.focus({ preventScroll: true }); });
    setTimeout(() => { const r = panel.getBoundingClientRect(); if (r.bottom > innerHeight - 12 || r.top < 64) panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }, 80);
  };
  hots.forEach(b => b.addEventListener("click", () => pick(b.dataset.vkp)));
  box.__paint = () => { preload(); front.src = src(); back.src = flap.src = P + "carnet" + sfx() + ".webp"; };
  if (!window.__vkMO) { window.__vkMO = new MutationObserver(() => { const b = document.querySelector("[data-vk]"); b && b.__paint && b.__paint(); }); window.__vkMO.observe(root, { attributes: true, attributeFilter: ["data-mode"] }); }
}

const EC = {
  fr: { fxT: "Un musée sur les procès des Khmers rouges", fxNl: "Le besoin", fxN: "Rendre une histoire douloureuse et un procès complexe compréhensibles par tous.", fxRl: "Notre réponse", fxR: "Un musée en quatre zones, avec des stations interactives, après un premier travail sur la version mobile du site.", c1: "Trois thèmes structurent la visite.", c2: "À partir du site desktop, j'ai conçu la version mobile, aujourd'hui en pause. On nous a ensuite confié la conception du musée.", c3: "Quatre zones, des dispositifs interactifs et du vidéo mapping. Sélectionnez une station.", c4: "Quelques vues de l'exposition, à Phnom Penh.", kz: "zones de visite", ks: "stations sur le parcours", ko: "ouverture à Phnom Penh", kick: "Melon Rouge Agency, 2025", sub: "Sala Yuttikar, l'héritage des procès des Khmers rouges", full: "Chambres extraordinaires au sein des tribunaux cambodgiens (សាលាក្ដីខ្មែរក្រហម)",
    lead: "Une exposition immersive qui prolonge le site web de Melon Rouge Agency : conçue en équipe, du plan architectural jusqu'aux interactions.",
    mRole: "Rôle", mRoleV: "Conception du musée, du plan aux interactions", mWith: "Conçu avec", mWithV: "Un designer senior", mDir: "Conception, direction, supervision", mOpen: "Ouverture", mOpenV: "Juillet 2026, Phnom Penh",
    s1: "Le sujet", s1p: "L'histoire du régime des Khmers rouges et de son jugement, racontée à un large public.",
    quote: "Transformer un sujet lourd en expérience éducative et immersive, pour rendre accessible une mémoire douloureuse qui m'a personnellement touchée.",
    p1: "L'histoire", p1t: "Comprendre le régime et ce qu'ont vécu les Cambodgiens", p2: "Le jugement", p2t: "Expliquer le fonctionnement du tribunal et de ses procès", p3: "Les victimes", p3t: "Leur donner la parole, au cœur du parcours",
    s2: "Le parcours", s2p: "Dispositifs interactifs et vidéo mapping, répartis en quatre zones. Chaque station montre son rendu 3D et, quand elle existe, la réalisation sur place.",
    lgD: "Fonctionnalité numérique", lgA: "Artefact", lgN: "Contour seul : station sans rendu", plan: "Plan du musée : choisir une station",
    vR: "Rendu", vP: "Sur place", tD: "Numérique", tA: "Artefact", station: "Station", render: "Rendu", photo: "Photo",
    hint: "Cliquez sur une station pour la découvrir", stN: n => n + " stations à explorer", prevSt: "Précédente", nextSt: "Suivante",
    st: { S1A: "Entrée de l'exposition", S2A: "Projection panoramique", S2C: "Borne interactive", S2DEFG: "Frise murale", S3A: "Les archives", S3D: "Carte interactive", S3E: "Carte interactive", S4A: "Leave a Trace", S4B: "Espace témoignages" },
    s3p: "Le mur vidéo donne la parole aux survivants de l'évacuation de Phnom Penh, le 17 avril 1975.",
    vNote: "Sous-titres en français, réglables dans le lecteur.", cw: "Contenu sensible : témoignages sur le régime des Khmers rouges.",
    s4: "Sur place", s4p: "L'exposition, ouverte au public en juillet 2026.",
    cStory: "My Story, le mur des témoignages", cCarte: "Carte projetée et borne interactive", cBorne: "Pourquoi dix personnes ont-elles été poursuivies ?", cDocs: "Le volume des dossiers du procès", cArch: "Les archives à consulter", cPort: "Vitrine de portraits",
    credit: "Conception, direction, supervision : Melon Rouge Agency", site: "Site officiel de l'ECCC", map: "Voir le musée sur Google Maps", siteUrl: "https://www.eccc.gov.kh/fr",
    alt: { cover: "Mur Leave a Trace : une grille de messages lumineux, un visiteur écrit à un pupitre", story: "Salle My Story : un mur d'écrans diffuse le portrait d'une survivante face à des fauteuils blancs", trace: "Mur Leave a Trace : une grille de messages lumineux, un visiteur écrit à un pupitre", carte: "Couloir avec une carte du Cambodge projetée, une borne tactile et des panneaux d'archives photo", borne: "Borne tactile entre deux panneaux qui expliquent l'enquête du tribunal", docs: "Deux piles de documents imprimés sous un panneau explicatif", archives: "Deux visiteuses consultent un mur de tiroirs d'archives", portraits: "Une niche éclairée présente une série de portraits encadrés", render: "Rendu 3D de la station", photo: "Photo de la station réalisée" } },
  en: { fxT: "A museum on the Khmer Rouge trials", fxNl: "The need", fxN: "Make a painful history and a complex trial understandable to everyone.", fxRl: "Our answer", fxR: "A four-zone museum with interactive stations, after initial work on the website's mobile version.", c1: "Three themes shape the visit.", c2: "Starting from the desktop website, I designed the mobile version, now on hold. We were then asked to design the museum.", c3: "Four zones, interactive installations and video mapping. Select a station.", c4: "A few views of the exhibition, in Phnom Penh.", kz: "visitor zones", ks: "stations along the path", ko: "opening in Phnom Penh", kick: "Melon Rouge Agency, 2025", sub: "Sala Yuttikar, the legacy of the Khmer Rouge trials", full: "Extraordinary Chambers in the Courts of Cambodia (សាលាក្ដីខ្មែរក្រហម)",
    lead: "An immersive exhibition that extends Melon Rouge Agency's website: designed as a team, from the architectural plan to the interactions.",
    mRole: "Role", mRoleV: "Museum design, from floor plan to interactions", mWith: "Designed with", mWithV: "A senior designer", mDir: "Concept, direction, supervision", mOpen: "Opening", mOpenV: "July 2026, Phnom Penh",
    s1: "The subject", s1p: "The history of the Khmer Rouge regime and its trials, told to a wide audience.",
    quote: "Turning a heavy subject into an educational, immersive experience, to make a painful memory that touched me personally accessible to all.",
    p1: "History", p1t: "Understanding the regime and what Cambodians lived through", p2: "Justice", p2t: "Explaining how the court and its trials worked", p3: "The victims", p3t: "Giving them a voice, at the heart of the visit",
    s2: "The visit", s2p: "Interactive installations and video mapping across four zones. Each station shows its 3D render and, where it exists, the built result.",
    lgD: "Digital feature", lgA: "Artefact", lgN: "Outline only: station without a render", plan: "Museum floor plan: choose a station",
    vR: "Render", vP: "On site", tD: "Digital", tA: "Artefact", station: "Station", render: "Render", photo: "Photo",
    hint: "Click a station to explore it", stN: n => n + " stations to explore", prevSt: "Previous", nextSt: "Next",
    st: { S1A: "Exhibition entrance", S2A: "Panoramic projection", S2C: "Interactive kiosk", S2DEFG: "Wall frieze", S3A: "The archives", S3D: "Interactive map", S3E: "Interactive map", S4A: "Leave a Trace", S4B: "Testimony space" },
    s3p: "The video wall gives a voice to survivors of the evacuation of Phnom Penh on 17 April 1975.",
    vNote: "English subtitles, adjustable in the player.", cw: "Sensitive content: testimonies about the Khmer Rouge regime.",
    s4: "On site", s4p: "The exhibition, open to the public since July 2026.",
    cStory: "My Story, the testimony wall", cCarte: "Projected map and interactive kiosk", cBorne: "Why were ten individuals investigated?", cDocs: "The sheer volume of trial records", cArch: "Archives open to visitors", cPort: "Portrait display",
    credit: "Concept, direction, supervision: Melon Rouge Agency", site: "Official ECCC website", map: "See the museum on Google Maps", siteUrl: "https://www.eccc.gov.kh/en",
    alt: { cover: "Leave a Trace wall: a grid of glowing messages, a visitor writing at a desk", story: "My Story room: a wall of screens shows a survivor's portrait facing white armchairs", trace: "Leave a Trace wall: a grid of glowing messages, a visitor writing at a desk", carte: "Corridor with a projected map of Cambodia, a touch kiosk and photo archive panels", borne: "Touch kiosk between two panels explaining the court's investigation", docs: "Two stacks of printed documents beneath an explanatory panel", archives: "Two visitors browsing a wall of archive drawers", portraits: "A lit niche showing a series of framed portraits", render: "3D render of the station", photo: "Photo of the built station" } },
};
const EC_ST = {
  S2A: { r: ["s2a"] }, S2C: { r: ["s2c1", "s2c2"], k: "S2C" }, S2C2: { r: ["s2c2", "s2c1"], k: "S2C" }, S2DEFG: { r: ["s2defg"], k: "S2DEFG" }, S2D: { r: ["s2defg"], k: "S2DEFG" }, S2E: { r: ["s2defg"], k: "S2DEFG" }, S2F: { r: ["s2defg"], k: "S2DEFG" }, S2G: { r: ["s2defg"], k: "S2DEFG" }, S2H: { r: ["s2h"] },
  S3A: { r: ["s3a4", "s3a1", "s3a2", "s3a3", "s3ab"], p: "archives" }, S3B: { r: ["s3b1", "s3b2", "s3ab"] }, S3D: { r: ["s3de"], p: "carte", k: "S3D" }, S3E: { r: ["s3de"], p: "carte", k: "S3D" },
  S4A: { r: ["s1d3", "s1d1", "s1d2"], p: "trace" }, S4C: { r: ["s1d3", "s1d1", "s1d2"], p: "trace", k: "S4A" }, S4B: { r: ["s4a"], p: "story" },
};
Object.assign(EC.fr, {
  k: "Le parcours du musée", kp: "Avant les rendus 3D, tout s'est joué à la main : le récit, l'ordre des salles, l'ambiance de chaque espace.",
  kA: "La salle d'audience", kAt: "Esquisse : écran LED, bois, verre en transparence et son diffusé au-dessus du visiteur.",
  kB: "Le fil du récit", kBt: "Moving forward with justice, Bringing justice, Justice is served : trois stations avant My Story.",
  kC: "L'organisation", kCt: "Le plan de la salle, puis le contenu de chaque station, du passé vers le futur.",
  mob: "Le site, en version mobile", mobp: "Repenser chaque interaction du site pour le téléphone, sans perdre le sens. Le projet est aujourd'hui en pause.",
  statT: "clics comptés sur un seul parcours : le signal qu'il fallait simplifier.", mobQ: "Garder la profondeur du sujet, mais rendre chaque partie rapide à parcourir, au pouce.",
  m1: "Benchmark et découpage", m1t: "Le site découpé en cinq parties, avec le nombre de clics de chaque parcours.",
  m2: "Moins de clics", m2t: "Compter chaque clic, garder les grands titres, rendre l'accueil plus interactif.",
  m3: "La chronologie", m3t: "Des siècles d'histoire codés par couleur, puis les premiers écrans de la frise.",
  m4: "Le contexte historique", m4t: "Une date à la fois : le passage doit être rapide et fluide.",
  m5: "Écran par écran", m5t: "Carte des crimes, hiérarchie et déplacements de population.",
  m6: "Jouer avec la curiosité", m6t: "Un clic sur une icône zoome sur la personne ou le lieu. Défilement ou swipe, au choix.",
  learnH: "Ce que j'en ai retenu",
  l1: "Une vidéo verticale peut expliquer mieux qu'un long texte", l2: "L'icône est la clé de la compréhension", l3: "Les cartes interactives gagnent à être condensées", l4: "Laisser le choix entre défilement vertical et continu", l5: "Une interface peut rester simple et presque ludique",
  lbClose: "Fermer", lbPrev: "Page précédente", lbNext: "Page suivante", lbName: "Carnet de recherche", of: "sur",
});
Object.assign(EC.fr.alt, { kA: "Croquis au stylo de la salle d'audience imaginée pour le musée", kB: "Page de carnet : plan du parcours et les trois stations", kC: "Page de carnet : plan de la salle et organisation des stations", m1: "Page de carnet : benchmark et découpage du site en cinq parties", m2: "Page de carnet : nombre de clics par parcours et écran d'accueil", m3: "Page de carnet : frise chronologique colorée et wireframes", m4: "Page de carnet : écrans du contexte historique, une date à la fois", m5: "Page de carnet : wireframes de la carte des crimes, de la hiérarchie et des déplacements", m6: "Page de carnet : croquis d'interactions mobiles et de zoom" });
Object.assign(EC.en, {
  k: "The museum path", kp: "Before the 3D renders, everything was worked out by hand: the story, the order of the rooms, the mood of each space.",
  kA: "The courtroom", kAt: "Sketch: LED screen, wood, see-through glass and sound played above the visitor.",
  kB: "The story line", kBt: "Moving forward with justice, Bringing justice, Justice is served: three stations before My Story.",
  kC: "The layout", kCt: "The room plan, then the content of each station, from past to future.",
  mob: "The website, on mobile", mobp: "Rethinking every interaction of the site for the phone, without losing meaning. The project is currently on hold.",
  statT: "clicks counted on a single journey: a clear sign it needed simplifying.", mobQ: "Keep the depth of the subject, but make every part quick to browse, one thumb at a time.",
  m1: "Benchmark and structure", m1t: "The site split into five parts, with the number of clicks for each journey.",
  m2: "Fewer clicks", m2t: "Count every click, keep the main titles, make the home screen more interactive.",
  m3: "The timeline", m3t: "Centuries of history colour-coded, then the first timeline screens.",
  m4: "Historical context", m4t: "One date at a time: moving between them has to be quick and smooth.",
  m5: "Screen by screen", m5t: "Crime map, hierarchy and population displacement.",
  m6: "Playing with curiosity", m6t: "Tap an icon to zoom in on a person or a place. Scroll or swipe, your choice.",
  learnH: "What I took away",
  l1: "A vertical video can explain better than a long text", l2: "Icons are the key to understanding", l3: "Interactive maps work better condensed", l4: "Let people choose between vertical and continuous scrolling", l5: "An interface can stay simple, almost playful",
  lbClose: "Close", lbPrev: "Previous page", lbNext: "Next page", lbName: "Research sketchbook", of: "of",
});
Object.assign(EC.en.alt, { kA: "Pen sketch of the courtroom imagined for the museum", kB: "Sketchbook page: visitor path and the three stations", kC: "Sketchbook page: room plan and station layout", m1: "Sketchbook page: benchmark and five-part site structure", m2: "Sketchbook page: clicks per journey and home screen", m3: "Sketchbook page: colour-coded timeline and wireframes", m4: "Sketchbook page: historical context screens, one date at a time", m5: "Sketchbook page: wireframes for the crime map, hierarchy and displacement", m6: "Sketchbook page: mobile interaction and zoom sketches" });

let ecReelOff = null;
function ecSketches(host, t) {
  const desk = host.querySelector("[data-desk]");
  if (reduce) desk.classList.add("in");
  else { const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { desk.classList.add("in"); o.disconnect(); } }), { root: caseEl, threshold: .15 }); o.observe(desk); }
  const n = host.querySelector("[data-count]");
  if (!reduce) { n.textContent = "0"; const o = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; o.disconnect(); const end = +n.dataset.count, t0 = performance.now(); const step = now => { const k = Math.min(1, (now - t0) / 1400); n.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }), { threshold: .3 }); o.observe(n); }
  const reel = host.querySelector("[data-reel]");
  if (reel) {
  const track = host.querySelector("[data-track]"), prog = host.querySelector("[data-prog]"), sticky = reel.firstElementChild;
  if (ecReelOff) ecReelOff();
  let dist = 0;
  const flat = () => reduce || innerWidth <= 900;
  const size = () => { reel.classList.toggle("flat", flat()); if (flat()) { reel.style.height = ""; return; } dist = Math.max(0, track.scrollWidth - sticky.clientWidth); reel.style.height = (sticky.clientHeight + dist) + "px"; onScroll(); };
  const onScroll = () => { if (flat()) return; const top = reel.getBoundingClientRect().top - caseEl.getBoundingClientRect().top - parseFloat(getComputedStyle(sticky).top); const k = Math.min(1, Math.max(0, -top / (dist || 1))); track.style.transform = `translate3d(${-k * dist}px,0,0)`; prog.style.transform = `scaleX(${k})`; };
  caseEl.addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", size);
  ecReelOff = () => { caseEl.removeEventListener("scroll", onScroll); removeEventListener("resize", size); };
  host.querySelectorAll("[data-track] img").forEach(im => im.complete ? 0 : im.addEventListener("load", size, { once: true }));
  size();
  }
  const items = [...host.querySelectorAll("[data-lb]")], dlg = host.querySelector("[data-lbox]"), big = dlg.querySelector("[data-lbimg]");
  let at = 0;
  dlg.setAttribute("aria-label", t.lbName);
  const xb = dlg.querySelector("[data-lbx]");
  xb.innerHTML = `<span>${t.lbClose}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>`;
  if (!dlg.querySelector(".hint")) { const h = document.createElement("p"); h.className = "hint"; dlg.querySelector(".foot").append(h); }
  dlg.querySelector(".hint").textContent = lang === "fr" ? "Glissez vers le bas pour fermer" : "Swipe down to close";
  dlg.querySelector("[data-lbp]").setAttribute("aria-label", t.lbPrev); dlg.querySelector("[data-lbnx]").setAttribute("aria-label", t.lbNext);
  const show = i => { at = (i + items.length) % items.length; const b = items[at], im = b.querySelector("img"), cap = b.closest("figure").querySelector("b"); big.style.transform = ""; big.style.opacity = ""; big.classList.remove("zm"); big.src = im.src; big.alt = im.alt; dlg.querySelector("[data-lbc]").textContent = cap ? cap.textContent : ""; dlg.querySelector("[data-lbn]").textContent = `${at + 1} ${t.of} ${items.length}`; };
  let closing = false;
  const shut = () => { if (!dlg.open || closing) return; big.classList.remove("zm"); const th = items[at];
    if (reduce || !big.animate) { dlg.close(); return; }
    closing = true; dlg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, easing: "ease-in", fill: "forwards" });
    flyFrom(th.getBoundingClientRect(), true, () => { dlg.close(); dlg.getAnimations().forEach(a => a.cancel()); big.getAnimations().forEach(a => a.cancel()); closing = false; }); };
  const flyFrom = (fromR, back, done) => { if (reduce || !big.animate) { done && done(); return; } const r = big.getBoundingClientRect(); if (!r.width) { done && done(); return; }
    const s = Math.max(fromR.width / r.width, fromR.height / r.height), dx = (fromR.left + fromR.width / 2) - (r.left + r.width / 2), dy = (fromR.top + fromR.height / 2) - (r.top + r.height / 2);
    const k = [{ transform: `translate(${dx}px,${dy}px) scale(${s})`, borderRadius: "18px" }, { transform: "none", borderRadius: "4px" }];
    const a = big.animate(back ? k.reverse() : k, { duration: back ? 380 : 520, easing: "cubic-bezier(.2,.75,.15,1)", fill: back ? "forwards" : "none" }); a.onfinish = () => done && done(); };
  items.forEach((b, i) => b.addEventListener("click", () => { show(i); dlg.showModal(); document.documentElement.classList.add("lb-open"); xb.focus({ preventScroll: true });
    const fromR = b.getBoundingClientRect(); (big.decode ? big.decode() : Promise.resolve()).catch(() => {}).then(() => flyFrom(fromR, false)); }));
  xb.addEventListener("click", shut);
  const slide = d => { if (!reduce && big.animate) big.animate([{ opacity: 0, transform: `translateX(${d * 48}px)` }, { opacity: 1, transform: "none" }], { duration: 320, easing: "cubic-bezier(.2,.75,.15,1)" }); };
  dlg.querySelector("[data-lbp]").addEventListener("click", e => { e.stopPropagation(); show(at - 1); slide(-1); });
  dlg.querySelector("[data-lbnx]").addEventListener("click", e => { e.stopPropagation(); show(at + 1); slide(1); });
  dlg.addEventListener("click", e => { if (e.target.closest("button")) return; if (e.target === big) { e.stopPropagation(); const r = big.getBoundingClientRect(); big.style.transformOrigin = `${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`; big.classList.toggle("zm"); return; } shut(); });
  big.addEventListener("pointermove", e => { if (!big.classList.contains("zm") || e.pointerType !== "mouse") return; const r = big.getBoundingClientRect(); big.style.transformOrigin = `${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`; });
  dlg.addEventListener("keydown", e => { e.stopPropagation(); if (e.key === "ArrowRight") { show(at + 1); slide(1); } if (e.key === "ArrowLeft") { show(at - 1); slide(-1); } if (e.key === "Escape") { e.preventDefault(); shut(); } });
  let sx = 0, sy = 0, tracking = false;
  dlg.addEventListener("touchstart", e => { if (e.touches.length !== 1) { tracking = false; return; } tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  dlg.addEventListener("touchmove", e => { if (!tracking || e.touches.length !== 1) return; const dy = e.touches[0].clientY - sy, dx = e.touches[0].clientX - sx; if (dy > 0 && Math.abs(dy) > Math.abs(dx)) { big.style.transform = `translateY(${dy}px)`; big.style.opacity = String(Math.max(.3, 1 - dy / 400)); } }, { passive: true });
  dlg.addEventListener("touchend", e => { if (!tracking) return; tracking = false; const t0 = e.changedTouches[0], dx = t0.clientX - sx, dy = t0.clientY - sy;
    if (dy > 90 && Math.abs(dy) > Math.abs(dx)) { shut(); return; }
    big.style.transform = ""; big.style.opacity = "";
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { const d = dx < 0 ? 1 : -1; show(at + d); slide(d); } }, { passive: true });
  let pushed = false;
  dlg.addEventListener("close", () => { document.documentElement.classList.remove("lb-open"); big.style.transform = ""; big.style.opacity = ""; if (pushed && !dlg.__popped) history.back(); pushed = false; dlg.__popped = false; items[at].focus({ preventScroll: true }); });
  items.forEach(b => b.addEventListener("click", () => { try { history.pushState({ lb: 1 }, ""); pushed = true; } catch (_) {} }));
  if (!window.__lbPop) { window.__lbPop = true; window.addEventListener("popstate", () => { const d = document.querySelector("[data-lbox][open]"); if (d) { d.__popped = true; d.close(); } }); }
}

const EC_VTT = {"fr": "WEBVTT\n\n1\n00:00:04.700 --> 00:00:13.060 line:88%\nJe pensais qu'ils apportaient la paix au pays. J'ai levé les bras pour fêter leur victoire.\n\n2\n00:00:13.725 --> 00:00:19.002 line:88%\nJe n'aurais jamais imaginé qu'ils entreraient chez moi et feraient du mal à ma famille.\n\n3\n00:00:20.359 --> 00:00:28.965 line:88%\nAvant les Khmers rouges, nous vivions heureux, ma famille ne manquait de rien. La vie était belle.\n\n4\n00:00:29.045 --> 00:00:37.051 line:88%\nPuis le régime des Khmers rouges a commencé, et la vie a changé. Elle est devenue difficile.\n\n5\n00:00:37.892 --> 00:00:41.973 line:88%\nIl n'y avait plus ni bonheur, ni attention, ni amour.\n\n6\n00:00:42.053 --> 00:00:50.229 line:88%\nLe 17 avril, vers 8 ou 9 heures du matin, les soldats Khmers rouges sont entrés dans Phnom Penh\n\n7\n00:00:50.309 --> 00:00:57.998 line:88%\net ont pris la ville, près du Palais royal.\n\n8\n00:00:58.511 --> 00:01:01.709 line:88%\nVéhicules et soldats envahissaient le quartier, et j'habitais tout près.\n\n9\n00:01:01.789 --> 00:01:08.330 line:88%\nJe savais que les Khmers rouges étaient entrés, mais je croyais qu'ils apportaient la paix.\n\n10\n00:01:08.410 --> 00:01:16.386 line:88%\nIls nous ont dit de partir pour 3 jours : « Attention aux bombardements américains, sinon vous mourrez tous.\n\n11\n00:01:16.466 --> 00:01:22.075 line:88%\nSi vous ne partez pas, les Américains vont larguer des bombes. »\n\n12\n00:01:23.325 --> 00:01:26.637 line:88%\nLeur seule menace, c'était de nous tirer dessus.\n\n13\n00:01:27.398 --> 00:01:31.429 line:88%\nJe ne comprenais pas, les rues étaient si calmes, complètement vides.\n\n14\n00:01:31.509 --> 00:01:40.257 line:88%\nIls répétaient : « Tu es un espion ? » Mon mari répondait : « Non, je n'en suis pas un. »\n\n15\n00:01:40.919 --> 00:01:45.061 line:88%\nIls disaient : « Si tu n'es pas un espion, pourquoi as-tu du matériel officiel moderne ? »\n\n16\n00:01:45.141 --> 00:01:50.837 line:88%\nOn nous a forcés à quitter la ville de nuit. Nous n'avons rien pu emporter.\n\n17\n00:01:51.621 --> 00:01:59.789 line:88%\nNous avons pris notre moto, juste les vêtements que nous portions, et notre famille a quitté la ville.\n\n18\n00:02:00.855 --> 00:02:05.543 line:88%\nSur la route, on avançait lentement. J'étais enceinte, j'avais des nausées,\n\n19\n00:02:05.860 --> 00:02:12.089 line:88%\net je devais porter mon enfant de 2 ans, enceinte.\n\n20\n00:02:12.478 --> 00:02:17.531 line:88%\nNous mourions de faim. Toujours plus de gens arrivaient. Nous ne savions pas quoi faire.\n\n21\n00:02:18.319 --> 00:02:22.256 line:88%\nIls ont recommencé à nous chasser, et cette fois, c'était pour de bon.\n\n22\n00:02:23.198 --> 00:02:26.976 line:88%\nSi nous ne partions pas, ils nous abattaient.\n\n23\n00:02:27.338 --> 00:02:30.361 line:88%\nIls ont dit : « D'accord, partez. Bientôt vous rencontrerez l'Angkar.\n\n24\n00:02:30.441 --> 00:02:37.221 line:88%\nL'Angkar prendra soin de vous », et je me demandais : « Qu'est-ce que l'Angkar ? »\n\n25\n00:02:37.301 --> 00:02:39.777 line:88%\nNous dormions dans les rues pendant l'évacuation.\n\n26\n00:02:39.857 --> 00:02:47.341 line:88%\nIls nous poussaient toujours plus loin sur la route, sans que nous sachions où nous allions.\n\n27\n00:02:48.098 --> 00:02:55.883 line:88%\nUn mois plus tard, ils sont venus recueillir les biographies du « Peuple nouveau » :\n\n28\n00:02:56.385 --> 00:02:59.638 line:88%\nles habitants de Phnom Penh, les évacués, le « peuple du 17 avril ».\n\n29\n00:02:59.718 --> 00:03:03.305 line:88%\nMa mère a dû dire que je n'étais pas son fils.\n\n30\n00:03:03.385 --> 00:03:09.070 line:88%\nS'ils savaient que nous étions liés, ils arrêteraient toute notre lignée pour nous emprisonner.\n\n31\n00:03:09.150 --> 00:03:11.594 line:88%\nNous devions répondre que nous n'étions pas de la même famille.\n\n32\n00:03:11.674 --> 00:03:16.959 line:88%\nL'argent n'était plus utilisé, il n'avait plus aucune valeur.\n\n33\n00:03:17.327 --> 00:03:21.192 line:88%\nLe riz avait remplacé l'argent.\n\n34\n00:03:21.870 --> 00:03:27.689 line:88%\nNous, le peuple du 17 avril, nous attendions, nous attendions la mort.\n\n35\n00:03:28.099 --> 00:03:33.257 line:88%\nLes habitants de Phnom Penh ont dû partir, en pensant pouvoir revenir.\n\n36\n00:03:33.337 --> 00:03:38.113 line:88%\nJe croyais que nous pourrions revenir.\n\n37\n00:03:38.193 --> 00:03:45.500 line:88%\nJe n'aurais jamais imaginé que cela durerait 3 ans, 7 mois et 7 jours.\n(Le régime des Khmers rouges a duré exactement 3 ans, 8 mois et 20 jours.)\n", "en": "WEBVTT\n\n1\n00:00:04.700 --> 00:00:13.060 line:88%\nI thought they were bringing peace to the country. I raised my hands to celebrate their victory.\n\n2\n00:00:13.725 --> 00:00:19.002 line:88%\nI never expected they would come into my home and harm my family.\n\n3\n00:00:20.359 --> 00:00:28.965 line:88%\nBefore the Khmer Rouge, we lived a happy life, and my family had no difficulties. Life was good.\n\n4\n00:00:29.045 --> 00:00:37.051 line:88%\nThen the Khmer Rouge regime began, and life changed. It became difficult.\n\n5\n00:00:37.892 --> 00:00:41.973 line:88%\nThere was no happiness, care, or love.\n\n6\n00:00:42.053 --> 00:00:50.229 line:88%\nOn April 17th, around 8 or 9 in the morning, Khmer Rouge soldiers entered Phnom Penh\n\n7\n00:00:50.309 --> 00:00:57.998 line:88%\nand successfully took over the city near the Royal Palace.\n\n8\n00:00:58.511 --> 00:01:01.709 line:88%\nVehicles and soldiers crowded the area, and I lived nearby.\n\n9\n00:01:01.789 --> 00:01:08.330 line:88%\nAt that time, I knew the Khmer Rouge had entered, but I thought they were bringing peace.\n\n10\n00:01:08.410 --> 00:01:16.386 line:88%\nThey told us to leave for 3 days: “Beware of American bombing, or you’ll all be dead.\n\n11\n00:01:16.466 --> 00:01:22.075 line:88%\nIf you don’t leave, the Americans will drop bombs.”\n\n12\n00:01:23.325 --> 00:01:26.637 line:88%\nTheir only threat was that they would shoot us.\n\n13\n00:01:27.398 --> 00:01:31.429 line:88%\nI was so confused because the streets were really quiet, completely empty.\n\n14\n00:01:31.509 --> 00:01:40.257 line:88%\nThey kept asking, “Are you a spy?” My husband responded, “No, I am not.”\n\n15\n00:01:40.919 --> 00:01:45.061 line:88%\nThey said, “If you’re not a spy, why do you have modern official materials?”\n\n16\n00:01:45.141 --> 00:01:50.837 line:88%\nWe were forced to leave the city at night. We couldn’t take anything with us.\n\n17\n00:01:51.621 --> 00:01:59.789 line:88%\nWe took our motorcycle, just the clothes we were wearing, and our family left the city.\n\n18\n00:02:00.855 --> 00:02:05.543 line:88%\nAlong the way, it wasn’t a fast walk. I was pregnant, had morning sickness,\n\n19\n00:02:05.860 --> 00:02:12.089 line:88%\nand I had to carry my 2-year-old child while being pregnant.\n\n20\n00:02:12.478 --> 00:02:17.531 line:88%\nWe were starving. More and more people kept arriving. We didn’t know what to do.\n\n21\n00:02:18.319 --> 00:02:22.256 line:88%\nThey began to kick us out again, and this time it was for good.\n\n22\n00:02:23.198 --> 00:02:26.976 line:88%\nIf we didn’t go, they would shoot us dead.\n\n23\n00:02:27.338 --> 00:02:30.361 line:88%\nThey said, “Okay, then go. Soon you will meet Angkar.\n\n24\n00:02:30.441 --> 00:02:37.221 line:88%\nAngkar will sponsor you,” and I was wondering, “What is Angkar?”\n\n25\n00:02:37.301 --> 00:02:39.777 line:88%\nWe slept in the streets during the evacuation.\n\n26\n00:02:39.857 --> 00:02:47.341 line:88%\nThey kept pushing us forward along the road, but we didn’t know where we were going.\n\n27\n00:02:48.098 --> 00:02:55.883 line:88%\nA month later, they came to collect the biographies of the ‘’New People’’— referring to\n\n28\n00:02:56.385 --> 00:02:59.638 line:88%\nthe Phnom Penh people, the evacuees, or the April 17 people.\n\n29\n00:02:59.718 --> 00:03:03.305 line:88%\nAs my mother’s child, she would have to say that I wasn’t her son.\n\n30\n00:03:03.385 --> 00:03:09.070 line:88%\nIf they knew we were related, they would capture our entire bloodline to imprison us.\n\n31\n00:03:09.150 --> 00:03:11.594 line:88%\nWe had to answer that we were not family.\n\n32\n00:03:11.674 --> 00:03:16.959 line:88%\nMoney was not used, and it had no value at that time.\n\n33\n00:03:17.327 --> 00:03:21.192 line:88%\nPeople replaced money with rice instead.\n\n34\n00:03:21.870 --> 00:03:27.689 line:88%\nWe, the April 17 people, were just waiting, waiting for death.\n\n35\n00:03:28.099 --> 00:03:33.257 line:88%\nPhnom Penh people had to leave, and they thought they could return.\n\n36\n00:03:33.337 --> 00:03:38.113 line:88%\nI believed we could return.\n\n37\n00:03:38.193 --> 00:03:45.500 line:88%\nI didn’t expect it would be 3 years, 7 months, and 7 days like that.\n(The Khmer Rouge regime lasted exactly 3 years, 8 months and 20 days.)\n"};
const EC_VURL = {};
let ecSel = "S2C";
function buildEccc() {
  const host = $("#caseCustom"), t = EC[lang];
  host.innerHTML = ""; host.append($("#tplEccc").content.cloneNode(true));
  host.querySelectorAll("[data-t]").forEach(el => el.textContent = t[el.dataset.t]);
  host.querySelectorAll("[data-alt]").forEach(el => el.alt = t.alt[el.dataset.alt]);
  host.querySelector("[data-aria]").setAttribute("aria-label", t.plan);
  host.querySelector("[data-site]").href = t.siteUrl;
  const v = host.querySelector("[data-story]");
  v.querySelectorAll("track[data-vtt]").forEach(tr => { const l = tr.dataset.vtt; EC_VURL[l] = EC_VURL[l] || URL.createObjectURL(new Blob([EC_VTT[l]], { type: "text/vtt" })); tr.src = EC_VURL[l]; });
  const setTracks = () => [...v.textTracks].forEach(tr => tr.mode = tr.language === lang ? "showing" : "disabled");
  setTracks(); v.addEventListener("loadedmetadata", setTracks);
  const btns = [...host.querySelectorAll(".ec-st")], shot = host.querySelector("[data-shot]"), dots = host.querySelector("[data-dots]"), seg = host.querySelector("[data-view]");
  let imgs = [], cur = 0;
  const show = (src, alt) => { shot.classList.add("out"); const im = new Image(); im.onload = () => { shot.src = src; shot.alt = alt; shot.classList.remove("out"); }; im.src = src; };
  const paint = () => {
    const it = imgs[cur]; show(it.src, it.alt);
    dots.querySelectorAll("button").forEach((d, j) => d.setAttribute("aria-pressed", j === cur));
    const onPhoto = it.kind === "p";
    seg.dataset.lang = onPhoto ? "en" : "fr"; seg.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", (b.dataset.v === "p") === onPhoto));
  };
  const select = (key, focus) => {
    const s = EC_ST[key]; if (!s) return; ecSel = key;
    const grp = k => (EC_ST[k] && EC_ST[k].k) || k;
    btns.forEach(b => b.setAttribute("aria-pressed", grp(b.dataset.st) === grp(key)));
    const b = btns.find(x => x.dataset.st === key), name = t.st[s.k || key];
    host.querySelector("[data-code]").textContent = t.station + " " + b.textContent;
    host.querySelector("[data-name]").textContent = name || t.station + " " + b.textContent;
    host.querySelector("[data-ptags]").innerHTML = (b.classList.contains("d") ? `<span>${t.tD}</span>` : "") + (b.classList.contains("a") ? `<span>${t.tA}</span>` : "");
    imgs = s.r.map(r => ({ kind: "r", src: "assets/img/eccc/rendus/" + r + ".jpg", alt: t.alt.render + " " + b.textContent }));
    if (s.p) imgs.unshift({ kind: "p", src: "assets/img/eccc/photo-" + s.p + ".jpg", alt: t.alt.photo + " " + b.textContent });
    cur = 0; seg.hidden = !s.p;
    dots.innerHTML = imgs.length > 1 ? imgs.map((x, j) => `<button type="button" aria-label="${x.kind === "p" ? t.photo : t.render + " " + (j + (s.p ? 0 : 1))}"></button>`).join("") : "";
    dots.querySelectorAll("button").forEach((d, j) => d.addEventListener("click", () => { cur = j; paint(); }));
    paint();
  };
  const mapbox = host.querySelector(".ec-mapbox"), tip = host.querySelector("[data-tip]");
  const live = btns.filter(b => EC_ST[b.dataset.st]);
  const order = ["S1A", "S2C", "S2DEFG", "S2H", "S2A", "S3A", "S3B", "S3D", "S4B", "S4A", "S4D", "S1D"].filter(k => EC_ST[k]);
  host.querySelector("[data-stcount]").textContent = t.stN(order.length);
  btns.forEach((b, i) => {
    if (!EC_ST[b.dataset.st]) { b.classList.add("none"); b.disabled = true; return; }
    b.style.setProperty("--dl", (i % 6) * .35 + "s");
    const s0 = EC_ST[b.dataset.st];
    b.setAttribute("aria-label", t.station + " " + b.textContent + (t.st[s0.k || b.dataset.st] ? " : " + t.st[s0.k || b.dataset.st] : ""));
    b.addEventListener("click", () => { mapbox.classList.add("touched"); select(b.dataset.st); });
    const on = () => { tip.textContent = t.st[s0.k || b.dataset.st] || t.station + " " + b.textContent; tip.style.left = b.style.left; tip.style.top = b.style.top; tip.classList.add("on"); };
    b.addEventListener("mouseenter", on); b.addEventListener("focus", on);
    b.addEventListener("mouseleave", () => tip.classList.remove("on")); b.addEventListener("blur", () => tip.classList.remove("on"));
  });
  const step = d => { const g = k => EC_ST[k].k || k; let i = order.findIndex(o => g(o) === g(ecSel)); i = (i + d + order.length) % order.length; mapbox.classList.add("touched"); select(order[i]); };
  host.querySelector("[data-stp]").addEventListener("click", () => step(-1));
  host.querySelector("[data-stn]").addEventListener("click", () => step(1));
  seg.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { const want = b.dataset.v; const j = imgs.findIndex(x => x.kind === want); if (j > -1) { cur = j; paint(); } }));
  select(EC_ST[ecSel] ? ecSel : "S2C");
  ecSketches(host, t);
}

const RZ = {
  fr: { c1: "L'étymologie du nom.", c2: "Un projet mené à trois, autour de trois partis pris.", c3: "De l'écriture à la vraie vie, prototypé dans Figma.", c4: "Pour la soutenance, l'application a été mise en scène jusqu'à sa fiche App Store.", k1: "écrans clés", k2: "étapes de parcours", k3: "personnes dans l'équipe", kick: "Concept d'application mobile, projet d'école", tag: "Réalisez vos envies inavouées", lead: "Une appli de rencontre où l'on ne swipe pas sur des visages, mais sur des histoires.",
    black: "Noir", white: "Blanc", grey: "Gris", copyHint: "Cliquer pour copier", copied: "Copié ✓︎",
    mRole: "Rôle", mRoleV: "UI designer, de l'identité au prototype", mType: "Contexte", mTypeV: "Projet de groupe à Strate", mTime: "Durée", mTimeV: "Quelques semaines", mDel: "Livrables", mDelV: "Identité, UI kit et prototype Figma",
    s1: "Le concept", s1p: "Readz croise la lecture et la rencontre, à mi-chemin entre Wattpad et Bumble. Chacun raconte un rendez-vous, vécu, rêvé ou inventé, et on découvre une personne par sa façon d'écrire avant de voir son visage.",
    read: "Lire, c'est décoder un texte pour en saisir le sens.", rizz: "Argot popularisé sur TikTok, issu de « charisma » : le charme, l'art de séduire.",
    s2: "Le parcours", s2p: "Quatre étapes, de l'écriture à la vraie vie. Le téléphone montre le prototype Figma en action.",
    st1: "Écrire son date", st1p: "Un formulaire en cinq étapes guidées : titre, couverture, histoire, résumé et mots-clés d'ambiance. On peut garder un brouillon et vérifier le rendu avant de publier.",
    st2: "Swiper sur des histoires", st2p: "Les histoires s'empilent comme des livres posés sur une table. Chacune affiche sa couverture, ses tags et un résumé : on lit avant de juger.",
    st3: "Matcher un Readz", st3p: "Quand une histoire plaît, on la matche. Si c'est réciproque, l'écran de match invite à faire le premier pas.",
    st4: "Se rencontrer pour de vrai", st4p: "La conversation s'ouvre sur l'invitation au date raconté dans l'histoire, pour passer de la fiction à la vraie vie.",
    s3: "Partis pris", s3p: "Les choix qui donnent à Readz son caractère.",
    p1: "Le texte avant la photo", p1p: "La couverture et le résumé passent avant le profil. Les photos de la personne n'arrivent qu'après la lecture.",
    p2: "Une interface éditoriale", p2p: "Des titres au ton de roman et une interface sobre, pour que l'on ait envie de lire.",
    p3: "Des gris pour laisser parler les images", p3p: "Une palette de gris, du noir au blanc, pour que les couvertures des histoires portent la couleur.",
    s4: "Les écrans", s4p: "Accueil, lecture, match, discussion, profil et écriture : l'ensemble du parcours, maquetté dans Figma.",
    s5: "Le design system", s5p: "Un système complet dans Figma : styles de texte, couleurs, icônes, composants, effets d'ombre et grille.",
    kitc: "Le UI kit de Readz : typographies, palette, logo, images d'ambiance et styles.", figc: "Le fichier Figma organisé en couleurs, typo, logos, boutons et animations, composants et clavier.",
    s6: "Jusqu'à l'App Store", s6p: "Pour la soutenance, l'application a été mise en scène jusqu'à sa fiche App Store, avec son icône et ses visuels de lancement.",
    s6n: "Les notes et récompenses affichées sont fictives, pour la mise en scène.",
    alt: { vHero: "Prototype de Readz en vidéo", screens: "Vue d'ensemble des écrans de Readz : discussion, accueil, écriture, match et profils", icon: "Icône de l'application Readz", uikit: "UI kit de Readz", figma: "Fichier Figma de Readz", store: "Fiche App Store de Readz sur un iPhone", cover: "Une main tient un iPhone affichant l'écran « C'est un match ! » de Readz" },
    stripL: "Écrans de Readz, faites défiler horizontalement" },
  en: { c1: "The etymology of the name.", c2: "A three-person project, built on three design calls.", c3: "From writing to real life, prototyped in Figma.", c4: "For the final review, the app was staged all the way to its App Store page.", k1: "key screens", k2: "journey steps", k3: "people on the team", kick: "Mobile app concept, school project", tag: "Live out your secret desires", lead: "A dating app where you swipe on stories, not faces.",
    black: "Black", white: "White", grey: "Grey", copyHint: "Click to copy", copied: "Copied ✓︎",
    mRole: "Role", mRoleV: "UI designer, from identity to prototype", mType: "Context", mTypeV: "Group project at Strate", mTime: "Duration", mTimeV: "A few weeks", mDel: "Deliverables", mDelV: "Identity, UI kit and Figma prototype",
    s1: "The concept", s1p: "Readz blends reading and dating, somewhere between Wattpad and Bumble. Everyone tells the story of a date, lived, dreamed or made up, and you get to know someone through their writing before you see their face.",
    read: "To read: to decode a text and grasp its meaning.", rizz: "Slang popularised on TikTok, from “charisma”: charm, the art of seduction.",
    s2: "The journey", s2p: "Four steps, from writing to real life. The phone shows the Figma prototype in action.",
    st1: "Write your date", st1p: "A five-step guided form: title, cover, story, summary and mood tags. You can save a draft and preview before publishing.",
    st2: "Swipe on stories", st2p: "Stories stack like books on a table. Each shows its cover, tags and a summary: you read before you judge.",
    st3: "Match a Readz", st3p: "When a story speaks to you, you match it. If it's mutual, the match screen invites you to make the first move.",
    st4: "Meet for real", st4p: "The conversation opens with an invitation to the date from the story, turning fiction into real life.",
    s3: "Design choices", s3p: "The decisions that give Readz its character.",
    p1: "Words before photos", p1p: "The cover and summary come before the profile. Personal photos only appear after reading.",
    p2: "An editorial interface", p2p: "Novel-like titles and a quiet interface, so people want to read.",
    p3: "Greys that let images speak", p3p: "A palette of greys, from black to white, so the story covers carry the colour.",
    s4: "The screens", s4p: "Home, reading, match, chat, profile and writing: the whole journey, designed in Figma.",
    s5: "The design system", s5p: "A complete system in Figma: text styles, colours, icons, components, shadow effects and grid.",
    kitc: "The Readz UI kit: typefaces, palette, logo, mood images and styles.", figc: "The Figma file, organised into colours, type, logos, buttons and animations, components and keyboard.",
    s6: "All the way to the App Store", s6p: "For the final review, the app was staged all the way to its App Store page, with its icon and launch visuals.",
    s6n: "Ratings and awards shown are fictional, for presentation purposes.",
    alt: { vHero: "Readz prototype video", screens: "Overview of the Readz screens: chat, home, writing, match and profiles", icon: "Readz app icon", uikit: "Readz UI kit", figma: "Readz Figma file", store: "Readz App Store page on an iPhone", cover: "A hand holding an iPhone showing the Readz “It's a match!” screen" },
    stripL: "Readz screens, scroll horizontally" },
};
const RZ_GREYS = ["1A1A1A","333333","4D4D4D","666666","737373","808080","8C8C8C","999999","B3B3B3","CCCCCC","E6E6E6","F2F2F2","FFFFFF"];
function buildReadz() {
  const host = $("#caseCustom"), t = RZ[lang];
  host.innerHTML = ""; host.append($("#tplReadz").content.cloneNode(true));
  host.querySelectorAll("[data-t]").forEach(el => el.textContent = t[el.dataset.t]);
  host.querySelectorAll("[data-alt]").forEach(el => { if (el.tagName === "VIDEO") el.setAttribute("aria-label", t.alt[el.dataset.alt]); else el.alt = t.alt[el.dataset.alt]; });
  host.querySelectorAll("[data-arial]").forEach(el => el.setAttribute("aria-label", t[el.dataset.arial]));
  { const eq = host.querySelector(".rz-eq"); if (eq) { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { eq.classList.add("in"); io.disconnect(); } }), { root: caseEl, threshold: .3 }); io.observe(eq); } }
  host.querySelector(".rz-swatches").innerHTML = RZ_GREYS.map(c => `<i style="background:#${c}"></i>`).join("");
  const hero = host.querySelector("[data-auto]"), ph = host.querySelector("[data-hover-pause]");
  vidCtl(ph, hero);
  const sw = host.querySelector("[data-sw]"), swn = host.querySelector("[data-swn]"), swh = host.querySelector("[data-swh]");
  const names = RZ_GREYS.map((c, i) => i === 0 ? t.black : i === RZ_GREYS.length - 1 ? t.white : `${t.grey} ${i}`);
  sw.innerHTML = RZ_GREYS.map((c, i) => `<button type="button" role="listitem" style="background:#${c};color:${i < 7 ? "#F9F9F9" : "#101010"}" data-i="${i}" aria-label="${names[i]}, #${c}"><span>#${c}</span></button>`).join("");
  const pick = i => { sw.querySelectorAll("button").forEach((b, k) => b.classList.toggle("on", k === i)); swn.textContent = names[i]; swh.textContent = "#" + RZ_GREYS[i]; };
  sw.querySelectorAll("button").forEach(b => {
    const i = +b.dataset.i;
    b.addEventListener("mouseenter", () => pick(i)); b.addEventListener("focus", () => pick(i));
  });
  pick(0);
  initSV(host, t, b => "assets/video/readz-" + b.dataset.v + ".mp4");
  const strip = host.querySelector("[data-strip]");
  let d = null;
  strip.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; d = { x: e.clientX, l: strip.scrollLeft }; strip.setPointerCapture(e.pointerId); });
  strip.addEventListener("pointermove", e => { if (d) strip.scrollLeft = d.l - (e.clientX - d.x); });
  strip.addEventListener("pointerup", () => d = null); strip.addEventListener("pointercancel", () => d = null);
  strip.addEventListener("keydown", e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); strip.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * 320, behavior: reduce ? "auto" : "smooth" }); } });
  strip.addEventListener("wheel", e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !e.shiftKey) return; }, { passive: true });
}

const M123 = {
  fr: { c1: "Maison 123, marque parisienne du groupe Etam, publie un lookbook à chaque collection, sur un site décliné en huit versions.", k1: "lookbooks conçus et intégrés", k2: "déclinaisons d'un même site : FR, INT, UK, ES, DE, BE FR, BE NL, CH", k3: "formats, ordinateur et mobile", c2: "Je fais le lien entre la création et le site.", dm1: "Concevoir chaque page avec la direction artistique et la graphiste", dm2: "L'intégrer en HTML et CSS, sur ordinateur et mobile", dm3: "La mettre à jour au fil des collections", c3: "Les lookbooks et la homepage de Noël, à parcourir comme sur le vrai site.", c4: "Au-delà des temps forts, le site évolue chaque semaine.", kick: "Front-End UI Designer, 2026", lead: "Donner vie en ligne à l'univers d'une marque de mode parisienne, de la maquette à l'intégration.",
    s1: "Lookbooks", s1p: "Conçus avec la direction artistique et la graphiste, puis intégrés en code, sur ordinateur comme sur mobile.",
    lb1c: "Countryside", lb2c: "King's Road", lb3c: "Cottage", lb4c: "The Cliffs",
    hint: "Faites défiler chaque écran pour parcourir la page.", see: "Voir le lookbook en ligne", url: "https://www.maison123.com/c/nouvelle-collection/lookbook/",
    s2: "Homepage de Noël", s2p: "Une vitrine de fêtes : une grille d'univers qui mène aux idées cadeaux.",
    s3: "Au quotidien", s3p: "Le site évolue chaque semaine, au rythme des collections.",
    d1: "Mises à jour du site", d1p: "Intégration des bandeaux et contenus de saison.",
    d2: "Newsletters", d2p: "Conception et intégration des e-mails de campagne.",
    d3: "Refonte UX", d3p: "Analyse des parcours et pistes d'amélioration. Travail en cours, confidentiel.",
    alt: { countryside: "Lookbook The Escape, Countryside", london: "Lookbook Hello London", cottage: "Lookbook The Escape, Cottage", cliffs: "Lookbook The Escape, The Cliffs", noel: "Homepage de Noël", desktop: "sur ordinateur", mobile: "sur mobile" } },
  en: { c1: "Maison 123, a Parisian brand from the Etam group, releases a lookbook with every collection, on a site available in eight versions.", k1: "lookbooks designed and built", k2: "versions of one site: FR, INT, UK, ES, DE, BE FR, BE NL, CH", k3: "formats, desktop and mobile", c2: "I bridge the creative work and the website.", dm1: "Design each page with the art director and the graphic designer", dm2: "Build it in HTML and CSS, for desktop and mobile", dm3: "Keep it updated with every collection", c3: "The lookbooks and the Christmas homepage, to browse just like on the live site.", c4: "Beyond key moments, the site changes every week.", kick: "Front-End UI Designer, 2026", lead: "Bringing a Parisian fashion brand's world to life online, from design to front-end build.",
    s1: "Lookbooks", s1p: "Designed with the art director and the graphic designer, then built in code for desktop and mobile.",
    lb1c: "Countryside", lb2c: "King's Road", lb3c: "Cottage", lb4c: "The Cliffs",
    hint: "Scroll inside each screen to browse the page.", see: "See the lookbook online", url: "https://www.maison123.co.uk/c/new-collection/lookbook/",
    s2: "Christmas homepage", s2p: "A holiday window: a grid of themes leading to gift ideas.",
    s3: "Day to day", s3p: "The site changes every week, following the collections.",
    d1: "Site updates", d1p: "Integration of seasonal banners and content.",
    d2: "Newsletters", d2p: "Designing and building campaign emails.",
    d3: "UX redesign", d3p: "Journey analysis and improvement ideas. Work in progress, confidential.",
    alt: { countryside: "The Escape lookbook, Countryside", london: "Hello London lookbook", cottage: "The Escape lookbook, Cottage", cliffs: "The Escape lookbook, The Cliffs", noel: "Christmas homepage", desktop: "on desktop", mobile: "on mobile" } },
};
let mLook = "countryside";
function fillDuo(duo, key, t, fade) {
  duo.querySelectorAll("[data-img]").forEach(im => {
    const v = im.dataset.img, src = `assets/img/maison-123/${key}-${v}.jpg`, scr = im.parentElement;
    const set = () => { im.src = src; im.alt = t.alt[key] + ", " + t.alt[v]; scr.scrollTop = 0; im.classList.remove("out"); };
    if (fade && !reduce) { im.classList.add("out"); setTimeout(set, 250); } else set();
  });
}
function buildM123() {
  const host = $("#caseCustom"), t = M123[lang];
  host.innerHTML = ""; host.append($("#tplM123").content.cloneNode(true));
  host.querySelectorAll("[data-t]").forEach(el => el.textContent = t[el.dataset.t]);
  host.querySelector("[data-online]").href = t.url;
  host.querySelectorAll("[data-alt]").forEach(el => el.alt = t.alt[el.dataset.alt]);
  const lb = host.querySelector('[data-duo="lb"]'), tabs = [...host.querySelectorAll("[data-tabs] button")];
  const pick = (k, fade) => { mLook = k; tabs.forEach(b => b.setAttribute("aria-selected", b.dataset.k === k)); fillDuo(lb, k, t, fade); };
  tabs.forEach((b, i) => { b.addEventListener("click", () => pick(b.dataset.k, true)); b.addEventListener("keydown", e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { const n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length]; n.focus(); pick(n.dataset.k, true); } }); });
  pick(mLook, false);
  fillDuo(host.querySelector('[data-duo="noel"]'), "noel", t, false);
  host.querySelectorAll(".mk-duo").forEach(duo => {
    const [a, b] = duo.querySelectorAll("[data-scr]"); let lock = null;
    const sync = (from, to) => () => { if (lock && lock !== from) return; lock = from; const k = from.scrollTop / Math.max(1, from.scrollHeight - from.clientHeight); to.scrollTop = k * (to.scrollHeight - to.clientHeight); clearTimeout(from._t); from._t = setTimeout(() => lock = null, 120); };
    a.addEventListener("scroll", sync(a, b), { passive: true }); b.addEventListener("scroll", sync(b, a), { passive: true });
  });
  const duos = [...host.querySelectorAll(".mk-duo")];
  const gate = () => duos.forEach(d => { const r = d.getBoundingClientRect(), vh = window.innerHeight, top = 64;
    const live = r.height <= vh - top ? (r.top >= top - 8 && r.bottom <= vh + 4) : (r.top <= top + 8 && r.bottom >= vh - 4);
    d.classList.toggle("live", live); });
  if (m123Gate) { caseEl.removeEventListener("scroll", m123Gate); window.removeEventListener("resize", m123Gate); }
  m123Gate = gate; caseEl.addEventListener("scroll", gate, { passive: true }); window.addEventListener("resize", gate); gate();
  if (m123Wheel) caseEl.removeEventListener("wheel", m123Wheel);
  m123Wheel = e => {
    if (!host.querySelector(".mk-duo") || e.ctrlKey) return;
    const top = 72, vh = window.innerHeight, dy = e.deltaY;
    for (const d of duos) {
      const r = d.getBoundingClientRect(), scr = d.querySelector(".mk-browser .mk-scr") || d.querySelector(".mk-scr");
      const end = scr.scrollTop >= scr.scrollHeight - scr.clientHeight - 2, start = scr.scrollTop <= 1;
      const fits = r.height <= vh - top;
      if (!fits) continue;
      const aligned = Math.abs(r.top - top) < 6;
      if (aligned && ((dy > 0 && !end) || (dy < 0 && !start))) { e.preventDefault(); scr.scrollTop += dy; return; }
      if (dy > 0 && r.top > top && r.top - dy < top && !end) { e.preventDefault(); caseEl.scrollTop += r.top - top; gate(); return; }
      if (dy < 0 && r.top < top && r.top - dy > top && !start) { e.preventDefault(); caseEl.scrollTop += r.top - top; gate(); return; }
    }
  };
  caseEl.addEventListener("wheel", m123Wheel, { passive: false });
}
let m123Wheel = null;
let m123Gate = null;
function scrollFrames() {}
Object.assign(M123.fr, { fxT: "Lookbooks et homepage de Noël", fxNl: "Le besoin", fxN: "Faire vivre chaque collection en ligne, sur les huit déclinaisons du site, sur ordinateur comme sur mobile.", fxRl: "Mon rôle", fxR: "Concevoir les pages, puis les intégrer en HTML et CSS." });
Object.assign(M123.en, { fxT: "Lookbooks and Christmas homepage", fxNl: "The need", fxN: "Bring every collection to life online, across the site's eight versions, on desktop and mobile.", fxRl: "My role", fxR: "Design the pages, then build them in HTML and CSS." });
M123.fr.alt.cover = "Lookbook Hello London sur un iPhone tenu en main"; M123.fr.rights = "Visages floutés, par respect des droits à l'image."; M123.en.rights = "Faces blurred, out of respect for image rights."; M123.en.alt.cover = "Hello London lookbook on a hand-held iPhone";
Object.assign(VB.fr, { __kit: 1, kit: { open: "Ouvrir le kit", hint: "Touchez un point pour sortir un élément du kit.", letter: "Lire la lettre", fiche: "Voir la consigne", g: "Cartes « bruit »", y: "Cartes « lumière »", p: "Cartes « communication »", back: "Ranger", prev: "Carte précédente", next: "Carte suivante", of: "sur", masked: "nom masqué", cardAlt: "Carte d'atelier", rulesAlt: "Consigne de l'atelier : lisez les cartes, échangez, notez vos idées sur la fresque",
      letterHtml: '<p>Bonjour <span class="vk-blur" role="img" aria-label="nom masqué">Xxxxxxx</span>,</p><p>Ça y est, tes premières semaines chez <span class="vk-blur" role="img" aria-label="nom masqué">Xxxxxx</span> sont passées. Je sais que tu es très investi dans ton travail, mais tes proches m\'ont contacté et ils sont inquiets. Ils m\'ont dit que tu rentres chez toi complètement épuisé, que tu as du mal à dormir et que l\'environnement du magasin te demande une énergie folle.</p><p>Entre le bruit constant que tu ne peux pas filtrer, les lumières qui t\'agressent la vue, et les moments de stress où tu n\'arrives plus à communiquer avec les clients ou l\'équipe… je comprends que ce soit trop lourd à porter seul. Tes collègues ne voient pas forcément ce que tu ressens de l\'intérieur, surtout quand tu ne peux pas l\'exprimer avec des mots.</p><p>Aujourd\'hui, c\'est à eux de jouer : ils vont analyser trois moments difficiles de ton quotidien et réfléchir à des solutions concrètes pour adapter ton poste.</p><p>Je compte sur eux pour t\'aider à travailler sereinement. On fait le point très vite.</p><p class="vk-sign">Sarah, Job Coach chez OETH<br><small>(L\'obligation d\'emploi des travailleurs handicapés)</small></p>',
      steps: ["La situation", "Ce qu'il perçoit", "Ce qu'il ressent", "La question à l'équipe"] }, fxT: "Comprendre l'autisme au travail", fxNl: "Le besoin", fxN: "Faire percevoir à ses collègues ce que vit un employé autiste non-oralisant, qui ne peut pas toujours le dire.", fxRl: "Ma réponse", fxR: "Une expérience VR pour ressentir trois situations du quotidien, puis un atelier pour imaginer ensemble des solutions concrètes.", prevSt: "Précédente", nextSt: "Suivante", svc: "Scène", svTipD: "cliquez sur une scène pour la voir", svTipM: "touchez une scène ou glissez la vidéo" });
Object.assign(VB.en, { __kit: 1, kit: { open: "Open the kit", hint: "Tap a dot to take an item out of the kit.", letter: "Read the letter", fiche: "See the brief", g: "“Noise” cards", y: "“Light” cards", p: "“Communication” cards", back: "Put away", prev: "Previous card", next: "Next card", of: "of", masked: "name hidden", cardAlt: "Workshop card (in French)", rulesAlt: "Workshop brief: read the cards, discuss, note your ideas on the fresco",
      letterHtml: '<p class="vk-tr">Letter shown in its original French.</p><p>Bonjour <span class="vk-blur" role="img" aria-label="name hidden">Xxxxxxx</span>,</p><p>Ça y est, tes premières semaines chez <span class="vk-blur" role="img" aria-label="name hidden">Xxxxxx</span> sont passées. Je sais que tu es très investi dans ton travail, mais tes proches m\'ont contacté et ils sont inquiets. Ils m\'ont dit que tu rentres chez toi complètement épuisé, que tu as du mal à dormir et que l\'environnement du magasin te demande une énergie folle.</p><p>Entre le bruit constant que tu ne peux pas filtrer, les lumières qui t\'agressent la vue, et les moments de stress où tu n\'arrives plus à communiquer avec les clients ou l\'équipe… je comprends que ce soit trop lourd à porter seul. Tes collègues ne voient pas forcément ce que tu ressens de l\'intérieur, surtout quand tu ne peux pas l\'exprimer avec des mots.</p><p>Aujourd\'hui, c\'est à eux de jouer : ils vont analyser trois moments difficiles de ton quotidien et réfléchir à des solutions concrètes pour adapter ton poste.</p><p>Je compte sur eux pour t\'aider à travailler sereinement. On fait le point très vite.</p><p class="vk-sign">Sarah, Job Coach chez OETH<br><small>(L\'obligation d\'emploi des travailleurs handicapés)</small></p>',
      steps: ["The situation", "What he perceives", "What he feels", "The question for the team"] }, fxT: "Understanding autism at work", fxNl: "The need", fxN: "Help colleagues grasp what a non-speaking autistic employee goes through, when he can't always put it into words.", fxRl: "My answer", fxR: "A VR experience to feel three everyday situations, then a workshop to come up with practical solutions together.", prevSt: "Previous", nextSt: "Next", svc: "Scene", svTipD: "click a scene to watch it", svTipM: "tap a scene or swipe the video" });
RZ.fr.eqR = "Une appli où l'on séduit par ses mots, avant de montrer son visage."; RZ.en.eqR = "An app where you charm with your words before showing your face.";
Object.assign(RZ.fr, { fxT: "Se rencontrer par l'écriture", fxNl: "Le besoin", fxN: "Découvrir quelqu'un par sa façon d'écrire, avant de voir son visage.", fxRl: "Notre réponse", fxR: "Readz, entre lecture et rencontre : on raconte un date, on lit, puis on matche. Prototypé dans Figma.", prevSt: "Précédente", nextSt: "Suivante", svc: "Étape", svTipD: "cliquez sur une étape pour la voir", svTipM: "touchez une étape ou glissez la vidéo" });
Object.assign(RZ.en, { fxT: "Meeting through writing", fxNl: "The need", fxN: "Get to know someone through their writing before seeing their face.", fxRl: "Our answer", fxR: "Readz, between reading and dating: you tell a date, you read, then you match. Prototyped in Figma.", prevSt: "Previous", nextSt: "Next", svc: "Step", svTipD: "click a step to watch it", svTipM: "tap a step or swipe the video" });
function initSV(host, t, srcOf) {
  const box = host.querySelector("[data-sv]"); if (!box) return;
  const items = [...box.querySelectorAll(".sv-list button")], sv = box.querySelector("[data-step-video]"), cnt = box.querySelector("[data-svc]");
  let at = 0, seg = null;
  const go = () => { try { sv.currentTime = seg.a; } catch (e) {} sv._held = false; if (!reduce) sv.play().catch(() => {}); };
  const show = i => {
    at = (i + items.length) % items.length; const b = items[at];
    items.forEach((x, k) => { x.setAttribute("aria-expanded", k === at); x.parentElement.classList.toggle("on", k === at); });
    cnt.innerHTML = `${t.svc} ${at + 1} / ${items.length} <span class="sv-tip">· ${matchMedia("(hover: hover)").matches ? t.svTipD : t.svTipM}</span>`;
    seg = { a: +b.dataset.a, b: +b.dataset.b };
    const src = srcOf ? srcOf(b) : null;
    if (src && !sv.src.endsWith(src)) { sv.src = src; sv.addEventListener("loadedmetadata", go, { once: true }); }
    else if (sv.readyState) go(); else sv.addEventListener("loadedmetadata", go, { once: true });
  };
  sv.addEventListener("timeupdate", () => { if (seg && (sv.currentTime >= seg.b || sv.currentTime < seg.a - .5)) sv.currentTime = seg.a; });
  items.forEach((b, i) => b.addEventListener("click", () => show(i)));
  box.querySelector("[data-stp]").addEventListener("click", () => show(at - 1));
  box.querySelector("[data-stn]").addEventListener("click", () => show(at + 1));
  const media = box.querySelector(".sv-media"); let sx = null;
  media.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  media.addEventListener("touchend", e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1)); }, { passive: true });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { if (!reduce && !sv._held) sv.play().catch(() => {}); } else sv.pause(); }), { root: caseEl });
  io.observe(media);
  show(0);
}

const VIDL = { fr: { p: "Mettre la vidéo en pause", r: "Lire la vidéo" }, en: { p: "Pause the video", r: "Play the video" } };
function vidCtl(box, v, noAuto) {
  if (!box || !v) return;
  box.removeAttribute("tabindex"); box.removeAttribute("role"); box.removeAttribute("aria-label"); box.classList.add("vbox");
  const b = document.createElement("button"); b.type = "button"; b.className = "vbtn";
  b.innerHTML = '<svg class="i-p" viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="2.6" height="10" rx="1"/><rect x="9.4" y="3" width="2.6" height="10" rx="1"/></svg><svg class="i-r" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6c0 .6.6.9 1.1.6l7.4-4.8a.7.7 0 0 0 0-1.2L6.1 2.6C5.6 2.3 5 2.6 5 3.2z"/></svg>';
  box.append(b);
  const sync = () => { const on = !v.paused; b.classList.toggle("on", on); b.setAttribute("aria-label", VIDL[lang][on ? "p" : "r"]); };
  const toggle = () => { if (v.paused) { v._held = false; v.play().catch(() => {}); } else { v._held = true; v.pause(); } };
  b.addEventListener("click", e => { e.stopPropagation(); toggle(); });
  box.addEventListener("click", e => { if (e.target.closest("button,a")) return; toggle(); });
  v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
  if (!noAuto && !reduce) v.play().catch(() => {});
}
function heroLayout() {
  const art = $("#caseCustom > article"); if (!art || art.querySelector(".fx-top")) return;
  const h = art.querySelector(":scope > .fx-hero"); if (!h) return;
  const wrap = document.createElement("div"); wrap.className = "fx-top";
  const side = document.createElement("div"); side.className = "fx-side";
  h.before(wrap); wrap.append(h, side);
  let n = wrap.nextElementSibling;
  while (n && !n.classList.contains("m-meta")) { const nx = n.nextElementSibling; side.append(n); n = nx; }
}

const hexLum = h => { h = h.trim().replace("#", ""); if (h.length === 3) h = [...h].map(c => c + c).join(""); const v = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(c => c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)); return .2126 * v[0] + .7152 * v[1] + .0722 * v[2]; };
const ratio = (a, b) => { const [x, y] = [hexLum(a), hexLum(b)].sort((m, n) => n - m); return (x + .05) / (y + .05); };
const A11Y = {
  fr: { title: "Accessibilité", sub: "et coulisses du site", lead: "Ce site est fait pour être agréable à utiliser, quelle que soit votre façon de naviguer.",
    now: "En ce moment", dark: "Mode sombre", light: "Mode clair", full: "Animations complètes", reduced: "Animations réduites", langName: "Français", more: "Contraste renforcé",
    cTitle: "Contrastes", cNote: "Calculés à partir des couleurs du mode affiché.", main: "Texte principal", second: "Texte secondaire", discreet: "Texte discret",
    forTitle: "Pensé pour", forList: ["la navigation au clavier", "les lecteurs d'écran", "le zoom jusqu'à 200 %", "les écrans tactiles, avec des zones de 44 px", "moins d'animations, si votre appareil le demande", "le français et l'anglais"],
    madeTitle: "Fait avec", made: "Maquette sur Figma, puis développement en HTML, CSS et JavaScript. Police : Albert Sans.",
    tip: "Astuce : appuyez sur <kbd>Tab</kbd> pour parcourir la page au clavier." },
  en: { title: "Accessibility", sub: "and behind the scenes", lead: "This site is made to be pleasant to use, however you browse.",
    now: "Right now", dark: "Dark mode", light: "Light mode", full: "Full motion", reduced: "Reduced motion", langName: "English", more: "Increased contrast",
    cTitle: "Contrast", cNote: "Calculated from the colours of the current mode.", main: "Main text", second: "Secondary text", discreet: "Subtle text",
    forTitle: "Designed for", forList: ["keyboard navigation", "screen readers", "zoom up to 200%", "touch screens, with 44 px targets", "less motion, if your device asks for it", "French and English"],
    madeTitle: "Made with", made: "Designed in Figma, then built in HTML, CSS and JavaScript. Typeface: Albert Sans.",
    tip: "Tip: press <kbd>Tab</kbd> to move through the page with the keyboard." },
};
function renderA11yBody() {
  const t = A11Y[lang], cs = getComputedStyle(root), bg = cs.getPropertyValue("--bg");
  const rows = [["main", "--fg"], ["second", "--muted"], ["discreet", "--faint"]].map(([k, v]) => {
    const fg = cs.getPropertyValue(v), r = ratio(fg, bg), lvl = r >= 7 ? "AAA" : r >= 4.5 ? "AA" : "—";
    return `<li><span class="dot" style="background:${fg.trim()}"></span><span>${t[k]}</span><span class="num">${r.toFixed(1)} : 1</span><span class="lvl">${lvl}</span></li>`;
  }).join("");
  const chips = [root.dataset.mode === "light" ? t.light : t.dark, matchMedia("(prefers-reduced-motion: reduce)").matches ? t.reduced : t.full, t.langName];
  if (matchMedia("(prefers-contrast: more)").matches) chips.push(t.more);
  return `
    <h2 id="a11yTitle">${t.title}<span>${t.sub}</span></h2>
    <p class="soft-lead">${t.lead}</p>
    <h3>${t.cTitle}</h3>
    <ul class="contrast">${rows}</ul>
    <p class="note">${t.cNote}</p>
    <h3>${t.forTitle}</h3>
    <ul class="soft-list">${t.forList.map(x => `<li>${x}</li>`).join("")}</ul>
    <h3>${t.madeTitle}</h3>
    <p class="made">${t.made}</p>
    <p class="tip">${t.tip}</p>`;
}
const DS = {
  fr: { tabA: "Accessibilité", tabD: "Design system", title: "Design system", sub: "les règles du site", lead: "Les couleurs, la typo et les composants qui font ce portfolio. Les valeurs suivent le mode affiché.",
    colors: "Couleurs", type: "Typographie", space: "Espacements", spaceNote: "Toutes les marges du site utilisent ces valeurs, des multiples de 8 px. Ça garde un rythme régulier d'un écran à l'autre.", spGroups: [["Petits écarts, à l'intérieur d'un élément", [8, 16]], ["Écarts moyens, entre les éléments d'un même bloc", [24, 32]], ["Grands écarts, entre les blocs et les sections", [48, 64, 96]]], radius: "Arrondis", comps: "Composants", motion: "Mouvement", replay: "Rejouer",
    cBg: "Fond", cSurface: "Surface", cFg: "Texte", cMuted: "Secondaire", cFaint: "Discret",
    tDisplay: "Nom", tH2: "Titre de section", tLead: "Accroche", tBody: "Texte courant", tLabel: "Label",
    btn: "Bouton", link: "Lien", tag: "Étiquette", r1: "Boutons", r2: "Blocs", r3: "Pastilles",
    motionText: "Une seule courbe pour tout le site, souple à l'arrivée. Durées de 0,3 à 0,7 s. Si l'appareil demande moins d'animations, tout s'arrête." },
  en: { tabA: "Accessibility", tabD: "Design system", title: "Design system", sub: "the rules behind the site", lead: "The colours, type and components that make this portfolio. Values follow the current mode.",
    colors: "Colours", type: "Typography", space: "Spacing", spaceNote: "Every margin on the site uses these values, all multiples of 8 px. It keeps a steady rhythm from one screen to the next.", spGroups: [["Small gaps, inside an element", [8, 16]], ["Medium gaps, between items in the same block", [24, 32]], ["Large gaps, between blocks and sections", [48, 64, 96]]], radius: "Corners", comps: "Components", motion: "Motion", replay: "Replay",
    cBg: "Background", cSurface: "Surface", cFg: "Text", cMuted: "Secondary", cFaint: "Subtle",
    tDisplay: "Name", tH2: "Section title", tLead: "Lead", tBody: "Body text", tLabel: "Label",
    btn: "Button", link: "Link", tag: "Tag", r1: "Buttons", r2: "Blocks", r3: "Pills",
    motionText: "One curve for the whole site, soft on arrival. Durations from 0.3 to 0.7 s. If the device asks for less motion, everything stops." },
};
function renderDS() {
  const t = DS[lang], cs = getComputedStyle(root), v = k => cs.getPropertyValue(k).trim();
  const sw = [["cBg", "--bg"], ["cSurface", "--surface"], ["cFg", "--fg"], ["cMuted", "--muted"], ["cFaint", "--faint"]]
    .map(([k, c]) => `<li><span class="sw" style="background:${v(c)}"></span><span>${t[k]}</span><span class="num">${v(c).toUpperCase()}</span></li>`).join("");
  const ty = [["tDisplay", 44, 104, 500, "Housna"], ["tH2", 32, 60, 500, "Projets"], ["tLead", 20, 26, 500, "Je conçois des interfaces"], ["tBody", 16, 17, 400, "Des parcours simples et intuitifs."], ["tLabel", 14, 14, 500, "UX Design"]]
    .map(([k, mn, mx, w, ex]) => `<li><span class="ex" style="font-size:${Math.min(mx, 40)}px;font-weight:${w}">${ex}</span><span class="spec">${t[k]} · ${mn === mx ? mx : mn + " →︎ " + mx} px · ${w}</span></li>`).join("");
  const sp = t.spGroups.map(([g, ns]) => `<li class="grp">${g}</li>` + ns.map(n => `<li><span class="num">${n} px</span><span class="bar" style="width:${n * 2}px"></span></li>`).join("")).join("");
  return `
    <h2 id="a11yTitle">${t.title}<span>${t.sub}</span></h2>
    <p class="soft-lead">${t.lead}</p>
    <h3>${t.colors}</h3><ul class="ds-sw">${sw}</ul>
    <h3>${t.type}</h3><p class="note" style="margin:0 0 12px">Albert Sans · 400, 500, 600 · ${lang === "en" ? "fluid sizes, from mobile to large screens" : "tailles fluides, du mobile au grand écran"}</p><ul class="ds-type">${ty}</ul>
    <h3>${t.space}</h3><ul class="ds-space">${sp}</ul><p class="note">${t.spaceNote}</p>
    <h3>${t.radius}</h3><div class="ds-rad"><div><span style="border-radius:10px"></span>${t.r1} · 10 px</div><div><span style="border-radius:18px"></span>${t.r2} · 18 px</div><div><span style="border-radius:999px"></span>${t.r3}</div></div>
    <h3>${t.comps}</h3>
    <div class="ds-comps">
      <a class="cta" href="#contact" tabindex="-1">${t.btn}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12 12 4M5.5 4H12v6.5"/></svg></a>
      <span class="ds-link">${t.link}</span>
      <span class="ds-tag">${t.tag}</span>
      <div class="seg ds-seg" data-lang="fr" aria-hidden="true"><span class="knob"></span><button type="button" tabindex="-1" aria-pressed="true">FR</button><button type="button" tabindex="-1" aria-pressed="false">EN</button></div>
    </div>
    <h3>${t.motion}</h3>
    <div class="ds-motion"><div class="track"><span class="ball"></span></div><button type="button" class="replay" id="dsReplay">${t.replay}</button></div>
    <p class="note">cubic-bezier(.3, .8, .3, 1) · ${t.motionText}</p>
    <div style="height:64px"></div>`;
}
let a11yTab = "a11y";
function renderA11y() {
  const t = DS[lang];
  $("#a11yBody").innerHTML = `<div class="seg ptabs" role="tablist" data-lang="${a11yTab === "ds" ? "en" : "fr"}"><span class="knob" aria-hidden="true"></span><button type="button" role="tab" aria-selected="${a11yTab === "a11y"}" aria-pressed="${a11yTab === "a11y"}" data-t="a11y">${t.tabA}</button><button type="button" role="tab" aria-selected="${a11yTab === "ds"}" aria-pressed="${a11yTab === "ds"}" data-t="ds">${t.tabD}</button></div>` + (a11yTab === "ds" ? renderDS() : renderA11yBody());
  $$("#a11yBody .ptabs button").forEach(b => b.addEventListener("click", () => { a11yTab = b.dataset.t; renderA11y(); $(`#a11yBody .ptabs button[data-t="${a11yTab}"]`).focus(); a11yEl.scrollTop = 0; }));
  const rp = $("#dsReplay"); if (rp) rp.addEventListener("click", () => { const b = $("#a11yBody .ball"); b.classList.remove("go"); void b.offsetWidth; b.classList.add("go"); });
}
const a11yEl = $("#a11y");
function openA11y() {
  lastFocus = document.activeElement; renderA11y();
  a11yEl.hidden = false; a11yEl.scrollTop = 0; $("#a11yScrim").classList.add("on");
  $("#contenu").inert = true; $("#top").inert = true;
  requestAnimationFrame(() => requestAnimationFrame(() => a11yEl.classList.add("open")));
  document.body.style.overflow = "hidden";
  $("#a11yClose").focus({ preventScroll: true });
}
function closeA11y() {
  a11yEl.classList.remove("open"); document.body.style.overflow = ""; $("#a11yScrim").classList.remove("on");
  $("#contenu").inert = false; $("#top").inert = false;
  setTimeout(() => { a11yEl.hidden = true; }, reduce ? 0 : 650);
  lastFocus?.focus({ preventScroll: true });
}
$("#a11yBtn").addEventListener("click", openA11y);
const LEGAL = {
  fr: { t: "Mentions légales", x: "Fermer", b: [
    ["Éditrice", "Housna Baboorally, Paris, <a href=\"mailto:housna.baboorally@icloud.com\">housna.baboorally@icloud.com</a>"],
    ["Hébergement", "Ce site (bab2o.fr) est hébergé par GitHub Pages, un service de GitHub, Inc. (<a href=\"https://pages.github.com\" target=\"_blank\" rel=\"noopener\">pages.github.com</a>)."],
    ["Contenus", "Les visuels des projets restent la propriété de leurs auteurs et des structures concernées (Maison 123, Melon Rouge Agency, ECCC). Ils sont présentés ici à titre de portfolio. Les visages des mannequins sont floutés."],
    ["Données personnelles", "Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Vos préférences (thème, langue) sont conservées uniquement dans votre navigateur."] ] },
  en: { t: "Legal notice", x: "Close", b: [
    ["Publisher", "Housna Baboorally, Paris, <a href=\"mailto:housna.baboorally@icloud.com\">housna.baboorally@icloud.com</a>"],
    ["Hosting", "This site (bab2o.fr) is hosted by GitHub Pages, a service of GitHub, Inc. (<a href=\"https://pages.github.com\" target=\"_blank\" rel=\"noopener\">pages.github.com</a>)."],
    ["Content", "Project visuals remain the property of their authors and of the organisations involved (Maison 123, Melon Rouge Agency, ECCC). They are shown here for portfolio purposes. Models' faces are blurred."],
    ["Personal data", "This site sets no cookies and uses no analytics. Your preferences (theme, language) are only kept in your browser."] ] } };
{ const d = $("#legal");
  const fill = () => { const L = LEGAL[lang]; $("#legalT").textContent = L.t; $("#legalX").textContent = L.x + " ✕︎"; $("#legalBody").innerHTML = L.b.map(([h, p]) => `<h3>${h}</h3><p>${p}</p>`).join(""); };
  $("#legalBtn").addEventListener("click", () => { fill(); d.showModal(); });
  $("#legalX").addEventListener("click", () => d.close());
  d.addEventListener("click", e => { if (e.target === d) d.close(); }); }

$("#a11yClose").addEventListener("click", closeA11y);
$("#a11yScrim").addEventListener("click", closeA11y);
a11yEl.addEventListener("keydown", e => { if (e.key === "Escape") closeA11y(); trap(a11yEl, e); });

const meta = document.createElement("meta"); meta.name = "theme-color"; document.head.appendChild(meta);
applyLang(store.get("hb-lang") === "en" ? "en" : "fr");
splitStatement(true);
tickClock();
spy();
pauseLabel();

(() => {
  const h2 = document.getElementById("h-contact"); if (!h2) return;
  let busy = false;
  const split = () => {
    busy = true;
    const tmp = document.createElement("div"), label = [];
    h2.innerHTML = h2.innerHTML.split(/<br\s*\/?>/i).map(p => { tmp.innerHTML = p; const dim = !!tmp.querySelector(".dim"); const txt = tmp.textContent; label.push(txt);
      return `<span class="ln${dim ? " dim" : ""}" aria-hidden="true">${txt.split(" ").map(w => `<span class="w">${[...w].map(c => `<span class="ch">${c}</span>`).join("")}</span>`).join(" ")}</span>`; }).join("");
    h2.setAttribute("aria-label", label.join(" "));
    busy = false;
  };
  split();
  new MutationObserver(() => { if (!busy && !h2.querySelector(".ch")) split(); }).observe(h2, { childList: true });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { h2.classList.add("in"); io.disconnect(); } }), { threshold: .3 });
  io.observe(h2);
  if (matchMedia("(hover: hover)").matches && !reduce) {
    h2.addEventListener("pointermove", e => h2.querySelectorAll(".ch").forEach(c => { const r = c.getBoundingClientRect(); const d = Math.abs(e.clientX - (r.left + r.width / 2)) + Math.abs(e.clientY - (r.top + r.height / 2)) * .6; c.style.setProperty("--lift", (Math.max(0, 1 - d / 140) * -10).toFixed(1) + "px"); }));
    h2.addEventListener("pointerleave", () => h2.querySelectorAll(".ch").forEach(c => c.style.setProperty("--lift", "0px")));
  }
})();
