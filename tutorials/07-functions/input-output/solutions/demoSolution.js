/**** FUNCTION INPUT & OUTPUT: SOLUTION ****/

/*
    To make a function truly reusable, it needs to accept inputs 
    and generate outputs.

    Parameters: These are the placeholder variables defined in the 
    function's declaration. They act like empty slots waiting to be 
    filled.

    Arguments: This is the actual data you pass into those slots when 
    you invoke (call) the function.

    The return Keyword: Functions naturally execute code, but once they 
    finish, they evaluate to undefined unless you explicitly tell them 
    to send a value back using return. Think of return as the conveyor 
    belt that sends the finished product out of the function factory so 
    it can be saved into a variable.

    The Stop Rule: As soon as a function hits a return statement, it 
    terminates immediately. No code below a return statement inside 
    that function will run.
*/

/** EXAMPLE 1 - PARAMETERS & ARGUMENTS **/

// 'crewName' is the parameter (the variable placeholder)
function welcomeCrewMember(crewName) {
	console.log(`Welcome back to the bridge, ${crewName}.`);
}

// "Holden" and "Alex" are the arguments (the real data)
welcomeCrewMember("Holden");
welcomeCrewMember("Alex");

/** EXAMPLE 2 - MULTIPLE INPUTS **/

function calculateVelocity(distance, time) {
	console.log(`Calculating speed for ${distance} meters over ${time} seconds...`);
	let speed = distance / time;
	console.log(`Velocity: ${speed} m/s`);
}

calculateVelocity(100, 10); // Order matters! distance = 100, time = 10

/** EXAMPLE 3 - RETURN VALUES **/

// Inputs and outputs are measured in Metric Tons (t)
function synthesizeWaterReactionMass(hydrogenTons, oxygenTons) {
	let waterCompound = hydrogenTons + oxygenTons;
	return waterCompound; // Sends the total tonnage back to the ship's computer

	// console.log("This will never print!");
	// // Unreachable code due to early return
}

// Capturing the output: 50t of Hydrogen combined with 25t of Oxygen
let currentReactionMass = synthesizeWaterReactionMass(50, 25);
console.log(`Drive Reserves Updated: ${currentReactionMass} metric tons of H2O loaded.`);
