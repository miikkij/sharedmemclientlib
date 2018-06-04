"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sharedmemApi = require("../modules/sharedmem-api");

var _sharedmemApi2 = _interopRequireDefault(_sharedmemApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SharedMemService = function () {
  function SharedMemService() {
    _classCallCheck(this, SharedMemService);
  }

  /**
   * SharedMemService initializer with base url and token
   * @param {string} baseURL
   */


  _createClass(SharedMemService, [{
    key: "initialize",
    value: function initialize(baseURL, token) {
      this._sharedMemToken = token;
      this._sharedMemAPI = new _sharedmemApi2.default();
      this._sharedMemAPI.initService(baseURL, token);
      this._cbMapOnNewSharedID = {};
      this._cbMapOnFailedNewSharedID = {};
    }
  }, {
    key: "createNewToken",
    value: async function createNewToken(sharedID) {
      try {
        await this._sharedMemAPI.createNewToken(sharedID);
      } catch (e) {
        _failedNewSharedId(1001, "FAILED_TO_CREATE_NEW_SHARED_ID", e);
      }
    }
  }, {
    key: "_failedNewSharedId",
    value: function _failedNewSharedId(errorCode, errorString, exception) {
      for (var key in this._cbMapOnFailedNewSharedID) {
        this._cbMapOnFailedNewSharedID[key](errorCode, errorString, reason);
      }
    }
  }, {
    key: "setData",
    value: async function setData(emailAddress, password) {
      return await this._sharedMemAPI.login(emailAddress, password);
    }
  }, {
    key: "loginCB",
    value: async function loginCB(emailaddress, password, callback) {
      callback((await this._sharedMemAPI.login(emailAddress, password)));
    }
  }, {
    key: "OnNewSharedID",
    set: function set(sharedID) {}
  }, {
    key: "OnFailedNewSharedID",
    set: function set(callback) {
      this._cbMapOnFailedNewSharedID[callback] = callback;
    }
  }]);

  return SharedMemService;
}();

exports.default = new ViestiService();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2hhcmVkbWVtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJTaGFyZWRNZW1TZXJ2aWNlIiwiYmFzZVVSTCIsInRva2VuIiwiX3NoYXJlZE1lbVRva2VuIiwiX3NoYXJlZE1lbUFQSSIsIlNoYXJlZE1lbUFQSSIsImluaXRTZXJ2aWNlIiwiX2NiTWFwT25OZXdTaGFyZWRJRCIsIl9jYk1hcE9uRmFpbGVkTmV3U2hhcmVkSUQiLCJzaGFyZWRJRCIsImNyZWF0ZU5ld1Rva2VuIiwiZSIsIl9mYWlsZWROZXdTaGFyZWRJZCIsImVycm9yQ29kZSIsImVycm9yU3RyaW5nIiwiZXhjZXB0aW9uIiwia2V5IiwicmVhc29uIiwiZW1haWxBZGRyZXNzIiwicGFzc3dvcmQiLCJsb2dpbiIsImVtYWlsYWRkcmVzcyIsImNhbGxiYWNrIiwiVmllc3RpU2VydmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRU1BLGdCO0FBQ0osOEJBQWM7QUFBQTtBQUFFOztBQUVoQjs7Ozs7Ozs7K0JBSVdDLE8sRUFBU0MsSyxFQUFPO0FBQ3pCLFdBQUtDLGVBQUwsR0FBdUJELEtBQXZCO0FBQ0EsV0FBS0UsYUFBTCxHQUFxQixJQUFJQyxzQkFBSixFQUFyQjtBQUNBLFdBQUtELGFBQUwsQ0FBbUJFLFdBQW5CLENBQStCTCxPQUEvQixFQUF3Q0MsS0FBeEM7QUFDQSxXQUFLSyxtQkFBTCxHQUEyQixFQUEzQjtBQUNBLFdBQUtDLHlCQUFMLEdBQWlDLEVBQWpDO0FBQ0Q7Ozt5Q0FFb0JDLFEsRUFBVTtBQUM3QixVQUFJO0FBQ0YsY0FBTSxLQUFLTCxhQUFMLENBQW1CTSxjQUFuQixDQUFrQ0QsUUFBbEMsQ0FBTjtBQUNELE9BRkQsQ0FHQSxPQUFPRSxDQUFQLEVBQVU7QUFDUkMsMkJBQW1CLElBQW5CLEVBQXlCLGdDQUF6QixFQUEyREQsQ0FBM0Q7QUFDRDtBQUNGOzs7dUNBT2tCRSxTLEVBQVdDLFcsRUFBYUMsUyxFQUFXO0FBQ3BELFdBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLUix5QkFBckIsRUFBZ0Q7QUFDOUMsYUFBS0EseUJBQUwsQ0FBK0JRLEdBQS9CLEVBQW9DSCxTQUFwQyxFQUErQ0MsV0FBL0MsRUFBNERHLE1BQTVEO0FBQ0Q7QUFDRjs7O2tDQU1hQyxZLEVBQWNDLFEsRUFBVTtBQUNwQyxhQUFPLE1BQU0sS0FBS2YsYUFBTCxDQUFtQmdCLEtBQW5CLENBQXlCRixZQUF6QixFQUF1Q0MsUUFBdkMsQ0FBYjtBQUNEOzs7a0NBRWFFLFksRUFBY0YsUSxFQUFVRyxRLEVBQVU7QUFDOUNBLGdCQUFTLE1BQU0sS0FBS2xCLGFBQUwsQ0FBbUJnQixLQUFuQixDQUF5QkYsWUFBekIsRUFBdUNDLFFBQXZDLENBQWY7QUFDRDs7O3NCQXJCaUJWLFEsRUFDbEIsQ0FFQzs7O3NCQVF1QmEsUSxFQUFVO0FBQzlCLFdBQUtkLHlCQUFMLENBQStCYyxRQUEvQixJQUEyQ0EsUUFBM0M7QUFDSDs7Ozs7O2tCQVVZLElBQUlDLGFBQUosRSIsImZpbGUiOiJzaGFyZWRtZW1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgU2hhcmVkTWVtQVBJIGZyb20gXCIuLi9tb2R1bGVzL3NoYXJlZG1lbS1hcGlcIjtcclxuXHJcbmNsYXNzIFNoYXJlZE1lbVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2hhcmVkTWVtU2VydmljZSBpbml0aWFsaXplciB3aXRoIGJhc2UgdXJsIGFuZCB0b2tlblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZShiYXNlVVJMLCB0b2tlbikge1xyXG4gICAgdGhpcy5fc2hhcmVkTWVtVG9rZW4gPSB0b2tlbjtcclxuICAgIHRoaXMuX3NoYXJlZE1lbUFQSSA9IG5ldyBTaGFyZWRNZW1BUEkoKTtcclxuICAgIHRoaXMuX3NoYXJlZE1lbUFQSS5pbml0U2VydmljZShiYXNlVVJMLCB0b2tlbik7XHJcbiAgICB0aGlzLl9jYk1hcE9uTmV3U2hhcmVkSUQgPSB7fTtcclxuICAgIHRoaXMuX2NiTWFwT25GYWlsZWROZXdTaGFyZWRJRCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlTmV3VG9rZW4oc2hhcmVkSUQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuX3NoYXJlZE1lbUFQSS5jcmVhdGVOZXdUb2tlbihzaGFyZWRJRCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBfZmFpbGVkTmV3U2hhcmVkSWQoMTAwMSwgXCJGQUlMRURfVE9fQ1JFQVRFX05FV19TSEFSRURfSURcIiwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgT25OZXdTaGFyZWRJRChzaGFyZWRJRClcclxuICB7XHJcblxyXG4gIH1cclxuXHJcbiAgX2ZhaWxlZE5ld1NoYXJlZElkKGVycm9yQ29kZSwgZXJyb3JTdHJpbmcsIGV4Y2VwdGlvbikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2NiTWFwT25GYWlsZWROZXdTaGFyZWRJRCkge1xyXG4gICAgICB0aGlzLl9jYk1hcE9uRmFpbGVkTmV3U2hhcmVkSURba2V5XShlcnJvckNvZGUsIGVycm9yU3RyaW5nLCByZWFzb24pO1xyXG4gICAgfVxyXG4gIH0gXHJcblxyXG4gIHNldCBPbkZhaWxlZE5ld1NoYXJlZElEKGNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuX2NiTWFwT25GYWlsZWROZXdTaGFyZWRJRFtjYWxsYmFja10gPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldERhdGEoZW1haWxBZGRyZXNzLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NoYXJlZE1lbUFQSS5sb2dpbihlbWFpbEFkZHJlc3MsIHBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvZ2luQ0IoZW1haWxhZGRyZXNzLCBwYXNzd29yZCwgY2FsbGJhY2spIHtcclxuICAgIGNhbGxiYWNrKGF3YWl0IHRoaXMuX3NoYXJlZE1lbUFQSS5sb2dpbihlbWFpbEFkZHJlc3MsIHBhc3N3b3JkKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWaWVzdGlTZXJ2aWNlKCk7Il19