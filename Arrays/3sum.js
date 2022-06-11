/* 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

var threeSum = function (nums) {
    const compare = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }


    if (nums.length < 3) {
        console.log([]);
        return [];
    } else {
        console.log("The integer array has at least 3 elements.")
    }

    let tempSum = 0, initialIndex = 0, array = [], finalArray = [];
    nums.sort((a, b) => a - b);
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        let low = i + 1, high = nums.length - 1;
        // console.log(i, low, high);
        while (low <= high - 1) {
            tempSum = nums[i] + nums[low] + nums[high];
            // console.log([i,low,high], tempSum);
            if (tempSum === 0) {

                array.push(nums[i], nums[low], nums[high])

                for (let j = 0; j < array.length; j++) {
                    let include = compare(array, finalArray[j]);

                    if (include === false) {
                        finalArray.push(array)
                        array = [];
                    } else {
                        break
                    }

                }

                // finalArray.push(array)

                // console.log(finalArray);
                array = [];
            }
            high--;
            // console.log(i, low, high);
        }

        if (i === nums.length - 3) {
            console.log(finalArray);
            return finalArray;
        }
        // console.log(i,low,high);

    }

};

let arr1 = [-1, 0, 1, 2, -1, -4] // answer is [[-1,-1,2],[-1,0,1]]
let arr2 = [] // answer is []
let arr3 = [0] // answer is []
let arr4 = [0, 0, 0] // answer is [[0, 0, 0]]
let arr5 = [0, 0, 0, 0] // answer is [[0, 0, 0]]
let arr6 = [-2,0,1,1,2] // answer is [[-2,0,2],[-2,1,1]]

// threeSum(arr1);
// threeSum(arr2);
// threeSum(arr3);
// threeSum(arr4);
// threeSum(arr5);
threeSum(arr6);