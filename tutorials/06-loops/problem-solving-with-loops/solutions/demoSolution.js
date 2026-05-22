const input = require("input-sync");

/**** PROBLEM-SOLVING WITH LOOPS: SOLUTION ****/

/*
    When solving real-world problems, the choice of loop depends 
    on the nature of the data:
        - Use a for loop when you have a set list (like an array 
          of cargo) and you need to touch every item or know the 
          specific index.
        - Use a while loop when the "end" depends on the user or 
          an external condition (like "Keep asking for a password 
          until it's correct").
        - Use nested loops when you are dealing with a hierarchy 
          (e.g., searching through multiple rooms, where each room 
          has multiple crates).

    The Logic Pattern:
        1. Capture: Get input from the user.
        2. Evaluate: Check the input against your logic.
        3. Repeat/Break: Decide if the loop should run again.

*/

/** PROBLEM 1: SUSTAINED INPUT (The Password) **/

let authorized = false;

// Goal: Don't let the user proceed until they enter "Mars2026"
while (!authorized) {
	let password = input.question("Enter Mission Authorization Code: ");
	if (password === "Mars2026") {
		console.log("Access Granted.\n");
		authorized = true;
	} else {
		console.log("Incorrect code. Try again.");
	}
}

/** PROBLEM 2: DATA PROCESSING (The Inventory) **/

let shipInventory = ["Oxygen", "Water", "Rations", "Fuel", "Water"];
let searchItem = input.question("What item are you looking for in storage? ");
let count = 0;

// Goal: Let the user "search" an array and report findings.
for (let item of shipInventory) {
	if (item.toLowerCase() === searchItem.toLowerCase()) {
		count++;
	}
}

console.log(`Found ${count} units of ${searchItem}.\n`);

/** PROBLEM 3: NESTED SEARCH (The Cargo Bay) **/

let cargoGrid = [
	["A1", "A2"],
	["B1", "B2"],
];
let target = "B1";
console.log("Scanning Cargo Grid for B1...");

// Goal: Find a specific crate in a 2D grid.
for (let i = 0; i < cargoGrid.length; i++) {
	for (let j = 0; j < cargoGrid[i].length; j++) {
		if (cargoGrid[i][j] === target) {
			console.log(`Target ${target} located at Sector ${i}, Slot ${j}`);
		}
	}
}
