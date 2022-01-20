
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class ResourceTypes(ApiResource):
    def list(self):
        return self.dispatch('/v1/resource_types', HttpMethods.GET, {
            'branch': self.branch,
        })

    def upsert(self, name, actions, attributes=[]):
        return self.dispatch('/v1/resource_types', HttpMethods.POST, {
            'name': name,
            'actions': actions,
            'attributes': attributes,
            'branch': self.branch,
        })
