
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Admin(ApiResource):
    def createEnvironment(self, environment):
        return self.dispatch('/v1/environments', HttpMethods.POST, {
            'environment': environment,
        })
