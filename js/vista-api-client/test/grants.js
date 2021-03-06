
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client, testId, orgId, rtDictToPerms } from './setup.js';

const uid_base = `${testId}_grants`;

describe('Grants', () => {
  describe('list', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_0`;
      await client.resourceTypes.upsert(rt, ['read', 'write'], []);

      const role = `${uid_base}_role_0`;
      await client.roles.upsert(role, rtDictToPerms({
        [rt]: {
          '*': ['read'],
        },
      }));

      const uid = `${uid_base}_user_0`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'write', 'rid_0', rt);
      await client.users.grantRole(uid, role, 'rid_0', rt);
      const r = await client.grants.list(undefined, undefined, 'rid_0', rt, undefined, undefined, undefined, undefined);

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

    it('should should filter by dates', async () => {
      const rt = `${uid_base}_rt_1`;
      await client.resourceTypes.upsert(rt, ['read', 'write'], []);

      const role = `${uid_base}_role_1`;
      await client.roles.upsert(role, rtDictToPerms({
        [rt]: {
          '*': ['read'],
        },
      }));

      const uid = `${uid_base}_user_1`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'write', 'rid_1', rt);

      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      const r = await client.grants.list(null, null, 'rid_1', rt, null, null, tomorrow, null);

      expect(r).to.be.an('array');
      expect(r).to.be.empty();
    });
  });

  describe('list_unflattened', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_2`;
      await client.resourceTypes.upsert(rt, ['read', 'write'], []);

      const role = `${uid_base}_role_2`;
      await client.roles.upsert(role, rtDictToPerms({
        [rt]: {
          '*': ['read'],
        },
      }));

      const uid = `${uid_base}_user_2`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'write', 'rid_2', rt);
      const r = await client.grants.listUnflattened(uid, null, null, null, null, null, null, null);


      expect(r).to.be.an('array');
      expect(r).to.not.be.empty();
      expect(r[0]).to.have.key('userset_id');
      expect(r[0]).to.have.key('relation');
      expect(r[0]).to.have.key('relation_type');
      expect(r[0]).to.have.key('resource_id');
      expect(r[0]).to.have.key('resource_type');
      expect(r[0]).to.have.key('attribute');
    });
  });
});
