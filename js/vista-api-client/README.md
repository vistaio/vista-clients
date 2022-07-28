
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
const roles = client.roles.list()
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for the API documentation.

## All Operator
You can use `VistaClient.ALL` in place where `resource_id` or `resource_type` is accepted to indicate all.

## Changing Branches for Operation
Although `branch` is required as a part of the constructor, one may use `client.withBranch(branch: string)` to use supply a different branch using the same client.

## Usage
The following describes methods namespaced by Vista [resources](https://docs.govista.io/Concepts/Terminology).


### Admin
`client.admin`

| method | description |
|--------|-------------|
| `createBranch(branch: string)`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `cloneBranch(branch: string, newBranch: string)`| Clones [templates](https://docs.govista.io/Concepts/Terminology#permission-template) in `branch` to `newBranch`    |
| `createReadTokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `getCompany()`| Gets Company ID |


### [Resource Types](https://docs.govista.io/Concepts/Terminology#resource)
`client.resourceTypes`

| method | description |
|--------|-------------|
| `list()`       | Lists all Resource Types         |
| `upsert(name: string, actions: string[], attributes: {id: string, target_resource_type: string, attribute_type: 'RELATIONSHIP' \| 'SCALAR'}[])`       | Upserts a Resource Type |
| `addRelationship(fromId: string, fromResourceType: string, attribute: string, toId: string, toResourceType: string)`| Adds an attribute relationship between 2 resourceIds |


### [Roles](https://docs.govista.io/Concepts/Terminology#role)
`client.roles`

| method | description |
|--------|-------------|
| `client.roles.list(orgId?: string)`       | Lists all Roles         |
| `client.roles.upsert(roleId: string, permissions: { resourceType: string, attribute: string, action: string, ownerId: string }[] owners: { key: { query: string, dbId: string } }, arentRoles: string[], orgId: string)`      | Upserts a Role        |


### [Users](https://docs.govista.io/Concepts/Terminology#user)
`client.users`

| method | description |
|--------|-------------|
| `create(userId: string, orgId: string)`       | Creates new User         |
| `list(orgId?: string)`| Lists Users in `orgId`  |
| `listOrgs()`| Lists all orgs for set branch  |
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
| `list(userId: string \| null, action: string \| null, resourceId: string \| null, resourceType: string \| null, attribute: string \| null, orgId: string \| null, startTime: string \| null, endTime: string \| null)`| List & filter grants by arguments, `startTime` is inclusive (>=) and `endTime` is exclusive (<)  |
| `listUnflattened(usersetId: string \| None, relation: string \| None, relationType: string \| None, resourceId: string \| None, resourceType: string \| None, attribute: string \| None, orgId: string \| None)`| Filters User or Userset grants  |


### Blueprint
`client.blueprint`

| method | description |
|--------|-------------|
| `upsert(fpath: string)`| Upserts branches, resource types, and roles defined in blueprint file (yaml or json). `fpath` is the relative path to the vista config file.|
