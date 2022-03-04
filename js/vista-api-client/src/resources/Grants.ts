
import { HttpMethods, ApiResource } from '../ApiResource';

class Grants extends ApiResource {
  list = async (userId: string, action: string, resourceId: string, resourceType: string, attribute: string, orgId: string) => {
    userId = userId || '';
    action = action || '';
    resourceId = resourceId || '';
    resourceType = resourceType || '';
    attribute = attribute || '';
    orgId = orgId || '';

    return this.dispatch('/v1/grants', HttpMethods.GET, {
      id: userId,
      action: action,
      resource_type: resourceType,
      resource_id: resourceId,
      attribute: attribute,
      org_id: orgId,
      branch: this.branch,
    });
  }

  expand = async (userId: string) => {
    return this.dispatch('/v1/grants', HttpMethods.GET, {
      id: userId,
      branch: this.branch,
    });
  }

  grant = async (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => {
    return this.dispatch('/v1/grants', HttpMethods.POST, {
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

  revoke = async (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => {
    return this.dispatch('/v1/grants', HttpMethods.DELETE, {
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

  listUnflattened = async (orgId: string) => {
    return this.dispatch('/v1/grants/unflattened', HttpMethods.GET, {
      org_id: orgId,
      branch: this.branch,
    });
  }
}

export default Grants;
