'use strict';

/**
 * Returns Hello, {msg}!
 * @param {msg} string
 * @return {string}
 */
module.exports = function(msg) {
    msg = msg || 'world';
    return 'Hello, ' + msg + '!';
};
