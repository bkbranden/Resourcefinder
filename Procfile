release: python manage.py makemigrations --merge
release: python manage.py migrate
release: python manage.py loaddata locations
release: npm install
web: gunicorn absurdvacations.wsgi --log-file -