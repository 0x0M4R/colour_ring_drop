FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /web_app

    RUN apt-get update && apt-get install -y \
        libpq-dev \
        gcc \
        && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt --verbose

COPY . .
EXPOSE 8080

CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8080"]
