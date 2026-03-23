# Instructions Claude — Projet Apprentilangue

## Résumé du projet

Apprentilangue est un outil pédagogique web pour l'enseignement du français en maternelle/CP. Il permet de créer des séries de mots, de les afficher en diaporama interactif (pour vidéoprojecteur) et de lancer des quiz d'images. L'application est conçue pour fonctionner hors-ligne sur les postes de l'école.

## Architecture

- **Application monolithique** : tout le code est dans `index.html` (~3 600 lignes).
  - Lignes 8–562 : CSS (bloc `<style>`)
  - Lignes 563 : Script externe SheetJS (import Excel)
  - Lignes 565–1414 : HTML (navigation, 3 pages, modaux)
  - Lignes 1415–3629 : JavaScript (toute la logique applicative)
- **Pas de framework** : vanilla JS, HTML, CSS uniquement.
- **Pas de serveur** : tout est côté client, données stockées dans `localStorage` (clé `al_v7`).
- **Lancement local** : via `LANCER.bat` / `LANCER.sh` (serveur Python sur le port 8765).
- **Hébergement** : le dépôt GitHub sert aussi de CDN pour les séries partagées.

## Fichiers importants

| Fichier | Rôle |
|---------|------|
| `index.html` | Application complète (HTML + CSS + JS) |
| `series_partagees.json` | Séries partagées entre collègues (synchronisé via GitHub) |
| `modele_import.xlsx` | Modèle d'import Excel pour les enseignants |
| `version.json` | Numéro de version pour la mise à jour automatique |
| `images/eo/` | Images des sons — méthode Enthousiasme Orthographique |
| `images/borel/` | Images des gestes — méthode Borel-Maisonny |
| `images/deco/` | Images décoratives pour les diaporamas |

## Deux méthodes pédagogiques

Le code gère deux méthodes de phonétique. Chaque série de mots est associée à l'une d'elles :
- **EO** (Enthousiasme Orthographique) : dictionnaire `EO0`, associe chaque son à une image d'objet
- **BM** (Borel-Maisonny) : dictionnaire `BM0`, associe chaque son à un geste de la main

## Variables globales clés

| Variable | Rôle |
|----------|------|
| `appData` | Données utilisateur (séries, paramètres, couleurs) |
| `AD` | Dictionnaires phonétiques actifs (eo + bm) |
| `curSeries` | Série en cours d'édition |
| `SS` | État du diaporama (slides, index, étape) |
| `QZ` | État du quiz (mots, paires, cartes révélées) |
| `sharedSeries` | Séries partagées chargées depuis GitHub |

## Règles à respecter

### Ne jamais faire
- Ne pas casser la compatibilité avec les données `localStorage` existantes (clé `al_v7`).
- Ne pas ajouter de dépendances npm ou de bundler — l'app doit rester un simple fichier HTML ouvrable localement.
- Ne pas supprimer les dictionnaires `EO0` et `BM0` — ils sont la base phonétique de l'application.
- Ne pas modifier `series_partagees.json` directement — il est édité par export depuis l'app.

### Bonnes pratiques
- Toujours tester avec les deux méthodes (EO et BM).
- Le diaporama doit fonctionner en plein écran sur vidéoprojecteur — garder les tailles en `clamp()`.
- Les textes de l'interface sont en **français**.
- Les noms de variables et fonctions sont en **anglais** (objectif, pas encore systématique dans le code actuel).
- Utiliser `toast()` pour les notifications — jamais `alert()`.
- Utiliser `textContent` plutôt que `innerHTML` quand on insère des données utilisateur.

### Polices personnalisées
- **MDIEcole** : police d'écriture scolaire (fichiers .otf à la racine)
- **Cursive Dumont maternelle** : écriture cursive (cursive.otf)
- Ces polices sont essentielles pour l'affichage pédagogique — ne pas les remplacer.

## Problèmes connus (issus de l'audit)

- Le HTML body est dupliqué 3 fois (lignes 566–847, 850–1133, 1134–1413) — à nettoyer.
- 80+ couleurs codées en dur au lieu d'utiliser les variables CSS.
- Pas d'indicateurs de focus pour la navigation clavier.
- Le fichier `mdi_ecole.ttf` est référencé dans le CSS mais absent du dépôt.
- Le script SheetJS est chargé sans vérification d'intégrité (SRI).

## Commandes utiles

```bash
# Lancer le serveur local
python -m http.server 8765

# Voir la version actuelle
cat version.json
```
