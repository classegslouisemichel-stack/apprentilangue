#!/bin/bash
cd "$(dirname "$0")"
echo "Lancement d'Apprentilangue sur http://localhost:8765"
open "http://localhost:8765/index.html" 2>/dev/null || xdg-open "http://localhost:8765/index.html" 2>/dev/null
python3 -m http.server 8765
