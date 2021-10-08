
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Users(ApiResource):

    def create(self, user_id):
        return self.dispatch('/v1/users', HttpMethods.POST, {
            'id': user_id,
            'environment': self.environment,
        })

    def assign_to_userset(self, user_id, userset_id):
        return self.dispatch('/v1/users/assign', HttpMethods.POST, {
            'id': user_id,
            'userset_id': userset_id,
            'environment': self.environment,
        })

    def check(self, user_id, action, resource_type, resource_id):
        return self.dispatch('/v1/users/check', HttpMethods.GET, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': self.environment,
        })

    def grant_action(self, user_id, action, resource_type, resource_id):
        return self.dispatch('/v1/users/grantAction', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': self.environment,
        })

    def grant_role(self, user_id, role_id, resource_type, resource_id):
        return self.dispatch('/v1/users/grantRole', HttpMethods.POST, {
            'id': user_id,
            'role_id': role_id,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': self.environment,
        })
