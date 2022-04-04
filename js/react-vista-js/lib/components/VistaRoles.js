"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VistaRoles = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

var _List = _interopRequireDefault(require("@mui/material/List"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));

var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));

var _reactDataTableComponent = _interopRequireDefault(require("react-data-table-component"));

var _VistaContext = require("./VistaContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var styles = {
  container: {
    height: '500px',
    width: '1000px',
    display: 'flex',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px'
  },
  title: {
    marginTop: '0px'
  },
  rolesList: {
    height: '100%',
    width: '200px',
    overflow: 'scroll',
    borderRight: '1px solid lightgray'
  },
  rolesListRow: {
    height: '60px'
  },
  rolesListRowText: {
    fontSize: '100px'
  },
  permissionsTable: {
    height: '100%',
    flexGrow: '1'
  },
  permissionsTableRowInherited: {
    color: 'grey'
  },
  permissionsTableRow: {}
};

function PermissionsTableRow(props) {
  var row = props.row,
      classes = props.classes,
      styles = props.styles,
      text = props.text;
  return /*#__PURE__*/_react.default.createElement("p", {
    className: row.inheritedFrom ? classes.permissionsTableRowInherited : classes.permissionsTableRow,
    style: row.inheritedFrom ? styles.permissionsTableRowInherited : styles.permissionsTableRow
  }, text);
}

function PermissionsTable(props) {
  var classes = props.classes,
      styles = props.styles,
      title = props.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.permissionsTable
  }, /*#__PURE__*/_react.default.createElement(_reactDataTableComponent.default, {
    title: title,
    columns: [{
      name: 'Resource Type',
      selector: 'resourceType',
      sortable: true,
      cell: function cell(row) {
        return /*#__PURE__*/_react.default.createElement(PermissionsTableRow, {
          text: row.resourceType,
          classes: classes,
          styles: styles,
          row: row
        });
      }
    }, {
      name: 'Attribute',
      selector: 'attribute',
      sortable: true,
      right: true,
      cell: function cell(row) {
        return /*#__PURE__*/_react.default.createElement(PermissionsTableRow, {
          text: row.attribute,
          classes: classes,
          styles: styles,
          row: row
        });
      }
    }, {
      name: 'Actions',
      selector: 'actions',
      sortable: true,
      right: true,
      cell: function cell(row) {
        return /*#__PURE__*/_react.default.createElement(PermissionsTableRow, {
          text: row.actions.join(', '),
          classes: classes,
          styles: styles,
          row: row
        });
      }
    }, {
      name: 'Inherited From',
      selector: 'inheritedFrom',
      sortable: true,
      right: true,
      cell: function cell(row) {
        return /*#__PURE__*/_react.default.createElement(PermissionsTableRow, {
          text: row.inheritedRow,
          classes: classes,
          styles: styles,
          row: row
        });
      }
    }],
    data: function () {
      var rolesById = props.rolesById,
          role = props.role;

      if (!role) {
        return [];
      } // add permissions for parent roles


      var tableKeys = {};

      var parentIds = _toConsumableArray(role.parent_roles);

      var seen = new Set();
      var tablePermissions = [];

      while (parentIds.length) {
        var parentId = parentIds.pop(0);

        if (seen.has(parentId)) {
          continue;
        }

        seen.add(parentId);
        var parentRole = rolesById[parentId];

        for (var rt in parentRole.resource_types_to_attributes_to_actions) {
          for (var attribute in parentRole.resource_types_to_attributes_to_actions[rt]) {
            var actions = parentRole.resource_types_to_attributes_to_actions[rt][attribute];
            var key = "".concat(rt, "_").concat(attribute);

            if (tableKeys[key]) {
              return;
            }

            tablePermissions.push({
              id: key,
              actions: actions,
              resourceType: rt,
              attribute: attribute,
              inheritedFrom: parentRole.id
            });
            tableKeys[key] = true;
          }
        }

        parentIds.push.apply(parentIds, _toConsumableArray(parentRole.parent_roles));
      } // added grants


      for (var resourceType in role.resource_types_to_attributes_to_actions) {
        for (var _attribute in role.resource_types_to_attributes_to_actions[resourceType]) {
          var _key = "".concat(resourceType, "_").concat(_attribute);

          var _actions = role.resource_types_to_attributes_to_actions[resourceType][_attribute];

          if (!tableKeys[_key]) {
            tablePermissions.push({
              id: _key,
              actions: _actions,
              attribute: _attribute,
              resourceType: resourceType,
              inheritedFrom: ''
            });
            tableKeys[_key] = true;
          }
        }
      }

      return tablePermissions;
    }()
  }));
}

var _VistaRoles = /*#__PURE__*/function (_React$Component) {
  _inherits(_VistaRoles, _React$Component);

  var _super = _createSuper(_VistaRoles);

  function _VistaRoles() {
    var _this;

    _classCallCheck(this, _VistaRoles);

    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rolesById: {},
      selectedRoleId: ''
    });

    return _this;
  }

  _createClass(_VistaRoles, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var client, roles, rolesById, selectedRoleId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = new this.context.vistaClient(this.context.secret, this.props.branch, this.props.hostname);
                _context.next = 3;
                return client.roles.list(this.props.orgId);

              case 3:
                roles = _context.sent;
                rolesById = {};
                roles.forEach(function (role) {
                  rolesById[role.id] = role;
                });
                selectedRoleId = roles.length ? roles[0].id : '';
                this.setState({
                  client: client,
                  rolesById: rolesById,
                  selectedRoleId: selectedRoleId
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          styles = _this$props.styles;
      var _this$state = this.state,
          rolesById = _this$state.rolesById,
          selectedRoleId = _this$state.selectedRoleId;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.container,
        style: styles.container
      }, /*#__PURE__*/_react.default.createElement(_List.default, {
        className: classes.rolesList,
        style: styles.rolesList,
        disablePadding: true
      }, Object.values(rolesById).map(function (role) {
        return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
          key: role.id,
          disablePadding: true,
          className: classes.roleListRow,
          style: styles.roleListRow
        }, /*#__PURE__*/_react.default.createElement(_ListItemButton.default, {
          className: classes.rolesListRow,
          style: styles.rolesListRow,
          selected: selectedRoleId === role.id,
          disableRipple: true,
          onClick: function onClick() {
            return _this2.setState({
              selectedRoleId: role.id
            });
          }
        }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
          primary: role.id
        })));
      })), /*#__PURE__*/_react.default.createElement(PermissionsTable, {
        title: "".concat(selectedRoleId, " Permissions"),
        rolesById: rolesById,
        role: rolesById[selectedRoleId],
        classes: classes,
        styles: styles
      }));
    }
  }]);

  return _VistaRoles;
}(_react.default.Component);

_defineProperty(_VistaRoles, "contextType", _VistaContext.VistaContext);

_defineProperty(_VistaRoles, "defaultProps", {
  styles: {}
});

var VistaRoles = (0, _styles.withStyles)(styles)(_VistaRoles);
exports.VistaRoles = VistaRoles;