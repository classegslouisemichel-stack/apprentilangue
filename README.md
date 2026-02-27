# 📖 Apprentilangue

Outil pédagogique pour l'enseignement du vocabulaire avec analyse phonétique (méthodes Enthousiasme Orthographique et Borel-Maisonny).

## 🚀 Utilisation

### Lancer le site en local
**Windows** : double-cliquer sur `LANCER.bat`  
**Mac/Linux** : double-cliquer sur `LANCER.sh`  
(Ne pas ouvrir `index.html` directement dans Chrome — utilisez Firefox ou un serveur HTTP)

### Lancer depuis GitHub Pages
Le site est accessible directement à l'adresse de votre GitHub Pages.

---

## 📤 Partager des séries avec vos collègues

Le fichier `series_partagees.json` contient les séries visibles par toutes les utilisatrices du site.

### Pour publier vos séries :
1. Créez et éditez vos séries dans le site
2. Cliquez sur **⬇️ Export** → **📤 Générer series_partagees.json**
3. Téléversez le fichier `series_partagees.json` dans ce dépôt GitHub
4. Vos collègues voient vos séries automatiquement au prochain chargement

### Ce que voient vos collègues :
- ✅ Les séries partagées (lecture seule, avec le badge **PARTAGÉE**)
- ✅ Leurs propres séries créées localement
- ❌ Les séries locales des autres (stockées sur leur propre machine)

---

## 📥 Importer une liste de mots (Excel)

Téléchargez le modèle depuis le site (bouton **📥 Modèle Excel** sur l'accueil).

| Colonne | Contenu | Format |
|---------|---------|--------|
| A | N° du mot | Entier (1, 2, 3…) |
| B | MOT | MAJUSCULES |
| C | Thème | ex: LE JARDIN |
| D | Définition | Texte (Alt+Entrée = retour ligne) |
| E | Genre | masc / fem / both / none |
| F | Nature | nom / verbe / adjectif / autre |
| G | Segmentation | tirets : `sé-ca-teur` |
| H | Liaisons | digraphes liés séparés par `;` : `on;on` |
| I | Couleurs | `lettre=couleur` séparés par `;` : `u=bleu clair;m=bleu clair` |
| J | Image | chemin relatif : `images/jardin.png` |
| K | Total série | Entier (ex: 8) |

---

## 🗂️ Structure des dossiers

```
apprentilangue/
├── index.html              ← Application principale
├── series_partagees.json   ← Séries visibles par tous (à mettre à jour sur GitHub)
├── modele_import.xlsx      ← Modèle Excel pour importer des mots
├── cursive.otf             ← Police cursive
├── MDIecole-Regular.otf    ← Police MDI École
├── images/
│   ├── eo/                 ← Images sons (Enthousiasme Orthographique)
│   ├── borel/              ← Gestes Borel-Maisonny
│   └── [mots].png          ← Images des mots
├── LANCER.bat              ← Lanceur Windows
└── LANCER.sh               ← Lanceur Mac/Linux
```
