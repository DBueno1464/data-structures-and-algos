/* 

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

*/

var search = function (nums, target) {
    let startIndex = 0, endIndex = (nums.length - 1);
    while (startIndex < endIndex) {
        // count++;
        // if(count === 10) {
        //     return
        // }
        let mid = Math.floor((startIndex + endIndex) / 2);
        // console.log(`Start: ${startIndex}, End: ${endIndex}, Mid: ${mid}, Startvalue: ${nums[startIndex]}, Midvalue: ${nums[mid]}, Endvalue: ${nums[endIndex]}`)
        if (nums[mid] > nums[endIndex]) {
            startIndex = startIndex + 1;
        } else {
            endIndex = mid;
        }
    }

    let minIndex = endIndex; // index of minimum value in rotated array
    console.log(minIndex, target)
    if (minIndex === 0) {
        console.log("The array is not rotated :(")
        let start = 0;
        let mid = Math.floor(nums.length * .5);
        let end = nums.length;
        while (start < end) {
            console.log(start);
            if (nums[start] === target) {
                console.log("Answer is ", start);
                return start
            }
            start++;
        }
    } else if (target >= nums[0]) {
        let start = 0;
        let end = minIndex;
        while (start <= end) {
            console.log(start);
            if (nums[start] === target) {
                console.log("Answer is ", start);
                return start
            }
            start++;
        }
    } else if (target < nums[0]) {
        let start = minIndex;
        let end = nums.length;
        while (start <= end) {
            console.log(start);
            if (nums[start] === target) {
                console.log("Answer is ", start);
                return start
            }
            start++;
        }

    } else if (nums[minIndex] === target) {
        let indexOfTarget = minIndex;
        console.log(`The index of the target value of ${target} is ${indexOfTarget}`)
        return indexOfTarget;
    }
    console.log("uh oh", -1)
    return -1;

    // startIndex = 0;
    // endIndex = (nums.length - 1);
    // console.log(startIndex, endIndex)
    // while (startIndex <= endIndex) {
    //     let mid = Math.ceil((startIndex + endIndex) / 2);
    //     let midRotated = (mid + minIndex) % (nums.length);
    //     console.log(mid, "+", minIndex, "%", nums.length, "=", midRotated);
    //     console.log(startIndex, endIndex, mid, minIndex, midRotated)


    //     if (nums[midRotated] === target) {
    //         console.log(midRotated)
    //         return midRotated;
    //     } else {
    //         endIndex = mid - 1;
    //     }
    // }
};

// check target vs nums[midRotated], if target is less => check [0, 1, 2] else => [5, 6, 7] then again

let arr1 = [4, 5, 6, 7, 0, 1, 2], target1 = 0   // answer is 4
let arr2 = [4, 5, 6, 7, 0, 1, 2], target2 = 3   // answer is -1
let arr3 = [1], target3 = 0                     // answer is -1
let arr4 = [1, 3], target4 = 3                  // answer is 1
let arr5 = [1, 2, 3, 4, 5, 6], target5 = 1      // answer is 0
let arr6 = [1, 3, 5], target6 = 5               // answer is 2
let arr7 = [1, 2, 3, 4, 5, 6], target7 = 5      // answer is 4
let arr8 = [4, 5, 6, 7, 0, 1, 2], target8 = 6   // answer is 2
let arr9 = [4, 5, 6, 7, 0, 1, 2], target9 = 2   // answer is 6
let arr10 = [3, 1], target10 = 3                // answer is 0

// search(arr1, target1)
// search(arr2, target2)
// search(arr3, target3)
// search(arr4, target4)
// search(arr5, target5)
// search(arr6, target6)
// search(arr7, target7)
// search(arr8, target8)
// search(arr9, target9)
search(arr10, target10)