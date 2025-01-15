/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;
    let maxAlt = 0;
    for(let i = 0; i < gain.length; i++) {
        alt += gain[i]
        maxAlt = Math.max(maxAlt, alt);
    }
    return maxAlt;
};

module.exports = largestAltitude;