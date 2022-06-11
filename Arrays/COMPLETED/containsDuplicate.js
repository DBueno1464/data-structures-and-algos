/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

var containsDuplicate = function (nums) {
    let array = [];
    for (var i = 0; i < nums.length; i++) {
        if(array.includes(nums[i])) {
            console.log(array.includes(nums[i]))
            return true;
        } else {
            array.push(nums[i]);
        }
    }
    console.log("false")
    return false;

};

let arr1 = [1, 2, 3, 1]; // answer is true
let arr2 = [1, 2, 3, 4]; // answer is false
let arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // answer is true

containsDuplicate(arr1);
containsDuplicate(arr2);
containsDuplicate(arr3);