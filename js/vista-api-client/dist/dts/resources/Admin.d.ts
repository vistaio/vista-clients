import { ApiResource } from '../ApiResource';
declare class Admin extends ApiResource {
    getCompany: () => Promise<any>;
    createBranch: (branch: string) => Promise<any>;
    cloneBranch: (branch: string, newBranch: string) => Promise<any>;
    createReadTokens: () => Promise<any>;
}
export default Admin;
