
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Roles(ApiResource):
    def list(self):
        return self.dispatch('/v1/roles', HttpMethods.GET, {
            'environment': self.environment,
        })

    def create(self, role_id, grants, parent_roles):
        return self.dispatch('/v1/roles', HttpMethods.POST, {
            'role_id': role_id,
            'grants': grants,
            'parent_roles': parent_roles,
            'environment': self.environment,
        })

    def list_usersets_for_role(self, role_id):
        return self.dispatch(f"/v1/roles/{role_id}/usersets", HttpMethods.GET, {
            'role_id': role_id,
            'environment': self.environment,
        })

    def inherit(self, child_role_id, parent_role_id):
        return self.dispatch('/v1/roles/inherit', HttpMethods.POST, {
            'child_role_id': child_role_id,
            'parent_role_id': parent_role_id,
            'environment': self.environment,
        })
