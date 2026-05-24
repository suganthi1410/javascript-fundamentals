/**** COMMON STRING METHODS: SEARCHING STRINGS: PRACTICE SOLUTION ****/

/*
    Use string searching methods to validate these 
    incoming transmissions.
*/

/** EXERCISE 1: ID VERIFICATION **/

let shipID = "USS-Enterprise-NCC-1701";

/*
    Check if 'shipID' starts with the prefix "USS".
    Log the result as a boolean.
*/
const isFederationShip = shipID.startsWith("USS");
console.log(isFederationShip); // true

/** EXERCISE 2: CARGO SCANNER **/

let manifest = "Water, Oxygen, Food, Medical Supplies";

/*
    Check if the 'manifest' string includes the word "Fuel".
    Log the result as a boolean.
*/
const hasFuel = manifest.includes("Fuel");
console.log(hasFuel); // false

/** EXERCISE 3: COORDINATE LOCATION **/

let coordinates = "284-991-X";

/*
    Find the index of the first hyphen "-" in the 
    'coordinates' string and log it.
*/
const firstHyphenIndex = coordinates.indexOf("-");
console.log(firstHyphenIndex); // 3

/** EXERCISE 4: TRANSMISSION ENDING **/

let signal = "Incoming scout ship detected... EOM";

/*
    Verify that the 'signal' ends with "EOM" (End Of Message).
    Log the result as a boolean.
*/
const isSignalComplete = signal.endsWith("EOM");
console.log(isSignalComplete); // true

// Great job!
