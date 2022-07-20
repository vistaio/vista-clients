
import yaml

from vista_api_client.api_resources.admin import Admin
from vista_api_client.api_resources.grants import Grants
from vista_api_client.api_resources.resource_types import ResourceTypes
from vista_api_client.api_resources.roles import Roles
from vista_api_client.api_resources.users import Users
from vista_api_client.api_resources.usersets import Usersets

from vista_api_client.config.config import config


class VistaClient():
    ALL = '*'

    def __init__(self, secret, branch, hostname=None):
        self.hostname = hostname or config['VistaAPIHostname']
        self.secret = secret

        self.admin = Admin(secret, branch, self.hostname)
        self.blueprint = Blueprints(self)
        self.grants = Grants(secret, branch, self.hostname)
        self.resource_types = ResourceTypes(secret, branch, self.hostname)
        self.roles = Roles(secret, branch, self.hostname)
        self.users = Users(secret, branch, self.hostname)
        self.usersets = Usersets(secret, branch, self.hostname)

    def with_branch(self, branch):
        return VistaClient(self.secret, branch, self.hostname)


class Blueprints():
    client = None

    def __init__(self, client):
        self.client = client

    def upsert(self, fpath):
        with open(fpath, encoding='utf-8') as yaml_file:
            blueprint = yaml.safe_load(yaml_file)

        for branch in blueprint:
            for resource_type in blueprint[branch]['resourceTypes']:
                self.client.with_branch(branch).resource_types.upsert(
                    resource_type['name'], resource_type['actions'], resource_type['attributes'])

            for role in blueprint[branch]['roles']:
                self.client.with_branch(branch).roles.upsert(
                    role['id'], role['permissions'], role['owners'], role['parentRoles'], role['orgId'])
