
import VistaClient from '@vista.io/vista-api-client';

// test key
const client = new VistaClient('z9Not6ZyDQn8YGw3GxHZx54k0U1qA_2KIL1HktuYPc5EKEfd');

client.roles.list('test')
    .then((roles) => {
        console.log(JSON.stringify(roles));
    })
    .catch((err) => {
        console.log(err);
    });
