const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let myArray = Array.from(arr)
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === '--discard-next') {
            delete myArray[i]
            if (myArray[i + 1]) {
                delete myArray[i + 1]
            }
        }

        if (myArray[i] === '--discard-prev') {
            delete myArray[i]
            if (myArray[i - 1]) {
                delete myArray[i - 1]
            }
        }

        if (myArray[i] === '--double-next') {
            if (myArray[i + 1]) {
                myArray[i] = myArray[i + 1]
            } else {
                delete myArray[i]
            }
        }

        if (myArray[i] === '--double-prev') {
            if (myArray[i - 1]) {
                myArray[i] = myArray[i - 1]
            } else {
                delete myArray[i]
            }
        }
    }
    return myArray.filter(Boolean);
}

module.exports = {
    transform
};