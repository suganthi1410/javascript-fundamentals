/**** STRING LENGTH, INDEXING, AND BRACKET NOTATION: SOLUTION ****/

/*
    Strings are more than just blocks of text; in JavaScript, they are 
    treated as a sequence of individual characters.

    The .length Property: This tells you exactly how many characters 
    are in a string (including spaces and punctuation).

    Zero-Based Indexing: JavaScript starts counting at 0. The first 
    character is at index 0, the second is at index 1, and so on.

    Bracket Notation []: We use square brackets to "peek" at a 
    specific character by its index. If you try to access an index 
    that doesn't exist, JavaScript returns undefined.
*/

let shipName = "Galactic Nova";

/** EXAMPLE 1 - THE LENGTH PROPERTY **/

// .length gives the total count of characters.
let nameLength = shipName.length;
console.log(nameLength); // 13

/** EXAMPLE 2 - BRACKET NOTATION **/

// Accessing the first character
let firstLetter = shipName[0];
console.log(firstLetter); // G

// Accessing a character in the middle
let tenthLetter = shipName[9];
console.log(tenthLetter); // N

/** EXAMPLE 3 - FINDING THE LAST CHARACTER **/

// Since we start at 0, the last index is always length minus 1.
let lastLetter = shipName[shipName.length - 1];
console.log(lastLetter); // a

/** EXAMPLE 4 - OUT OF BOUNDS **/

// If we look for an index that isn't there, we get undefined.
let mysteryLetter = shipName[99];
console.log(mysteryLetter); // undefined
