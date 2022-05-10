
from vista_api_client.api_resources.api_resource import ApiResource, HttpMethods


class Admin(ApiResource):
    def get_company(self):
        return self.dispatch('/v1/accounts', HttpMethods.GET)

    def create_branch(self, branch):
        return self.dispatch('/v1/companies/branches', HttpMethods.POST, {
            'branch': branch,
        })

    def clone_branch(self, branch, new_branch):
        return self.dispatch('/v1/companies/branches/clone', HttpMethods.POST, {
            'branch': branch,
            'new_branch': new_branch,
        })

    def create_read_tokens(self):
        return self.dispatch('/v1/auth/readTokens', HttpMethods.GET)
