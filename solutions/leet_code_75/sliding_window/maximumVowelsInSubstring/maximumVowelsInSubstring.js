/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let res = 0, curr = 0
    let left = 0, right = 0

    for (let i = 0; i < s.length; i++) {
        
        if (isVowel(s[i])) {
            curr++
        }

        res = Math.max(res, curr)

        if (i >= k-1 && isVowel(s[i-k+1])) {
            curr--
        }
    }
    return res
};

var isVowel = function(letter){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return true;
    }
    return false;
};

module.exports = maxVowels;