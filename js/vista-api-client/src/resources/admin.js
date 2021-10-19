
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Admin extends ApiResource {
    createBranch = async (branch) => {
        return this.dispatch('/v1/branches', HTTP_METHODS.POST, {
            branch: branch,
        });
    }

    createReadTokens = async () => {
        return this.dispatch('/v1/auth/readTokens', HTTP_METHODS.GET);
    }
}

export default Admin;
