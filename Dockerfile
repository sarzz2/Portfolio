
FROM python:3
ENV PYTHONBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV DEBUG 0

WORKDIR /app
ADD . /app

COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

RUN python manage.py collectstatic --noinput

COPY . /app

CMD gunicorn portfolio.wsgi:application --bind 0.0.0.0:$PORT
