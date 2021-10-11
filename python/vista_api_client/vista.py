
from vista_api_client.api_resources.admin import Admin
from vista_api_client.api_resources.resource_types import ResourceTypes
from vista_api_client.api_resources.roles import Roles
from vista_api_client.api_resources.users import Users
from vista_api_client.api_resources.usersets import Usersets

from vista_api_client.config.config import config

class VistaClient(object):
    def __init__(self, secret, branch, hostname=None):
        if not hostname:
            hostname = config['VistaAPIHostname']

        self.admin = Admin(secret, branch, hostname)
        self.resource_types = ResourceTypes(secret, branch, hostname)
        self.roles = Roles(secret, branch, hostname)
        self.users = Users(secret, branch, hostname)
        self.usersets = Usersets(secret, branch, hostname)
