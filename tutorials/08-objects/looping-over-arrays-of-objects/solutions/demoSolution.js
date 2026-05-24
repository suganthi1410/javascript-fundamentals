/**** LOOPING OVER ARRAYS OF OBJECTS: SOLUTION ****/

/*
    In real-world software engineering, you will rarely deal with isolated object variables. 
    Instead, databases and web APIs typically send data as a collection matrix: an Array of Objects.

    The Nested Index Pipeline: To interact with this dataset, you combine your array knowledge 
    with your object knowledge.

    When you iterate through the array using a loop, your loop variable represents the entire object 
    instance at that specific index.

    Once you isolate that individual object instance, you immediately chain a dot accessor to grab or 
    modify its properties (e.g., fleetArray[i].propertyName).

    Data Processing Patterns: This architecture lets you scale your scripts from managing a single 
    vehicle to filtering, aggregating, and executing changes across hundreds of individual data points 
    simultaneously.
*/

// Utility function definition
function formatHeader(title, isAlert) {
	let cleanTitle = title.trim().toUpperCase();
	let border = isAlert ? `🚨 ==================== 🚨` : `🪐 -------------------- 🪐`;
	console.log(`\n${border}\n  ${cleanTitle}\n${border}`);
}

// A collections matrix representing current operating ships in our sector
const sectorFleet = [
	{ name: "Rocinante", cargoWeight: 120, status: "Active" },
	{ name: "Weeping Somnambulist", cargoWeight: 450, status: "Maintenance" },
	{ name: "Nathan Hale", cargoWeight: 80, status: "Active" },
];

/** EXAMPLE 1 - DISPATCH PATROL ENGINE **/

formatHeader("Fleet Status Sweep (for...of)", false);

// Using for...of because an array is a standard iterable list
for (let vessel of sectorFleet) {
	// 'vessel' represents one whole object profile from our collection array
	if (vessel.status === "Active") {
		console.log(
			`Vessel ${vessel.name} is on active patrol. Current load payload: ${vessel.cargoWeight}t.`
		);
	} else {
		console.log(`NOTICE: ${vessel.name} is offline. Skipping tactical routing.`);
	}
}

/** EXAMPLE 2 - TOTAL LOGISTICS CALCULATION **/

formatHeader("Aggregating Total Cargo Mass (Standard for)", false);

let totalSectorTonnage = 0;

// Using a standard index loop to calculate combined totals
for (let i = 0; i < sectorFleet.length; i++) {
	// Drilling directly into the index, then chaining the property key
	totalSectorTonnage += sectorFleet[i].cargoWeight;
}

console.log(`Combined payload mass across all regional hulls: ${totalSectorTonnage}t.`);
