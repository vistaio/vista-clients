"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledVistaGrant = exports.VistaGrant = exports.VistaCheck = void 0;

var _react = _interopRequireDefault(require("react"));

var _VistaContext = require("./VistaContext");

var _styles = require("@mui/styles");

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VistaCheck = /*#__PURE__*/function (_React$Component) {
  _inherits(VistaCheck, _React$Component);

  var _super = _createSuper(VistaCheck);

  function VistaCheck(props) {
    var _this;

    _classCallCheck(this, VistaCheck);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var vistaClient, grants, granted;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.state.hasChecked) {
                _context.next = 7;
                break;
              }

              vistaClient = new _this.context.vistaClient(_this.context.secret, _this.props.branch, _this.props.hostname);
              _context.next = 4;
              return vistaClient.users.check(_this.props.user_id, _this.props.action, _this.props.resource_type, _this.props.resource_id, _this.props.branch).catch(function (err) {
                if (_this.props.handleError) {
                  _this.props.handleError(err);
                } else {
                  console.log(err);
                }
              });

            case 4:
              grants = _context.sent;
              granted = grants.length > 0;

              if (granted) {
                _this.setState({
                  hasChecked: true,
                  granted: granted
                });
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      hasChecked: false,
      granted: false
    };
    return _this;
  }

  _createClass(VistaCheck, [{
    key: "renderedComponent",
    value: function renderedComponent() {
      if (this.state.hasChecked && this.state.granted) {
        return this.props.children;
      } else {
        return this.props.denyComponent ? this.props.denyComponent : null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderedComponent());
    }
  }]);

  return VistaCheck;
}(_react.default.Component);

exports.VistaCheck = VistaCheck;

_defineProperty(VistaCheck, "contextType", _VistaContext.VistaContext);

var styles = {
  container: {
    height: '500px',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
    padding: '50px',
    marginBottom: '50px'
  },
  title: {
    marginTop: '0px'
  },
  newGrantRow: {
    display: 'flex',
    marginBottom: '20px'
  },
  userSelect: {
    flexGrow: '1',
    marginRight: '10px'
  },
  roleSelect: {
    marginRight: '10px'
  },
  grantButton: {},
  grantRow: {
    height: '75px'
  },
  grantList: {
    flexGrow: '1',
    width: '100%',
    padding: '0',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
    overflow: 'scroll',
    margin: '0'
  },
  grantRoleSelect: {}
};

function UserRoleGrantSelect(props) {
  var label = props.label,
      value = props.value,
      roles = props.roles,
      _onChange = props.onChange,
      className = props.className,
      style = props.style;
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    sx: {
      minWidth: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, label), /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    label: label,
    className: className,
    style: style || {}
  }, roles.map(function (role) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: role.id,
      value: role.id
    }, role.id);
  })));
}

var VistaGrant = /*#__PURE__*/function (_React$Component2) {
  _inherits(VistaGrant, _React$Component2);

  var _super2 = _createSuper(VistaGrant);

  function VistaGrant() {
    var _this2;

    _classCallCheck(this, VistaGrant);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      grants: [],
      roles: [],
      selectedUserId: '',
      selectedRoleId: ''
    });

    _defineProperty(_assertThisInitialized(_this2), "grant", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId, roleId) {
        var grantRequest, success, allGrants, grants;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.props.grantRole) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                // grant
                grantRequest = {
                  id: userId,
                  relation: roleId,
                  resource_id: _this2.props.resource_id,
                  resource_type: _this2.props.resource_type,
                  branch: _this2.props.branch
                };
                _context2.next = 5;
                return _this2.props.grantRole(grantRequest).catch(function (err) {
                  return console.log(err);
                });

              case 5:
                success = _context2.sent;

                if (!success) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return _this2.state.client.grants.listUnflattened(_this2.props.orgId);

              case 9:
                allGrants = _context2.sent;
                grants = allGrants.filter(function (g) {
                  return g.relation_type === 'ROLE';
                });

                _this2.setState({
                  grants: grants
                });

              case 12:
                return _context2.abrupt("return", success);

              case 13:
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

    return _this2;
  }

  _createClass(VistaGrant, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var client, roles, allGrants, grants;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                client = new this.context.vistaClient(this.context.secret, this.props.branch, this.props.hostname);
                _context3.next = 3;
                return client.roles.list(this.props.orgId);

              case 3:
                roles = _context3.sent;
                _context3.next = 6;
                return client.grants.listUnflattened(this.props.orgId);

              case 6:
                allGrants = _context3.sent;
                grants = allGrants.filter(function (g) {
                  return g.relation_type === 'ROLE';
                });
                this.setState({
                  client: client,
                  roles: roles,
                  grants: grants
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          styles = _this$props.styles,
          userIdMap = _this$props.userIdMap;
      var _this$state = this.state,
          selectedUserId = _this$state.selectedUserId,
          selectedRoleId = _this$state.selectedRoleId,
          roles = _this$state.roles,
          grants = _this$state.grants;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.container,
        style: styles.container
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: classes.title,
        style: styles.title
      }, "Add Teammates"), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.newGrantRow,
        style: styles.newGrantRow
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.userSelect,
        style: styles.userSelect
      }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
        sx: {
          'width': '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, "Select User"), /*#__PURE__*/_react.default.createElement(_Select.default, {
        value: selectedUserId,
        onChange: function onChange(event) {
          _this3.setState({
            selectedUserId: event.target.value
          });
        },
        label: "Select User"
      }, Object.entries(userIdMap).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            id = _ref4[0],
            name = _ref4[1];

        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: id,
          value: id
        }, name);
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.roleSelect,
        style: styles.roleSelect
      }, /*#__PURE__*/_react.default.createElement(UserRoleGrantSelect, {
        label: "Select Role",
        value: selectedRoleId,
        onChange: function onChange(rid) {
          _this3.setState({
            selectedRoleId: rid
          });
        },
        roles: roles
      })), /*#__PURE__*/_react.default.createElement(_Button.default, {
        className: classes.grantButton,
        style: styles.grantButton,
        variant: "contained",
        onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var success;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this3.grant(selectedUserId, selectedRoleId);

                case 2:
                  success = _context4.sent;

                  if (success) {
                    _this3.setState({
                      selectedUserId: '',
                      selectedRoleId: ''
                    });
                  }

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))
      }, "Grant")), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.grantList,
        style: styles.grantList
      }, /*#__PURE__*/_react.default.createElement(_List.default, null, grants.map(function (grant) {
        return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
          key: "".concat(grant.userId, "_").concat(grant.relation),
          className: classes.grantRow,
          style: styles.grantRow,
          secondaryAction: /*#__PURE__*/_react.default.createElement(UserRoleGrantSelect, {
            value: grant.relation,
            onChange: /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(rid) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _this3.grant(grant.userset_id, rid);

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x3) {
                return _ref6.apply(this, arguments);
              };
            }(),
            className: classes.grantRoleSelect,
            style: styles.grantRoleSelect,
            roles: roles
          })
        }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
          primary: grant.userset_id
        }));
      }))));
    }
  }]);

  return VistaGrant;
}(_react.default.Component);

exports.VistaGrant = VistaGrant;

_defineProperty(VistaGrant, "contextType", _VistaContext.VistaContext);

_defineProperty(VistaGrant, "defaultProps", {
  styles: {}
});

var StyledVistaGrant = (0, _styles.withStyles)(styles)(VistaGrant);
exports.StyledVistaGrant = StyledVistaGrant;