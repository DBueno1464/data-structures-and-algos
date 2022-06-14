/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

var missingNumber = function(nums) {
    let missing;
    console.log(`This is the array: [${nums}]`);
    for (let i = 0; i < nums.length + 1; i++) {
        console.log(i);
        if (!nums.includes(i)) {
            console.log(`${i} is missing!`)
            missing = i;
        }
    }
    return missing;
};

let n1 = [3,0,1]; // answer is 2; n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

let n2 = [0,1]; // answer is 2; n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

let n3 = [9,6,4,2,3,5,7,0,1]; // answer is 8; n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

missingNumber(n1);
// missingNumber(n2);
// missingNumber(n3);