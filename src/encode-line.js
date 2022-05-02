const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const strArr = str.match(/(.)\1*/g);
    return strArr ? strArr.map((i) => {
        return i.length === 1 ? `${i}` : `${i.length}${i[0]}`
    }).join('') : '';
}

module.exports = {
    encodeLine
}