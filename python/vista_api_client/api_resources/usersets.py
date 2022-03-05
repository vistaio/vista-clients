
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods
from vista_api_client.api_resources.grants import Grants


class Usersets(ApiResource):
    def __init__(self, secret, branch, hostname):
        super().__init__(secret, branch, hostname)
        self.grants = Grants(self.secret, self.branch, self.hostname)

    def create(self, userset_id, org_id, parent_usersets=None):
        parents = parent_usersets or []
        return self.dispatch('/v1/usersets', HttpMethods.POST, {
            'id': userset_id,
            'org_id': org_id,
            'parent_usersets': parents,
            'branch': self.branch,
        })

    def inherit(self, child_userset_id, parent_userset_id):
        return self.dispatch('/v1/usersets/inherit', HttpMethods.POST, {
            'child_userset_id': child_userset_id,
            'parent_userset_id': parent_userset_id,
            'branch': self.branch,
        })

    def grant_action(self, user_id, action, resource_id, resource_type, attribute=''):
        return self.grants.grant(user_id, 'USERSET', action, 'ACTION',
                                 resource_id, resource_type, attribute)

    def revoke_action(self, user_id, action, resource_id, resource_type, attribute=''):
        return self.grants.revoke(user_id, 'USERSET', action, 'ACTION',
                                  resource_id, resource_type, attribute)

    def grant_role(self, user_id, role_id, resource_id, resource_type):
        return self.grants.grant(user_id, 'USERSET', role_id, 'ROLE',
                                 resource_id, resource_type, '')

    def revoke_role(self, user_id, role_id, resource_id, resource_type):
        return self.grants.revoke(user_id, 'USERSET', role_id, 'ROLE',
                                  resource_id, resource_type, '')
