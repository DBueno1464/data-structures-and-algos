/*

Given a string s, find the length of the longest substring without repeating characters.

*/

var lengthOfLongestSubstring = function (s) {
    let startIndex = 0, temp = '', max = 0;
    while (startIndex < s.length) {
        console.log(`${startIndex}: ${s[startIndex]}, Temp: [${temp}, ${temp.length}], Max: ${max}, Length: ${s.length}`);
        if (temp.includes(s[startIndex])) {
            console.log("REPEAT CHARACTER!")
            max = Math.max(max, temp.length);
            temp = '';
        }
        temp = temp + s[startIndex];
        max = Math.max(max, temp.length);
        console.log(`Temp: ${temp}`);
        startIndex++;
        // console.log(startIndex, s.length)
    }
    console.log("ANSWER: ", max);
    return max;
};


let s1 = "abcabcbb"; // answer is 3;"abc", with the length of 3.

let s2 = "bbbbb";    // answer is 1; The answer is "b", with the length of 1.

let s3 = "pwwkew";   // answer is 3; The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

let s4 = " ";        // answer is 1;

let s5 = "dvdf";     // answer is 3


// lengthOfLongestSubstring(s1)
// lengthOfLongestSubstring(s2)
// lengthOfLongestSubstring(s3)
// lengthOfLongestSubstring(s4)
lengthOfLongestSubstring(s5)


// console.log(s1.includes('a'));