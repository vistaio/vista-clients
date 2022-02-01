'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Axios = require('axios');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var _regeneratorRuntime = require('@babel/runtime/regenerator');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var Axios__default = /*#__PURE__*/_interopDefaultLegacy(Axios);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var config = {
  VistaAPIHostname: 'https://api.govista.io'
};

var HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
};

var ApiResource = function ApiResource(axiosClient, branch, hostname) {
  var _this = this;

  _classCallCheck__default["default"](this, ApiResource);

  _defineProperty__default["default"](this, "dispatch", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(url, method, data) {
      var config, resp;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
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
              return _context.abrupt("return", resp.data.data);

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
  this.branch = branch;
  this.hostname = hostname;
};

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Admin = /*#__PURE__*/function (_ApiResource) {
  _inherits__default["default"](Admin, _ApiResource);

  var _super = _createSuper$4(Admin);

  function Admin() {
    var _this;

    _classCallCheck__default["default"](this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "createBranch", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(branch) {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/companies/branches', HTTP_METHODS.POST, {
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

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "cloneBranch", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(branch, newBranch) {
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/companies/branches', HTTP_METHODS.POST, {
                  branch: branch,
                  new_branch: newBranch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "createReadTokens", /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _this.dispatch('/v1/auth/readTokens', HTTP_METHODS.GET));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    return _this;
  }

  return Admin;
}(ApiResource);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ResourceTypes = /*#__PURE__*/function (_ApiResource) {
  _inherits__default["default"](ResourceTypes, _ApiResource);

  var _super = _createSuper$3(ResourceTypes);

  function ResourceTypes() {
    var _this;

    _classCallCheck__default["default"](this, ResourceTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "list", /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
                branch: _this.branch
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "upsert", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(name, actions) {
        var attributes,
            _args2 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                attributes = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
                return _context2.abrupt("return", _this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
                  name: name,
                  actions: actions,
                  attributes: attributes,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  return ResourceTypes;
}(ApiResource);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Roles = /*#__PURE__*/function (_ApiResource) {
  _inherits__default["default"](Roles, _ApiResource);

  var _super = _createSuper$2(Roles);

  function Roles() {
    var _this;

    _classCallCheck__default["default"](this, Roles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "list", /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this.dispatch('/v1/roles', HTTP_METHODS.GET, {
                branch: _this.branch
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "upsert", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(roleId, resourceTypeToAttributeToActions, parentRoles) {
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/roles', HTTP_METHODS.POST, {
                  id: roleId,
                  resource_type_to_attribute_to_actions: resourceTypeToAttributeToActions,
                  parent_roles: parentRoles,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "inherit", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(childRoleId, parentRoleId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.dispatch("/v1/roles/inherit", HTTP_METHODS.POST, {
                  child_role_id: childRoleId,
                  parent_role_id: parentRoleId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Roles;
}(ApiResource);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Users = /*#__PURE__*/function (_ApiResource) {
  _inherits__default["default"](Users, _ApiResource);

  var _super = _createSuper$1(Users);

  function Users() {
    var _this;

    _classCallCheck__default["default"](this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "create", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(userId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/users', HTTP_METHODS.POST, {
                  id: userId,
                  branch: _this.branch
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

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "assignToUserset", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(userId, usersetId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
                  id: userId,
                  userset_id: usersetId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "removeFromUserset", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(userId, usersetId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.dispatch('/v1/users/removeFromUserset', HTTP_METHODS.POST, {
                  id: userId,
                  userset_id: usersetId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "check", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(userId, action, resourceType, resourceId) {
        var attribute,
            _args4 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                attribute = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : '';
                return _context4.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.GET, {
                  id: userId,
                  action: action,
                  resource_type: resourceType,
                  resource_id: resourceId,
                  attribute: attribute,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "expand", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5(userId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.GET, {
                  id: userId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x10) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "grantAction", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee6(userId, action, resourceType, resourceId) {
        var attribute,
            _args6 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                attribute = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : '';
                return _context6.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.POST, {
                  id: userId,
                  subject_type: 'USER',
                  relation: action,
                  relation_type: 'ACTION',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  attribute: attribute,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x11, _x12, _x13, _x14) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "revokeAction", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee7(userId, action, resourceType, resourceId) {
        var attribute,
            _args7 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                attribute = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : '';
                return _context7.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
                  id: userId,
                  subject_type: 'USER',
                  relation: action,
                  relation_type: 'ACTION',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  attribute: attribute,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15, _x16, _x17, _x18) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "grantRole", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee8(userId, role_id, resourceType, resourceId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.POST, {
                  id: userId,
                  subject_type: 'USER',
                  relation: role_id,
                  relation_type: 'ROLE',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x19, _x20, _x21, _x22) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "revokeRole", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee9(userId, role_id, resourceType, resourceId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
                  id: userId,
                  subject_type: 'USER',
                  relation: role_id,
                  relation_type: 'ROLE',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x23, _x24, _x25, _x26) {
        return _ref9.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Users;
}(ApiResource);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Usersets = /*#__PURE__*/function (_ApiResource) {
  _inherits__default["default"](Usersets, _ApiResource);

  var _super = _createSuper(Usersets);

  function Usersets() {
    var _this;

    _classCallCheck__default["default"](this, Usersets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "create", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(usersetId, parentUsersets) {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
                  id: usersetId,
                  parent_usersets: parentUsersets,
                  branch: _this.branch
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

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "inherit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(child_usersetId, parentUsersetId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.dispatch("/v1/usersets/inherit", HTTP_METHODS.POST, {
                  child_userset_id: child_usersetId,
                  parent_userset_id: parentUsersetId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "grantAction", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(usersetId, action, resourceType, resourceId) {
        var attribute,
            _args3 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                attribute = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : '';
                return _context3.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.POST, {
                  id: usersetId,
                  subject_type: 'USERSET',
                  relation: action,
                  relation_type: 'ACTION',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  attribute: attribute,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "revokeAction", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(usersetId, action, resourceType, resourceId) {
        var attribute,
            _args4 = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                attribute = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : '';
                return _context4.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
                  id: usersetId,
                  subject_type: 'USERSET',
                  relation: action,
                  relation_type: 'ACTION',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  attribute: attribute,
                  branch: _this.branch
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "grantRole", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5(usersetId, role_id, resourceType, resourceId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.POST, {
                  id: usersetId,
                  subject_type: 'USERSET',
                  relation: role_id,
                  relation_type: 'ROLE',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x13, _x14, _x15, _x16) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "revokeRole", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee6(usersetId, role_id, resourceType, resourceId) {
        return _regeneratorRuntime__default["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
                  id: usersetId,
                  subject_type: 'USERSET',
                  relation: role_id,
                  relation_type: 'ROLE',
                  resource_type: resourceType,
                  resource_id: resourceId,
                  branch: _this.branch
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x17, _x18, _x19, _x20) {
        return _ref6.apply(this, arguments);
      };
    }());

    return _this;
  }

  return Usersets;
}(ApiResource);

var VistaClient = function VistaClient(secret, branch, hostname) {
  _classCallCheck__default["default"](this, VistaClient);

  this.secret = secret;
  this.axios = Axios__default["default"].create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(secret)
    }
  });
  this.hostname = hostname || config.VistaAPIHostname;
  this.admin = new Admin(this.axios, branch, this.hostname);
  this.resourceTypes = new ResourceTypes(this.axios, branch, this.hostname);
  this.roles = new Roles(this.axios, branch, this.hostname);
  this.users = new Users(this.axios, branch, this.hostname);
  this.usersets = new Usersets(this.axios, branch, this.hostname);
};

_defineProperty__default["default"](VistaClient, "ALL", '*');

module.exports = VistaClient;
