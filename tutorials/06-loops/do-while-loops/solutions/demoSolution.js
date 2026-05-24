/**** DO...WHILE LOOPS: SOLUTION ****/

/*
    The do...while loop is the cousin of the while loop, with 
    one major difference: it executes the code block first, and 
    then checks the condition.

    Guaranteed Execution: Because the check happens at the bottom, 
    the code inside the do block will always run at least once, 
    even if the condition is false from the very beginning.

    Use Case: Think of a "Check Engine" light or a "User Login" 
    prompt. You want to perform the check or show the prompt at 
    least once before deciding whether you need to do it again.

    The Syntax: do { ... } while (condition); 
    (Note the semicolon at the end!)
*/

/** EXAMPLE 1 - THE BASIC FLIP **/

let energy = 0;

// A standard while loop wouldn't run at all here.
while (energy > 0) {
	console.log("This will not print.");
}

// A do...while runs once, then stops.
do {
	console.log("System initialization sequence started...");
} while (energy > 0);

/** EXAMPLE 2 - USER INPUT SIMULATION **/

let accessGranted = false;
let attempts = 0;

do {
	attempts++;
	console.log("Attempting to bypass security... Attempt: " + attempts);

	if (attempts === 3) {
		accessGranted = true;
	}
} while (!accessGranted);

console.log("Access override successful.");
