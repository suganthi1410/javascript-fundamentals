/**** METHOD CHAINING: PRACTICE SOLUTION ****/

/*
    Use method chaining to perform these multi-step 
    transformations in a single line.
*/

/** EXERCISE 1: THE CLEAN INITIAL **/

let rawPlanet = "   mars   ";

/*
    1. Trim the whitespace from 'rawPlanet'.
    2. Extract the very first character.
    3. Convert it to Uppercase.
*/
const planetInitial = rawPlanet.trim().charAt(0).toUpperCase();
console.log(planetInitial); // M

/** EXERCISE 2: DATABASE READY ID **/

let systemID = "ID-BR549-X";

/*
    1. Replace "id-" with an empty string "" to remove it.
    2. Convert the remaining string to Lowercase.
*/
const cleanID = systemID.replace("ID-", "").toLowerCase();
console.log(cleanID); // br549-x

/** EXERCISE 3: SUBSTRING SEARCH **/

let sensorData = "992-ZA11-00";

/*
    1. Extract the characters between index 4 and 8.
    2. Check if that result includes the letter "Z".
*/
const hasSpecificCode = sensorData.slice(4, 8).includes("Z");
console.log(hasSpecificCode); // true

/** EXERCISE 4: THE ULTIMATE CLEANUP **/

let logEntry = "   system-Error-detected   ";

/*
    1. Trim the string.
    2. Replace "Error" with "Fixed".
    3. Convert the whole thing to Uppercase.
*/
const polishedLog = logEntry.trim().replace("Error", "Fixed").toUpperCase();
console.log(polishedLog); // SYSTEM-FIXED-DETECTED
