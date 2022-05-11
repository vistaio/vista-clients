
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client } from './setup.js';

describe('Admin', () => {
  describe('gets company', () => {
    it('should return proper response', async () => {
      const company = await client.admin.getCompany();

      expect(company).to.have.key('company_id');
      expect(company).to.have.key('company_name');
    });
  });
});
