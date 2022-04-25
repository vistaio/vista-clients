
import { HttpMethods, ApiResource } from '../ApiResource';

class Grants extends ApiResource {
  list = async (userId: string | null, action: string | null, resourceId: string | null, resourceType: string | null, attribute: string | null, orgId: string | null, startTime: Date | null, endTime: Date | null) => {
    return this.dispatch('/v1/grants', HttpMethods.GET, {
      id: userId || '',
      action: action || '',
      resource_id: resourceId || '',
      resource_type: resourceType || '',
      attribute: attribute || '',
      org_id: orgId || '',
      start_time: startTime ? startTime.toISOString() : '',
      end_time: endTime ? endTime.toISOString() : '',
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
