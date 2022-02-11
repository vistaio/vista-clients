
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Roles(ApiResource):
    def list(self, org_id='*'):
        return self.dispatch('/v1/roles', HttpMethods.GET, {
            'org_id': org_id,
            'branch': self.branch,
        })

    def upsert(self, role_id, resource_type_to_attribute_to_actions, parent_roles=[], org_id='*'):
        return self.dispatch('/v1/roles', HttpMethods.POST, {
            'id': role_id,
            'resource_type_to_attribute_to_actions': resource_type_to_attribute_to_actions,
            'parent_roles': parent_roles,
            'org_id': org_id,
            'branch': self.branch,
        })
