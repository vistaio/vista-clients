
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client, testId, orgId, rtDictToPerms } from './setup.js';

const uid_base = `${testId}_users`;

describe('Users', () => {
  describe('create', () => {
    it('should return proper response', async () => {
      const uid = `${uid_base}_user_0`;
      const r = await client.users.create(uid, orgId);
      expect(r).to.have.key('user_id');
    });
  });

  describe('list', () => {
    it('should return proper response', async () => {
      const uid = `${uid_base}_user_1`;
      await client.users.create(uid, orgId);

      const r = await client.users.list();
      expect(r).to.be.an('array');
      expect(r).to.not.be.empty();
      expect(r[0]).to.have.key('id');
      expect(r[0]).to.have.key('org_id');
      expect(r[0]).to.have.key('branch');
      expect(r[0]).to.have.key('company_id');
    });
  });

  describe('assignToUserset', () => {
    it('should return proper response', async () => {
      const uid = `${uid_base}_user_2`;
      await client.users.create(uid, orgId);

      const usid = `${uid_base}_userset_2`;
      await client.usersets.create(usid, orgId, []);

      const r = await client.users.assignToUserset(uid, usid);
      expect(r).to.have.key('id');
      expect(r).to.have.key('usersets');
    });
  });

  describe('removeFromUserset', () => {
    it('should return proper response', async () => {
      const uid = `${uid_base}_user_3`;
      await client.users.create(uid, orgId);

      const usid = `${uid_base}_userset_3`;
      await client.usersets.create(usid, orgId, []);

      await client.users.assignToUserset(uid, usid);
      const r = await client.users.removeFromUserset(uid, usid);

      expect(r).to.have.key('id');
      expect(r).to.have.key('usersets');
    });
  });

  describe('check', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_4`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const uid = `${uid_base}_user_4`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'read', 'rid_4', rt);
      const r = await client.users.check(uid, 'read', 'rid_4', rt);

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

  describe('expand', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_5`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const uid = `${uid_base}_user_5`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'read', 'rid_5', rt);
      const r = await client.users.expand(uid);

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

  describe('grantAction', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_6`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const uid = `${uid_base}_user_6`;
      await client.users.create(uid, orgId);
      const r = await client.users.grantAction(uid, 'read', 'rid_6', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
      expect(r).to.have.key('attribute');
    });
  });

  describe('revokeAction', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_7`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const uid = `${uid_base}_user_7`;
      await client.users.create(uid, orgId);
      await client.users.grantAction(uid, 'read', 'rid_7', rt);
      const r = await client.users.revokeAction(uid, 'read', 'rid_7', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
    });
  });

  describe('grantRole', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_8`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_8`;
      await client.roles.upsert(role, rtDictToPerms({
        [rt]: {
          '*': ['read'],
        },
      }));

      const uid = `${uid_base}_user_8`;
      await client.users.create(uid, orgId);
      const r = await client.users.grantRole(uid, role, 'rid_8', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
      expect(r).to.have.key('attribute');
    });
  });

  describe('revokeRole', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_9`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_9`;
      await client.roles.upsert(role, rtDictToPerms({
        [rt]: {
          '*': ['read'],
        },
      }));

      const uid = `${uid_base}_user_9`;
      await client.users.create(uid, orgId);
      await client.users.grantRole(uid, role, 'rid_9', rt);
      const r = await client.users.revokeRole(uid, role, 'rid_9', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
    });
  });
});
