
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Grants(ApiResource):
    def list(self, user_id, action, resource_id, resource_type,
             attribute, org_id, start_time=None, end_time=None):
        user_id = user_id or ''
        action = action or ''
        resource_id = resource_id or ''
        resource_type = resource_type or ''
        attribute = attribute or ''
        org_id = org_id or ''
        start_time = start_time or ''
        end_time = end_time or ''

        return self.dispatch('/v1/grants', HttpMethods.GET, {
            'id': user_id,
            'action': action,
            'resource_type': resource_type,
            'resource_id': resource_id,
            'attribute': attribute,
            'org_id': org_id,
            'start_time': start_time,
            'end_time': end_time,
            'branch': self.branch,
        })

    def expand(self, user_id):
        return self.dispatch('/v1/grants', HttpMethods.GET, {
            'id': user_id,
            'branch': self.branch,
        })

    def grant(self, user_id, subject_type, relation, relation_type,
              resource_id, resource_type, attribute):
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

    def revoke(self, user_id, subject_type, relation, relation_type,
               resource_id, resource_type, attribute):
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

    def list_unflattened(self, userset_id, relation, relation_type,
                         resource_id, resource_type, attribute, org_id):
        if relation_type not in ['ROLE', 'ACTION', None]:
            raise Exception("relation_type must be ['ROLE', 'ACTION', None]")

        return self.dispatch('/v1/grants/unflattened', HttpMethods.GET, {
            'usersetId': userset_id,
            'relation': relation,
            'relationType': relation_type,
            'resourceId': resource_id,
            'resourceType': resource_type,
            'attribute': attribute,
            'orgId': org_id,
            'branch': self.branch,
        })
