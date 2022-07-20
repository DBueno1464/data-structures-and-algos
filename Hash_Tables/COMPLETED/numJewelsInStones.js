/*

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

*/

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};

let jewel1 = "aA", stones1 = "aAAbbbb" // output: 3
let jewel2 = "z", stones2 = "ZZ" // output: 0

// numJewelsInStones(jewel1, stones1);
numJewelsInStones(jewel2, stones2);