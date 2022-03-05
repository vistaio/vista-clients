
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods
from vista_api_client.api_resources.grants import Grants


class Users(ApiResource):
    def __init__(self, secret, branch, hostname):
        super().__init__(secret, branch, hostname)
        self.grants = Grants(self.secret, self.branch, self.hostname)

    def create(self, user_id, org_id):
        return self.dispatch('/v1/users', HttpMethods.POST, {
            'id': user_id,
            'branch': self.branch,
            'org_id': org_id,
        })

    def list(self, org_id=''):
        return self.dispatch('/v1/users', HttpMethods.GET, {
            'org_id': org_id,
            'branch': self.branch,
        })

    def assign_to_userset(self, user_id, userset_id):
        return self.dispatch('/v1/users/assign', HttpMethods.POST, {
            'id': user_id,
            'userset_id': userset_id,
            'branch': self.branch,
        })

    def remove_from_userset(self, user_id, userset_id):
        return self.dispatch('/v1/users/removeFromUserset', HttpMethods.POST, {
            'id': user_id,
            'userset_id': userset_id,
            'branch': self.branch,
        })

    def check(self, user_id, action, resource_id, resource_type, attribute=''):
        return self.grants.list(user_id, action, resource_id, resource_type, attribute, '')

    def expand(self, user_id):
        return self.grants.expand(user_id)

    def grant_action(self, user_id, action, resource_id, resource_type, attribute=''):
        return self.grants.grant(user_id, 'USER', action, 'ACTION',
                                 resource_id, resource_type, attribute)

    def revoke_action(self, user_id, action, resource_id, resource_type, attribute=''):
        return self.grants.revoke(user_id, 'USER', action, 'ACTION',
                                  resource_id, resource_type, attribute)

    def grant_role(self, user_id, role_id, resource_id, resource_type):
        return self.grants.grant(user_id, 'USER', role_id, 'ROLE', resource_id, resource_type, '')

    def revoke_role(self, user_id, role_id, resource_id, resource_type):
        return self.grants.revoke(user_id, 'USER', role_id, 'ROLE', resource_id, resource_type, '')
