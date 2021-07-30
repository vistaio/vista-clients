
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Usersets(ApiResource):
    def create(self, userset_id, environment):
        return self.dispatch('/v1/usersets', HttpMethods.POST, {
            'id': userset_id,
            'environment': environment,
        })

    def inherit(self, child_userset_id, parent_userset_id, environment):
        return self.dispatch('/v1/usersets/inherit', HttpMethods.POST, {
            'child_userset_id': child_userset_id,
            'parent_userset_id': parent_userset_id,
            'environment': environment,
        })

    def listForRole(self, role_id, environment):
        return self.dispatch(f"/v1/roles/{role_id}/usersets", HttpMethods.GET, {
            'environment': environment,
        })

    def grant(self, user_id, action, resource_type, resource_id, environment):
        return self.dispatch('/v1/usersets/grant', HttpMethods.POST, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'environment': environment,
        })
