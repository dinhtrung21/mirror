FROM python:3.9

WORKDIR /work

COPY requirements.txt .

COPY . /work

RUN apt-get update
RUN apt-get install libmpfr-dev -y
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# CMD ["python", "be/main.py"]
CMD ["uwsgi", "--http", "0.0.0.0:5000", "--master", "-p", "4", "-w", "main:app"]
