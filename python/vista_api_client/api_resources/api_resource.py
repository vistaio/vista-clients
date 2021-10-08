
from enum import Enum
from urllib.parse import urljoin

import requests

from vista_api_client.config.config import config

class HttpMethods(Enum):
    GET = 'GET'
    POST = 'POST'
    DELETE = 'DELETE'

class ApiResource(object):
    def __init__(self, secret, environment, hostname):
        self.hostname = hostname
        self.environment = environment
        self.secret = secret

    def dispatch(self, route, method, data):
        request_kwargs = {
            'url': urljoin(self.hostname, route),
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': f"Bearer {self.secret}",
            }
        }

        if data:
            if method == HttpMethods.GET:
                request_kwargs['params'] = data
            else:
                request_kwargs['json'] = data

        # no dynamic way to change based on http method
        action = getattr(requests, str(method.value).lower(), None)
        resp = action(**request_kwargs)

        # raise exception if not success
        resp.raise_for_status()

        if resp.status_code == 204:
            return {}

        return resp.json()
