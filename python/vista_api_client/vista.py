
from vista_api_client.api_resources.admin import Admin
from vista_api_client.api_resources.resource_types import ResourceTypes
from vista_api_client.api_resources.roles import Roles
from vista_api_client.api_resources.users import Users
from vista_api_client.api_resources.usersets import Usersets

class VistaClient(object):
    def __init__(self, secret):
        self.admin = Admin(secret)
        self.resources = ResourceTypes(secret)
        self.roles = Roles(secret)
        self.users = Users(secret)
        self.usersets = Usersets(secret)
