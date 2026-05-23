/**** ARROW FUNCTION SYNTAX: SOLUTION ****/

/*
    Arrow Functions provide a highly streamlined, modern syntax for writing functions 
    in JavaScript. However, they are not just a cosmetic upgrade; they introduce 
    fundamental differences in how your code executes.

    The Syntax Bridge: To master arrow functions, observe how a traditional function 
    collapses in three stages:
        - Traditional Declaration: Uses the function keyword and a named identifier.
        - Block-Body Arrow Function: Drops the function keyword, stores the logic in 
        a variable, and places an arrow (=>) between the parameters and the opening 
        curly brace {}. Requires an explicit return keyword.
        - Concise-Body Arrow Function (Implicit Return): If the function only contains 
        a single expression, you can remove the curly braces and the return keyword 
        entirely. The single line of code is automatically calculated and returned.

    The Hoisting Guardrail: Traditional function declarations are hoisted by the 
    JavaScript engine, meaning they are lifted to the top of the file at runtime 
    and can be safely invoked before they are written in the code. Arrow functions 
    stored inside const variables are not hoisted. They obey standard variable 
    scoping rules, meaning calling them before their declaration line will trigger a 
    fatal ReferenceError.
*/

/** EXAMPLE 1 - THE SYNTAX MIGRATION BRIDGE **/

// STAGE 1: Traditional Named Function Declaration
function traditionalCalculateFuel(mass) {
    return mass * 11.2;
}

// STAGE 2: Block-Body Arrow Function (Explicit Return)
const blockArrowCalculateFuel = (mass) => {
    return mass * 11.2; 
};

// STAGE 3: Concise-Body Arrow Function (Implicit Return)
// Clean, single-line configuration. The value is automatically returned.
const conciseCalculateFuel = mass => mass * 11.2;

// Invoking the concise arrow function
console.log(`Implicit Return Fuel Calculation: ${conciseCalculateFuel(100)} t`);


/** EXAMPLE 2 - THE HOISTING PARADOX **/

// 1. Testing Traditional Hoisting (Succeeds)
console.log(`Traditional Probe Reading: ${readTraditionalSensor()}`); 

function readTraditionalSensor() {
    return "Telemetry Active";
}

// 2. Testing Arrow Function Hoisting (Fails!)
// UNCOMMENTING THE LINE BELOW WILL CRASH THE PROGRAM WITH A REFERENCEERROR:
// console.log(`Arrow Probe Reading: ${readArrowSensor()}`);

const readArrowSensor = () => "Telemetry Active";

// Correct execution order requires calling the arrow constant AFTER it is written:
console.log(`Arrow Probe Reading (Correct Order): ${readArrowSensor()}`);
