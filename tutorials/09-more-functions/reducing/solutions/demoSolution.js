/**** REDUCING: SOLUTION ****/

/*
    .reduce() is arguably the most powerful and versatile array method in 
    JavaScript. While methods like .map() or .filter() are designed to 
    create new arrays, .reduce() is engineered to condense an entire array 
    of data down into a single, comprehensive output value (such as a single 
    number, a single string, or even a single aggregated object).

    To understand .reduce(), you must track its two core architectural components:
        - The Initial Value: This is the optional second argument passed to the 
        .reduce() method (e.g., 0). It sets the starting point for your calculation.
        - The Accumulator Callback: This function loops through your array and 
        accepts two primary arguments:
            - accumulator: The rolling, running total that accumulates the work done 
            by previous steps. Whatever value this callback returns becomes the 
            starting accumulator value for the next loop cycle.
            - currentValue: The specific item currently being evaluated in the 
            active loop step.
*/

/** EXAMPLE 1 - COMMODITY AGGREGATION ON PRIMITIVES **/

const sectorWaterRationsTons = [45, 12, 88, 34, 50];

// Goal: Add all these individual shipment values together into one sum total
// 0 is passed at the very end as our explicit Initial Value starting point
const totalWaterReserves = sectorWaterRationsTons.reduce((accumulator, currentVal) => {
	// We add the current item to our rolling total and return it to the next step
	return accumulator + currentVal;
}, 0);

console.log(`Aggregate Regional Water Supply: ${totalWaterReserves} tons.`);

/** EXAMPLE 2 - DATA EXTRACTS FROM OBJECT MATRIXES **/

const crewManifest = [
	{ name: "James Holden", role: "Captain", dailyCalorieRequirement: 2500 },
	{ name: "Naomi Nagata", role: "Chief Engineer", dailyCalorieRequirement: 2200 },
	{ name: "Amos Burton", role: "Mechanic", dailyCalorieRequirement: 3100 },
	{ name: "Alex Kamal", role: "Pilot", dailyCalorieRequirement: 2400 },
];

// Calculate total life support logistics by pooling food numbers out of object keys
const totalDailyShipBurn = crewManifest.reduce((acc, member) => {
	// acc represents the rolling calories sum; member represents the current object instance
	return acc + member.dailyCalorieRequirement;
}, 0); // Always declare your initial state (0) when counting object attributes!

console.log(`Total Vessel Daily Ration Depletion: ${totalDailyShipBurn} kcal.`);
