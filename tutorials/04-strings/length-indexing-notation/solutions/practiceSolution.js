/**** STRING LENGTH, INDEXING, AND BRACKET NOTATION: PRACTICE SOLUTION ****/

/*
    Use bracket notation and the .length property to 
    extract data from these strings.
*/

/** EXERCISE 1: THE FIRST INITIAL **/

let planet = "Jupiter";

// Store the first character of the planet's name in a variable,
// then log it to the console.
const firstInitial = planet[0];
console.log(firstInitial); // J

/** EXERCISE 2: STRING SURVEY **/

let entryCode = "XJ-99-ALPHA";

// Store the length of the 'entryCode' string in a variable and log it.
const codeLength = entryCode.length;
console.log(codeLength); // 11

/** EXERCISE 3: DYNAMIC INDEXING **/

let shuttleID = "Discovery-5";

// Without counting manually, grab the LAST character of the
// shuttleID string and log it.
const lastChar = shuttleID[shuttleID.length - 1];
console.log(lastChar); // 5

/** EXERCISE 4: COORDINATE SNAGGING **/

let coordinates = "001-992-X";

// Use bracket notation to store the 4th character of the coordinates
// string. Remember, the index of the 4th character is not 4!
const sectorDigit = coordinates[3];
console.log(sectorDigit); // -

// Great job!
