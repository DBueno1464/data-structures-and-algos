/*

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

- x if x >= 0.
- -x if x < 0.

*/

var countKDifference = function (nums, k) {

    const hash = (string, size) => {
        let s = string.toString();
        let hash = 7;
        for (let i = 0; i < s.length; i++) {
            hash += 11 * s.charCodeAt(0)
        }

        return hash % size;
    }

    let hashTable = new Array(nums.length * 10);

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]]) {
            hashTable[nums[i]].push([i, nums[i]]);
        } else {
            hashTable[nums[i]] = [[i, nums[i]]]
        }
    }

    // hashTable.forEach(pocket => {
    //     console.log(pocket)
    // });

    let count = 0
    for (let i = 0; i < hashTable.length; i++) {
        let diff = Math.abs(nums[i] - k);
        // console.log(diff)
        if (hashTable[diff]) {
            count = count + hashTable[diff].length
        }
    }
    console.log("The count is:", count);
    console.log("============")
    console.log(hashTable);
};

let nums1 = [1, 2, 2, 1], k1 = 1
let nums2 = [1, 3], k2 = 3
let nums3 = [3, 2, 1, 5, 4], k3 = 2

// countKDifference(nums1, k1);
// countKDifference(nums2, k2);
countKDifference(nums3, k3);

/*
let checkIfInHashTableIndex = nums[i] - k

*/