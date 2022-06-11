/* 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

var twoSum = function (nums, target) {
    let count = 0;
    // for(var i = count + 1; i < nums.length; i++) {
    //     console.log(nums[count],"+",nums[i],"=",nums[count] + nums[i]);
    //     console.log ([count, i]);

    //     if(nums[count] + nums[i] === target) {
    //         console.log("We did it!")
    //         return [count, i];
    //     }

    //     if(i === nums.length - 1) {
    //         count++;
    //         i = count + 1;
    //         // console.log(count, i);
    //     }
    // }
    let firstIndex = 0;
    let secondIndex = 1;
    while (secondIndex < nums.length) {
        console.log(nums[firstIndex], "+", nums[secondIndex], "=", nums[firstIndex] + nums[secondIndex])

        if (nums[firstIndex] + nums[secondIndex] === target) {
            console.log("We did it!");
            return [firstIndex, secondIndex];
        }


        // firstIndex = count;
        secondIndex = secondIndex + 1;

        if (secondIndex === nums.length) {
            firstIndex = firstIndex + 1;
            secondIndex = firstIndex + 1;
        }
    }

};

let nums1 = [1, 2, 3, 4];
let nums2 = [3, 1, 2, 4];
let target = 5;

twoSum(nums1, target);