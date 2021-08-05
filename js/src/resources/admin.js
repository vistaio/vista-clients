
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Admin extends ApiResource {
    createEnvironment = async (environment) => {
        return this.dispatch('/v1/environments', HTTP_METHODS.POST, {
            environment: environment,
        });
    }
}

export default Admin;
