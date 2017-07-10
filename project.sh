
#Shell script for installing Demo project 

apt-get update && apt-get -y upgrade
apt-get install -y docker-ce
apt-get install -y python-pip
apt-get install -y git
pip install -y docker-compose
git clone https://github.com/nilanginexture/djangularfinal.git
chmod -R 777 djangularfinal/ 
docker-compose up -d -f ./djangularfinal/docker-compose.yml --build
docker exec db su -c "psql -U postgres postgres < /database/dbexport.pgsql" - postgres
