/**** COMMON STRING METHODS: SEARCHING STRINGS: SOLUTION ****/

/*
    Searching methods allow us to scan a string for specific 
    characters or sequences. This is essential for validating 
    input or identifying specific codes within a long message.

    .indexOf(substring): Returns the index where the search 
    term first starts. If the term isn't found, it returns -1. 
    This is a classic way to check for existence.

    .includes(substring): A modern, simpler way to check for 
    existence. It returns a Boolean (true or false).

    .startsWith() and .endsWith(): These check the beginning 
    or the end of a string specifically. These are much more 
    readable than calculating indexes manually! 
    They also return a Boolean (true or false).

    Note: All of these methods are case-sensitive!
*/

let missionUpdate = "Targeting Mars: Arrival in 40 days.";

/** EXAMPLE 1 - INDEX OF **/

// Find where "Mars" starts
let planetIndex = missionUpdate.indexOf("Mars");
console.log(planetIndex); // 10

// Searching for something that doesn't exist returns -1
let moonIndex = missionUpdate.indexOf("Moon");
console.log(moonIndex); // -1

/** EXAMPLE 2 - INCLUDES **/

// A simple yes/no check for a keyword
let hasUrgentTag = missionUpdate.includes("URGENT");
console.log(hasUrgentTag); // false

/** EXAMPLE 3 - STARTSWITH / ENDSWITH **/

// Checking the prefix or suffix of a string
let isTargeting = missionUpdate.startsWith("Targeting");
console.log(isTargeting); // true

let isFinished = missionUpdate.endsWith(".");
console.log(isFinished); // true
