
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Grants extends ApiResource {
  check = async (userId, action, resourceType, resourceId, attribute) => {
    return this.dispatch('/v1/grants', HTTP_METHODS.GET, {
      id: userId,
      action: action,
      resource_type: resourceType,
      resource_id: resourceId,
      attribute: attribute,
      branch: this.branch,
    });
  }

  expand = async (userId) => {
    return this.dispatch('/v1/grants', HTTP_METHODS.GET, {
      id: userId,
      branch: this.branch,
    });
  }

  grant = async (userId, subjectType, relation, relationType, resourceId, resourceType, attribute) => {
    return this.dispatch('/v1/grants', HTTP_METHODS.POST, {
      id: userId,
      subject_type: subjectType,
      relation: relation,
      relation_type: relationType,
      resource_type: resourceType,
      resource_id: resourceId,
      attribute: attribute,
      branch: this.branch,
    });
  }

  revoke = async (userId, subjectType, relation, relationType, resourceId, resourceType, attribute) => {
    return this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
      id: userId,
      subject_type: subjectType,
      relation: relation,
      relation_type: relationType,
      resource_id: resourceId,
      resource_type: resourceType,
      attribute: attribute,
      branch: this.branch,
    });
  }

  listUnflattened = async (orgId) => {
    return this.dispatch('/v1/grants/unflattened', HTTP_METHODS.POST, {
      org_id: orgId,
      branch: this.branch,
    });
  }
}

export default Grants;
