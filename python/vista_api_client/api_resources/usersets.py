
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Usersets(ApiResource):
    def create(self, userset_id, parent_usersets=[]):
        return self.dispatch('/v1/usersets', HttpMethods.POST, {
            'id': userset_id,
            'parent_usersets': parent_usersets,
            'branch': self.branch,
        })

    def inherit(self, child_userset_id, parent_userset_id):
        return self.dispatch('/v1/usersets/inherit', HttpMethods.POST, {
            'child_userset_id': child_userset_id,
            'parent_userset_id': parent_userset_id,
            'branch': self.branch,
        })

    def grant_action(self, user_id, action, resource_id, resource_type):
        return self.dispatch('/v1/usersets/grantAction', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def revoke_action(self, user_id, action, resource_id, resource_type):
        return self.dispatch('/v1/usersets/revokeAction', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def grant_role(self, user_id, role_id, resource_id, resource_type):
        return self.dispatch('/v1/usersets/grantRole', HttpMethods.POST, {
            'id': user_id,
            'role_id': role_id,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def revoke_role(self, user_id, role_id, resource_id, resource_type):
        return self.dispatch('/v1/usersets/revokeRole', HttpMethods.POST, {
            'id': user_id,
            'role_id': role_id,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })
