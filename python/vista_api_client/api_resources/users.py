
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Users(ApiResource):

    def create(self, user_id):
        return self.dispatch('/v1/users', HttpMethods.POST, {
            'id': user_id,
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

    def check(self, user_id, action, resource_id, resource_type):
        return self.dispatch('/v1/users/check', HttpMethods.GET, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def expand(self, user_id):
        return self.dispatch('/v1/users/expand', HttpMethods.GET, {
            'id': user_id,
            'branch': self.branch,
        })

    def grant_action(self, user_id, action, resource_id, resource_type):
        return self.dispatch('/v1/users/grantAction', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def revoke_action(self, user_id, action, resource_id, resource_type):
        return self.dispatch('/v1/users/revokeAction', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def grant_role(self, user_id, role_id, resource_id, resource_type):
        return self.dispatch('/v1/users/grantRole', HttpMethods.POST, {
            'id': user_id,
            'role_id': role_id,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })

    def revoke_role(self, user_id, role_id, resource_id, resource_type):
        return self.dispatch('/v1/users/revokeRole', HttpMethods.POST, {
            'id': user_id,
            'role_id': role_id,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'branch': self.branch,
        })
