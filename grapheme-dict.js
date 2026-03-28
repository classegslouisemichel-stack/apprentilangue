/**
 * grapheme-dict.js — Dictionnaire unique des graphèmes EO (Écrire & Oraliser)
 * ============================================================================
 * SOURCE DE VÉRITÉ pour les couleurs de traits et de lettres.
 * Généré depuis les tables Supabase sons_eo + graphemes_eo,
 * elles-mêmes extraites des cartes sons SVG (Cartes_Son_EO).
 *
 * Usage :
 *   <script src="grapheme-dict.js"></script>
 *   → expose les globales : SONS_EO, GRAPHEME_DB, EO0, PAT_EO, GRAPHEME_ORDER,
 *     SILENT_FINAL, COL_MUETTE, IMG_MUETTE, PAL, TRAIT_COLORS
 *
 * Dernière mise à jour : 2026-03-28
 */

// ================================================================
// PALETTE EO
// ================================================================
var PAL = [
  { n: 'Noir',       h: '#222222' },
  { n: 'Rose',       h: '#E11683' },
  { n: 'Vert',       h: '#7DB728' },
  { n: 'Bleu clair', h: '#82c4e0' },
  { n: 'Gris',       h: '#aaaaaa' }
];

// ================================================================
// COULEURS DE TRAIT PAR SON (extraites des SVG cartes sons EO)
// ================================================================
var TRAIT_COLORS = {
  'a':      '#7DB728',
  'an':     '#7DB728',
  'b':      '#7DB728',
  'k':      '#7DB728',
  'ch':     '#7DB728',
  'd':      '#7DB728',
  'e':      '#7DB728',
  'é':      '#7DB728',
  'è':      '#7DB728',
  'eu':     '#7FC7EB',
  'f':      '#7DB728',
  'g':      '#7FC7EB',
  'gn':     '#575756',
  'i':      '#7DB728',
  'il':     '#7DB728',
  'in':     '#7DB728',
  'j':      '#E11683',
  'l':      '#7DB728',
  'm':      '#7DB728',
  'n':      '#7DB728',
  'ng':     '#DE0980',
  'o':      '#7DB728',
  '\u0254': '#7FC7EB',   // ɔ (ogre)
  'oi':     '#7DB728',
  'oin':    '#7FC7EB',
  'on':     '#7FC7EB',
  'ou':     '#7DB728',
  'p':      '#7DB728',
  'r':      '#7DB728',
  's':      '#7DB728',
  't':      '#7DB728',
  'u':      '#7FC7EB',
  'v':      '#7FC7EB',
  'ks':     '#7DB728',
  'gz':     '#7DB728',
  'y':      '#7DB728',
  'z':      '#7DB728',
  'muette': '#AAAAAA'
};

// ================================================================
// SONS EO — Données complètes des cartes sons
// ================================================================
var SONS_EO = {
  'a':      { nom: 'Avion',      img: 'eo/a-avion.png',       svg: 'Cartes_Son_EO/a-avion-off.svg',        couleur: '#7DB728', ordre: 1 },
  'an':     { nom: 'Ange',       img: 'eo/an-ange.png',       svg: 'Cartes_Son_EO/an-ange-off.svg',        couleur: '#7DB728', ordre: 2 },
  'b':      { nom: 'Botte',      img: 'eo/b-bottes.png',      svg: 'Cartes_Son_EO/b-botte-off.svg',        couleur: '#7DB728', ordre: 3 },
  'k':      { nom: 'Crocodile',  img: 'eo/c-crocodile.png',   svg: 'Cartes_Son_EO/c-crocodile-off.svg',    couleur: '#7DB728', ordre: 4 },
  'ch':     { nom: 'Chat',       img: 'eo/ch-chat.png',       svg: 'Cartes_Son_EO/ch-chat-off.svg',        couleur: '#7DB728', ordre: 5 },
  'd':      { nom: 'Danseuse',   img: 'eo/d-danseuse.png',    svg: 'Cartes_Son_EO/d-danseuse-off.svg',     couleur: '#7DB728', ordre: 6 },
  'e':      { nom: 'Chèvre',     img: 'eo/e-chèvre.png',      svg: 'Cartes_Son_EO/e-chevre-melon-off.svg', couleur: '#7DB728', ordre: 7 },
  'é':      { nom: 'Étoile',     img: 'eo/é-étoile.png',      svg: 'Cartes_Son_EO/e-etoile-off.svg',       couleur: '#7DB728', ordre: 8 },
  'è':      { nom: 'Flèche',     img: 'eo/è-flèche.png',      svg: 'Cartes_Son_EO/e-fleche-off.svg',       couleur: '#7DB728', ordre: 9 },
  'eu':     { nom: 'Feu',        img: 'eo/eu-feu.png',        svg: 'Cartes_Son_EO/eu-feu-off.svg',         couleur: '#7FC7EB', ordre: 10 },
  'f':      { nom: 'Fée',        img: 'eo/f-fée.png',         svg: 'Cartes_Son_EO/f-fee-off.svg',          couleur: '#7DB728', ordre: 11 },
  'g':      { nom: 'Gorille',    img: 'eo/g-gorille.png',     svg: 'Cartes_Son_EO/g-gorille-off.svg',      couleur: '#7FC7EB', ordre: 12 },
  'gn':     { nom: 'Montagne',   img: 'eo/gn-montagne.png',   svg: 'Cartes_Son_EO/gn-montagne-off.svg',    couleur: '#575756', ordre: 13 },
  'i':      { nom: 'Igloo',      img: 'eo/i-igloo.png',       svg: 'Cartes_Son_EO/i-igloo-off.svg',        couleur: '#7DB728', ordre: 14 },
  'il':     { nom: 'Oeil',       img: 'eo/il-oeil.png',       svg: 'Cartes_Son_EO/il-oeil-off-2.svg',      couleur: '#7DB728', ordre: 15 },
  'in':     { nom: 'Indien',     img: 'eo/in-idien.png',      svg: 'Cartes_Son_EO/in-indien-off.svg',      couleur: '#7DB728', ordre: 16 },
  'j':      { nom: 'Jumelles',   img: 'eo/j-jumelles.png',    svg: 'Cartes_Son_EO/j-jumelles-off.svg',     couleur: '#E11683', ordre: 17 },
  'l':      { nom: 'Lunettes',   img: 'eo/l-lunettes.png',    svg: 'Cartes_Son_EO/l-lunettes-off.svg',     couleur: '#7DB728', ordre: 18 },
  'm':      { nom: 'Moto',       img: 'eo/m-moto.png',        svg: 'Cartes_Son_EO/m-moto-off.svg',         couleur: '#7DB728', ordre: 19 },
  'n':      { nom: 'Neige',      img: 'eo/n-neige.png',       svg: 'Cartes_Son_EO/n-neige-off.svg',        couleur: '#7DB728', ordre: 20 },
  'ng':     { nom: 'Viking',     img: 'eo/ng-viking.png',     svg: 'Cartes_Son_EO/ng-viking-off.svg',      couleur: '#DE0980', ordre: 21 },
  'o':      { nom: 'Otarie',     img: 'eo/o-otarie.png',      svg: 'Cartes_Son_EO/o-otarie-off.svg',       couleur: '#7DB728', ordre: 22 },
  '\u0254': { nom: 'Ogre',       img: 'eo/o-ogre.png',        svg: 'Cartes_Son_EO/o-ogre-off.svg',         couleur: '#7FC7EB', ordre: 23 },
  'oi':     { nom: 'Oie',        img: 'eo/oi-oie.png',        svg: 'Cartes_Son_EO/oi-oie-off.svg',         couleur: '#7DB728', ordre: 24 },
  'oin':    { nom: 'Pointe',     img: 'eo/oin-pointe.png',    svg: 'Cartes_Son_EO/oin-pointe-off.svg',     couleur: '#7FC7EB', ordre: 25 },
  'on':     { nom: 'Bonbon',     img: 'eo/on-bonbon.png',     svg: 'Cartes_Son_EO/on-bonbon-off.svg',      couleur: '#7FC7EB', ordre: 26 },
  'ou':     { nom: 'Loup',       img: 'eo/ou-loup.png',       svg: 'Cartes_Son_EO/ou-loup-off.svg',        couleur: '#7DB728', ordre: 27 },
  'p':      { nom: 'Pirate',     img: 'eo/p-pirate.png',      svg: 'Cartes_Son_EO/p-pirate-off.svg',       couleur: '#7DB728', ordre: 28 },
  'r':      { nom: 'Rat',        img: 'eo/r-rat.png',         svg: 'Cartes_Son_EO/r-rat-off.svg',          couleur: '#7DB728', ordre: 29 },
  's':      { nom: 'Serpent',     img: 'eo/s-serpent.png',     svg: 'Cartes_Son_EO/s-serpent-off.svg',      couleur: '#7DB728', ordre: 30 },
  't':      { nom: 'Téléphone',  img: 'eo/t-téléphone.png',   svg: 'Cartes_Son_EO/t-telephone-off.svg',    couleur: '#7DB728', ordre: 31 },
  'u':      { nom: 'Usine',      img: 'eo/u-usine.png',       svg: 'Cartes_Son_EO/u-usine-off.svg',        couleur: '#7FC7EB', ordre: 32 },
  'v':      { nom: 'Vache',      img: 'eo/v-vache.png',       svg: 'Cartes_Son_EO/v-vache-off.svg',        couleur: '#7FC7EB', ordre: 33 },
  'ks':     { nom: 'Taxi',       img: 'eo/x-taxi.png',        svg: 'Cartes_Son_EO/x-taxi-off.svg',         couleur: '#7DB728', ordre: 34 },
  'gz':     { nom: 'Xylophone',  img: 'eo/x-xylophone.png',   svg: 'Cartes_Son_EO/x-xylophone-off.svg',   couleur: '#7DB728', ordre: 35 },
  'y':      { nom: 'Tuyau',      img: 'eo/y-tuyau.png',       svg: 'Cartes_Son_EO/y-tuyau-off.svg',        couleur: '#7DB728', ordre: 36 },
  'z':      { nom: 'Zèbre',      img: 'eo/z-zèbre.png',       svg: 'Cartes_Son_EO/z-zebre-off.svg',        couleur: '#7DB728', ordre: 37 },
  'muette': { nom: 'Muette',     img: 'eo/Lettre_Muette.png', svg: null,                                    couleur: '#AAAAAA', ordre: 38 }
};

// ================================================================
// DICTIONNAIRE PLAT EO — graphème → { son, image, couleurs lettres }
// Utilisé par analyzeWord() pour le codage phonétique des mots
// ================================================================
var EO0 = {
  // Son [a] — Avion
  'a':   { s: 'a',  i: 'eo/a-avion.png',       c: ['#222222'],           tc: '#7DB728' },
  'â':   { s: 'a',  i: 'eo/a-avion.png',       c: ['#7DB728'],           tc: '#7DB728' },
  // Son [an] — Ange
  'an':  { s: 'an', i: 'eo/an-ange.png',        c: ['#222222','#222222'], tc: '#7DB728' },
  'en':  { s: 'an', i: 'eo/an-ange.png',        c: ['#E11683','#222222'], tc: '#7DB728' },
  'em':  { s: 'an', i: 'eo/an-ange.png',        c: ['#E11683','#82c4e0'], tc: '#7DB728' },
  'am':  { s: 'an', i: 'eo/an-ange.png',        c: ['#222222','#82c4e0'], tc: '#7DB728' },
  // Son [b] — Botte
  'b':   { s: 'b',  i: 'eo/b-bottes.png',       c: ['#222222'],           tc: '#7DB728' },
  // Son [k] — Crocodile
  'c':   { s: 'k',  i: 'eo/c-crocodile.png',    c: ['#222222'],           tc: '#7DB728' },
  'qu':  { s: 'k',  i: 'eo/c-crocodile.png',    c: ['#E11683','#aaaaaa'], tc: '#7DB728' },
  'k':   { s: 'k',  i: 'eo/c-crocodile.png',    c: ['#7DB728'],           tc: '#7DB728' },
  'ç':   { s: 's',  i: 'eo/s-serpent.png',       c: ['#7DB728'],           tc: '#7DB728' },
  // Son [ch] — Chat
  'ch':  { s: 'ch', i: 'eo/ch-chat.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  // Son [d] — Danseuse
  'd':   { s: 'd',  i: 'eo/d-danseuse.png',      c: ['#222222'],           tc: '#7DB728' },
  // Son [e] — Chèvre
  'e':   { s: 'e',  i: 'eo/e-chèvre.png',        c: ['#222222'],           tc: '#7DB728' },
  // Son [é] — Étoile
  'é':   { s: 'é',  i: 'eo/é-étoile.png',        c: ['#222222'],           tc: '#7DB728' },
  // Son [è] — Flèche
  'è':   { s: 'è',  i: 'eo/è-flèche.png',        c: ['#222222'],           tc: '#7DB728' },
  'ê':   { s: 'è',  i: 'eo/è-flèche.png',        c: ['#7DB728'],           tc: '#7DB728' },
  // Son [eu] — Feu
  'eu':  { s: 'eu', i: 'eo/eu-feu.png',          c: ['#E11683','#222222'], tc: '#7FC7EB' },
  // Son [f] — Fée
  'f':   { s: 'f',  i: 'eo/f-fée.png',           c: ['#222222'],           tc: '#7DB728' },
  'ff':  { s: 'f',  i: 'eo/f-fée.png',           c: ['#7DB728','#222222'], tc: '#7DB728' },
  'ph':  { s: 'f',  i: 'eo/f-fée.png',           c: ['#7DB728','#7DB728'], tc: '#7DB728' },
  // Son [g] — Gorille
  'g':   { s: 'g',  i: 'eo/g-gorille.png',       c: ['#222222'],           tc: '#7FC7EB' },
  // Son [gn] — Montagne
  'gn':  { s: 'gn', i: 'eo/gn-montagne.png',     c: ['#222222','#222222'], tc: '#575756' },
  // Son [ng] — Viking
  'ng':  { s: 'ng', i: 'eo/ng-viking.png',        c: ['#222222','#222222'], tc: '#DE0980' },
  // Son [h] — Muette
  'h':   { s: '',   i: 'eo/Lettre_Muette.png',    c: ['#aaaaaa'],           tc: '#AAAAAA', silent: true },
  // Son [i] — Igloo
  'i':   { s: 'i',  i: 'eo/i-igloo.png',          c: ['#222222'],           tc: '#7DB728' },
  'î':   { s: 'i',  i: 'eo/i-igloo.png',          c: ['#222222'],           tc: '#7DB728' },
  // Son [j] — Jumelles
  'j':   { s: 'j',  i: 'eo/j-jumelles.png',       c: ['#222222'],           tc: '#E11683' },
  // Son [l] — Lunettes
  'l':   { s: 'l',  i: 'eo/l-lunettes.png',       c: ['#222222'],           tc: '#7DB728' },
  'll':  { s: 'l',  i: 'eo/l-lunettes.png',       c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [m] — Moto
  'm':   { s: 'm',  i: 'eo/m-moto.png',           c: ['#222222'],           tc: '#7DB728' },
  'mm':  { s: 'm',  i: 'eo/m-moto.png',           c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [n] — Neige
  'n':   { s: 'n',  i: 'eo/n-neige.png',          c: ['#222222'],           tc: '#7DB728' },
  'nn':  { s: 'n',  i: 'eo/n-neige.png',          c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [o] — Otarie (fermé)
  'o':   { s: 'o',  i: 'eo/o-otarie.png',         c: ['#222222'],           tc: '#7DB728' },
  'ô':   { s: 'o',  i: 'eo/o-otarie.png',         c: ['#7DB728'],           tc: '#7DB728' },
  'au':  { s: 'o',  i: 'eo/o-otarie.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'eau': { s: 'o',  i: 'eo/o-otarie.png',         c: ['#222222','#222222','#222222'], tc: '#7DB728' },
  // Son [p] — Pirate
  'p':   { s: 'p',  i: 'eo/p-pirate.png',         c: ['#222222'],           tc: '#7DB728' },
  'pp':  { s: 'p',  i: 'eo/p-pirate.png',         c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [r] — Rat
  'r':   { s: 'r',  i: 'eo/r-rat.png',            c: ['#222222'],           tc: '#7DB728' },
  'rr':  { s: 'r',  i: 'eo/r-rat.png',            c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [s] — Serpent
  's':   { s: 's',  i: 'eo/s-serpent.png',         c: ['#222222'],           tc: '#7DB728' },
  'ss':  { s: 's',  i: 'eo/s-serpent.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'sc':  { s: 's',  i: 'eo/s-serpent.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  // Son [t] — Téléphone
  't':   { s: 't',  i: 'eo/t-téléphone.png',      c: ['#222222'],           tc: '#7DB728' },
  'tt':  { s: 't',  i: 'eo/t-téléphone.png',      c: ['#7DB728','#222222'], tc: '#7DB728' },
  // Son [u] — Usine
  'u':   { s: 'u',  i: 'eo/u-usine.png',          c: ['#222222'],           tc: '#7FC7EB' },
  'û':   { s: 'u',  i: 'eo/u-usine.png',          c: ['#82c4e0'],           tc: '#7FC7EB' },
  // Son [v] — Vache
  'v':   { s: 'v',  i: 'eo/v-vache.png',          c: ['#222222'],           tc: '#7FC7EB' },
  'w':   { s: 'v',  i: 'eo/v-vache.png',          c: ['#82c4e0'],           tc: '#7FC7EB' },
  // Son [ks] — Taxi / [gz] — Xylophone
  'x':   { s: 'ks', i: 'eo/x-taxi.png',           c: ['#222222'],           tc: '#7DB728' },
  // Son [y] — Tuyau (≠ i)
  'y':   { s: 'i',  i: 'eo/i-igloo.png',          c: ['#7DB728'],           tc: '#7DB728' },
  // Son [z] — Zèbre
  'z':   { s: 'z',  i: 'eo/z-zèbre.png',          c: ['#222222'],           tc: '#7DB728' },
  // Digraphes voyelles
  'ai':  { s: 'è',  i: 'eo/è-flèche.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'ei':  { s: 'è',  i: 'eo/è-flèche.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'er':  { s: 'é',  i: 'eo/é-étoile.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'ez':  { s: 'é',  i: 'eo/é-étoile.png',         c: ['#222222','#aaaaaa'], tc: '#7DB728' },
  // Nasales
  'on':  { s: 'on', i: 'eo/on-bonbon.png',        c: ['#222222','#222222'], tc: '#7FC7EB' },
  'om':  { s: 'on', i: 'eo/on-bonbon.png',        c: ['#222222','#82c4e0'], tc: '#7FC7EB' },
  'in':  { s: 'in', i: 'eo/in-idien.png',         c: ['#222222','#222222'], tc: '#7DB728' },
  'ain': { s: 'in', i: 'eo/in-idien.png',         c: ['#222222','#aaaaaa','#222222'], tc: '#7DB728' },
  'ein': { s: 'in', i: 'eo/in-idien.png',         c: ['#E11683','#aaaaaa','#222222'], tc: '#7DB728' },
  'un':  { s: 'in', i: 'eo/in-idien.png',         c: ['#82c4e0','#222222'], tc: '#7DB728' },
  // Semi-voyelles
  'ou':  { s: 'ou', i: 'eo/ou-loup.png',          c: ['#222222','#222222'], tc: '#7DB728' },
  'oi':  { s: 'oi', i: 'eo/oi-oie.png',           c: ['#222222','#222222'], tc: '#7DB728' },
  'oin': { s: 'oin',i: 'eo/oin-pointe.png',       c: ['#222222','#222222','#222222'], tc: '#7FC7EB' },
  // Son [il] — Oeil
  'ill': { s: 'il', i: 'eo/il-oeil.png',          c: ['#222222','#E11683','#E11683'], tc: '#7DB728' },
  'il':  { s: 'il', i: 'eo/il-oeil.png',          c: ['#222222','#222222'], tc: '#7DB728' },
  'ail': { s: 'il', i: 'eo/il-oeil.png',          c: ['#222222','#222222','#222222'], tc: '#7DB728' }
};

// ================================================================
// PATTERNS DE RECONNAISSANCE (du plus long au plus court)
// ================================================================
var PAT_EO = [
  'eau','ain','ein','oin','ill','eil','ail','ch','ph','gn','qu','ng',
  'an','am','en','em','on','om','ou','oi','in','eu','ai','ei','au','un','er','ez','il',
  'ff','ll','mm','nn','pp','rr','ss','sc','tt',
  '\u00e2','\u00ea','\u00ee','\u00fb','\u00f4','\u00e9','\u00e8','\u00e7',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'
];

// ================================================================
// GRAPHEME_DB — Base détaillée pour la recherche et le choix de graphèmes
// Chaque son → { name, img, graphemes: [{ g, force, colors }] }
// ================================================================
var GRAPHEME_DB = {
  'a': { name: 'Avion', img: 'eo/a-avion.png', graphemes: [
    { g: 'a',  force: 96, colors: ['#222222'] },
    { g: '\u00e2', force: 3,  colors: ['#7DB728'] },
    { g: '\u00e0', force: 0,  colors: ['#7DB728'] },
    { g: 'em', force: 0,  colors: ['#E11683','#82c4e0'] }
  ]},
  'an': { name: 'Ange', img: 'eo/an-ange.png', graphemes: [
    { g: 'an',  force: 42, colors: ['#222222','#222222'] },
    { g: 'en',  force: 36, colors: ['#E11683','#222222'] },
    { g: 'ent', force: 12, colors: ['#E11683','#222222','#aaaaaa'] },
    { g: 'em',  force: 6,  colors: ['#E11683','#82c4e0'] },
    { g: 'am',  force: 3,  colors: ['#222222','#82c4e0'] },
    { g: 'aon', force: 0,  colors: ['#222222','#aaaaaa','#222222'] }
  ]},
  'b': { name: 'Botte', img: 'eo/b-bottes.png', graphemes: [
    { g: 'b',  force: 99, colors: ['#222222'] },
    { g: 'bb', force: 1,  colors: ['#7DB728','#222222'] }
  ]},
  'k': { name: 'Crocodile', img: 'eo/c-crocodile.png', graphemes: [
    { g: 'c',  force: 74, colors: ['#222222'] },
    { g: 'qu', force: 20, colors: ['#E11683','#aaaaaa'] },
    { g: 'cc', force: 3,  colors: ['#82c4e0','#aaaaaa'] },
    { g: 'k',  force: 1,  colors: ['#7DB728'] },
    { g: 'ck', force: 0,  colors: ['#82c4e0','#aaaaaa'] },
    { g: 'ch', force: 1,  colors: ['#7DB728','#aaaaaa'] }
  ]},
  'ch': { name: 'Chat', img: 'eo/ch-chat.png', graphemes: [
    { g: 'ch', force: 98, colors: ['#222222','#222222'] },
    { g: 'sh', force: 1,  colors: ['#E11683','#222222'] },
    { g: 'sc', force: 0,  colors: ['#E11683','#222222'] }
  ]},
  'd': { name: 'Danseuse', img: 'eo/d-danseuse.png', graphemes: [
    { g: 'd',  force: 99, colors: ['#222222'] },
    { g: 'dd', force: 1,  colors: ['#7DB728','#222222'] }
  ]},
  'e': { name: 'Ch\u00e8vre', img: 'eo/e-ch\u00e8vre.png', graphemes: [
    { g: 'e',   force: 92, colors: ['#222222'] },
    { g: 'eu',  force: 7,  colors: ['#E11683','#222222'] },
    { g: 'oeu', force: 0,  colors: ['#E11683','#E11683','#222222'] },
    { g: 'u',   force: 0,  colors: ['#82c4e0'] },
    { g: 'i',   force: 0,  colors: ['#E11683'] },
    { g: 'ai',  force: 0,  colors: ['#222222','#222222'] },
    { g: 'o',   force: 0,  colors: ['#7DB728'] }
  ]},
  '\u00e9': { name: '\u00c9toile', img: 'eo/\u00e9-\u00e9toile.png', graphemes: [
    { g: '\u00e9',  force: 51, colors: ['#222222'] },
    { g: 'er', force: 47, colors: ['#222222','#222222'] },
    { g: 'e',  force: 1,  colors: ['#7DB728'] },
    { g: 'ez', force: 0,  colors: ['#222222','#aaaaaa'] },
    { g: 'et', force: 0,  colors: ['#222222','#aaaaaa'] },
    { g: 'ae', force: 0,  colors: ['#222222','#7DB728'] }
  ]},
  '\u00e8': { name: 'Fl\u00e8che', img: 'eo/\u00e8-fl\u00e8che.png', graphemes: [
    { g: 'e',  force: 51, colors: ['#E11683'] },
    { g: 'ai', force: 18, colors: ['#222222','#222222'] },
    { g: '\u00e8',  force: 15, colors: ['#222222'] },
    { g: 'ay', force: 10, colors: ['#222222','#7DB728'] },
    { g: 'et', force: 9,  colors: ['#222222','#aaaaaa'] },
    { g: '\u00ea',  force: 4,  colors: ['#7DB728'] },
    { g: 'ei', force: 2,  colors: ['#222222','#222222'] },
    { g: 'ey', force: 0,  colors: ['#222222','#7DB728'] }
  ]},
  'eu': { name: 'Feu', img: 'eo/eu-feu.png', graphemes: [
    { g: 'eu',  force: 96, colors: ['#E11683','#222222'] },
    { g: 'oeu', force: 3,  colors: ['#E11683','#222222','#222222'] },
    { g: '\u00fb',   force: 0,  colors: ['#82c4e0'] }
  ]},
  'f': { name: 'F\u00e9e', img: 'eo/f-f\u00e9e.png', graphemes: [
    { g: 'f',  force: 80, colors: ['#222222'] },
    { g: 'ff', force: 15, colors: ['#7DB728','#222222'] },
    { g: 'ph', force: 5,  colors: ['#7DB728','#7DB728'] }
  ]},
  'g': { name: 'Gorille', img: 'eo/g-gorille.png', graphemes: [
    { g: 'g',  force: 82, colors: ['#222222'] },
    { g: 'gu', force: 17, colors: ['#aaaaaa','#82c4e0'] },
    { g: 'gg', force: 0,  colors: ['#E11683','#222222'] },
    { g: 'c',  force: 0,  colors: ['#E11683'] }
  ]},
  'gn': { name: 'Montagne', img: 'eo/gn-montagne.png', graphemes: [
    { g: 'gn', force: 100, colors: ['#222222','#222222'] }
  ]},
  'i': { name: 'Igloo', img: 'eo/i-igloo.png', graphemes: [
    { g: 'i',  force: 97, colors: ['#222222'] },
    { g: 'y',  force: 2,  colors: ['#7DB728'] },
    { g: '\u00ef',  force: 0,  colors: ['#222222'] },
    { g: 'ee', force: 0,  colors: ['#E11683','#E11683'] },
    { g: 'e',  force: 0,  colors: ['#7DB728'] }
  ]},
  'il': { name: 'Oeil', img: 'eo/il-oeil.png', graphemes: [
    { g: 'ill', force: 83, colors: ['#aaaaaa','#aaaaaa','#E11683'] },
    { g: 'il',  force: 2,  colors: ['#aaaaaa','#E11683'] },
    { g: 'i',   force: 79, colors: ['#E11683'] },
    { g: 'y',   force: 5,  colors: ['#7DB728'] },
    { g: '\u00ef',   force: 0,  colors: ['#222222'] }
  ]},
  'in': { name: 'Indien', img: 'eo/in-idien.png', graphemes: [
    { g: 'in',  force: 62, colors: ['#222222','#222222'] },
    { g: 'en',  force: 11, colors: ['#E11683','#222222'] },
    { g: 'ain', force: 10, colors: ['#222222','#aaaaaa','#222222'] },
    { g: 'im',  force: 9,  colors: ['#222222','#82c4e0'] },
    { g: 'ein', force: 4,  colors: ['#222222','#aaaaaa','#222222'] },
    { g: 'un',  force: 2,  colors: ['#222222','#222222'] },
    { g: 'ym',  force: 1,  colors: ['#7DB728','#82c4e0'] }
  ]},
  'j': { name: 'Jumelles', img: 'eo/j-jumelles.png', graphemes: [
    { g: 'j',  force: 20, colors: ['#222222'] },
    { g: 'g',  force: 74, colors: ['#E11683'] },
    { g: 'ge', force: 6,  colors: ['#E11683','#aaaaaa'] }
  ]},
  'l': { name: 'Lunettes', img: 'eo/l-lunettes.png', graphemes: [
    { g: 'l',  force: 90, colors: ['#222222'] },
    { g: 'll', force: 10, colors: ['#7DB728','#222222'] }
  ]},
  'm': { name: 'Moto', img: 'eo/m-moto.png', graphemes: [
    { g: 'm',  force: 93, colors: ['#222222'] },
    { g: 'mm', force: 7,  colors: ['#7DB728','#222222'] }
  ]},
  'n': { name: 'Neige', img: 'eo/n-neige.png', graphemes: [
    { g: 'n',  force: 85, colors: ['#222222'] },
    { g: 'nn', force: 15, colors: ['#7DB728','#222222'] }
  ]},
  'ng': { name: 'Viking', img: 'eo/ng-viking.png', graphemes: [
    { g: 'ng', force: 100, colors: ['#222222','#222222'] }
  ]},
  'o': { name: 'Otarie (o ferm\u00e9)', img: 'eo/o-otarie.png', graphemes: [
    { g: 'o',   force: 40, colors: ['#222222'] },
    { g: 'au',  force: 28, colors: ['#222222','#222222'] },
    { g: 'eau', force: 18, colors: ['#222222','#222222','#222222'] },
    { g: '\u00f4',   force: 10, colors: ['#7DB728'] },
    { g: 'oo',  force: 0,  colors: ['#222222','#82c4e0'] }
  ]},
  '\u0254': { name: 'Ogre (o ouvert)', img: 'eo/o-ogre.png', graphemes: [
    { g: 'o',  force: 90, colors: ['#222222'] },
    { g: 'au', force: 5,  colors: ['#222222','#222222'] },
    { g: 'u',  force: 2,  colors: ['#82c4e0'] },
    { g: '\u00f4',  force: 1,  colors: ['#7DB728'] }
  ]},
  'oi': { name: 'Oie', img: 'eo/oi-oie.png', graphemes: [
    { g: 'oi',  force: 95, colors: ['#222222','#222222'] },
    { g: 'oy',  force: 31, colors: ['#222222','#7DB728'] },
    { g: 'oua', force: 3,  colors: ['#222222','#222222','#222222'] },
    { g: 'a',   force: 1,  colors: ['#222222'] }
  ]},
  'oin': { name: 'Pointe', img: 'eo/oin-pointe.png', graphemes: [
    { g: 'oin',  force: 85, colors: ['#222222','#222222','#222222'] },
    { g: 'ouin', force: 15, colors: ['#222222','#82c4e0','#222222','#222222'] }
  ]},
  'on': { name: 'Bonbon', img: 'eo/on-bonbon.png', graphemes: [
    { g: 'on', force: 86, colors: ['#222222','#222222'] },
    { g: 'om', force: 13, colors: ['#222222','#82c4e0'] },
    { g: 'un', force: 0,  colors: ['#222222','#222222'] }
  ]},
  'ou': { name: 'Loup', img: 'eo/ou-loup.png', graphemes: [
    { g: 'ou',  force: 98, colors: ['#222222','#222222'] },
    { g: 'oo',  force: 1,  colors: ['#222222','#222222'] },
    { g: 'ow',  force: 0,  colors: ['#222222','#222222'] },
    { g: 'o\u00f9',  force: 0,  colors: ['#222222','#7DB728'] },
    { g: 'o\u00fb',  force: 0,  colors: ['#222222','#82c4e0'] }
  ]},
  'p': { name: 'Pirate', img: 'eo/p-pirate.png', graphemes: [
    { g: 'p',  force: 95, colors: ['#222222'] },
    { g: 'pp', force: 5,  colors: ['#7DB728','#222222'] }
  ]},
  'r': { name: 'Rat', img: 'eo/r-rat.png', graphemes: [
    { g: 'r',  force: 97, colors: ['#222222'] },
    { g: 'rr', force: 3,  colors: ['#7DB728','#222222'] }
  ]},
  's': { name: 'Serpent', img: 'eo/s-serpent.png', graphemes: [
    { g: 's',  force: 46, colors: ['#222222'] },
    { g: 'c',  force: 23, colors: ['#E11683'] },
    { g: 'ss', force: 20, colors: ['#222222','#222222'] },
    { g: 't',  force: 8,  colors: ['#7DB728'] },
    { g: 'sc', force: 1,  colors: ['#222222','#222222'] },
    { g: '\u00e7',  force: 1,  colors: ['#7DB728'] }
  ]},
  't': { name: 'T\u00e9l\u00e9phone', img: 'eo/t-t\u00e9l\u00e9phone.png', graphemes: [
    { g: 't',  force: 92, colors: ['#222222'] },
    { g: 'tt', force: 8,  colors: ['#7DB728','#222222'] }
  ]},
  'u': { name: 'Usine', img: 'eo/u-usine.png', graphemes: [
    { g: 'u',  force: 99, colors: ['#222222'] },
    { g: '\u00fb',  force: 0,  colors: ['#82c4e0'] },
    { g: '\u00fc',  force: 0,  colors: ['#82c4e0'] }
  ]},
  'v': { name: 'Vache', img: 'eo/v-vache.png', graphemes: [
    { g: 'v', force: 99, colors: ['#222222'] },
    { g: 'w', force: 1,  colors: ['#82c4e0'] }
  ]},
  'ks': { name: 'Taxi', img: 'eo/x-taxi.png', graphemes: [
    { g: 'x',  force: 44, colors: ['#222222'] },
    { g: 'ct', force: 25, colors: ['#7DB728','#222222'] },
    { g: 'cc', force: 11, colors: ['#82c4e0','#82c4e0'] },
    { g: 'cs', force: 0,  colors: ['#222222','#222222'] }
  ]},
  'gz': { name: 'Xylophone', img: 'eo/x-xylophone.png', graphemes: [
    { g: 'x',  force: 19, colors: ['#222222'] },
    { g: 'gz', force: 0,  colors: ['#7DB728','#222222'] }
  ]},
  'y': { name: 'Tuyau', img: 'eo/y-tuyau.png', graphemes: [
    { g: 'y',   force: 6,  colors: ['#222222'] },
    { g: 'ill', force: 53, colors: ['#aaaaaa','#aaaaaa','#E11683'] }
  ]},
  'z': { name: 'Z\u00e8bre', img: 'eo/z-z\u00e8bre.png', graphemes: [
    { g: 'z',  force: 8,  colors: ['#222222'] },
    { g: 's',  force: 91, colors: ['#E11683'] },
    { g: 'zz', force: 0,  colors: ['#7DB728','#222222'] },
    { g: 'x',  force: 0,  colors: ['#82c4e0'] }
  ]},
  'muette': { name: 'Muette', img: 'eo/Lettre_Muette.png', graphemes: [
    { g: 'h', force: 60, colors: ['#aaaaaa'] },
    { g: 'x', force: 10, colors: ['#aaaaaa'] },
    { g: 's', force: 10, colors: ['#aaaaaa'] },
    { g: 't', force: 8,  colors: ['#aaaaaa'] },
    { g: 'd', force: 4,  colors: ['#aaaaaa'] },
    { g: 'p', force: 3,  colors: ['#aaaaaa'] },
    { g: 'g', force: 2,  colors: ['#aaaaaa'] },
    { g: 'c', force: 1,  colors: ['#aaaaaa'] },
    { g: 'z', force: 1,  colors: ['#aaaaaa'] },
    { g: 'e', force: 1,  colors: ['#aaaaaa'] }
  ]}
};

// ================================================================
// ORDRE D'AFFICHAGE DES SONS
// ================================================================
var GRAPHEME_ORDER = [
  'a','an','b','k','ch','d','e','\u00e9','\u00e8','eu','f','g','gn',
  'i','il','in','j','l','m','n','ng',
  'o','\u0254','oi','oin','on','ou',
  'p','r','s','t','u','v','ks','gz','y','z','muette'
];

// ================================================================
// LETTRES MUETTES FINALES
// ================================================================
var SILENT_FINAL = new Set(['x','s','t','d','z','p','g','c']);
var IMG_MUETTE = 'eo/Lettre_Muette.png';
var COL_MUETTE = '#aaaaaa';

// ================================================================
// HELPER : couleur du trait pour un son donné
// ================================================================
function couleurTraitPourSon(sonKey) {
  return TRAIT_COLORS[sonKey] || '#222222';
}

// ================================================================
// HELPER : couleurs des lettres pour un graphème dans un son
// ================================================================
function couleursLettresPourGrapheme(sonKey, grapheme) {
  var g = grapheme.toLowerCase();
  var sound = GRAPHEME_DB[sonKey];
  if (sound) {
    for (var i = 0; i < sound.graphemes.length; i++) {
      if (sound.graphemes[i].g === g) return sound.graphemes[i].colors.slice();
    }
  }
  // Fallback : noir pour chaque lettre
  var cols = [];
  for (var j = 0; j < grapheme.length; j++) cols.push('#222222');
  return cols;
}
