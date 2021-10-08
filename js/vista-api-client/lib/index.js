"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("./config/config.js"));

var _admin = _interopRequireDefault(require("./resources/admin.js"));

var _resourceTypes = _interopRequireDefault(require("./resources/resourceTypes.js"));

var _roles = _interopRequireDefault(require("./resources/roles.js"));

var _users = _interopRequireDefault(require("./resources/users.js"));

var _usersets = _interopRequireDefault(require("./resources/usersets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VistaClient = function VistaClient(secret, hostname) {
  _classCallCheck(this, VistaClient);

  this.secret = secret;
  this.axios = _axios["default"].create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(secret)
    }
  });

  if (!hostname) {
    hostname = _config["default"].VistaAPIHostname;
  }

  this.admin = new _admin["default"](this.axios, hostname);
  this.resources = new _resourceTypes["default"](this.axios, hostname);
  this.roles = new _roles["default"](this.axios, hostname);
  this.users = new _users["default"](this.axios, hostname);
  this.usersets = new _usersets["default"](this.axios, hostname);
};

var _default = VistaClient;
exports["default"] = _default;