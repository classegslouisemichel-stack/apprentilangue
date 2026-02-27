@echo off
:: Ce script génère un nouveau version.json avant de pousser sur GitHub.
:: Lancez-le à chaque fois que vous mettez à jour le site.
python -c "import json,datetime; v=datetime.datetime.utcnow().strftime('%%Y%%m%%d%%H%%M%%S'); open('version.json','w').write(json.dumps({'v':v,'date':datetime.datetime.utcnow().isoformat()+'Z'},indent=2))" 2>nul || (
  powershell -Command "& {$v=(Get-Date -Format 'yyyyMMddHHmmss'); $d=(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'); Set-Content version.json ('{\"v\":\"'+$v+'\",\"date\":\"'+$d+'\"}')}"
)
echo version.json mis a jour.
echo Poussez maintenant vos fichiers sur GitHub.
pause
