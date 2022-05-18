
import VistaClient from '../dist/vista.js';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const testId = randomIntFromInterval(1, 10000).toString()
const orgId = randomIntFromInterval(1, 10000).toString()

console.log(`Test ID: ${testId}, Org ID: ${orgId}`);

const config = {
  secret: 'IZtgnWFVLMdpJ/4FL4JRDDjsNTmqN+7llhEEH8Vlh3I=',
  hostname: 'http://localhost:8080',
  branch: 'test',
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const client = new VistaClient(config.secret, config.branch, config.hostname);


const rtDictToPerms = (rtdict) => {
  const permissions = []
  for (const rt in rtdict) {
    for (const attr in rtdict[rt]) {
      for (const action of rtdict[rt][attr]) {
        permissions.push({
          "resourceType": rt,
          "attribute": attr,
          "action": action,
        });
      }
    }
  }

  return permissions;
}

export { client, testId, orgId, sleep, rtDictToPerms };
