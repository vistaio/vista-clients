
import datetime

from vista_api_client import VistaClient

# v = VistaClient('Z6Q2KfVk6T5NJ65uskrfOxRCkcrSMhxQRmbAereoxUQ2YA7J', 'test',
#                 hostname='http://localhost:8080')
v = VistaClient('Pxi5nRg23LSlVjl-OehXlOTr53zZHzZggr_cbaodYr8QcchV', 'test',
                hostname='https://staging.api.govista.io')

# DEMO
# create user
# v.users.create('kevin')

# grant successive roles
# v.users.grantRole('kevin', 'employee', 'demobutton', 'button')
# v.users.grantRole('kevin', 'employer', 'demobutton', 'button')
# v.users.grantRole('kevin', 'admin', 'demobutton', 'button')

# grant bespoke action
# v.users.grantAction('kevin', 'push', 'demobutton', 'button')

# TEST
# v.resource_types.create('res', [], [], ['read', 'comment', 'write'])

v.users.create('u1')
v.usersets.create('a1', [])
v.usersets.create('a2', ['a1'])
v.usersets.create('a3', ['a2'])
v.users.assignToUserset('u1', 'a3')

v.users.create('u2')
v.usersets.create('b1', [])
v.usersets.create('b2', ['b1', 'a1'])
v.usersets.create('b3', ['b2'])
v.usersets.create('b4', ['b3'])
v.usersets.create('b5', ['b3', 'a3'])

v.users.assignToUserset('u2', 'b3')

v.usersets.grantAction('a1', 'read', 'res', 'r1')
v.usersets.grantAction('a2', 'comment', 'res', 'r1')
v.usersets.grantAction('a3', 'write', 'res', 'r1')
v.usersets.grantAction('b1', 'write', 'res', 'r1')

print(datetime.datetime.now().timestamp())
print(v.users.check('u1', 'write', 'res', 'r1'))
print(datetime.datetime.now().timestamp())
print(v.users.check('u1', 'write', 'res', 'r1'))
print(datetime.datetime.now().timestamp())

