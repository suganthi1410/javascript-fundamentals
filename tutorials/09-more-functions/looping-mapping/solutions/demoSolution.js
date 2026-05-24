/**** SPECIAL ARRAY METHODS: LOOPING AND MAPPING: SOLUTION ****/

/*
    Now that you understand how Higher-Order Functions use inline callback 
    contractors, you can master JavaScript's built-in array iteration 
    methods. The two most fundamental tools for looping through arrays are 
    .forEach() and .map().

    .forEach() (The Action Executor): This method is a pure loop utility. 
    It steps through your array items one by one and executes your inline 
    anonymous function for each element. It does not return a value. You use 
    it when you want to trigger "side effects," such as logging lines to the 
    terminal or updating a UI widget.

    .map() (The Array Transformer): This method is an immutable data factory. 
    It loops through your array, passes each item into your callback, and 
    takes whatever value your callback returns to construct a brand-new array 
    of the exact same length. The original array remains completely untouched. 
    You use it when you need to copy and alter data structures safely.
*/

/** EXAMPLE 1 - FOR-EACH SIDE EFFECTS **/

const rawCoreVoltages = [112, 115, 108, 122];

console.log("--- SCANNING VOLTAGE ARRAY (.forEach) ---");

// .forEach() takes at least one argument representing the element but you can
// also designate a second parameter to represent the index.
// Here we use both to generate a diagnostic log printout
rawCoreVoltages.forEach((voltage, index) => {
	console.log(`Sensor Grid Node-0${index + 1}: Operating at ${voltage}V.`);
});

/** EXAMPLE 2 - MAP DATA RECONSTRUCTION **/

const defenseSatellites = [
	{ id: "SAT-1", ammoCount: 40, active: true },
	{ id: "SAT-2", ammoCount: 0, active: true },
	{ id: "SAT-3", ammoCount: 85, active: false },
];

// Let's use .map() to duplicate the array and restock ALL satellites to full
// ammo (100). To maintain immutability and protect objects, we use a shallow
// clone spread inside the map!
const restockedSatellites = defenseSatellites.map(satellite => {
	return {
		...satellite, // Copy all existing properties safely
		ammoCount: 100, // Overwrite this specific field
	};
});

// Original data remains unmutated and pristine!
console.log("\nOriginal Battery 2 Ammo:", defenseSatellites[1].ammoCount); // Output: 0
console.log("Restocked Battery 2 Ammo:", restockedSatellites[1].ammoCount); // Output: 100
