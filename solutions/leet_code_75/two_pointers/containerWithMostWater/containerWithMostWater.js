/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    max = 0;
    pointer1 = 0;
    pointer2 = height.length - 1;
    product = 0;

    while(pointer1 < pointer2){
        if(height[pointer1] <= height[pointer2]){
            product = height[pointer1] * (pointer2 - pointer1);
            pointer1++;
        } else{
            product = height[pointer2] * (pointer2 - pointer1);
            pointer2--;
        }
        if (product > max){
            max = product;
        }
    }
    return max;
};

module.exports = maxArea;