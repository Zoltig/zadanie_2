# Budowanie
docker build -t zadanie2 .
# Uruchamianie
docker run -d -p 80:80 --name zad2 zadanie2
# Testy CVE
docker scout cves zadanie2
