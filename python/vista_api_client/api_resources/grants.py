
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Grants(ApiResource):
    def list(self, user_id, action, resource_id, resource_type, attribute, org_id):
        user_id = user_id or ''
        action = action or ''
        resource_id = resource_id or ''
        resource_type = resource_type or ''
        attribute = attribute or ''
        org_id = org_id or ''

        return self.dispatch('/v1/grants', HttpMethods.GET, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'attribute': attribute,
            'org_id': org_id,
            'branch': self.branch,
        })

    def expand(self, user_id):
        return self.dispatch('/v1/grants', HttpMethods.GET, {
            'id': user_id,
            'branch': self.branch,
        })

    def grant(self, user_id, subject_type, relation, relation_type, resource_id, resource_type, attribute):
        return self.dispatch('/v1/grants', HttpMethods.POST, {
            'id': user_id,
            'subject_type': subject_type,
            'relation': relation,
            'relation_type': relation_type,
            'resource_id': resource_id,
            'resource_type': resource_type,
            'attribute': attribute,
            'branch': self.branch,
        })

    def revoke(self, user_id, subject_type, relation, relation_type, resource_id, resource_type, attribute):
        return self.dispatch('/v1/grants', HttpMethods.DELETE, {
            'id': user_id,
            'subject_type': subject_type,
            'relation': relation,
            'relation_type': relation_type,
            'resource_id': resource_id,
            'resource_type': resource_type,
            'attribute': attribute,
            'branch': self.branch,
        })

    def list_unflattened(self, org_id):
        return self.dispatch('/v1/grants/unflattened', HttpMethods.GET, {
            'org_id': org_id,
            'branch': self.branch,
        })
