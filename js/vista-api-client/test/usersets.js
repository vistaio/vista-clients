
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client, testId, orgId } from './setup.js';

const uid_base = `${testId}_usersets`;

describe('Usersets', () => {
  describe('create', () => {
    it('should return proper response', async () => {
      const usid = `${uid_base}_userset_0`;
      const r = await client.usersets.create(usid, orgId);
      expect(r).to.have.key('id');
      expect(r).to.have.key('parents');
    });
  });

  describe('inherit', () => {
    it('should return proper response', async () => {
      const usid_parent = `${uid_base}_userset_parent_1`;
      const usid_child = `${uid_base}_userset_child_1`;
      await client.usersets.create(usid_parent, orgId);
      await client.usersets.create(usid_child, orgId);
      const r = await client.usersets.inherit(usid_child, usid_parent);

      expect(r).to.be.an('object');
      expect(r).to.be.empty();
    });
  });

  describe('grantAction', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_2`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const usid = `${uid_base}_userset_2`;
      await client.usersets.create(usid, orgId);
      const r = await client.usersets.grantAction(usid, 'read', 'rid_2', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
      expect(r).to.have.key('attribute');
    });
  });

  describe('revokeAction', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_3`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const usid = `${uid_base}_userset_3`;
      await client.usersets.create(usid, orgId);
      await client.usersets.grantAction(usid, 'read', 'rid_3', rt);
      const r = await client.usersets.revokeAction(usid, 'read', 'rid_3', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
    });
  });

  describe('grantRole', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_4`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_4`;
      await client.roles.upsert(role, {
        [rt]: {
          '*': ['read'],
        },
      });

      const usid = `${uid_base}_userset_4`;
      await client.usersets.create(usid, orgId);
      const r = await client.usersets.grantRole(usid, role, 'rid_4', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
      expect(r).to.have.key('attribute');
    });
  });

  describe('revokeRole', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_5`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_5`;
      await client.roles.upsert(role, {
        [rt]: {
          '*': ['read'],
        },
      });

      const usid = `${uid_base}_userset_5`;
      await client.usersets.create(usid, orgId);
      await client.usersets.grantRole(usid, role, 'rid_5', rt);
      const r = await client.usersets.revokeRole(usid, role, 'rid_5', rt);

      expect(r).to.have.key('userset_id');
      expect(r).to.have.key('relation');
      expect(r).to.have.key('resource_id');
      expect(r).to.have.key('resource_type');
    });
  });
});
