
import expect from 'expect.js';
import { client, testId, orgId } from './setup';

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

      expect(r).to.be.an('array');
      expect(r).to.not.be.empty();
      expect(r[0]).to.have.key('name');
      expect(r[0]).to.have.key('actions');
      expect(r[0].actions).to.be.an('array');
      expect(r[0]).to.have.key('attributes');
      expect(r[0].attributes).to.be.an('array');
    });
  });
});
