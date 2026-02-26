# Apprentilangue — Guide d'installation

## ⚠️ Comment ouvrir l'application

**Ne pas ouvrir index.html directement dans Chrome/Edge** — les images ne s'afficheront pas.

### ✅ Windows : double-cliquer sur LANCER.bat
### ✅ Mac : double-cliquer sur LANCER.sh  
### ✅ Firefox : fonctionne directement avec index.html
### ✅ VS Code : extension "Live Server" → Go Live

---

## Structure des fichiers

```
apprentilangue/
├── index.html
├── cursive.otf
├── MDIecole-Regular.otf
├── MDIecole-Bold.otf
├── LANCER.bat
├── LANCER.sh
│
├── images/
│   ├── eo/          ← Images des sons Enthousiasme Orthographique
│   │   ├── a-avion.png
│   │   ├── an-ange.png
│   │   ├── ch-chat.png
│   │   ├── é-étoile.png
│   │   └── ...
│   │
│   ├── borel/       ← Gestes Borel-Maisonny
│   │   ├── a.png
│   │   ├── an.png
│   │   └── ...
│   │
│   └── jardin.png   ← Images des mots (dans images/ directement)
```

## Images EO — noms attendus
Placez vos images dans `images/eo/` :
a-avion.png · b-bottes.png · c-crocodile.png · ch-chat.png
d-danseuse.png · e-chèvre.png · é-étoile.png · è-flèche.png
eu-feu.png · f-fée.png · g-gorille.png · gn-montagne.png
i-igloo.png · in-idien.png · j-jumelles.png · l-lunettes.png
m-moto.png · n-neige.png · o-ogre.png · oi-oie.png
on-bonbon.png · ou-loup.png · p-pirate.png · r-rat.png
s-serpent.png · t-téléphone.png · u-usine.png · v-vache.png
z-zèbre.png · an-ange.png · ain-idien.png · au-ogre.png
eau-ogre.png · il-oeil.png · oin-pointe.png

> Les noms sont modifiables dans Paramètres → Dictionnaire EO

## Images mots
Placez les images des mots dans `images/` directement (ex: `images/jardin.png`)
