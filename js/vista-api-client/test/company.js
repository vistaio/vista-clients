
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client, testId } from './setup.js';

const uid_base = `${testId}_rt`;

describe('Company', () => {
  describe('can change branches', () => {
    it('should return proper response', async () => {
      await client.admin.createBranch(testId);

      const rt = `${uid_base}_rt_1`;
      await client.resourceTypes.upsert(rt, ['read'], []);

      const rt2 = `${uid_base}_rt_2`;
      await client.withBranch(testId).resourceTypes.upsert(rt2, ['write'], []);

      const all = await client.resourceTypes.list();
      const found = all.find((r) => r.name === rt);
      expect(found).to.have.length;

      const shouldNotBeFound = all.find((r) => r.name === rt2);
      expect(shouldNotBeFound).to.not.have.length;

      const all2 = await client.withBranch(testId).resourceTypes.list();
      const found2 = all2.find((r) => r.name === rt2);
      expect(found2).to.have.length;
    });
  });
});
