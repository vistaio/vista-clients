
from vista_api_client.api_resources.admin import Admin
from vista_api_client.api_resources.grants import Grants
from vista_api_client.api_resources.resource_types import ResourceTypes
from vista_api_client.api_resources.roles import Roles
from vista_api_client.api_resources.users import Users
from vista_api_client.api_resources.usersets import Usersets

from vista_api_client.config.config import config

class VistaClient(object):
    ALL = '*'

    def __init__(self, secret, branch, hostname=None):
        self.hostname = hostname or config['VistaAPIHostname']

        self.admin = Admin(secret, branch, self.hostname)
        self.grants = Grants(secret, branch, self.hostname)
        self.resource_types = ResourceTypes(secret, branch, self.hostname)
        self.roles = Roles(secret, branch, self.hostname)
        self.users = Users(secret, branch, self.hostname)
        self.usersets = Usersets(secret, branch, self.hostname)
