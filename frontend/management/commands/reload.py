from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Reloading the fixtures file to reinitialize all the occupancies"
    def handle(self, *args, **options):
        self.stdout.write("testing")