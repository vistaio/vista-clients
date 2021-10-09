'use strict';

var Axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Axios__default = /*#__PURE__*/_interopDefaultLegacy(Axios);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var config = {
  VistaAPIHostname: 'https://api.govista.io'
};

var HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
};

var ApiResource = function ApiResource(axiosClient, hostname) {
  var _this = this;

  _classCallCheck(this, ApiResource);

  _defineProperty(this, "dispatch", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, method, data) {
      var config, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                url: new URL(url, _this.hostname).href,
                method: method
              };

              if (data) {
                if (method === HTTP_METHODS.GET) {
                  config.url = "".concat(config.url, "?").concat(new URLSearchParams(data));
                } else if (method === HTTP_METHODS.POST) {
                  config.data = data;
                }
              }

              _context.next = 4;
              return _this.axiosClient.request(config)["catch"](function (error) {
                if (error.response) {
                  throw Error(error.response.data);
                } else if (error.request) {
                  throw Error('There was a problem with the request');
                } else {
                  throw error;
                }
              });

            case 4:
              resp = _context.sent;

              if (resp) {
                _context.next = 7;
                break;
              }

              throw Error('There was a problem with the request');

            case 7:
              if (!(resp.status === 204)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", true);

            case 9:
              return _context.abrupt("return", resp.data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  this.axiosClient = axiosClient;
  this.hostname = hostname;
};

var Admin = /*#__PURE__*/function (_ApiResource) {
  _inherits(Admin, _ApiResource);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "createBranch", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(branch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/branches', HTTP_METHODS.POST, {
                  branch: branch
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Admin;
}(ApiResource);

var ResourceTypes = /*#__PURE__*/function (_ApiResource) {
  _inherits(ResourceTypes, _ApiResource);

  var _super = _createSuper(ResourceTypes);

  function ResourceTypes() {
    var _this;

    _classCallCheck(this, ResourceTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "list", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(branch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
                  branch: branch
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "create", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, relationships, attributes, actions, branch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
                  name: name,
                  relationships: relationships,
                  attributes: attributes,
                  actions: actions,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  return ResourceTypes;
}(ApiResource);

var Roles = /*#__PURE__*/function (_ApiResource) {
  _inherits(Roles, _ApiResource);

  var _super = _createSuper(Roles);

  function Roles() {
    var _this;

    _classCallCheck(this, Roles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "list", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(branch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/roles', HTTP_METHODS.GET, {
                  branch: branch
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "create", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(role_id, grants, parent_roles, branch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/roles', HTTP_METHODS.POST, {
                  id: role_id,
                  actions_by_resource_type: grants,
                  parent_roles: parent_roles,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "listUsersetsForRole", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(role_id, branch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.dispatch("/v1/roles/".concat(role_id, "/usersets"), HTTP_METHODS.GET, {
                  branch: branch
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "inherit", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(child_role_id, parent_role_id, branch) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this.dispatch("/v1/roles/inherit", HTTP_METHODS.POST, {
                  child_role_id: child_role_id,
                  parent_role_id: parent_role_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Roles;
}(ApiResource);

var Users = /*#__PURE__*/function (_ApiResource) {
  _inherits(Users, _ApiResource);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "create", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user_id, branch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/users', HTTP_METHODS.POST, {
                  id: user_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "assignToUserset", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user_id, userset_id, branch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
                  id: user_id,
                  userset_id: userset_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "check", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user_id, action, resource_type, resource_id, branch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.dispatch('/v1/users/check', HTTP_METHODS.GET, {
                  id: user_id,
                  action: action,
                  resource_type: resource_type,
                  resource_id: resource_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8, _x9, _x10) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "grantAction", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user_id, action, resource_type, resource_id, branch) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this.dispatch('/v1/users/grantAction', HTTP_METHODS.POST, {
                  id: user_id,
                  action: action,
                  resource_type: resource_type,
                  resource_id: resource_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x11, _x12, _x13, _x14, _x15) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "grantRole", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(user_id, role_id, resource_type, resource_id, branch) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _this.dispatch('/v1/users/grantRole', HTTP_METHODS.POST, {
                  id: user_id,
                  role_id: role_id,
                  resource_type: resource_type,
                  resource_id: resource_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x16, _x17, _x18, _x19, _x20) {
        return _ref5.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Users;
}(ApiResource);

var Usersets = /*#__PURE__*/function (_ApiResource) {
  _inherits(Usersets, _ApiResource);

  var _super = _createSuper(Usersets);

  function Usersets() {
    var _this;

    _classCallCheck(this, Usersets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "create", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userset_id, parent_usersets, branch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
                  id: userset_id,
                  parent_usersets: parent_usersets,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "inherit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(child_userset_id, parent_userset_id, branch) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch("/v1/usersets/inherit", HTTP_METHODS.POST, {
                  child_userset_id: child_userset_id,
                  parent_userset_id: parent_userset_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "listForRole", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(role_id, branch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.dispatch("/v1/roles/".concat(role_id, "/usersets"), HTTP_METHODS.GET, {
                  branch: branch
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "grantAction", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(userset_id, action, resource_type, resource_id, branch) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this.dispatch('/v1/usersets/grantAction', HTTP_METHODS.POST, {
                  id: userset_id,
                  action: action,
                  resource_type: resource_type,
                  resource_id: resource_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11, _x12, _x13) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "grantRole", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userset_id, role_id, resource_type, resource_id, branch) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _this.dispatch('/v1/usersets/grantRole', HTTP_METHODS.POST, {
                  id: userset_id,
                  role_id: role_id,
                  resource_type: resource_type,
                  resource_id: resource_id,
                  branch: branch
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x14, _x15, _x16, _x17, _x18) {
        return _ref5.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Usersets;
}(ApiResource);

var VistaClient = function VistaClient(secret, hostname) {
  _classCallCheck(this, VistaClient);

  this.secret = secret;
  this.axios = Axios__default["default"].create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(secret)
    }
  });

  if (!hostname) {
    hostname = config.VistaAPIHostname;
  }

  this.admin = new Admin(this.axios, hostname);
  this.resources = new ResourceTypes(this.axios, hostname);
  this.roles = new Roles(this.axios, hostname);
  this.users = new Users(this.axios, hostname);
  this.usersets = new Usersets(this.axios, hostname);
};

module.exports = VistaClient;
