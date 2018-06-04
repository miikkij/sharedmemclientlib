'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require('../lib/validator');

var Validator = _interopRequireWildcard(_validator);

var _config = require('../_config.js');

var _config2 = _interopRequireDefault(_config);

var _apisauce = require('apisauce');

var _browserOrNode = require('browser-or-node');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var SharedMemAPI = function () {
  function SharedMemAPI() {
    _classCallCheck(this, SharedMemAPI);
  }

  _createClass(SharedMemAPI, [{
    key: 'initService',
    value: function initService(baseURL) {
      this._baseURL = baseURL;
      this._apisauce = (0, _apisauce.create)({
        baseURL: this._baseURL
      });
      var version = this._apisauce.get('/sharedmem/ver');
      console.log('SharedMemAPI-Backend[' + version + ']-ClientLib[' + _config2.default['VERSION'] + ']');
    }

    /**
     * Is service initialized?
     * 
     * @returns {boolean} isInitialized
     * @memberof SharedMemAPI
     */

  }, {
    key: '_isServiceInitialized',
    value: function _isServiceInitialized() {
      if (!this._apisauce) {
        throw new Error('BAD_APISAUCE_NOT_INITIALIZED', 'SharedMemAPI: class not initialized');
      }
      return true;
    }

    /**
     * Set Data to some location at Shared Memory Backend
     * 
     * @param {any} location 
     * @param {any} data 
     * @returns 
     * @memberof SharedMemAPI
     */

  }, {
    key: 'setData',
    value: async function setData(location, data) {
      this._isServiceInitialized();
      return this._apisauce.post('/sharedmem/' + location, data, {}); // TODO: later on some sort of access control token to headers automatically after authentication
    }

    /**
     * Get data from some location at Shared Memory Backend
     * 
     * @param {any} location 
     * @param {any} data 
     * @returns 
     * @memberof SharedMemAPI
     */

  }, {
    key: 'getData',
    value: async function getData(location, data) {
      this._isServiceInitialized();
      return await this._apisauce.get('/sharedmem/' + location, {}); // TODO: later on some sort of access control token to headers automatically after authentication
    }
  }, {
    key: 'createSharedID',
    value: async function createSharedID() {
      this._isServiceInitialized();
      return await this._apisauce.post('/sharedmem/id/', {}, {});
    }

    /**
     * Base URL
     * @type {string}
     */

  }, {
    key: 'baseURL',
    get: function get() {
      return this._baseURL;
    },
    set: function set(baseURLversion) {
      if (Validator.isEmpty(baseURL)) {
        throw new Error('BAD_SHAREDMEM_BASE_URL', 'Undefined or empty BaseURL for SharedMemService');
        this._baseURL = "BAD_SHAREDMEM_BASE_URL";
      } else {
        this._baseURL = baseURL;
      }
      this._baseURL = baseURL;
    }
  }]);

  return SharedMemAPI;
}();

exports.default = SharedMemAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3NoYXJlZG1lbS1hcGkuanMiXSwibmFtZXMiOlsiVmFsaWRhdG9yIiwiU2hhcmVkTWVtQVBJIiwiYmFzZVVSTCIsIl9iYXNlVVJMIiwiX2FwaXNhdWNlIiwidmVyc2lvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJFcnJvciIsImxvY2F0aW9uIiwiZGF0YSIsIl9pc1NlcnZpY2VJbml0aWFsaXplZCIsInBvc3QiLCJiYXNlVVJMdmVyc2lvbiIsImlzRW1wdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBQVlBLFM7O0FBQ1o7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7QUFLQTs7SUFFcUJDLFk7QUFDbkIsMEJBQWM7QUFBQTtBQUFFOzs7O2dDQUVKQyxPLEVBQVM7QUFDbkIsV0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFDQSxXQUFLRSxTQUFMLEdBQWlCLHNCQUFPO0FBQ3RCRixpQkFBUyxLQUFLQztBQURRLE9BQVAsQ0FBakI7QUFHQSxVQUFNRSxVQUFVLEtBQUtELFNBQUwsQ0FBZUUsR0FBZixDQUFtQixnQkFBbkIsQ0FBaEI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLDBCQUEwQkgsT0FBMUIsR0FBb0MsY0FBcEMsR0FBcURJLGlCQUFPLFNBQVAsQ0FBckQsR0FBeUUsR0FBckY7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRDQU13QjtBQUN0QixVQUFJLENBQUMsS0FBS0wsU0FBVixFQUFxQjtBQUNuQixjQUFNLElBQUlNLEtBQUosQ0FBVSw4QkFBVixFQUEwQyxxQ0FBMUMsQ0FBTjtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjQyxRLEVBQVVDLEksRUFBTTtBQUM1QixXQUFLQyxxQkFBTDtBQUNBLGFBQU8sS0FBS1QsU0FBTCxDQUFlVSxJQUFmLENBQW9CLGdCQUFnQkgsUUFBcEMsRUFBOENDLElBQTlDLEVBQW9ELEVBQXBELENBQVAsQ0FGNEIsQ0FFb0M7QUFDakU7O0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjRCxRLEVBQVVDLEksRUFBTTtBQUM1QixXQUFLQyxxQkFBTDtBQUNBLGFBQU8sTUFBTSxLQUFLVCxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsZ0JBQWdCSyxRQUFuQyxFQUE2QyxFQUE3QyxDQUFiLENBRjRCLENBRW1DO0FBQ2hFOzs7MkNBRXNCO0FBQ3JCLFdBQUtFLHFCQUFMO0FBQ0EsYUFBTyxNQUFNLEtBQUtULFNBQUwsQ0FBZVUsSUFBZixDQUFvQixnQkFBcEIsRUFBc0MsRUFBdEMsRUFBMEMsRUFBMUMsQ0FBYjtBQUNEOztBQUVEOzs7Ozs7O3dCQUljO0FBQ1osYUFBTyxLQUFLWCxRQUFaO0FBQ0QsSztzQkFFV1ksYyxFQUFnQjtBQUMxQixVQUFJZixVQUFVZ0IsT0FBVixDQUFrQmQsT0FBbEIsQ0FBSixFQUFnQztBQUM5QixjQUFNLElBQUlRLEtBQUosQ0FBVSx3QkFBVixFQUFvQyxpREFBcEMsQ0FBTjtBQUNBLGFBQUtQLFFBQUwsR0FBZ0Isd0JBQWhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS0EsUUFBTCxHQUFnQkQsT0FBaEI7QUFDRDtBQUNELFdBQUtDLFFBQUwsR0FBZ0JELE9BQWhCO0FBQ0Q7Ozs7OztrQkF4RWtCRCxZIiwiZmlsZSI6InNoYXJlZG1lbS1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBWYWxpZGF0b3IgZnJvbSAnLi4vbGliL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vX2NvbmZpZy5qcyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlXHJcbn0gZnJvbSAnYXBpc2F1Y2UnO1xyXG5pbXBvcnQge1xyXG4gIGlzQnJvd3NlcixcclxuICBpc05vZGVcclxufSBmcm9tICdicm93c2VyLW9yLW5vZGUnO1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVkTWVtQVBJIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGluaXRTZXJ2aWNlKGJhc2VVUkwpIHtcclxuICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xyXG4gICAgdGhpcy5fYXBpc2F1Y2UgPSBjcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiB0aGlzLl9iYXNlVVJMLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy5fYXBpc2F1Y2UuZ2V0KCcvc2hhcmVkbWVtL3ZlcicpO1xyXG4gICAgY29uc29sZS5sb2coJ1NoYXJlZE1lbUFQSS1CYWNrZW5kWycgKyB2ZXJzaW9uICsgJ10tQ2xpZW50TGliWycgKyBjb25maWdbJ1ZFUlNJT04nXSArICddJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJcyBzZXJ2aWNlIGluaXRpYWxpemVkP1xyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBpc0luaXRpYWxpemVkXHJcbiAgICogQG1lbWJlcm9mIFNoYXJlZE1lbUFQSVxyXG4gICAqL1xyXG4gIF9pc1NlcnZpY2VJbml0aWFsaXplZCgpIHtcclxuICAgIGlmICghdGhpcy5fYXBpc2F1Y2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCQURfQVBJU0FVQ0VfTk9UX0lOSVRJQUxJWkVEJywgJ1NoYXJlZE1lbUFQSTogY2xhc3Mgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBEYXRhIHRvIHNvbWUgbG9jYXRpb24gYXQgU2hhcmVkIE1lbW9yeSBCYWNrZW5kXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHthbnl9IGxvY2F0aW9uIFxyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqIEBtZW1iZXJvZiBTaGFyZWRNZW1BUElcclxuICAgKi9cclxuICBhc3luYyBzZXREYXRhKGxvY2F0aW9uLCBkYXRhKSB7XHJcbiAgICB0aGlzLl9pc1NlcnZpY2VJbml0aWFsaXplZCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaXNhdWNlLnBvc3QoJy9zaGFyZWRtZW0vJyArIGxvY2F0aW9uLCBkYXRhLCB7fSk7IC8vIFRPRE86IGxhdGVyIG9uIHNvbWUgc29ydCBvZiBhY2Nlc3MgY29udHJvbCB0b2tlbiB0byBoZWFkZXJzIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgYXV0aGVudGljYXRpb25cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBkYXRhIGZyb20gc29tZSBsb2NhdGlvbiBhdCBTaGFyZWQgTWVtb3J5IEJhY2tlbmRcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge2FueX0gbG9jYXRpb24gXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICogQG1lbWJlcm9mIFNoYXJlZE1lbUFQSVxyXG4gICAqL1xyXG4gIGFzeW5jIGdldERhdGEobG9jYXRpb24sIGRhdGEpIHtcclxuICAgIHRoaXMuX2lzU2VydmljZUluaXRpYWxpemVkKCk7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fYXBpc2F1Y2UuZ2V0KCcvc2hhcmVkbWVtLycgKyBsb2NhdGlvbiwge30pOyAvLyBUT0RPOiBsYXRlciBvbiBzb21lIHNvcnQgb2YgYWNjZXNzIGNvbnRyb2wgdG9rZW4gdG8gaGVhZGVycyBhdXRvbWF0aWNhbGx5IGFmdGVyIGF1dGhlbnRpY2F0aW9uXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVTaGFyZWRJRCgpIHtcclxuICAgIHRoaXMuX2lzU2VydmljZUluaXRpYWxpemVkKCk7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fYXBpc2F1Y2UucG9zdCgnL3NoYXJlZG1lbS9pZC8nLCB7fSwge30pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmFzZSBVUkxcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGdldCBiYXNlVVJMKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VVUkw7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFzZVVSTChiYXNlVVJMdmVyc2lvbikge1xyXG4gICAgaWYgKFZhbGlkYXRvci5pc0VtcHR5KGJhc2VVUkwpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQkFEX1NIQVJFRE1FTV9CQVNFX1VSTCcsICdVbmRlZmluZWQgb3IgZW1wdHkgQmFzZVVSTCBmb3IgU2hhcmVkTWVtU2VydmljZScpO1xyXG4gICAgICB0aGlzLl9iYXNlVVJMID0gXCJCQURfU0hBUkVETUVNX0JBU0VfVVJMXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcclxuICAgIH1cclxuICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xyXG4gIH1cclxufSJdfQ==