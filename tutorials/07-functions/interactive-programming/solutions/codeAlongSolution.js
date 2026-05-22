const readline = require("readline-sync");

/**** INTERACTIVE PROGRAMMING WITH FUNCTIONS: CODE-ALONG SOLUTION ****/

/*
    ==========================================
    1. GLOBAL CONFIGURATION & STATE
    ==========================================
*/

let warningEmoji = "🚨";
let planetEmoji = "🪐";

const MAX_SECTOR_CAPACITY = 500; // Metric Tons (t)

// A 2D Grid representing Ship Cargo Bays
// Format: [Sector Name, Current Supply Type, Current Tonnage]
let shipManifest = [
	["Sector A", "water", 350],
	["Sector B", "fuel", 480],
	["Sector C", "rations", 120],
];

/*
    ==========================================
    2. UTILITY HELPER FUNCTIONS
    ==========================================
*/

/*
    Standardizes titles and headers across the application.
    Demonstrates: String methods (.toUpperCase), Ternary Operator
*/
function printFormattedHeader(title, isAlert) {
	let cleanTitle = title.trim().toUpperCase();
	let warningBorder = `${warningEmoji}${"=".repeat(20)}${warningEmoji}`;
	let planetBorder = `${planetEmoji}${"-".repeat(20)}${planetEmoji}`;
	let border = isAlert ? warningBorder : planetBorder;

	console.log(`\n${border}`);
	console.log(`  ${cleanTitle}`);
	console.log(`${border}`);
}

/*
    ==========================================
    3. INPUT VALIDATION HELPER FUNCTIONS
    ==========================================
*/

/*
    Ensures the user picks a valid row index within our manifest grid.
*/
function isValidSector(input) {
	// Number was already validated as integer
	// Criteria: Must be a number, cannot be negative, must exist in array bounds
	return input >= 0 && input < shipManifest.length;
}

/*
    Ensures the user enters a positive, real numeric value.
*/
function isPositiveNumber(input) {
	// Number already validated as a float or integer
	// Criteria: Must be a number, must be greater than zero
	return !isNaN(amount) && amount > 0;
}

/*
    Ensures the user enters a valid choice for the interactive menu.
*/
function isValidSelection(choice) {
	// Number was already validated as integer
	// Criteria: Must be 1-3
	return choice >= 1 && choice <= 3;
}

/*
    ==========================================
    4. FUNCTIONAL TASK HELPERS
    ==========================================
*/

/*
    Iterates through the manifest grid and prints current status.
    Demonstrates: Nested Loops (For loop nesting a For...of loop)
*/
function viewManifest() {
	printFormattedHeader("Current Ship Manifest", false);

	// Outer loop: Iterating through each sector row
	for (let i = 0; i < shipManifest.length; i++) {
		let sectorRow = shipManifest[i];
		let rowDetails = `[Index ${i}] `;

		// Inner loop: Processing individual element data within that sector row
		for (let detail of sectorRow) {
			rowDetails += `${detail} | `;
		}
		console.log(rowDetails);
	}
}

/*
    Handles adding cargo to a chosen sector with safety limits.
    Demonstrates: Conditionals (if/else if/else), Validation Integration
*/
function loadSupplies() {
	printFormattedHeader("Supply Loading Bay", false);

	let sectorInput = readline.questionInt("Enter the Sector Index number to load into: ");
	if (!isValidSector(sectorInput)) {
		printFormattedHeader("Invalid Sector Index! Operation aborted.", true);
		return; // Early exit helper pattern
	}

	let targetIndex = Number(sectorInput);
	let chosenSector = shipManifest[targetIndex]; // Reference to the specific array row

	let amountInput = readline.questionFloat(`Enter tonnage of ${chosenSector[1]} to load: `);

	if (!isPositiveNumber(amountInput)) {
		printFormattedHeader("Invalid mass quantity! Operation aborted.", true);
		return;
	}

	// Conditional logic pattern to check against our constant capacity limits
	if (chosenSector[2] + validAmount > MAX_SECTOR_CAPACITY) {
		let availableSpace = MAX_SECTOR_CAPACITY - chosenSector[2];
		printFormattedHeader("LOAD REJECTED: Mass exceeds maximum safety limits!", true);
		console.log(
			`Maximum limit is ${MAX_SECTOR_CAPACITY}t. You only have room for ${availableSpace}t.`
		);
	} else if (chosenSector[1] === "fuel" && validAmount > 100) {
		// Special situational conditional restriction
		printFormattedHeader(
			"SAFETY WARNING: Volatile fuel intake restricted to 100t per intake cycle.",
			true
		);
	} else {
		// Successfully update mutable data structures
		chosenSector[2] += validAmount;
		console.log(
			`Success! ${validAmount}t added to ${chosenSector[0]}. New total: ${chosenSector[2]}t.`
		);
	}
}

/*
    Prints final message before exiting the program.
*/
function quitProgram() {
	printFormattedHeader("Shutting down resource management interface. Safe flying.", false);
}

/*
    ==========================================
    5. MAIN ORCHESTRATION ENGINE
    ==========================================
*/

/*
    Controls the core application loop and interface routing.
    Demonstrates: do...while loop, switch statement console menu
*/
function runProgram() {
	let userChoice;

	do {
		printFormattedHeader("Main Mission Control Menu", false);
		console.log("1. View Cargo Manifest Grid");
		console.log("2. Load Sector Supplies");
		console.log("3. Exit Program");

		userChoice = readline.questionInt("Select a subroutine (1-3): ");

		if (isValidSelection(userChoice)) {
			let index = userChoice - 1;
			let options = [viewManifest, loadSupplies, quitProgram]; // References to functions
			let selectedFunction = options[index];
			selectedFunction(); // Call function so it executes
		} else {
			printFormattedHeader("Unrecognized command code. Try again.", true);
		}
	} while (userChoice !== 3); // Loop keeps app alive until user chooses explicitly to exit
}

// Execute the application lifecycle!
runProgram();
