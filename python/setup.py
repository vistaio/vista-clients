from setuptools import setup, find_packages

with open('README.md') as f:
  long_description = f.read()

setup(
  name = 'vista_api_client',
  packages=find_packages(),
  version = '0.1.9',
  license='MIT',
  description = 'Client for the Vista API',
  long_description_content_type='text/markdown',
  long_description = long_description,
  author = 'Sid Dange',
  author_email = 'sid@govista.io',
  url = 'https://github.com/siddhantdange/vista-clients',
  download_url = 'https://github.com/siddhantdange/vista-clients/archive/v_01.tar.gz',
  keywords=["vista", "authz", "permissions", "vista-authz", "vistaio"],
  install_requires=[            # I get to this in a second
    'certifi == 2021.5.30',
    'charset-normalizer == 2.0.4',
    'idna == 3.2',
    'requests == 2.26.0',
    'urllib3 == 1.26.6',
  ],
  classifiers=[
    'Development Status :: 5 - Production/Stable',
    'Intended Audience :: Developers',
    'Topic :: Software Development :: Build Tools',
    'License :: OSI Approved :: MIT License',
    'Programming Language :: Python :: 3',
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
  ],
)
