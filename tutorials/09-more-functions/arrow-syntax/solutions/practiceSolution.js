/**** ARROW FUNCTION SYNTAX: PRACTICE SOLUTION ****/

/*
    Practice collapsing traditional declarations down into streamlined arrow 
    syntaxes while managing execution sequencing constraints.
*/

/** EXERCISE 1: COLLAPSING TRAJECTORY CONVERSIONS **/

// Traditional Target Configuration:
function knotsToMach(knots) {
	return knots * 0.0015;
}

/*
    Refactor the traditional 'knotsToMach' function above into a modern, 
    single-line concise arrow function with an implicit return. 
    Store it in a constant named 'convertKnotsToMach'.
*/
const convertKnotsToMach = knots => knots * 0.0015;

console.log(`Cruising Velocity: Mach ${convertKnotsToMach(450)}`);

/** EXERCISE 2: THRESHOLD OVERRIDE MATRIX **/

// Traditional Target Configuration:
function verifyShieldThreshold(currentEnergy, safeLimit) {
	return currentEnergy >= safeLimit;
}

/*
    Refactor the 'verifyShieldThreshold' function into a block-body arrow function 
    (keep the curly braces and use an explicit 'return' statement).
    Store it in a constant named 'isShieldSafe'.
*/
const isShieldSafe = (currentEnergy, safeLimit) => {
	return currentEnergy >= safeLimit;
};

console.log(`Deflector integrity check passed: ${isShieldSafe(85, 70)}`);

/** EXERCISE 3: DEBUGGING THE HOISTING BLUNDER **/

/*
    The communications script below is completely broken! 
    Fix the code sequence so that it executes cleanly without throwing errors, 
    keeping the modern arrow syntax intact.
*/

// FIX: Relocated the constant declaration ABOVE its invocation point
const formatRadioPacket = (callsign, status) =>
	`[${callsign.toUpperCase()}] status update: ${status.toLowerCase()}`;

let systemAlert = formatRadioPacket("mcrn-roci", "DRIVE INITIALIZED");
console.log(systemAlert);
