/**** REDUCTIVE RECURSION: SOLUTION ****/

/*
    When using recursion to calculate or reduce a data set down to a single 
    value, you must return the recursive call itself.

    Imagine a chain of command on a starship: The Captain asks the Commander 
    for a status report, the Commander asks the Lieutenant, and the Lieutenant 
    asks the Chief Engineer. The Chief Engineer finds the data (The Base Case) 
    and hands it back to the Lieutenant. For that data to ever reach the Captain, 
    the Lieutenant must hand it to the Commander, and the Commander must hand it 
    to the Captain.

    In code, that hand-off is the return keyword. If any officer forgets to  
    return, the chain breaks, and the Captain gets nothing.

    A note about the call stack: Every time a function calls itself, JavaScript 
    pauses the current execution and pushes a new frame onto the Call Stack, 
    like stacking plates in a cafeteria. In a reductive loop, these plates stack 
    up until the Base Case is finally reached; at that moment, the stack 
    reverses, removing one plate at a time and passing its returned value down 
    to the plate below it until the stack is empty and the final result is 
    delivered.
*/

/** EXAMPLE - FUNCTIONAL REDUCTION **/

// A ship has connected modular cargo cargo pods. Each pod knows its own mass 
// and points to the next connected pod's mass in an array index.
let podWeights = [12, 8, 15, 5]; // Masses in metric tons (t)

function calculateTotalCargoMass(index) {
    // 1. BASE CASE: If we've checked every pod index, return a mass of 0
    if (index >= podWeights.length) {
        return 0;
    }

    // 2. RECURSIVE CASE: Return current mass + the recursive mass of the remaining pods
    // CRITICAL: We MUST use the 'return' keyword here so the values bubble back up!
    return podWeights[index] + calculateTotalCargoMass(index + 1);
}

// Start calculating from the very first pod (index 0)
let absoluteTotalMass = calculateTotalCargoMass(0);
console.log("Total Fleet Cargo Mass: " + absoluteTotalMass + " t"); // 40 t
