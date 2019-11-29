FROM python:3

# Install Python packages using Pip
COPY requirements.txt ./
RUN pip install -r requirements.txt

#EXPOSE 5000

COPY ./srv/app.py /srv/
CMD python /srv/app.py

#RUN export FLASK_APP=/srv/hello.py && flask run --host=0.0.0.0
