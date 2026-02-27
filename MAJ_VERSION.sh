#!/bin/bash
# Ce script génère un nouveau version.json avant de pousser sur GitHub.
# Lancez-le à chaque fois que vous mettez à jour le site.
V=$(date -u +"%Y%m%d%H%M%S")
D=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "{\"v\":\"$V\",\"date\":\"$D\"}" > version.json
echo "✓ version.json mis à jour : $V"
echo "Poussez maintenant vos fichiers sur GitHub."
