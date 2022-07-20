/*

Given an array of integers nums, return the number of good pairs.

*/

var numIdenticalPairs = function (nums) {
    let hashTable = [];
    let numsbersFound = [];
    let response = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!numsbersFound.includes(nums[i])) {
            console.log(`This element, ${nums[i]}, is not in the hash table!`);
            numsbersFound.push(nums[i]);
            // hashTable[i] = 1;
            hashTable.push(1);
        } else {
            console.log(`This element, ${nums[i]}, is in the hash table!`, response);
            let indexOfRepeat = numsbersFound.indexOf(nums[i]);
            response = response + hashTable[indexOfRepeat];
            hashTable[indexOfRepeat] = hashTable[indexOfRepeat] + 1;
        }
    }
    return response, console.log(response, hashTable);
};

let nums1 = [1, 2, 3, 1, 1, 3] // There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
let nums2 = [1, 1, 1, 1] // Each pair in the array are good.
let nums3 = [1, 2, 3] // 0
let nums4 = [4,4,2,2] // 2

// numIdenticalPairs(nums1);
// numIdenticalPairs(nums2);
// numIdenticalPairs(nums3);
numIdenticalPairs(nums4)