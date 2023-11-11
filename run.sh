#!/bin/sh
export FLASK_APP=be/main.py
export OPENAI_API_TOKEN=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

pipenv run flask --debug run -h 0.0.0.0

# uwsgi --http 127.0.0.1:8000 --master -p 4 -w hello:app
