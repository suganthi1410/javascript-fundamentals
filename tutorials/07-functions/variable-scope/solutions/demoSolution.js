/**** VARIABLE SCOPE: SOLUTION ****/

/*
    In JavaScript, Scope refers to the visibility and lifetime of a variable. 
    Not all variables can be accessed from everywhere in your script.

    Global Scope: Variables declared outside of any function or block. They 
    are visible to everyone and can be accessed or changed by any piece of 
    code anywhere in the script.

    Local (Function) Scope: Variables declared inside a specific function. 
    They belong solely to that function. The outside world has no idea they 
    exist, and they are completely erased from memory the moment the function 
    finishes running.

    Block Scope: Variables declared with let or const inside curly braces {} 
    (like an if statement or a for loop). They only exist inside those specific 
    brackets.
*/

/** EXAMPLE 1 - GLOBAL SCOPE **/ 

// Accessible anywhere in the entire program
let shipName = "Rocinante"; 

function displayShipName() {
    console.log("Transmitting identity: " + shipName); // Works!
}
displayShipName();

/** EXAMPLE 2 - LOCAL SCOPE (Parameters & Functions) **/

// 'incomingWaterTons' is a parameter. It acts EXACTLY like a local variable!
function processDriveCoolant(incomingWaterTons) {
    let conversionFactor = 0.85; // Another local variable
    
    // We can use both local variables freely inside here
    let activeCoolantTons = incomingWaterTons * conversionFactor;
    console.log("Coolant active in core: " + activeCoolantTons + " t");
}

processDriveCoolant(100);

// console.log(incomingWaterTons); 
// ❌ ERROR: incomingWaterTons is not defined (parameters vanish outside the function!)

// console.log(conversionFactor); 
// ❌ ERROR: conversionFactor is not defined (local variables vanish outside the function!)

/** EXAMPLE 3 - BLOCK SCOPE (Loops & Conditions) **/

let fuelPods = [20, 40, 10];

for (let i = 0; i < fuelPods.length; i++) {
    let temporaryCalculation = fuelPods[i] * 1.1; // Block scoped to this loop
    console.log("Pod adjusted weight: " + temporaryCalculation + " t");
}

// console.log(i); 
// ❌ ERROR: 'i' only exists inside the loop block
// console.log(temporaryCalculation); 
// ❌ ERROR: 'temporaryCalculation' vanished when the loop ended
