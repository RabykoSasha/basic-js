const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let newArr = arr;
    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] === -1) continue;
        for (let j = i; j < newArr.length; j++) {
            if (newArr[j] < newArr[i] && newArr[j] !== -1) {
                const originalValue = newArr[i];

                newArr[i] = newArr[j];
                newArr[j] = originalValue;
            }
        }
    }
    return newArr;
}

module.exports = {
    sortByHeight
};