const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    try {
        let isData = date.getTime()
    } catch (err) {
        throw new Error('Invalid date!')
    }
    const monthOfDate = date.getMonth();
    if (monthOfDate < 2) {
        return 'winter';
    } else if (monthOfDate < 5) {
        return 'spring';
    } else if (monthOfDate < 8) {
        return 'summer';
    } else if (monthOfDate < 11) {
        return 'autumn';
    } else {
        return 'winter';
    }
}

module.exports = {
    getSeason
};