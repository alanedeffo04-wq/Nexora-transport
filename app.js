/* ================= CONFIG (modifiable après signature) ================= */
const CONFIG = {
  brand: 'NEXORA',
  whatsapp: '237690678776',          // indicatif + numéro, sans "+"
  email: 'nexoratech@outlook.fr',
  currency: 'FCFA',
  socials: { facebook: '#', instagram: '#', tiktok: '#' }  // liens réseaux sociaux
};

/* ================= DONNÉES DES 20 VÉHICULES =================
   Remplacer "img" par la vraie photo : images/suv-01.jpg etc. Tarifs = démonstration. */
const VEHICLES = [];
for (let i = 1; i <= 7; i++) VEHICLES.push({ id: `suv-${String(i).padStart(2,'0')}`, name: `SUV ${String(i).padStart(2,'0')}`, cat: 'suv', seats: i % 3 === 0 ? 7 : 5, price: 45000 + i * 2500, gearbox: i % 2 ? 'auto' : 'manual', ac: true, gps: i % 2 === 1 });
for (let i = 1; i <= 10; i++) VEHICLES.push({ id: `berline-${String(i).padStart(2,'0')}`, name: `Berline ${String(i).padStart(2,'0')}`, cat: 'berline', seats: 5, price: 30000 + i * 2000, gearbox: i % 3 ? 'auto' : 'manual', ac: true, gps: i % 2 === 0 });
[[15, 'minibus-15', 90000], [30, 'minibus-30', 150000], [20, 'minibus-20', 110000]].forEach(([s, id, p]) =>
  VEHICLES.push({ id, name: `Minibus ${s} places`, nameEn: `Minibus ${s} seats`, cat: 'minibus', seats: s, price: p, gearbox: 'manual', ac: true, gps: false }));
VEHICLES.forEach(v => v.img = `images/${v.id}.jpg`);
const FEATURED = ['suv-01', 'berline-01', 'suv-02', 'minibus-15'];

/* ================= TRADUCTIONS ================= */
const I18N = {
fr: { nav_home:'Accueil', nav_catalogue:'Catalogue', nav_needs:'Besoins spécifiques', nav_contact:'Contact', book:'Réserver',
 hero_kicker:'Location & transport', hero_title:'Votre mobilité, votre liberté de déplacement.', hero_text:'Des véhicules soigneusement entretenus pour chaque trajet : SUV, berlines et minibus pour vos groupes.',
 discover:'Découvrir le catalogue', book_vehicle:'Réserver un véhicule', intro_title:'Une flotte pensée pour vous', intro_text:'NEXORA propose la location de véhicules et le transport de personnes, pour vos déplacements personnels, professionnels ou événementiels. Simple, fiable, élégant.',
 featured:'Véhicules à découvrir', see_all:'Voir tout', cta_title:'Un projet de déplacement ?', cta_text:'Consultez notre catalogue ou décrivez-nous votre besoin.', make_request:'Faire une demande',
 cat_title:'Découvrez notre flotte', cat_sub:'Choisissez le véhicule adapté à votre déplacement.', search:'Rechercher un véhicule…', all_cat:'Toutes catégories', berlines:'Berlines', minibus:'Minibus & groupes', all_seats:'Nombre de places', all_price:'Prix / jour', results:'véhicule(s)', none:'Aucun véhicule ne correspond.',
 seats:'places', per_day:'/ jour', see:'Voir le véhicule', reserve:'Réserver', reserve_this:'Réserver ce véhicule', back:'← Retour au catalogue',
 gearbox:'Boîte', auto:'Automatique', manual:'Manuelle', ac:'Climatisation', gps:'GPS', yes:'Oui', no:'Non', cat_suv:'SUV', cat_berline:'Berline', cat_minibus:'Minibus',
 d_suv:'Véhicule spacieux et confortable, idéal pour la ville comme pour les longs trajets.', d_berline:'Berline élégante et confortable pour vos déplacements professionnels ou personnels.', d_minibus:'Transport de groupes en toute sérénité, adapté aux événements et voyages collectifs.',
 book_title:'Demande de réservation', selected:'Véhicule sélectionné', lastname:'Nom', firstname:'Prénom', phone:'Téléphone', email:'Adresse e-mail', vehicle:'Véhicule', d_start:'Date de départ', d_end:'Date de retour', h_start:'Heure de départ', from:'Lieu de départ', to:'Destination', pax:'Nombre de personnes', more:'Informations complémentaires',
 recap:'Récapitulatif', duration:'Durée', days:'jour(s)', daily:'Prix journalier', total:'Total estimatif', ref:'Référence', send_wa:'Envoyer via WhatsApp', not_confirmed:'Cette demande n’est pas une réservation confirmée : elle doit être validée par l’entreprise.',
 err_req:'Veuillez remplir tous les champs obligatoires.', err_mail:'Adresse e-mail invalide.', err_dates:'La date de retour doit être égale ou postérieure au départ.',
 needs_title:'Besoins spécifiques', needs_sub:'Un besoin qui sort du cadre d’une location classique ? Décrivez-le nous.', n1:'Plusieurs véhicules', n2:'Transport de groupe', n3:'Événement', n4:'Déplacement professionnel', n5:'Demande personnalisée',
 need_desc:'Description détaillée du besoin', attach:'Ajouter une photo ou un document', optional:'Pièce jointe facultative', attach_note:'Le fichier choisi est à joindre manuellement dans la conversation WhatsApp.',
 contact_title:'Contact', reach:'Parlons de votre trajet', message:'Message', send:'Envoyer par WhatsApp',
 foot_text:'Location de véhicules et transport de personnes. Mobilité simple, fiable et élégante.', links:'Navigation', legal:'Mentions légales', privacy:'Politique de confidentialité', terms:'Conditions générales',
 w_hello:'Bonjour, nouvelle demande :', w_client:'Client', w_veh:'Véhicule', w_dates:'Dates', w_trip:'Trajet', w_time:'Heure', w_pax:'Personnes', w_total:'Total estimatif', w_info:'Infos', w_need:'Besoin spécifique', w_file:'Pièce jointe', w_msg:'Message' },
en: { nav_home:'Home', nav_catalogue:'Catalogue', nav_needs:'Special requests', nav_contact:'Contact', book:'Book',
 hero_kicker:'Rental & transport', hero_title:'Your mobility, your freedom to travel.', hero_text:'Carefully maintained vehicles for every journey: SUVs, sedans and minibuses for your groups.',
 discover:'Discover the catalogue', book_vehicle:'Book a vehicle', intro_title:'A fleet designed for you', intro_text:'NEXORA offers vehicle rental and passenger transport for personal, business or event travel. Simple, reliable, elegant.',
 featured:'Featured vehicles', see_all:'See all', cta_title:'Planning a trip?', cta_text:'Browse our catalogue or tell us about your need.', make_request:'Send a request',
 cat_title:'Discover our fleet', cat_sub:'Choose the vehicle that suits your trip.', search:'Search a vehicle…', all_cat:'All categories', berlines:'Sedans', minibus:'Minibus & groups', all_seats:'Seats', all_price:'Price / day', results:'vehicle(s)', none:'No vehicle matches.',
 seats:'seats', per_day:'/ day', see:'View vehicle', reserve:'Book', reserve_this:'Book this vehicle', back:'← Back to catalogue',
 gearbox:'Gearbox', auto:'Automatic', manual:'Manual', ac:'Air conditioning', gps:'GPS', yes:'Yes', no:'No', cat_suv:'SUV', cat_berline:'Sedan', cat_minibus:'Minibus',
 d_suv:'Spacious and comfortable vehicle, ideal for the city and long trips.', d_berline:'Elegant and comfortable sedan for your business or personal travel.', d_minibus:'Group transport with peace of mind, suited to events and shared trips.',
 book_title:'Booking request', selected:'Selected vehicle', lastname:'Last name', firstname:'First name', phone:'Phone', email:'Email address', vehicle:'Vehicle', d_start:'Departure date', d_end:'Return date', h_start:'Departure time', from:'Pick-up location', to:'Destination', pax:'Number of people', more:'Additional information',
 recap:'Summary', duration:'Duration', days:'day(s)', daily:'Daily rate', total:'Estimated total', ref:'Reference', send_wa:'Send via WhatsApp', not_confirmed:'This request is not a confirmed booking: it must be validated by the company.',
 err_req:'Please fill in all required fields.', err_mail:'Invalid email address.', err_dates:'Return date must be on or after departure.',
 needs_title:'Special requests', needs_sub:'A need beyond a standard rental? Tell us about it.', n1:'Several vehicles', n2:'Group transport', n3:'Event', n4:'Business trip', n5:'Custom request',
 need_desc:'Detailed description of your need', attach:'Add a photo or document', optional:'Optional attachment', attach_note:'Attach the chosen file manually in the WhatsApp conversation.',
 contact_title:'Contact', reach:'Let’s talk about your trip', message:'Message', send:'Send via WhatsApp',
 foot_text:'Vehicle rental and passenger transport. Simple, reliable and elegant mobility.', links:'Navigation', legal:'Legal notice', privacy:'Privacy policy', terms:'Terms & conditions',
 w_hello:'Hello, new request:', w_client:'Client', w_veh:'Vehicle', w_dates:'Dates', w_trip:'Trip', w_time:'Time', w_pax:'People', w_total:'Estimated total', w_info:'Notes', w_need:'Special request', w_file:'Attachment', w_msg:'Message' }
};

/* ================= OUTILS ================= */
let lang = localStorage.getItem('nx-lang') || 'fr';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = k => I18N[lang][k] ?? k;
const money = n => n.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US') + ' ' + CONFIG.currency;
const vName = v => lang === 'en' && v.nameEn ? v.nameEn : v.name;
const byId = id => VEHICLES.find(v => v.id === id);
const PH = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 100'><rect width='160' height='100' fill='%23E8ECF0'/><text x='80' y='56' font-family='sans-serif' font-size='11' fill='%23343C46' text-anchor='middle'>Image à venir</text></svg>";
const img = v => `<img src="${v.img}" alt="${vName(v)}" loading="lazy" onerror="this.onerror=null;this.src=&quot;${PH}&quot;">`;
const wa = txt => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank');
const genRef = () => 'NX-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
const icons = () => window.lucide && lucide.createIcons();

/* ================= TRADUCTION STATIQUE ================= */
function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  $$('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  renderFeatured(); renderCatalogue(); renderRoute(); updateRecap(); icons();
}

/* ================= CARTES ================= */
function card(v) {
  return `<article class="vcard"><a href="#/vehicle/${v.id}" class="vimg">${img(v)}</a>
  <div class="vbody"><span class="badge">${t('cat_' + v.cat)}</span><h3>${vName(v)}</h3>
  <div class="meta"><i data-lucide="users"></i>${v.seats} ${t('seats')}</div>
  <div class="price">${money(v.price)} <small>${t('per_day')}</small></div>
  <div class="vbtns"><a class="btn btn-ghost" href="#/vehicle/${v.id}">${t('see')}</a><a class="btn btn-main" href="#/booking/${v.id}">${t('reserve')}</a></div></div></article>`;
}
function renderFeatured() { $('#featured').innerHTML = FEATURED.map(id => card(byId(id))).join(''); icons(); }

function renderCatalogue() {
  const q = $('#q').value.trim().toLowerCase(), c = $('#fCat').value, s = +$('#fSeats').value, p = +$('#fPrice').value;
  const list = VEHICLES.filter(v => (c === 'all' || v.cat === c) && v.seats >= s && (!p || v.price <= p) && vName(v).toLowerCase().includes(q));
  $('#count').textContent = `${list.length} ${t('results')}`;
  $('#catalogue').innerHTML = list.map(card).join('') || `<p class="empty">${t('none')}</p>`;
  icons();
}
['#q', '#fCat', '#fSeats', '#fPrice'].forEach(s => $(s).addEventListener('input', renderCatalogue));

/* ================= FICHE ================= */
function renderVehicle(id) {
  const v = byId(id); if (!v) return location.hash = '#/catalogue';
  const yn = b => b ? t('yes') : t('no');
  $('#vehicle').innerHTML = `<a href="#/catalogue" class="back">${t('back')}</a><div class="detail">
  <div class="vimg">${img(v)}</div><div><span class="badge">${t('cat_' + v.cat)}</span><h1>${vName(v)}</h1>
  <div class="price">${money(v.price)} <small>${t('per_day')}</small></div>
  <div class="specs"><div class="meta"><i data-lucide="users"></i>${v.seats} ${t('seats')}</div>
  <div class="meta"><i data-lucide="settings"></i>${t('gearbox')} : ${t(v.gearbox)}</div>
  <div class="meta"><i data-lucide="snowflake"></i>${t('ac')} : ${yn(v.ac)}</div>
  <div class="meta"><i data-lucide="map-pin"></i>${t('gps')} : ${yn(v.gps)}</div></div>
  <p style="margin-bottom:24px">${t('d_' + v.cat)}</p>
  <a class="btn btn-main" href="#/booking/${v.id}">${t('reserve_this')}</a></div></div>`;
  icons();
}

/* ================= RÉSERVATION ================= */
const bf = $('#bookForm');
$('#bkSelect').innerHTML = VEHICLES.map(v => `<option value="${v.id}">${v.name}</option>`).join('');
function days() {
  const a = bf.d1.value, b = bf.d2.value; if (!a || !b) return 0;
  const n = Math.round((new Date(b) - new Date(a)) / 864e5) + 1; return n > 0 ? n : 0;
}
function updateRecap() {
  const v = byId(bf.veh.value), n = days();
  $('#bkVehicle').textContent = `${t('selected')} : ${vName(v)}`;
  $('#recap').innerHTML = `<h4 style="color:#fff;margin-bottom:8px">${t('recap')}</h4>
  <div><span>${t('duration')}</span><span>${n} ${t('days')}</span></div>
  <div><span>${t('daily')}</span><span>${money(v.price)}</span></div>
  <div class="tot"><span>${t('total')}</span><b>${money(v.price * n)}</b></div>`;
}
bf.addEventListener('input', updateRecap);
const today = new Date().toISOString().slice(0, 10); bf.d1.min = bf.d2.min = today;

bf.addEventListener('submit', e => {
  e.preventDefault(); const f = bf, err = $('#bkErr'); err.textContent = '';
  if ([...f.querySelectorAll('[required]')].some(i => !i.value.trim())) return err.textContent = t('err_req');
  if (!/^\S+@\S+\.\S+$/.test(f.email.value)) return err.textContent = t('err_mail');
  if (!days()) return err.textContent = t('err_dates');
  const v = byId(f.veh.value), n = days(), ref = genRef();
  wa([`${t('w_hello')} ${ref}`, '',
    `${t('w_client')} : ${f.prenom.value} ${f.nom.value} — ${f.tel.value} — ${f.email.value}`,
    `${t('w_veh')} : ${vName(v)} (${money(v.price)} ${t('per_day')})`,
    `${t('w_dates')} : ${f.d1.value} → ${f.d2.value} (${n} ${t('days')})`,
    `${t('w_time')} : ${f.heure.value}`,
    `${t('w_trip')} : ${f.lieu.value} → ${f.dest.value}`,
    `${t('w_pax')} : ${f.pax.value}`,
    `${t('w_total')} : ${money(v.price * n)}`,
    f.info.value && `${t('w_info')} : ${f.info.value}`, '', `(${t('not_confirmed')})`].filter(x => x !== '' || true).join('\n'));
});

/* ================= BESOINS & CONTACT ================= */
$('#file').addEventListener('change', e => $('#fileName').textContent = e.target.files[0]?.name || t('optional'));
$('#needsForm').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target;
  if ([...f.querySelectorAll('[required]')].some(i => !i.value.trim())) return $('#ndErr').textContent = t('err_req');
  if (!/^\S+@\S+\.\S+$/.test(f.email.value)) return $('#ndErr').textContent = t('err_mail');
  $('#ndErr').textContent = '';
  const file = $('#file').files[0];
  wa([`${t('w_hello')} ${genRef()} — ${t('w_need')}`, '', `${t('w_client')} : ${f.prenom.value} ${f.nom.value} — ${f.tel.value} — ${f.email.value}`, `${t('w_msg')} : ${f.desc.value}`, file && `${t('w_file')} : ${file.name}`].filter(Boolean).join('\n'));
});
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target;
  if (!f.nom.value.trim() || !f.msg.value.trim()) return $('#ctErr').textContent = t('err_req');
  $('#ctErr').textContent = '';
  wa(`${f.nom.value}${f.email.value ? ' (' + f.email.value + ')' : ''} :\n${f.msg.value}`);
});

/* ================= COORDONNÉES / SOCIAL ================= */
$$('.wa-link').forEach(a => a.href = `https://wa.me/${CONFIG.whatsapp}`);
$$('.mail-link').forEach(a => a.href = `mailto:${CONFIG.email}`);
$$('.wa-num').forEach(e => e.textContent = '+' + CONFIG.whatsapp);
$$('.mail-txt').forEach(e => e.textContent = CONFIG.email);
$('#socials').innerHTML = Object.entries(CONFIG.socials).map(([n, u]) => `<a href="${u}" aria-label="${n}" target="_blank" rel="noopener"><i data-lucide="${n === 'tiktok' ? 'music-2' : n}"></i></a>`).join('');

/* ================= ROUTEUR ================= */
function renderRoute() {
  const [, page = 'home', arg] = location.hash.split('/');
  const p = ['home', 'catalogue', 'vehicle', 'booking', 'needs', 'contact'].includes(page) ? page : 'home';
  $$('[data-page]').forEach(s => s.hidden = s.dataset.page !== p);
  $$('[data-route]').forEach(a => a.classList.toggle('active', a.dataset.route === (p === 'vehicle' || p === 'booking' ? 'catalogue' : p)));
  if (p === 'vehicle') renderVehicle(arg);
  if (p === 'booking') { bf.veh.value = byId(arg) ? arg : VEHICLES[0].id; updateRecap(); }
  $('#menu').classList.remove('open'); $('#burger').classList.remove('open');
  observe();
}
let io;
function observe() {
  io ||= new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 });
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
}
window.addEventListener('hashchange', () => { renderRoute(); window.scrollTo({ top: 0 }); });

/* ================= UI ================= */
$('#burger').onclick = e => { e.currentTarget.classList.toggle('open'); $('#menu').classList.toggle('open'); };
$$('.lang button').forEach(b => b.onclick = () => { lang = b.dataset.lang; localStorage.setItem('nx-lang', lang); applyLang(); });
applyLang();