/**** COMMON STRING METHODS: TRANSFORMING STRINGS: PRACTICE SOLUTION ****/

/*
    Clean up and reformat these satellite transmissions 
    using transformation methods.
*/

/** EXERCISE 1: INPUT STANDARDIZATION **/

let userInput = "ready";

/*
    The computer expects "READY". 
    Convert 'userInput' to all uppercase so the check passes.
*/
const standardInput = userInput.toUpperCase();
console.log(standardInput); // READY

/** EXERCISE 2: SPACE POLICE **/

let pilotNickname = "   Star-Lord   ";

/*
    Remove the accidental leading and trailing spaces 
    from 'pilotNickname'.
*/
const cleanNickname = pilotNickname.trim();
console.log(cleanNickname); // Star-Lord

/** EXERCISE 3: SYSTEM UPGRADE **/

let softwareVersion = "Version-Old-Station";

/*
    Replace the word "Old" with "New" in the 
    'softwareVersion' string.
*/
const updatedVersion = softwareVersion.replace("Old", "New");
console.log(updatedVersion); // Version-New-Station

/** EXERCISE 4: LOWERCASE LOGGING **/

let emailAddress = "COMMANDER.SHEPARD@CITADEL.GOV";

/*
    Convert the 'emailAddress' to all lowercase 
    to prepare it for a database.
*/
const dbEmail = emailAddress.toLowerCase();
console.log(dbEmail); // commander.shepard@citadel.gov

// Great job!
