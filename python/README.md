
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


## API
| method | description |
|--------|-------------|
| `client.admin.create_branch(branch : String)`       | Creates new Branch         |
| `client.resource_types.list()`       | Lists all Resource Types         |
| `client.resource_types.create(name : String, actions : Array(String)`)`       |
| `client.roles.list()`       | Lists all Roles         |
| `client.roles.create(role_id : String, actionsByResourceType : Array(Dict(Resource Type, Action), parent_roles : Array(String))`      | Creates a new Role        |
| `client.roles.inherit(child_role_id : String, parent_role_id : String)`       | Adds role as child of parent role         |
| `client.users.create(user_id : String)`       | Creates new User         |
| `client.users.assign_to_userset(user_id : String, userset_id : String)`       | Adds user to a Userset         |
| `client.users.check(user_id : String, action : String, resource_type : String, resource_id : String)`       | Checks User access         |
| `client.users.grant_action(user_id : String, action : String, resource_type : String, resource_id : String)`       | Allows user to perform `action` on (`resource_id`, `resource_type`)        |
| `client.users.grant_role(user_id : String, role_id : String, resource_type : String, resource_id : String)`       | Grants Role to User         |
| `client.usersets.create(user_id : String)`       | Creates Userset         |
| `client.usersets.inherit(child_role_id : String, parent_role_id : String)`       | Adds userset as child of parent Userset         |
| `client.usersets.grant_action(user_id : String, action : String, resource_type : String, resource_id : String)`       | Allows user to perform `action` on (`resource_id`, `resource_type`)       |
| `client.usersets.grant_role(user_id : String, role_id : String, resource_type : String, resource_id : String)`       | Grants Role to User         |

