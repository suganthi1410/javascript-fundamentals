/**** TOPIC: PRACTICE ****/

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
    TODO: Use a template literal to log: 
    "Security at [stationName] is enforced by [governingBody]. Maintenance active at [second dock entry]."
*/
console.log(`Security ${stationHub.stationName} is enforced by ${stationHub.logistics.governingBody}. Maintenance active ad ${stationHub.logistics.docks[1]}`);


/** EXERCISE 2: SHALLOW CLONE VERIFICATION **/
const originalThrusterData = {
	burnTimeSec: 420,
	readouts: { corePsi: 340 },
};
// TODO: Create a shallow copy of 'originalThrusterData' named 'clonedThrusterData' using the spread operator.
const clonedThrusterData = { ...originalThrusterData };

// TODO: Update 'clonedThrusterData.readouts.corePsi' to 500.

clonedThrusterData.readouts.corePsi = 500;
/*
    TODO: Predict what originalThrusterData.readouts.corePsi will log.
    Uncomment the line below to check.
*/
//console.log(originalThrusterData.readouts.corePsi);

/** EXERCISE 3: LOGISTICS ENVELOPE DUPLICATION **/

const secureVault = {
	vaultId: "V-90",
	clearanceCodes: ["X-RAY", "ORION"],
};

/*
    TODO: Create a complete DEEP COPY of the 'secureVault' object and store it inside 'deepVaultClone'.
    Use the JSON conversion method.

    Push a new code string ("NEBULA") onto the deep copy's 'clearanceCodes' array.
    Log both arrays to verify they are completely decoupled.
*/
const deepClone= structuredClone(secureVault);
deepClone.clearanceCodes.push("NEBULA");
console.log("Original:", secureVault);
console.log("Deep Clone :", deepClone);

