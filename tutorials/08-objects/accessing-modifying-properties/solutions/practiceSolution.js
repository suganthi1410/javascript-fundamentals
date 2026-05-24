/**** ACCESSING & MODIFYING PROPERTIES: PRACTICE SOLUTION ****/
/*
    Practice reading, adding, and updating object properties 
    using both static and dynamic lookups.
*/

/** EXERCISE 1: COCKPIT CONFIGURATION **/

const communicationSpecs = {
	frequencyGhz: 8.4,
	"encryption-protocol": "AES-256",
	signalStrength: "GOOD",
};

// Update the 'frequencyGhz' to 9.1 using dot notation.
communicationSpecs.frequencyGhz = 9.1;

// Update the 'encryption-protocol' to "RSA-4096" using bracket notation.
communicationSpecs["encryption-protocol"] = "RSA-4096";

// Log a full statement confirming the update using both bracket notation and dot notation.
console.log(
	`Comms updated. Protocol: ${communicationSpecs["encryption-protocol"]} at ${communicationSpecs.frequencyGhz}GHz.`
);

/** EXERCISE 2: POPULATING ENEMY DATA **/

const scanningDrone = {};

/*
    The drone scanned an unidentified object. Add three keys to the 
    empty 'scanningDrone' object dynamically:
    - classification (Set to "Frigate")
    - weaponCount (Set to 12)
    - "shield-active" (Set to false)

    Then, log a full statement using some of the new properties of the object.
*/
scanningDrone.classification = "Frigate";
scanningDrone.weaponCount = 12;
scanningDrone["shield-active"] = false;

console.log(
	`Target identified as a ${scanningDrone.classification} with ${scanningDrone.weaponCount} hardpoints.`
);

/** EXERCISE 3: THE TERMINAL SELECTOR **/

const airlockControls = {
	pressurePsi: 14.7,
	oxygenLevel: 21,
	sealIntact: true,
};

let userTerminalQuery = "oxygenLevel";

/*
    Use the 'userTerminalQuery' variable to dynamically log the correct 
    stat from the 'airlockControls' object using bracket notation.
*/
console.log(`System Diagnostic for ${userTerminalQuery}: ${airlockControls[userTerminalQuery]}`);
