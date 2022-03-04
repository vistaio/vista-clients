
import { HttpMethods, ApiResource } from '../ApiResource';

class Admin extends ApiResource {
    createBranch = async (branch: string) => {
        return this.dispatch('/v1/companies/branches', HttpMethods.POST, {
            branch: branch,
        });
    }

    cloneBranch = async (branch: string, newBranch: string) => {
        return this.dispatch('/v1/companies/branches', HttpMethods.POST, {
            branch: branch,
            new_branch: newBranch,
        });
    }

    createReadTokens = async () => {
        return this.dispatch('/v1/auth/readTokens', HttpMethods.GET);
    }
}

export default Admin;
