'use strict';
const staticCopy = [...document.querySelectorAll('[data-fr]')].map(el => ({el, en:el.innerHTML, fr:el.dataset.fr}));
const languageButton = document.getElementById('language');
const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const dialog = document.getElementById('detail-dialog');
let language = 'en';
let researchFilter = 'all';
let openedDetail = null;
let detailTrigger = null;
const escapeHTML = str => String(str).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const workItems = [
  {key:'backup',en:{title:'Backup & recovery',kind:'ENTERPRISE EXPERIENCE / SETECT',description:'Veeam deployment, business continuity and restoring backup operations after a critical incident.'},fr:{title:'Sauvegarde & reprise',kind:'EXPÉRIENCE EN ENTREPRISE / SETECT',description:'Déploiement Veeam, continuité des activités et rétablissement des sauvegardes après un incident critique.'}},
  {key:'vmware',en:{title:'Virtual infrastructure',kind:'ENTERPRISE EXPERIENCE / SETECT',description:'Deploying VMware ESXi, vCenter and vSphere to support enterprise systems.'},fr:{title:'Infrastructure virtuelle',kind:'EXPÉRIENCE EN ENTREPRISE / SETECT',description:'Déploiement de VMware ESXi, vCenter et vSphere pour soutenir les systèmes de l’entreprise.'}},
  {key:'storage',en:{title:'Storage & offsite archiving',kind:'ENTERPRISE EXPERIENCE / SETECT',description:'Long-term protection of critical data through magnetic-tape archiving with Quantum SuperLoader 3.'},fr:{title:'Stockage & archivage hors site',kind:'EXPÉRIENCE EN ENTREPRISE / SETECT',description:'Protection à long terme des données critiques par archivage sur bandes avec Quantum SuperLoader 3.'}},
  {key:'linux',en:{title:'Linux security in practice',kind:'HANDS-ON ACADEMIC LABS',description:'Apache HTTPS, account policies, access restrictions and LUKS encrypted storage.'},fr:{title:'La sécurité Linux en pratique',kind:'LABORATOIRES UNIVERSITAIRES',description:'HTTPS Apache, politiques de comptes, restrictions d’accès et stockage chiffré LUKS.'}}
];
function coverMarkup(key, item, data) {
  if (key === 'genetic') return `<div class="research-art amber" aria-hidden="true"><span class="art-code">RESEARCH NOTE / 01</span><p class="privacy-cover-title">${language==='fr'?'La vie privée<br>est personnelle.':'Privacy<br>is personal.'}</p><svg class="dna-art" viewBox="0 0 120 270"><path d="M20 0C20 50 100 40 100 90S20 130 20 180s80 40 80 90M100 0c0 50-80 40-80 90s80 40 80 90-80 40-80 90"/><path d="M25 15h70M36 30h48M54 45h12M38 60h44M25 75h70M25 105h70M38 120h44M54 135h12M38 150h44M25 165h70M25 195h70M38 210h44M54 225h12M38 240h44M25 255h70"/></svg><span class="art-footer"><span>GENETIC DATA / ETHICS</span><span>2026</span></span></div>`;
  if (key === 'telehealth') return `<div class="research-art plum" aria-hidden="true"><span class="art-code">CONNECTED CARE / 04</span><div class="health-diagram"><div class="health-node">⌂<span>HOME</span></div><div class="health-node">+<span>TELEHEALTH</span></div><div class="health-node">↗<span>CLINICAL SYSTEMS</span></div></div><span class="art-footer"><span>FOLLOW THE DATA</span><span>2026</span></span></div>`;
  const isAnalysis = key === 'analytical';
  return `<div class="research-art ${item.tone}" aria-hidden="true"><span class="art-code">ZERO TRUST / ${item.number}</span><div class="report-book"><small>${isAnalysis?(language==='fr'?'Rapport analytique':'Analytical report'):(language==='fr'?'Rapport informatif':'Informational report')}</small><strong>Zero<br>Trust.</strong><span>${language==='fr'?'Le système bancaire canadien':'The Canadian banking system'}</span><b>AUBIN TSEYEP</b></div><span class="art-footer"><span>${isAnalysis?'WHY / WHAT NEXT':'WHAT / CONTEXT'}</span><span>2026</span></span></div>`;
}
function renderResearch() {
  const grid = document.getElementById('research-grid');
  grid.innerHTML = Object.entries(researchData).map(([key,item]) => {
    const data=item[language];
    const hidden = researchFilter!=='all' && item.category!==researchFilter;
    return `<article class="research-card ${key}" ${hidden?'hidden':''}>${coverMarkup(key,item,data)}<div class="research-card-body"><p class="research-type">${escapeHTML(data.type)}</p><h3>${escapeHTML(data.shortTitle)}</h3><p class="summary">${escapeHTML(data.summary)}</p><p class="full-title">${escapeHTML(data.title)}</p><div class="research-card-bottom"><span>${language==='fr'?'TRAVAUX UNIVERSITAIRES / 2026':'ACADEMIC WORK / 2026'}</span><button class="read-research" data-research="${key}"><span>${language==='fr'?'Lire la synthèse':'Read research brief'}</span><span aria-hidden="true">↗</span></button></div></div></article>`;
  }).join('');
  const count=Object.values(researchData).filter(item=>researchFilter==='all'||item.category===researchFilter).length;
  document.getElementById('research-count').textContent=language==='fr'?`${String(count).padStart(2,'0')} TRAVAUX`:`${String(count).padStart(2,'0')} SELECTED WORKS`;
  grid.querySelectorAll('[data-research]').forEach(button=>button.addEventListener('click',()=>openDetail('research',button.dataset.research,button)));
}
function renderWork() {
  document.getElementById('work-list').innerHTML=workItems.map((item,index)=>{const data=item[language];return `<button class="work-row" data-work="${item.key}"><span class="work-number">${String(index+1).padStart(2,'0')}</span><span class="work-title"><strong>${escapeHTML(data.title)}</strong><small>${escapeHTML(data.kind)}</small></span><span class="work-desc">${escapeHTML(data.description)}</span><span class="work-arrow" aria-hidden="true">↗</span></button>`;}).join('');
  document.querySelectorAll('[data-work]').forEach(button=>button.addEventListener('click',()=>openDetail('work',button.dataset.work,button)));
}
function updateMenuLabel() {
  const isOpen=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-label',language==='fr'?(isOpen?'Fermer le menu':'Ouvrir le menu'):(isOpen?'Close navigation':'Open navigation'));
}
function setLanguage(next) {
  language=next==='fr'?'fr':'en';
  document.documentElement.lang=language;
  staticCopy.forEach(({el,en,fr})=>{if(language==='fr')el.textContent=fr;else el.innerHTML=en;});
  languageButton.innerHTML=language==='en'?'EN <span>/ FR</span>':'<span>EN /</span> FR';
  languageButton.setAttribute('aria-label',language==='en'?'Passer en français':'Switch to English');
  document.querySelector('.research-filters').setAttribute('aria-label',language==='fr'?'Filtrer les travaux universitaires':'Filter academic research');
  document.getElementById('close-dialog').setAttribute('aria-label',language==='fr'?'Fermer les détails':'Close details');
  document.title=language==='fr'?'Aubin Tseyep — Infrastructure, cybersécurité & confiance numérique':'Aubin Tseyep — Infrastructure, Cybersecurity & Digital Trust';
  updateMenuLabel();renderResearch();renderWork();updatePortrait();updateMediaLabels();
  if(openedDetail)renderDetail(openedDetail.type,openedDetail.key);
  try{localStorage.setItem('aubin-portfolio-language',language);}catch(_){}
}
function closeMenu(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');updateMenuLabel();}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mobileNav.hidden=!open;updateMenuLabel();});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.matchMedia('(min-width:661px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'fr':'en'));
document.querySelectorAll('.research-filter').forEach(button=>button.addEventListener('click',()=>{researchFilter=button.dataset.filter;document.querySelectorAll('.research-filter').forEach(filter=>{const active=filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});renderResearch();}));
function renderDetail(type,key) {
  const data=type==='research'?researchData[key][language]:projectData[key][language];
  document.getElementById('detail-category').textContent=type==='research'?`${data.type} / 2026`:data.category;
  document.getElementById('detail-title').textContent=data.title;
  document.getElementById('detail-intro').textContent=type==='research'?data.summary:data.intro;
  const content=document.getElementById('detail-content');
  content.replaceChildren();
  if(type==='research'){
    const method=document.createElement('section');method.className='detail-section';
    const title=document.createElement('h3');title.textContent=language==='fr'?'Format & méthode':'Format & method';
    const text=document.createElement('p');text.textContent=data.method;
    method.append(title,text);content.append(method);
  }
  data.sections.forEach(section=>{
    const block=document.createElement('section');block.className='detail-section';
    const heading=document.createElement('h3');heading.textContent=section.heading;block.append(heading);
    if(section.text){const paragraph=document.createElement('p');paragraph.textContent=section.text;block.append(paragraph);}
    if(section.list){const list=document.createElement('ul');section.list.forEach(text=>{const item=document.createElement('li');item.textContent=text;list.append(item);});block.append(list);}
    content.append(block);
  });
  if(data.source){const source=document.createElement('a');source.href=data.source.url;source.target='_blank';source.rel='noopener noreferrer';source.className='detail-source';source.textContent=`${language==='fr'?'Source de référence':'Reference source'}: ${data.source.label} ↗`;content.append(source);}
  const tags=document.getElementById('detail-tags');tags.replaceChildren();data.tags.forEach(text=>{const tag=document.createElement('span');tag.textContent=text;tags.append(tag);});
}
function openDetail(type,key,trigger){openedDetail={type,key};detailTrigger=trigger;renderDetail(type,key);dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');document.getElementById('close-dialog').focus({preventScroll:true});}
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
document.getElementById('close-dialog-bottom').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');openedDetail=null;if(detailTrigger&&detailTrigger.isConnected)detailTrigger.focus({preventScroll:true});});
const portraitOptions={
 laptop:{src:'assets/aubin-laptop.png',width:920,height:1150,en:'Aubin Tseyep in a blue shirt holding a laptop',fr:'Aubin Tseyep en chemise bleue, tenant un ordinateur portable'},
 setect:{src:'assets/aubin-setect-portrait.png',width:1024,height:1280,en:'Professional studio portrait of Aubin Tseyep wearing a SETECT polo',fr:'Portrait professionnel d’Aubin Tseyep portant un polo SETECT'}
};
let selectedPortrait='laptop';
const mediaDialog=document.getElementById('media-dialog');
let mediaTrigger=null;
function updatePortrait(){
 const photo=document.getElementById('profile-portrait');const data=portraitOptions[selectedPortrait];
 if(photo.getAttribute('src')!==data.src)photo.src=data.src;
 photo.alt=data[language];photo.width=data.width;photo.height=data.height;
 document.querySelector('.portrait-controls').setAttribute('aria-label',language==='fr'?'Choisir un portrait':'Choose a portrait');
}
function updateMediaLabels(){
 document.getElementById('close-media').setAttribute('aria-label',language==='fr'?'Fermer la photo':'Close photo');
 document.getElementById('presentation-video').setAttribute('aria-label',language==='fr'?'Extrait vidéo d’une présentation professionnelle':'Video excerpt from a professional presentation');
 document.querySelectorAll('[data-media]').forEach(button=>button.setAttribute('aria-label',(language==='fr'?'Agrandir : ':'Enlarge: ')+(language==='fr'?button.dataset.captionFr:button.dataset.captionEn)));
 if(mediaTrigger&&mediaDialog.open){const caption=language==='fr'?mediaTrigger.dataset.captionFr:mediaTrigger.dataset.captionEn;document.getElementById('media-caption').textContent=caption;document.getElementById('media-image').alt=caption;}
}
document.querySelectorAll('[data-portrait]').forEach(button=>button.addEventListener('click',()=>{
 selectedPortrait=button.dataset.portrait;
 document.querySelectorAll('[data-portrait]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
 updatePortrait();
}));
document.querySelectorAll('[data-media]').forEach(button=>button.addEventListener('click',()=>{
 mediaTrigger=button;document.getElementById('media-image').src=button.dataset.media;
 const caption=language==='fr'?button.dataset.captionFr:button.dataset.captionEn;
 document.getElementById('media-caption').textContent=caption;document.getElementById('media-image').alt=caption;
 mediaDialog.showModal();document.body.classList.add('modal-open');document.getElementById('close-media').focus({preventScroll:true});
}));
document.getElementById('close-media').addEventListener('click',()=>mediaDialog.close());
mediaDialog.addEventListener('click',event=>{const r=mediaDialog.getBoundingClientRect();if(event.target===mediaDialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))mediaDialog.close();});
mediaDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(mediaTrigger)mediaTrigger.focus({preventScroll:true});});

let storedLanguage='en';try{storedLanguage=localStorage.getItem('aubin-portfolio-language')||'en';}catch(_){}
setLanguage(storedLanguage);
