
import expect from 'expect.js';
import { describe, it } from 'mocha';

import { client } from './setup.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Blueprint', () => {
  describe('upserts', () => {
    it('should return proper response', async () => {
      await client.blueprint.upsert(`${__dirname}/data/blueprint.yaml`);

      const rts = await client.withBranch('testBranch').resourceTypes.list();
      expect(rts).to.have.length(2);

      const roles = await client.withBranch('testBranch').resourceTypes.list();
      expect(roles).to.have.length(2);
    });
  });
});
