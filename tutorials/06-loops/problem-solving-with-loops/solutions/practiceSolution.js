const readline = require("readline-sync");

/**** PROBLEM-SOLVING WITH LOOPS: PRACTICE SOLUTION ****/

/** EXERCISE 1: THE FUEL CALCULATOR **/

/*
    TODO: 
    1. Ask the user: "How many fuel pods are being loaded?"
    2. Make sure the input is a number.
    3. Use a 'for' loop to ask the user for the weight of each pod.
    4. Calculate and print the total weight of all pods combined.
*/
let podCount = readline.questionInt("How many fuel pods are being loaded? ");
let totalWeight = 0;

for (let i = 1; i <= podCount; i++) {
	let weight = readline.questionInt(`Enter weight for pod #${i}: `);
	totalWeight += weight;
}
console.log("Total Fuel Weight: " + totalWeight);

/** EXERCISE 2: EMERGENCY SHUTDOWN **/

/*
    TODO: 
    1. Create a while loop that simulates a core overheating.
    2. Start 'coreTemp' at 100.
    3. In each loop, ask the user: "Press 's' to spray coolant: "
    4. If they press 's', drop the temp by 20. (Otherwise, do nothing.)
    5. The loop should stop once the temp is 0 or below.
    6. Print a final confirmation that the core is stabilized.
*/
let coreTemp = 100;
while (coreTemp > 0) {
	console.log(`Current Core Temp: ${coreTemp}`);
	let action = readline.question("Press 's' to spray coolant: ");
	if (action === "s") {
		coreTemp -= 20;
	}
}
console.log("Core stabilized at 0.");

/** EXERCISE 3: THE MENU SYSTEM **/

/*
    TODO:
    1. Create a 'do...while' loop.
    2. Inside, print: "1. View Logs", "2. System Status", "3. Exit"
    3. Ask the user for their choice.
    4. The loop should keep running UNLESS the user chooses "3".
    5. Once the loop exits, print a confirmation that the user is logging out.
*/
let choice;
do {
	console.log("\n--- SHIP MENU ---");
	console.log("1. View Logs\n2. System Status\n3. Exit");
	choice = readline.question("Select an option: ");

	if (choice === "1") console.log("Showing logs...");
	if (choice === "2") console.log("All systems nominal.");
} while (choice !== "3");
console.log("Logging out...");

// Great job!
