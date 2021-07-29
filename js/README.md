
# Vista API for NodeJS

NodeJS implementation of the Vista API.

## Reference

- [Vista API Documentation](https://docs.govista.io/api/)

## Prerequisites

You'll need to create a Vista API key from the Vista Dashboard.

## Usage

Install the dependency:

```
npm install @vista.io/vista-api-client;
```

Then in your Node application:

```js
import { VistaClient } from '@vista.io/vista-api-client';

const VISTA_API_KEY = ''; // create in Vista Dashboard
const client = new VistaClient(VISTA_API_KEY);
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.
