
# Vista API for NodeJS

NodeJS client for the Vista API.

## Reference

- [Vista API Documentation](https://docs.govista.io/api/)

## Prerequisites

You'll need to create a Vista API key from the Vista Dashboard.

## Usage

Install the package:

```
npm install @vista.io/vista-api-client;
```

Then in your Node application:

```js
import VistaClient from '@vista.io/vista-api-client';

const VISTA_API_KEY = 'create-in-vista-dashboard';
const client = new VistaClient(VISTA_API_KEY, 'branch_name');
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.

## API
| method | description |
|--------|-------------|
| `client.resourceTypes.list()`       | Lists all Resource Types         |
| `client.resourceTypes.create(name : String, actions : Array(String)`       |
| `client.roles.list()`       | Lists all Roles         |
| `client.roles.create(roleId : String, actionsByResourceType : Array(Dict(Resource Type, Action)), parentRoles : Array(String))`      | Creates a new Role        |
| `client.roles.inherit(childRoleId : String, parentRoleId : String)`       | Adds role as child of parent role         |
| `client.users.create(userId : String)`       | Creates new User         |
| `client.users.assignToUserset(userId : String, usersetId : String)`       | Adds user to a Userset         |
| `client.users.check(userId : String, action : String, resourceType : String, resourceId : String)`       | Checks User access         |
| `client.users.grantAction(userId : String, action : String, resourceType : String, resourceId : String)`       | Allows user to perform `action` on (`resourceId`, `resourceType`)        |
| `client.users.grantRole(userId : String, roleId : String, resourceType : String, resourceId : String)`       | Grants Role to User         |
| `client.usersets.create(userId : String)`       | Creates Userset         |
| `client.usersets.inherit(childRoleId : String, parentRoleId : String)`       | Adds userset as child of parent Userset         |
| `client.usersets.grantAction(userId : String, action : String, resourceType : String, resourceId : String)`       | Allows user to perform `action` on (`resourceId`, `resourceType`)       |
| `client.usersets.grantRole(userId : String, roleId : String, resourceType : String, resourceId : String)`       | Grants Role to User         |
