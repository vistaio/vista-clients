
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Admin(ApiResource):
    def create_branch(self, branch):
        return self.dispatch('/v1/branches', HttpMethods.POST, {
            'branch': branch,
        })

    def create_read_tokens(self):
        return self.dispatch('/v1/auth/readTokens', HttpMethods.GET)
