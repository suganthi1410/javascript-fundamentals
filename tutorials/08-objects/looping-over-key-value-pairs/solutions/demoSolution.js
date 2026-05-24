/**** LOOPING OVER KEY/VALUE PAIRS: SOLUTION ****/

/*
    Unlike arrays, objects do not have numeric indices, meaning you cannot iterate through 
    them using a standard for loop. To extract data systematically from an object literal, 
    JavaScript offers two primary architectural patterns:

    The for...in Loop: This loop is custom-built to iterate over an object's enumerable keys. 
    During each cycle of the loop, the iterator variable holds the current key name as a string. 
    To extract the corresponding value dynamically, you must use bracket notation (object[key]).

    Object Reflection Methods: If you prefer working with arrays, you can use global helper 
    methods to extract parts of the object:
        - Object.keys(object) returns a flat array of all key strings.
        - Object.values(object) returns a flat array of all values. Once 
        converted, you can loop through them cleanly using a standard for...of loop.
*/

// Utility helper function to draw clean sections in the console
function formatHeader(title, isAlert) {
	let cleanTitle = title.trim().toUpperCase();
	let border = isAlert ? `🚨 ==================== 🚨` : `🪐 -------------------- 🪐`;

	console.log(`\n${border}`);
	console.log(`  ${cleanTitle}`);
	console.log(`${border}`);
}

/** EXAMPLE 1 - THE FOR...IN LOOP PROTOTYPE **/

const hullIntegrityPercent = {
	sectorAlpha: 98,
	sectorBeta: 45,
	sectorGamma: 12,
};

formatHeader("Scanning Damage Matrix (for...in)", false);

for (let sectorKey in hullIntegrityPercent) {
	// sectorKey holds the property names ("sectorAlpha", etc.)
	// We use bracket notation to dynamically resolve the matching number value
	let statusValue = hullIntegrityPercent[sectorKey];

	if (statusValue < 50) {
		console.log(`⚠️ HULL BREACH WARNING: ${sectorKey} is critical at ${statusValue}%!`);
	} else {
		console.log(`System Stable: ${sectorKey} reports nominal levels at ${statusValue}%.`);
	}
}

/** EXAMPLE 2 - OBJECT REFLECTION VIA FOR...OF **/

const lifeSupportReserves = {
	waterTons: 340,
	oxygenTons: 112,
	rationCrates: 450,
};

formatHeader("Extracting Value Vectors (Object.values)", false);

// Object.values returns: [340, 112, 450]
let valuesArray = Object.values(lifeSupportReserves);
let combinedMass = 0;

for (let singleValue of valuesArray) {
	combinedMass += singleValue;
}

console.log(`Total storage weight footprint calculated at: ${combinedMass} units.`);
