/**** COMMON ARRAY METHODS: QUERYING & ACCESSING ELEMENTS: PRACTICE SOLUTION ****/

/*
    Use query methods to check the status of the 
    ship's inventory and crew.
*/

/** EXERCISE 1: SENSOR SCAN **/

let detectedLifeforms = ["Human", "Droid", "Human"];

/*
    Use .includes() to check if "Alien" is in the 
    detectedLifeforms array. Log the boolean result.
*/
const alienDetected = detectedLifeforms.includes("Alien");
console.log(alienDetected); // false

/** EXERCISE 2: TOOL LOCATOR **/

let toolkit = ["Wrench", "Screwdriver", "Hammer", "Wrench"];

/*
    Use .indexOf() to find the location of the FIRST 
    "Wrench" in the toolkit. Log the index.
*/
const wrenchIndex = toolkit.indexOf("Wrench");
console.log(wrenchIndex); // 0

/** EXERCISE 3: REPEAT OFFENDER **/

let errorLog = ["A1", "B2", "A1", "C3"];

/*
    Use .lastIndexOf() to find the index of the 
    LAST "A1" error code in the errorLog. Log the index.
*/
const lastA1 = errorLog.lastIndexOf("A1");
console.log(lastA1); // 2

/** EXERCISE 4: SYSTEM VALIDATION **/

let systems = ["Navigation", "Life Support", "Comms"];

/*
    Use .indexOf() to search for "Engines". 
    Since it isn't there, log the result to confirm it returns -1.
*/
const engineCheck = systems.indexOf("Engines");
console.log(engineCheck); // -1

// Great job!
