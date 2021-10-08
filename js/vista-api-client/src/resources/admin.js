
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Admin extends ApiResource {
    createBranch = async (branch) => {
        return this.dispatch('/v1/branches', HTTP_METHODS.POST, {
            branch: branch,
        });
    }
}

export default Admin;
