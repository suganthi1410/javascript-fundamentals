/**** ACCESSING & MODIFYING PROPERTIES: PRACTICE ****/
/*
    Practice reading, adding, and updating object properties 
    using both static and dynamic lookups.
*/

/** EXERCISE 1: COCKPIT CONFIGURATION **/

const communicationSpecs = {
    frequencyGhz: 8.4,
    "encryption-protocol": "AES-256",
    signalStrength: "GOOD"
};

// TODO: Update the 'frequencyGhz' to 9.1 using dot notation.

// TODO: Update the 'encryption-protocol' to "RSA-4096" using bracket notation.

// TODO: Log a full statement confirming the update using both bracket notation and dot notation.


/** EXERCISE 2: POPULATING ENEMY DATA **/

const scanningDrone = {};

/*
    TODO: The drone scanned an unidentified object. Add three keys to the 
    empty 'scanningDrone' object dynamically:
    - classification (Set to "Frigate")
    - weaponCount (Set to 12)
    - "shield-active" (Set to false)
    
    Then, log a full statement using some of the properties of the object.
*/

/** EXERCISE 3: THE TERMINAL SELECTOR **/

const airlockControls = {
    pressurePsi: 14.7,
    oxygenLevel: 21,
    sealIntact: true
};

let userTerminalQuery = "oxygenLevel";

/*
    TODO: Use the 'userTerminalQuery' variable to dynamically log the correct 
    stat from the 'airlockControls' object using bracket notation.
*/
