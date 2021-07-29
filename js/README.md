
# Vista API for NodeJS

NodeJS implementation of the Vista API.

## Reference

- [Vista API Documentation](https://docs.govista.io/api/)

## Prerequisites

You'll need to get a Vista API key from the Vista Dashboard.

## Usage

Install the dependency:

```
npm install vista-api-client;
```

Then in your Node application:

```js
import { VistaClient } from 'vista-api-client';

const client = new VistaClient(
  '<insert your apiKey here>',
);
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.
