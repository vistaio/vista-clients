
from enum import Enum
from urllib.parse import urljoin

import requests


class HttpMethods(Enum):
    GET = 'GET'
    POST = 'POST'
    DELETE = 'DELETE'


class ApiResource():
    def __init__(self, secret, branch, hostname):
        self.hostname = hostname
        self.branch = branch
        self.secret = secret

    def dispatch(self, route, method, data=None):
        request_kwargs = {
            'url': urljoin(self.hostname, route),
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {self.secret}',
            }
        }

        if data:
            if method == HttpMethods.GET:
                request_kwargs['params'] = data
            else:
                request_kwargs['json'] = data

        resp = requests.request(method.value, **request_kwargs)

        # raise exception if not success
        try:
            resp.raise_for_status()
        except Exception as exc:
            try:
                raise Exception(resp.json()['message']) from exc
            except ValueError:
                raise Exception(resp.text) from exc

        if resp.status_code == 204:
            return {}

        return resp.json()['data']
