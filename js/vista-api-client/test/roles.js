
import expect from 'expect.js';
import { client, testId } from './setup.js';

const uid_base = `${testId}_roles`;

describe('Roles', () => {
  describe('upsert', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_0`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_0`;
      const r = await client.roles.upsert(role, {
        [rt]: {
          '*': ['read'],
        },
      });

      expect(r).to.have.key('id');
      expect(r).to.have.key('parent_roles');
      expect(r.parent_roles).to.be.an('array');
      expect(r).to.have.key('resource_types_to_attributes_to_actions');
      expect(r.resource_types_to_attributes_to_actions).to.be.an('object');
      expect(r.resource_types_to_attributes_to_actions[rt]).to.be.an('object');
      expect(r.resource_types_to_attributes_to_actions[rt]['*']).to.be.an('array');
    });
  });

  describe('list', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_1`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const role = `${uid_base}_role_1`;
      await client.roles.upsert(role, {
        [rt]: {
          '*': ['read'],
        },
      });

      const r = await client.roles.list();

      expect(r).to.be.an('array');
      expect(r).to.not.be.empty();
      expect(r[0]).to.have.key('id');
      expect(r[0]).to.have.key('parent_roles');
      expect(r[0].parent_roles).to.be.an('array');
      expect(r[0]).to.have.key('resource_types_to_attributes_to_actions');
      expect(r[0].resource_types_to_attributes_to_actions).to.be.an('object');
    });
  });
});
