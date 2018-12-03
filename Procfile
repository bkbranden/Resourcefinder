release: python manage.py makemigrations --merge
release: python manage.py migrate
release: python manage.py loaddata locations
web: gunicorn absurdvacations.wsgi --log-file -