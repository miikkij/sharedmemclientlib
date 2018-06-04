"use strict";

/**
 * Checks if string is empty or undefined
 *
 * @static
 * @param {string} inputString
 * @returns {boolean}
 * @memberof Common
 */
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

export {isEmpty, isEmailAddress};