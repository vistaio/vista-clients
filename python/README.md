
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
You can use `VistaClient.ALL` in place where `resource_id` is accepted to indicate all.

## API
| method | description |
|--------|-------------|
| `client.admin.create_branch(branch : str)`| Creates new Branch  |
| `client.admin.create_read_tokens()`| Creates a set of read-only tokens meant to be used by Vista React components    |
| `client.resource_types.list()`| Lists all Resource Types  |
| `client.resource_types.upsert(name : str, actions : str[]`)`|
| `client.roles.list()`| Lists all Roles  |
| `client.roles.upsert(role_id : str, resource_type_to_attribute_to_actions : { resource_type: { attribute: actions[] }}, parent_roles: str[])`      | Creates a new Role |
| `client.roles.inherit(child_role_id: str, parent_role_id: str)`| Adds Role as child of parent role  |
| `client.users.create(user_id: str)`| Creates new User  |
| `client.users.assign_to_userset(user_id: str, userset_id: str)`| Adds User to a Userset  |
| `client.users.remove_from_userset(user_id: str, userset_id: str)`| Removes User from Userset  |
| `client.users.check(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Checks User access  |
| `client.users.expand(user_id: str)`| Lists all granted permissions for User.  |
| `client.users.grant_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Allows user to perform `action` on (`resource_id`, `resource_type`) |
| `client.users.revoke_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Revokes `action` on (`resource_id`, `resource_type`) for User.|
| `client.users.grant_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Grants Role to User  |
| `client.users.revoke_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Revokes Role from User  |
| `client.usersets.create(user_id: str)`| Creates Userset  |
| `client.usersets.inherit(child_role_id: str, parent_role_id: str)`| Adds Userset as child of parent Userset  |
| `client.usersets.grant_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Allows User to perform `action` on (`resource_id`, `resource_type`)|
| `client.usersets.revoke_action(user_id: str, action: str, resource_type: str, resource_id: str, attribute?: str)`| Revokes `action` on (`resource_id`, `resource_type`) for Userset      |
| `client.usersets.grant_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Grants Role to Userset  |
| `client.usersets.revoke_role(user_id: str, role_id: str, resource_type: str, resource_id: str)`| Revokes Role from Userset  |

