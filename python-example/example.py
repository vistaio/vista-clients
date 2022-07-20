
import datetime

from vista_api_client import VistaClient

v = VistaClient('IZtgnWFVLMdpJ/4FL4JRDDjsNTmqN+7llhEEH8Vlh3I=', 'test', 'http://localhost:8080')

# DEMO
# create user

v.blueprint.upsert('./data/blueprint.yaml')
rts = v.with_branch('testBranch').resource_types.list()
print(rts)

roles = v.with_branch('testBranchs').roles.list()
print(roles)

