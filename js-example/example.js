
import VistaClient from "@vista.io/vista-api-client";

// test key
const client = new VistaClient('Z6Q2KfVk6T5NJ65uskrfOxRCkcrSMhxQRmbAereoxUQ2YA7J', 'test');

client.resourceTypes.list('test')
    .then((roles) => {
        console.log(JSON.stringify(roles));
    })
    .catch((err) => {
        console.log(err);
    });
