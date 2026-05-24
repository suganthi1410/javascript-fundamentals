/**** COMMON STRING METHODS: RETRIEVING STRINGS: SOLUTION ****/

/*
    Sometimes you don't need the whole message; you just need a 
    specific piece of it. Substring methods allow us to "cut" or 
    "extract" parts of a string.

    .charAt(index): This is a method version of bracket notation ([]). 
    It returns the character at a specific position.

    .slice(start, end): This is the most powerful extraction tool. 
    It pulls a section of a string from the start index up to, but 
    not including, the end index.

    The "Not Including" Rule: If you call .slice(0, 3), you get the 
    characters at index 0, 1, and 2. The character at index 3 is 
    where the "knife" stops.

    The "Rest of the String": If you omit the second argument (.slice(5)), 
    it will extract everything from index 5 to the very end of the string.
*/

let serialNumber = "SN-992-ALPHA";

/** EXAMPLE 1 - CHARAT **/

// Extracting a single character by index
let fourthChar = serialNumber.charAt(3);
console.log(fourthChar); // 9

/** EXAMPLE 2 - SLICE (Range) **/

// Extract the middle numbers (index 3 to index 6)
// We use 6 as the 'end' so it grabs 3, 4, and 5.
let numericPart = serialNumber.slice(3, 6);
console.log(numericPart); // 992

/** EXAMPLE 3 - SLICE (To the end) **/

// Extract the suffix starting from index 7
let suffix = serialNumber.slice(7);
console.log(suffix); // ALPHA

/** EXAMPLE 4 - SLICE (Negative Indices) **/

// Using negative numbers counts backward from the end
let lastThree = serialNumber.slice(-3);
console.log(lastThree); // PHA
