/**** CONVERTING BETWEEN ARRAYS AND STRINGS: PRACTICE SOLUTION ****/

/*
    Use split and join to convert data formats 
    for the mission logs.
*/

/** EXERCISE 1: THE COMMA EXPLODER **/

let csvData = "Mars,Jupiter,Saturn,Venus";

/*
    Split the 'csvData' string into an array named 'planets' 
    using the comma as a separator, then print the array.
*/
const planets = csvData.split(",");
console.log(planets); // ["Mars", "Jupiter", "Saturn", "Venus"]

/** EXERCISE 2: THE URL BUILDER **/

let pathSegments = ["users", "pilot", "settings"];

/*
    Join the 'pathSegments' array into a single string 
    named 'urlPath' using a forward slash "/" as the connector. 
    Print the string.
*/
const urlPath = pathSegments.join("/");
console.log(urlPath); // "users/pilot/settings"

/** EXERCISE 3: CHARACTER BREAKDOWN **/

let secretCode = "ALPHAV7";

/*
    Split the 'secretCode' string into an array of 
    individual characters using an empty string "" as the 
    separator. Print the result.
*/
const codeChars = secretCode.split("");
console.log(codeChars); // ["A", "L", "P", "H", "A", "V", "7"]

/** EXERCISE 4: THE REVERSE-STRING TRICK **/

let originalWord = "Stardust";

/*
    Use method chaining to:
    1. Split the word into characters.
    2. Reverse the array.
    3. Join the characters back into a string.
    Print the final result.
*/
const reversedWord = originalWord.split("").reverse().join("");
console.log(reversedWord); // "tsudraSt"

// Great job!
