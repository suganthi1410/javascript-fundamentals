/**** TOPIC: PRACTICE SOLUTION ****/

/*
    Practice drilling into deep object matrices and duplicating 
    complex structural records safely without memory leaks.
*/

/** EXERCISE 1: DOWNLINK DATA EXTRACTION **/

const stationHub = {
	stationName: "Ceres Station",
	logistics: {
		governingBody: "Star Helix Security",
		docks: ["Dock 1-A", "Dock 4-B", "Drydock Gamma"],
	},
};

/*
    Use a template literal to log: 
    "Security at [stationName] is enforced by [governingBody]. Maintenance active at [second dock entry]."
*/
console.log(
	`Security at ${stationHub.stationName} is enforced by ${stationHub.logistics.governingBody}. Maintenance active at ${stationHub.logistics.docks[1]}.`
);

/** EXERCISE 2: SHALLOW CLONE VERIFICATION **/

const originalThrusterData = {
	burnTimeSec: 420,
	readouts: { corePsi: 340 },
};

// Create a shallow copy of 'originalThrusterData' named 'clonedThrusterData' using the spread operator.
const clonedThrusterData = { ...originalThrusterData };

// Update 'clonedThrusterData.readouts.corePsi' to 500.
clonedThrusterData.readouts.corePsi = 500;

/*
    Predict what originalThrusterData.readouts.corePsi will log.
    Uncomment the line below to check.
*/
console.log(`Original System Core PSI: ${originalThrusterData.readouts.corePsi}`);
// Answer in comment: It prints 500. Because the spread operator only creates a shallow copy,
// the nested 'readouts' object pointer is shared between both parent objects.

/** EXERCISE 3: LOGISTICS ENVELOPE DUPLICATION **/

const secureVault = {
	vaultId: "V-90",
	clearanceCodes: ["X-RAY", "ORION"],
};

/*
    Create a complete DEEP COPY of the 'secureVault' object and store it inside 'deepVaultClone'.
    Use the JSON conversion method.
    Push a new code string ("NEBULA") onto the deep copy's 'clearanceCodes' array.
    Log both arrays to verify they are completely decoupled.
*/
const deepVaultClone = JSON.parse(JSON.stringify(secureVault));
deepVaultClone.clearanceCodes.push("NEBULA");

console.log(`Original Clearance Keyring: ${secureVault.clearanceCodes}`); // X-RAY,ORION
console.log(`Deep Copy Clearance Keyring: ${deepVaultClone.clearanceCodes}`); // X-RAY,ORION,NEBULA
