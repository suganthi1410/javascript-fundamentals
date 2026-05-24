/**** LOOPING OVER ARRAYS OF OBJECTS ****/

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

// DEMO: Loop over the array of ship objects.
//  - If the vessel is active,print a report with their payload.
//  - If it is undergoing maintenance,print a report stating that instead.

/** EXAMPLE 2 - TOTAL LOGISTICS CALCULATION **/

formatHeader("Aggregating Total Cargo Mass (Standard for)", false);

let totalSectorTonnage = 0;

// DEMO: Loop over the array to calculate combined total

// DEMO: Log a report on the total tonnage

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
