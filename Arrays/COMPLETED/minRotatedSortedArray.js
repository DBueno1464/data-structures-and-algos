/* 

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

 - [4,5,6,7,0,1,2] if it was rotated 4 times.
 - [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/

var findMin = function (nums) {
    let n = nums.length, startIndex = 0, endIndex = n - 1, count = 0;
    // console.log(startIndex, endIndex, n, mid)

    while (startIndex < endIndex) {

        // count++;
        // if(count === 10) {
        //     return
        // }


        let mid = Math.floor((startIndex + endIndex) / 2);
        console.log(`Start: ${startIndex}, End: ${endIndex}, Mid: ${mid}, Startvalue: ${nums[startIndex]}, Midvalue: ${nums[mid]}, Endvalue: ${nums[endIndex]}`)
        if (nums[mid] > nums[endIndex]) {
            startIndex = startIndex + 1;
        } else {
            endIndex = mid;
        }
    }
    console.log(nums[endIndex])
    return nums[endIndex];
};

let arr1 = [3, 4, 5, 1, 2]      // answer is 1; The original array was [1,2,3,4,5] rotated 3 times.

let arr2 = [4, 5, 6, 7, 0, 1, 2]  // answer is 0; The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

let arr3 = [11, 13, 15, 17]    // answer is 11; The original array was [11,13,15,17] and it was rotated 4 times.

let arr4 = [25, 26, 19, 20, 21, 22, 23, 24]  // answer is 19; 
let arr5 = [2, 3, 4, 5, 1] // answer is 1

// findMin(arr1)
// findMin(arr2)
// findMin(arr3)
// findMin(arr4)
findMin(arr5);