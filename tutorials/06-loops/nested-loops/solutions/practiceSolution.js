/**** NESTED LOOPS: PRACTICE SOLUTION ****/

/*
    Use nested loops to navigate grids and 
    multi-dimensional mission data.
*/

/** EXERCISE 1: THE COORDINATE GRID **/

/*
    Create a nested loop. The outer loop should run 3 times 
    (i = 0, 1, 2). The inner loop should run 2 times (j = 0, 1). 
    Log the coordinates as "Row: i, Col: j".
*/
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 2; j++) {
		console.log(`Row: ${i}, Col: ${j}`);
	}
}

/** EXERCISE 2: STAR MAP SCANNER **/

let starMap = [
	["Alpha", "Beta"],
	["Gamma", "Delta"],
	["Epsilon", "Zeta"],
];

/*
    Use nested for...of loops to print every star name 
    in the starMap. 
    (Hint: The outer loop gets the 'row', the inner gets the 'star').
*/
for (let row of starMap) {
	for (let star of row) {
		console.log("Star detected: " + star);
	}
}

/** EXERCISE 3: SECURITY GRID INITIALIZATION **/

let securityGrid = [
	[null, null],
	[null, null],
];

/*
    Use nested for loops (using i and j) to change every 
    'null' in the securityGrid to the string "Active". 
    Print the final grid.
*/
for (let i = 0; i < securityGrid.length; i++) {
	for (let j = 0; j < securityGrid[i].length; j++) {
		securityGrid[i][j] = "Active";
	}
}
console.log(securityGrid);

/** EXERCISE 4: THE MULTIPLICATION TABLE (SENSORS) **/

/*
    Use nested loops to print a small "multiplication table" 
    from 1 to 3. The output should look like:
    "1 * 1 = 1"
    "1 * 2 = 2" ... up to "3 * 3 = 9"
*/
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}

// Great job!
