/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = flowerbed[i - 1] || 0;
            const next = flowerbed[i + 1] || 0;
            
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                n -= 1;
                if (n === 0) return true;
            }
        }
    }
    return false;
};

module.exports = canPlaceFlowers;