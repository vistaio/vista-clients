
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
    client = VistaClient('z9Not6ZyDQn8YGw3GxHZx54k0U1qA_2KIL1HktuYPc5EKEfd')
    roles = client.resources.list('test')
    print(roles)
```

After that you are good to go!

Please see the [Vista API Documentation](https://docs.govista.io/api/) for documentation of the API.
