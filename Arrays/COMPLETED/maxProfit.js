/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/
var maxProfit = function(prices) {
    let minValue = Number.MAX_VALUE;
    let maxProfit = 0;
    for(var i = 0;i < prices.length;i++) {
        console.log(prices[i], "vs", minValue, "vs", maxProfit);
            if(prices[i] < minValue) {
                minValue = prices[i]
            } else if (prices[i] - minValue > maxProfit){
                maxProfit = prices[i] - minValue;
            }
    }
    console.log(maxProfit)
    return maxProfit
 
};

// Tests

let arr0 = [1];                 // answer is 0
let arr1 = [4, 3, 2, 1];        // answer is 0
let arr2 = [1, 2, 3, 7];        // answer is 6
let arr3 = [3, 2, 1, 5];        // answer is 4
let arr4 = [2, 9, 1, 6];        // answer is 7
let arr5 = [9, 2, 4, 5];        // answer is 3
let arr6 = [7, 1, 5, 3, 6, 4];  // answer is 5
let arr7 = [5, 4, 3, 2, 1];     // answer is 0

// Function calls

// maxProfit(arr0);
// maxProfit(arr1);
// maxProfit(arr2);
// maxProfit(arr3);
// maxProfit(arr4);
// maxProfit(arr5);
maxProfit(arr6);
// maxProfit(arr7);