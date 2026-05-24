/**** INTRODUCTION TO FUNCTIONS: SOLUTION ****/

/*
    Up until now, your code has executed sequentially from 
    top to bottom. If you wanted to run a specific task three 
    times, you had to write a loop or copy-paste the code.

    A function is a named block of code designed to perform a 
    specific task that you write once, and can then reuse 
    whenever you want.

    There are two phases to using a function:
        - Declaration: Defining the block of code and giving 
        it a name. This does not run the code, it just makes 
        it available for use when needed.
        - Invocation (Calling): Pressing the "start" button on 
        the machine, using parentheses (). This tells JavaScript 
        to execute the code inside.
*/

/** EXAMPLE 1 - DECLARING & CALLING **/

// Phase 1: Declaration (The blueprint)
function deploySolarPanels() {
	console.log("Unlatching hinges...");
	console.log("Solar panels fully deployed. ☀️");
}

// Phase 2: Invocation (Actually running it)
deploySolarPanels();
deploySolarPanels(); // Reusable! We just ran it a second time.

/** EXAMPLE 2 - CODE ORGANIZATION **/

// Functions help clean up our main execution flow
function soundEmergencySiren() {
	console.log("🚨 ALERT: HULL BREACH DETECTED! 🚨");
}

let hullBreach = true;

if (hullBreach) {
	soundEmergencySiren();
}
