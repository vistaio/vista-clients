
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

## All Operator
You can use `VistaClient.ALL` in place where `resource_id` is accepted to indicate all.

## API
| method | description |
|--------|-------------|
| `client.admin.createBranch(branch: string)`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `client.admin.createReadTokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `client.resourceTypes.list()`       | Lists all Resource Types         |
| `client.resourceTypes.upsert(name: string, actions: string[], attributes: string[])`       | Creates new Resource Type
| `client.roles.list()`       | Lists all Roles         |
| `client.roles.upsert(roleId: string, resourceTypeToAttributeToActions: { [resourceType: string]: { [attribute: string]: string[] } }, parentRoles: string[])`      | Creates a new Role        |
| `client.roles.inherit(childRoleId: string, parentRoleId: string)`       | Adds Role as child of parent Role         |
| `client.users.create(userId: string)`       | Creates new User         |
| `client.users.assignToUserset(userId: string, usersetId: string)`       | Adds User to a Userset         |
| `client.users.removeFromUserset(userId: string, usersetId: string)`       | Removes User from Userset         |
| `client.users.check(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Checks User access         |
| `client.users.expand(userId: string)`       | Returns all permissions for users (action, resource_type, resource_id)         |
| `client.users.grantAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string?)`       | Allows User to perform `action` on (`resourceId`, `resourceType`)        |
| `client.users.revokeAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string?)`       | Revokes `action` on (`resourceId`, `resourceType`) for User       |
| `client.users.grantRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Grants Role to User         |
| `client.users.revokeRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Revokes Role from User         |
| `client.usersets.create(userId: string)`       | Creates Userset         |
| `client.usersets.inherit(childRoleId: string, parentRoleId: string)`       | Adds Userset as child of parent Userset         |
| `client.usersets.grantAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Allows User to perform `action` on (`resourceId`, `resourceType`)       |
| `client.usersets.revokeAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Revokes `action` on (`resourceId`, `resourceType`) for Userset      |
| `client.usersets.grantRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Grants Role to Userset         |
| `client.usersets.revokeRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Revokes Role from Userset         |
