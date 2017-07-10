FROM python:2
RUN apt-get install -y git
RUN git clone https://github.com/nilanginexture/djangularfinal.git
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
WORKDIR /djangularfinal
RUN pip install -r requirements.txt
WORKDIR /djangularfinal/mult_Final/ngAPP/
RUN npm install
RUN npm start &
WORKDIR /djangularfinal/mult_Final/	
#CMD ["python","manage.py","migrate_schemas","--shared"]
#CMD ["python","/code/djangularfinal/mult_Final/manage.py,""runserver","0.0.0.0:8000"]
