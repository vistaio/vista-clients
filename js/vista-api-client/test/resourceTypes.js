
import expect from 'expect.js';
import { client, testId } from './setup.js';

const uid_base = `${testId}_rt`;

describe('ResourceTypes', () => {
  describe('upsert', () => {
    it('should return proper response', async () => {
      const rt = `${uid_base}_rt_0`;
      const r = await client.resourceTypes.upsert(rt, ['read'], []);

      expect(r).to.have.key('name');
      expect(r).to.have.key('actions');
      expect(r.actions).to.be.an('array');
      expect(r).to.have.key('attributes');
      expect(r.attributes).to.be.an('array');
    });
  });

  describe('list', () => {
    it('should return proper response', async () => {

      const rt = `${uid_base}_rt_1`;
      await client.resourceTypes.upsert(rt, ['read'], []);
      const r = await client.resourceTypes.list();

      // expect(r).to.be.an('array');
      // expect(r).to.not.be.empty();
      // expect(r[0]).to.have.key('name');
      // expect(r[0]).to.have.key('actions');
      // expect(r[0].actions).to.be.an('array');
      // expect(r[0]).to.have.key('attributes');
      // expect(r[0].attributes).to.be.an('array');
    });
  });

  describe('addRelationship', () => {
    it('should return proper response', async () => {
      const rt1 = `${uid_base}_rt_1`;
      const rt2 = `${uid_base}_rt_2`;
      await client.resourceTypes.upsert(rt2, ['read'], []);
      await client.resourceTypes.upsert(rt1, ['read'], [{
        id: 'attr',
        target_resource_type: rt2,
        attribute_type: 'RELATIONSHIP',
      }]);
      const r = await client.resourceTypes.addRelationship('from_id', rt1, 'attr', 'to_id', rt2);

      expect(r).to.have.key('from_id')
      expect(r).to.have.key('from_resource_type')
      expect(r).to.have.key('to_id')
      expect(r).to.have.key('to_resource_type')
      expect(r).to.have.key('attribute')
      expect(r).to.have.key('branch')
      expect(r).to.have.key('company_id')
    });
  });
});
