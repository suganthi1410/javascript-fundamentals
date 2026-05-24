/**** MULTI-DIMENSIONAL ARRAYS: SOLUTION ****/

/*
    A multi-dimensional array is simply an array that contains 
    other arrays. Think of it like a filing cabinet: the cabinet 
    is the main array, each drawer is a sub-array, and inside the 
    drawers are the actual files.

    The Grid System: This is most commonly used to represent grids, 
    maps, or coordinate systems (like an X and Y axis).

    Double Bracket Notation [][]: To get to a specific value, you 
    need two references.

    The first bracket [i] selects the inner array (the row).

    The second bracket [j] selects the item inside that inner array 
    (the column).

    Visualizing it: matrix[row][column]
*/

/** EXAMPLE 1 - THE NESTED ARRAY **/

let solarSystemMap = [
	["Mercury", "Venus"], // Row 0
	["Earth", "Mars"], // Row 1
	["Jupiter", "Saturn"][("Uranus", "Neptune")], // Row 2 // Row 3
];

/** EXAMPLE 2 - ACCESSING NESTED DATA **/

// Step 1: Get the second row (index 1)
let secondRow = solarSystemMap[1]; // ["Earth", "Mars"]

// Step 2: Get "Mars" from that row (index 1)
let planetMars = solarSystemMap[1][1];
console.log(planetMars); // "Mars"

/** EXAMPLE 3 - UPDATING NESTED DATA **/

// Change "Mercury" to "MERCURY"
solarSystemMap[0][0] = "MERCURY";
console.log(solarSystemMap[0]); // ["MERCURY", "Venus"]

/** EXAMPLE 4 - THREE DIMENSIONS (The Cube) **/

// Arrays can go even deeper! Here's a 3D array.
let cube = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(cube[0][1][0]); // 3
