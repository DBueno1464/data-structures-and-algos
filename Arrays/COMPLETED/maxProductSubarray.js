/* 

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

*/

var maxProduct = function (nums) {
    let max_so_far = -Number.MAX_VALUE;
    let max_ending_here = 1;

    for (let i = 0; i < nums.length; i++) {

        max_ending_here = max_ending_here * nums[i];
        
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
        
        if (max_ending_here <= 0) {
            max_ending_here = 1;
        }

        
    }
    console.log(max_so_far);
};

let arr1 = [2, 3, -2, 4]    // answer is 6; [2,3] has the largest product 6.
let arr2 = [-2, 0, -1]      // answer is 0; The result cannot be 2, because [-2,-1] is not a subarray.
let arr3 = [-3, -1, -1]     // answer 3; [-3, -1]
let arr4 = [3, -1, 4]       // answer 4; [4]

// maxProduct(arr1);
// maxProduct(arr2);
maxProduct(arr3);
// maxProduct(arr4);