
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class ResourceTypes(ApiResource):
    def list(self):
        return self.dispatch('/v1/resource_types', HttpMethods.GET, {
            'branch': self.branch,
        })

    def upsert(self, name, actions, attributes=None):
        attrs = attributes or []
        return self.dispatch('/v1/resource_types', HttpMethods.POST, {
            'name': name,
            'actions': actions,
            'attributes': attrs,
            'branch': self.branch,
        })

    def add_relationship(self, from_id, from_resource_type, attribute, to_id, to_resource_type):
        return self.dispatch('/v1/resource_types/relationships', HttpMethods.POST, {
            'from_id': from_id,
            'from_resource_type': from_resource_type,
            'to_id': to_id,
            'to_resource_type': to_resource_type,
            'attribute': attribute,
            'branch': self.branch,
        })
