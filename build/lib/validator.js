"use strict";

/**
 * Checks if string is empty or undefined
 *
 * @static
 * @param {string} inputString
 * @returns {boolean}
 * @memberof Common
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isEmpty(inputString) {
  return !inputString || 0 === inputString.length;
}

/**
 * Validates email address
 * 
 * @static
 * @param {any} emailAddress 
 * @returns {boolean} success
 * @memberof Common
 */
function isEmailAddress(emailAddress) {
  var re = /\S+@\S+/;
  return re.test(emailAddress);
}

exports.isEmpty = isEmpty;
exports.isEmailAddress = isEmailAddress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJpbnB1dFN0cmluZyIsImxlbmd0aCIsImlzRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicmUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBUUEsU0FBU0EsT0FBVCxDQUFpQkMsV0FBakIsRUFBOEI7QUFDMUIsU0FBTyxDQUFDQSxXQUFELElBQWdCLE1BQU1BLFlBQVlDLE1BQXpDO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBU0MsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7QUFDbEMsTUFBSUMsS0FBSyxTQUFUO0FBQ0EsU0FBT0EsR0FBR0MsSUFBSCxDQUFRRixZQUFSLENBQVA7QUFDSDs7UUFFT0osTyxHQUFBQSxPO1FBQVNHLGMsR0FBQUEsYyIsImZpbGUiOiJ2YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgc3RyaW5nIGlzIGVtcHR5IG9yIHVuZGVmaW5lZFxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFN0cmluZ1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICogQG1lbWJlcm9mIENvbW1vblxyXG4gKi9cclxuZnVuY3Rpb24gaXNFbXB0eShpbnB1dFN0cmluZykge1xyXG4gICAgcmV0dXJuICFpbnB1dFN0cmluZyB8fCAwID09PSBpbnB1dFN0cmluZy5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgZW1haWwgYWRkcmVzc1xyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKiBAcGFyYW0ge2FueX0gZW1haWxBZGRyZXNzIFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gc3VjY2Vzc1xyXG4gKiBAbWVtYmVyb2YgQ29tbW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtYWlsQWRkcmVzcyhlbWFpbEFkZHJlc3MpIHtcclxuICAgIHZhciByZSA9IC9cXFMrQFxcUysvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWxBZGRyZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IHtpc0VtcHR5LCBpc0VtYWlsQWRkcmVzc307Il19