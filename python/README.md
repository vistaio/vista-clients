
# Vista API for Python

Python implementation of the Vista API.

## Reference

- [Vista API Documentation](https://docs.govista.io/api/)

## Prerequisites

You'll need to create a Vista API key from the Vista Dashboard.

## Usage

Install the dependency:

```
pip install vista_api_client
```

Then in your Node application:

```python
from vista_api_client import VistaClient

VISTA_API_KEY = 'create-in-vista-dashboard'

client = VistaClient(VISTA_API_KEY, 'branch_name')
roles = client.roles.list()
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for the API documentation.

## All Operator
You can use `VistaClient.ALL` in place where `resource_id` or `resource_type` is accepted to indicate all.

## Changing Branches for Operation
Although `branch` is required as a part of the constructor, one may use `client.with_branch(branch: str)` to use supply a different branch using the same client.

## Usage
The following describes methods namespaced by Vista [resources](https://docs.govista.io/Concepts/Terminology).


### Admin
`client.admin`

| method | description |
|--------|-------------|
| `create_branch(branch: str)`| Creates new Branch  |
| `clone_branch(branch: str, new_branch: str)`| Clones [templates](https://docs.govista.io/Concepts/Terminology#permission-template) in `branch` to `newBranch`  |
| `create_read_tokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `get_company()`| Gets Company ID |


### [Resource Types](https://docs.govista.io/Concepts/Terminology#resource)
`client.resource_types`

| method | description |
|--------|-------------|
| `list()`| Lists all Resource Types  |
| `upsert(name: str, actions: str[], attributes: {id: str, target_resource_type: str, attribute_type: 'RELATIONSHIP' \| 'SCALAR'}[])`       | Upserts a Resource Type |
| `add_relationship(from_id: str, from_resource_type: str, attribute: str, to_id: str, to_resource_type: str)`| Adds an attribute relationship between 2 resourceIds |


### [Roles](https://docs.govista.io/Concepts/Terminology#role)
`client.roles`

| method | description |
|--------|-------------|
| `list(org_id: str)`| Lists all Roles  |
| `upsert(role_id: str, permissions: { resourceType: str, attribute: str, action: str, ownerId: str }[], owners: { key: str }, parentRoles: string[], orgId: string)`      | Upserts a Role |


### [Users](https://docs.govista.io/Concepts/Terminology#user)
`client.users`

| method | description |
|--------|-------------|
| `create(user_id: str, org_id: str)`| Creates new User  |
| `list(org_id?: str)`| Lists Users in `org_id`  |
| `assign_to_userset(user_id: str, userset_id: str)`| Adds User to a Userset  |
| `remove_from_userset(user_id: str, userset_id: str)`| Removes User from Userset  |
| `check(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Checks User access  |
| `expand(user_id: str)`| Lists all granted permissions for User.  |
| `grant_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Allows user to perform `action` on (`resource_id`, `resource_type`) |
| `revoke_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Revokes `action` on (`resource_id`, `resource_type`) for User.|
| `grant_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Grants Role to User  |
| `revoke_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Revokes Role from User  |


### [Usersets](https://docs.govista.io/Concepts/Terminology#userset)
`client.usersets`

| method | description |
|--------|-------------|
| `create(user_id: str, org_id: str)`| Creates Userset  |
| `grant_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Allows User to perform `action` on (`resource_id`, `resource_type`)|
| `revoke_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Revokes `action` on (`resource_id`, `resource_type`) for Userset      |
| `grant_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Grants Role to Userset  |
| `revoke_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Revokes Role from Userset  |


### Grants
`client.grants`

| method | description |
|--------|-------------|
| `list(user_id: str \| None, action: str \| None, resource_id: str \| None, resource_type: str \| None, attribute: str \| None, org_id: str \| None, start_time: str \| None, end_time: str \| None)`| List & filter grants by arguments, `start_time` is inclusive (>=) and `end_time` is exclusive (<)  |
| `list_unflattened(userset_id: str \| None, relation: str \| None, relation_type: str \| None, resource_id: str \| None, resource_type: str \| None, attribute: str \| None, org_id: str \| None)`| Filters User or Userset grants  |
