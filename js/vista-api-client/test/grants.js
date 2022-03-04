
import expect from 'expect.js';
import { client, testId, orgId } from './setup.js';

const uid_base = `${testId}_grants`;

describe('Grants', () => {
  describe('list', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_0`;
      await client.resourceTypes.upsert(rt, ['read', 'write'], []);

      const role = `${uid_base}_role_0`;
      await client.roles.upsert(role, {
        [rt]: {
          '*': ['read'],
        },
      });

      const uid = `${uid_base}_user_0`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'write', 'rid_0', rt);
      await client.users.grantRole(uid, role, 'rid_0', rt);
      const r = await client.grants.list(undefined, undefined, 'rid_0', rt, undefined, undefined);

      expect(r).to.be.an('array');
      expect(r).to.not.be.empty();
      expect(r[0]).to.have.key('user_id');
      expect(r[0]).to.have.key('action');
      expect(r[0]).to.have.key('relation');
      expect(r[0]).to.have.key('resource_id');
      expect(r[0]).to.have.key('resource_type');
      expect(r[0]).to.have.key('attribute');
      expect(r[0]).to.have.key('created_at');
    });
  });
});
