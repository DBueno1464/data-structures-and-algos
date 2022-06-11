/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous(same sequence) part of an array.

SOLUTION: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

*/

var maxSubArray = function (nums) {

    // let count = 0;
    // let sum, maxSum = -Number.MAX_VALUE;
    // for (let i = 0; i < nums.length; i++) {
    //     sum = 0;
    //     count++;
    //     for (let j = count - 1; j < nums.length; j++) {
    //         sum = sum + nums[j];
    //         if (maxSum < sum) {
    //             maxSum = sum;

    //         }
    //     }

    // }

    // console.log("maxSum", Math.floor(maxSum));

    let max_so_far = -Number.MAX_VALUE;
    let max_ending_here = 0;

    for (let i = 0; i < nums.length; i++) {

        max_ending_here = max_ending_here + nums[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
        }
    }
    console.log(max_so_far);
    return max_so_far;

};


let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // answer is 6;  [4,-1,2,1]
let arr2 = [1];                             // answer is 1;  [1]
let arr3 = [5, 4, -1, 7, 8]                 // amswer is 23; [5,4,-1,7,8]
let arr4 = [-1];                            // answer is -1; [-1]
let arr5 = [-3, -2, -2, -3]                 // answer is -2; [-2]


maxSubArray(arr1);
maxSubArray(arr2);
maxSubArray(arr3);
maxSubArray(arr4);
maxSubArray(arr5);