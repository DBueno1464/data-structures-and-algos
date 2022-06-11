/* 

Given two integers a and b, return the sum of the two integers without using the operators + and -.

*/
var getSum = function (a, b) {
   // turn parameter integers to binary
   let aBi = a.toString(2), bBi = b.toString(2);
   console.log(a, " => ", aBi, " and ", b, " => ", bBi);
   
   while (b) {
      // cover case where both positions are 1 to carry the 1. Here we find where the carry needs to happen.
      let carry = a & b;
      console.log(carry.toString(2))

      // here we 'simulate' addition excluding where the carry happens
      a = a ^ b;
      console.log(a.toString(2))

      b = carry << 1;
      console.log(b.toString(2))
   }
   console.log(`Decimal: ${a}, Binary: ${a.toString(2)}`)
   // return a;
};
let a1 = 1, b1 = 2   // answer is 3, 11
let a2 = 2, b2 = 3   // answer is 5, 101
let a3 = 10, b3 = 6  // answer is 16, 10000
let a4 = -10, b4 = 6 // answer is -4,

getSum(a1, b1);
getSum(a2, b2);
getSum(a3, b3);
getSum(a4, b4);

/*
   1  =>  01  
+  2  =>  10
-----------------------------------------
   3      11
*/