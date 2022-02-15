
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

if __name__ == '__main__':
    client = VistaClient('z9Not6ZyDQn8YGw3GxHZx54k0U1qA_2KIL1HktuYPc5EKEfd', 'branch_name')
    roles = client.resources.list('test')
    print(roles)
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.
://docs.govista.io/api/) for documentation of the API.

## All Operator
You can use `VistaClient.ALL` in place where `resource_id` or `resource_type` is accepted to indicate all.

## Usage
The following describes methods namespaced by Vista [resources](https://docs.govista.io/Concepts/Terminology).


### Admin
`client.admin`

| method | description |
|--------|-------------|
| `create_branch(branch : str)`| Creates new Branch  |
| `clone_branch(branch : str, new_branch: str)`| Clones [templates](https://docs.govista.io/Concepts/Terminology#permission-template) in `branch` to `newBranch`  |
| `create_read_tokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |


### [Resource Types](https://docs.govista.io/Concepts/Terminology#resource)
`client.resource_types`

| method | description |
|--------|-------------|
| `list()`| Lists all Resource Types  |
| `upsert(name : str, actions : str[], attributes: str[])`| Upserts a Resource Type |


### [Roles](https://docs.govista.io/Concepts/Terminology#role)
`client.roles`

| method | description |
|--------|-------------|
| `list(org_id: str)`| Lists all Roles  |
| `upsert(role_id : str, resource_type_to_attribute_to_actions : { resource_type: { attribute: actions[] }}, parent_roles: str[], org_id: str)`      | Upserts a Role |
| `inherit(child_role_id: str, parent_role_id: str, org_id: str)`| Adds Role as child of parent role  |


### [Users](https://docs.govista.io/Concepts/Terminology#user)
`client.users`

| method | description |
|--------|-------------|
| `create(user_id: str, org_id: str)`| Creates new User  |
| `list(org_id: str)`| Lists Users in `org_id`  |
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
| `list(user_id: str \| None, action: str \| None, resource_id: str \| None, resource_type: str \| None, attribute: str \| None, org_id: str \| None)`| List & filter grants by arguments  |
| `list_unflattened(org_id: str)`| Lists User or Userset grants  |
