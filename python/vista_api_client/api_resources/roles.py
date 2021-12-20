
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Roles(ApiResource):
    def list(self):
        return self.dispatch('/v1/roles', HttpMethods.GET, {
            'branch': self.branch,
        })

    def upsert(self, role_id, actions_by_resource_type, parent_roles=[]):
        return self.dispatch('/v1/roles', HttpMethods.POST, {
            'id': role_id,
            'actions_by_resource_type': actions_by_resource_type,
            'parent_roles': parent_roles,
            'branch': self.branch,
        })

    def inherit(self, child_role_id, parent_role_id):
        return self.dispatch('/v1/roles/inherit', HttpMethods.POST, {
            'child_role_id': child_role_id,
            'parent_role_id': parent_role_id,
            'branch': self.branch,
        })
