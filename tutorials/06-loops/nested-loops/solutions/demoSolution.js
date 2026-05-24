/**** NESTED LOOPS: SOLUTION ****/

/*
    A Nested Loop is simply a loop inside another loop. This is 
    the standard way to process Multi-Dimensional Arrays (grids).

    The Clock Metaphor: Think of the nested loop like a clock. 
    The outer loop is the "Hour hand" and the inner loop is the 
    "Minute hand." The minute hand must complete a full circle 
    (0 to 59) before the hour hand moves forward by one.

    Row and Column: In a grid, the outer loop usually iterates 
    through the rows, while the inner loop iterates through the 
    items (columns) inside that specific row.

    The Variables: Traditionally, we use i for the outer loop 
    and j for the inner loop.
*/

/** EXAMPLE 1 - THE BASIC GRID **/

for (let i = 1; i <= 2; i++) {
	console.log("Outer Loop (Row): " + i);

	for (let j = 1; j <= 3; j++) {
		console.log("  Inner Loop (Column): " + j);
	}
}

/** EXAMPLE 2 - SCANNING A 2D ARRAY **/

let cargoShip = [
	["Water", "Food"],
	["Tools", "Fuel"],
];

// Outer loop goes through the rows
for (let i = 0; i < cargoShip.length; i++) {
	console.log("Checking Row " + i);

	// Inner loop goes through items in THAT row
	for (let j = 0; j < cargoShip[i].length; j++) {
		console.log("-- Found: " + cargoShip[i][j]);
	}
}
