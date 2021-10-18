
import datetime

from vista_api_client import VistaClient

v = VistaClient('Z6Q2KfVk6T5NJ65uskrfOxRCkcrSMhxQRmbAereoxUQ2YA7J', 'test',
                hostname='http://localhost:8080')

# DEMO
# create user
v.users.create('kevin')

# grant successive roles
v.users.grantRole('kevin', 'employee', 'demobutton', 'button')
v.users.grantRole('kevin', 'employer', 'demobutton', 'button')
v.users.grantRole('kevin', 'admin', 'demobutton', 'button')

# grant bespoke action
v.users.grantAction('kevin', 'push', 'demobutton', 'button')
