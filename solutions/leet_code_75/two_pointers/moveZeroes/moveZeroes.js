/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var start = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) nums[start++] = nums[i];
    }
    nums.fill(0, start);
};

module.exports = moveZeroes;
