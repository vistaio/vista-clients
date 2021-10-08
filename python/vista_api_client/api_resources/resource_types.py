
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class ResourceTypes(ApiResource):
    def list(self):
        return self.dispatch('/v1/resource_types', HttpMethods.GET, {
            'environment': self.environment,
        })

    def create(self, name, relationships, attributes, actions):
        return self.dispatch('/v1/resource_types', HttpMethods.POST, {
            'name': name,
            'relationships': relationships,
            'attributes': attributes,
            'actions': actions,
            'environment': self.environment,
        })
