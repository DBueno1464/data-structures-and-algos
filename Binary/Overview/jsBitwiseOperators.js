/*
Javascript Bitwise Operators

AND &
OR |
XOR ^
NOT ~
Shift left <<
Shift right >>
*/

let l = console.log;
let n = 10;
let nBi = n.toString(2);    // 1010
let i = 6;
let iBi = i.toString(2);    //  110
l(nBi, iBi)

/* 
AND: If there are two instances of 1s, output 1. Otherwise, output 0.

    1010
    0110
---------
    0010  => nBi & iBi = 2, in decimal
*/

l("AND & ", n & i);

/* 
OR: If one, or both, positions are 1s, output 1. Otherwise, output 0.

    1010
    0110
---------
    1110  => nBi | iBi = 14, in decimal
*/

l("OR | ", n | i);

/* 
XOR(Exclusive OR): If one, and only one, of the positions is 1, output 1. Otherwise, output 0.

    1010
    0110
---------
    1100  => nBi ^ iBi = 12, in decimal
*/

l("XOR ^", n ^ i);

/* 
NOT: Where there is 1, output 0. Where there is 0, output 1. WILL CHANGE SIGN OF DECIMAL VALUE.

    ~1010 => 0101, ~x = -(x + 1)
    0110  => 1001, 
---------------------------------
    1100  => nBi ^ iBi = 12, in decimal
*/

l("NOT ~ ", ~n, ~i);

/* 
Shift left: Moves first operand the specified number of bits to the left. Same as moving decimal point to the right or adding zeroes at position 0;

    10 << 3 => 1010, move 3 spaces to the left, 1010000. Equals 80
    6 << 5 => 110, move 5 spaces to the left. 11000000. Equals 192

*/

l("Shift Left << ", n << 3, "and", i << 5);

/* 
Shift right: Moves first operand the specified number of bits to the right.

    6 >> 1 => 110, move 1 spaces to the right, 11. Equals 3.

*/

l("Shift Right >> ", i >> 1);