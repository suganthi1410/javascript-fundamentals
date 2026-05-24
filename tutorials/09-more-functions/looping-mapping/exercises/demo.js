/**** SPECIAL ARRAY METHODS: LOOPING AND MAPPING ****/

/** EXAMPLE 1 - FOR-EACH SIDE EFFECTS **/

const rawCoreVoltages = [112, 115, 108, 122];

console.log("--- SCANNING VOLTAGE ARRAY (.forEach) ---");

// DEMO: Use .forEach() to generate a printout for each voltage in the array.

/** EXAMPLE 2 - MAP DATA RECONSTRUCTION **/

const defenseSatellites = [
	{ id: "SAT-1", ammoCount: 40, active: true },
	{ id: "SAT-2", ammoCount: 0, active: true },
	{ id: "SAT-3", ammoCount: 85, active: false },
];

// DEMO: Use .map() to create a new array with a copy of all objects, updating
// the ammoCount property to 100 for each object.

// DEMO: Print the ammoCount property of the second element in both arrays

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
