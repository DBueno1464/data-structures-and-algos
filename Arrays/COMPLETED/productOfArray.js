/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

var productExceptSelf = function (nums) {
    let product, array = [];
    for (let i = 0; i < nums.length; i++) {
        product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        array.push(product);
    }
    console.log(array);
    return array;
};

let arr1 = [1, 2, 3, 4] // answer [24,12,8,6]
let arr2 = [-1, 1, 0, -3, 3] // answer [0,0,9,0,0]

productExceptSelf(arr1);
productExceptSelf(arr2);