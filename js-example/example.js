
import VistaClient from "@vista.io/vista-api-client";

// test key
const client = new VistaClient('Pxi5nRg23LSlVjl-OehXlOTr53zZHzZggr_cbaodYr8QcchV', 'test', 'https://staging.api.govista.io');

client.resources.list('test')
    .then((roles) => {
        console.log(JSON.stringify(roles));
    })
    .catch((err) => {
        console.log(err);
    });
