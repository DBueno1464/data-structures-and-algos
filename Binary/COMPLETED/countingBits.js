/*

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

*/

var countBits = function(n) {
    let arr = [];
    for (let i = 0; i < n + 1; i++) {
        let binaryNum = i.toString(2);
        let totalOnes = 0;
        // console.log(`Turning ${i} into binary equals: ${binaryNum}`)
        for (let j = 0; j < binaryNum.length; j++) {
            // console.log(`Checking if the ${j}th bit equals 1`)
            if (binaryNum[j] == 1) {
                // console.log(`This bit equals 1!`)
                totalOnes++;
            }
           
            totalOnes;
            
        }
        // arr.push(totalOnes)
    }
    // console.log(arr);
    return arr;
};

let n1 = 2; // answer is [0,1,1]; Explanation: 0 --> 0, 1 --> 1, 2 --> 10

let n2 = 5; // answer is [0,1,1,2,1,2]; Explanation: 0 --> 0, 1 --> 1, 2 --> 10, 3 --> 11, 4 --> 100, 5 --> 101

// countBits(n1);
// countBits(n2);