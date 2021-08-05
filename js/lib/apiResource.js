"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiResource = exports.HTTP_METHODS = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
};
exports.HTTP_METHODS = HTTP_METHODS;

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
                  throw Error(error.response.data.error);
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

exports.ApiResource = ApiResource;