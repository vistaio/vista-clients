
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Roles(ApiResource):
    def list(self, org_id='*'):
        return self.dispatch('/v1/roles', HttpMethods.GET, {
            'org_id': org_id,
            'branch': self.branch,
        })

    def upsert(self, role_id, permissions, owners={}, parent_roles=None, org_id='*'):
        parents = parent_roles or []

        return self.dispatch('/v1/roles', HttpMethods.POST, {
            'id': role_id,
            'permissions': permissions,
            'owners': owners,
            'parent_roles': parents,
            'org_id': org_id,
            'branch': self.branch,
        })
