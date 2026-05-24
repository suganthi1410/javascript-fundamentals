/**** COMMON STRING METHODS: TRANSFORMING STRINGS: SOLUTION ****/

/*
    Transforming methods allow us to modify the appearance of a string 
    or clean up messy input. A crucial rule to remember: Strings in 
    JavaScript are immutable. This means these methods do not change 
    the original variable; instead, they return a brand new string that 
    you must store if you want to keep the changes.

    .toUpperCase() & .toLowerCase(): Essential for "standardizing" text 
    (e.g., making "Mars", "MARS", and "mars" all look the same for a comparison).

    .trim(): Removes "whitespace" (spaces, tabs, new lines) from the very 
    beginning and very end of a string. Perfect for cleaning up user input.

    .replace(search, replacement): Finds a specific piece of text and swaps 
    it for something else. Note that this replaces only the first instance
    it comes across.
*/

let rawData = "   lv-426-xenomorph   ";

/** EXAMPLE 1 - CHANGING CASE **/

// Convert to a loud, emergency shout
let shout = rawData.toUpperCase();
console.log(shout); // "   LV-426-XENOMORPH   "

/** EXAMPLE 2 - TRIMMING WHITESPACE **/

// Remove the leading and trailing spaces
let cleanData = rawData.trim();
console.log(cleanData); // "lv-426-xenomorph"

/** EXAMPLE 3 - REPLACING TEXT **/

// Swap the sector code for a common name
let commonName = cleanData.replace("lv-426", "Acheron");
console.log(commonName); // "Acheron-xenomorph"

/** EXAMPLE 4 - IMMUTABILITY CHECK **/

let planet = "Mars";
planet.toUpperCase(); // This returns "MARS" but doesn't save it!

console.log(planet); // Mars (The original is unchanged)

// Reassignment to permanently change planet
planet = planet.toUpperCase();

console.log(planet); // Now it has been changed!
