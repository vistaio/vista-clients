
from vista_api_client.api_resources.admin import Admin
from vista_api_client.api_resources.resource_types import ResourceTypes
from vista_api_client.api_resources.roles import Roles
from vista_api_client.api_resources.users import Users
from vista_api_client.api_resources.usersets import Usersets

from vista_api_client.config.config import config

class VistaClient(object):
    def __init__(self, secret, environment='test', hostname=None):
        if not hostname:
            hostname = config['VistaAPIHostname']

        self.admin = Admin(secret, environment, hostname)
        self.resources = ResourceTypes(secret, environment, hostname)
        self.roles = Roles(secret, environment, hostname)
        self.users = Users(secret, environment, hostname)
        self.usersets = Usersets(secret, environment, hostname)
