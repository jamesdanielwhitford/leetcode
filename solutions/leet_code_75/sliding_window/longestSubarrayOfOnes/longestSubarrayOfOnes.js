/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0; 
    let maxLength = 0;
    let nonOnes = 0;

    for (let right = 0; right < nums.length; right++){
        if (nums[right] != 1){
            nonOnes ++;
        }
        if (nonOnes > 1){
            while (nums[left] == 1){
                left++;
            }
            left ++;
            nonOnes = 1;
        }

        maxLength = Math.max(maxLength, right - left);
    }
    return maxLength;
};

module.exports = longestSubarray;