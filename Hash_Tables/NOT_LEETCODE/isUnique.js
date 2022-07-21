/*

Implement an algorithm to determine if a string has all unique characters.

*/

const isUnique = (string) => {
    const hash = (string, size) => {
        let hash = 11;
        for (let i = 0; i < string.length; i++) {
            hash += 13 * string.charCodeAt(i);
        }
        return hash % size;
    }

    let hashTable = new Array(string.length * 113);

    for (let i = 0; i < string.length; i++) {
        let index = hash(string[i], hashTable.length);
        if (hashTable[index]) {
            // hashTable[index] = hashTable[index] + 1
            return true, console.log(`The string, ${string}, NOT is unique`);;
        } else {
            hashTable[index] = 1
        }
    }

    // console.log(hashTable);
    console.log(`The string, ${string}, is unique`);
}

let string1 = 'hdgebau';
let string2 = 'aaaaaAAAA';
let string3 = 'bb';



isUnique(string1);
isUnique(string2);
isUnique(string3);