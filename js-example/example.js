
import VistaClient from "@vista.io/vista-api-client";

import { io } from "socket.io-client";

const port = process.argv[2]
const socket = io(`http://localhost:${port}`, {
  auth: {
    token: 'IZtgnWFVLMdpJ/4FL4JRDDjsNTmqN+7llhEEH8Vlh3I=',
  },
});


socket.on("connect", () => {
  const engine = socket.io.engine;
  console.log(engine.transport.name);
});

socket.on("REGENERATE_USER", (data) => {
  const users = data.users;
});

socket.on("connect_error", (err) => {
  console.log(err)
  console.log('connect error!')
});

// test key
// const client = new VistaClient('IZtgnWFVLMdpJ/4FL4JRDDjsNTmqN+7llhEEH8Vlh3I=', 'test', 'http://localhost:8080');

// client.resourceTypes.list('test')
//     .then((roles) => {
//         console.log(JSON.stringify(roles));
//     })
//     .catch((err) => {
//         console.log(err);
//     });
