
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Users(ApiResource):

    def create(self, user_id, environment):
        return self.dispatch('/v1/users', HttpMethods.POST, {
            'id': user_id,
            'environment': environment,
        })

    def assignToUserset(self, user_id, userset_id, environment):
        return self.dispatch('/v1/users/assign', HttpMethods.POST, {
            'id': user_id,
            'userset_id': userset_id,
            'environment': environment,
        })

    def check(self, user_id, action, resource_type, resource_id, environment):
        return self.dispatch('/v1/users/assign', HttpMethods.GET, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': environment,
        })

    def grant(self, user_id, action, resource_type, resource_id, environment):
        return self.dispatch('/v1/users/assign', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': environment,
        })
