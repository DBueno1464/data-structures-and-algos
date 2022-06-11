/* 

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

var maxArea = function (height) {
    let start = 0, end = height.length - 1;
    let maxWater = 0;
    function min(a, b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }
    function max(a, b) {
        if (a < b) {
            return b;
        } else {
            return a;
        }
    }
    while (start < end) {
        maxWater = max(maxWater, (end - start) * min(height[start], height[end]));
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }


    console.log(maxWater)
    return maxWater;
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i+1; j < height.length; j++) {
    //         let x = j-i;
    //         let y = min(height[i],height[j]);
    //         let area = x*y;
    //         console.log(area)
    //         if(max<area){
    //             max = area
    //         }

    //     }

    // }
};

let arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7] // answer is 49; index 1 and 8
let arr2 = [1, 1]                       // answer 1

maxArea(arr1)
// maxArea(arr2)