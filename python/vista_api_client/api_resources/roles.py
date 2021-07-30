
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Roles(ApiResource):
    def list(self, environment):
        return self.dispatch('/v1/roles', HttpMethods.GET, {
            'environment': environment,
        })

    def create(self, role_id, grants, parent_roles, environment):
        return self.dispatch('/v1/roles', HttpMethods.POST, {
            'role_id': role_id,
            'grants': grants,
            'parent_roles': parent_roles,
            'environment': environment,
        })

    def listUsersetsForRole(self, role_id, environment):
        return self.dispatch(f"/v1/roles/{role_id}/usersets", HttpMethods.GET, {
            'role_id': role_id,
            'environment': environment,
        })

    def inherit(self, child_role_id, parent_role_id, environment):
        return self.dispatch('/v1/roles/inherit', HttpMethods.POST, {
            'child_role_id': child_role_id,
            'parent_role_id': parent_role_id,
            'environment': environment,
        })
