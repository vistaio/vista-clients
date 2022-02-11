
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
You can use `VistaClient.ALL` in place where `resource_id` or `resource_type` is accepted to indicate all.

## Usage
The following describes methods namespaced by Vista [resources](https://docs.govista.io/Concepts/Terminology).


### Admin
`client.admin`

| method | description |
|--------|-------------|
| `createBranch(branch: string)`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `cloneBranch(branch: string, newBranch: string)`| Clones [templates](https://docs.govista.io/Concepts/Terminology#permission-template) in `branch` to `newBranch`    |
| `createReadTokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |


### [Resource Types](https://docs.govista.io/Concepts/Terminology#resource)
`client.resourceTypes`

| method | description |
|--------|-------------|
| `list()`       | Lists all Resource Types         |
| `upsert(name: string, actions: string[], attributes: string[])`       | Upserts a Resource Type |

### [Roles](https://docs.govista.io/Concepts/Terminology#role)
`client.roles`

| method | description |
|--------|-------------|
| `client.roles.list(orgId: string)`       | Lists all Roles         |
| `client.roles.upsert(roleId: string, resourceTypeToAttributeToActions: { [resourceType: string]: { [attribute: string]: string[] } }, parentRoles: string[], orgId: string)`      | Upserts a Role        |


### [Users](https://docs.govista.io/Concepts/Terminology#user)
`client.users`

| method | description |
|--------|-------------|
| `create(userId: string, orgId: string)`       | Creates new User         |
| `list(orgId: string)`| Lists Users in `org_id`  |
| `assignToUserset(userId: string, usersetId: string)`       | Adds User to a Userset         |
| `removeFromUserset(userId: string, usersetId: string)`       | Removes User from Userset         |
| `check(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Checks User access         |
| `expand(userId: string)`       | Returns all permissions for users (action, resource_type, resource_id)         |
| `grantAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string?)`       | Allows User to perform `action` on (`resourceId`, `resourceType`)        |
| `revokeAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string?)`       | Revokes `action` on (`resourceId`, `resourceType`) for User       |
| `grantRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Grants Role to User         |
| `revokeRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Revokes Role from User         |


### [Usersets](https://docs.govista.io/Concepts/Terminology#userset)
`client.usersets`

| method | description |
|--------|-------------|
| `create(userId: string, orgId: string)`       | Creates Userset         |
| `inherit(childRoleId: string, parentRoleId: string)`       | Adds Userset as child of parent Userset         |
| `grantAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Allows User to perform `action` on (`resourceId`, `resourceType`)       |
| `revokeAction(userId: string, action: string, resourceType: string, resourceId: string, attribute?: string)`       | Revokes `action` on (`resourceId`, `resourceType`) for Userset      |
| `grantRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Grants Role to Userset         |
| `revokeRole(userId: string, roleId: string, resourceType: string, resourceId: string)`       | Revokes Role from Userset         |


### Grants
`client.grants`

| method | description |
|--------|-------------|
| `listUnflattened(orgId: string)`| Lists User or Userset grants  |
