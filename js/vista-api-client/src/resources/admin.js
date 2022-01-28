
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Admin extends ApiResource {
    createBranch = async (branch) => {
        return this.dispatch('/v1/companies/branches', HTTP_METHODS.POST, {
            branch: branch,
        });
    }

    cloneBranch = async (branch, newBranch) => {
        return this.dispatch('/v1/companies/branches', HTTP_METHODS.POST, {
            branch: branch,
            new_branch: newBranch,
        });
    }

    createReadTokens = async () => {
        return this.dispatch('/v1/auth/readTokens', HTTP_METHODS.GET);
    }
}

export default Admin;
