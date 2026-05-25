/**** ARROW FUNCTION SYNTAX: PRACTICE ****/

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
    TODO: Refactor the traditional 'knotsToMach' function above into a modern, 
    single-line concise arrow function with an implicit return. 
    Store it in a constant named 'convertKnotsToMach', then log
    a phrase or sentence using your new function.
*/
const convertKnotsToMach = knots => knots * 0.0015;

console.log(`Cruise velocity translates to Mach ${convertKnotsToMach(550)}.`);

/** EXERCISE 2: THRESHOLD OVERRIDE MATRIX **/

// Traditional Target Configuration:
function verifyShieldThreshold(currentEnergy, safeLimit) {
	return currentEnergy >= safeLimit;
}

/*
    TODO: Refactor the 'verifyShieldThreshold' function into a block-body arrow function 
    (keep the curly braces and use an explicit 'return' statement).
    Store it in a constant named 'isShieldSafe', then log a phrase or
    sentence using a value returned from your function.
*/

const isShieldSafe = (currentEnergy, safeLimit) => {
    return currentEnergy >= safeLimit;
};

console.log(`Shield integrity check: ${isShieldSafe(75, 70) ? "stable" : "critical"}.`);

/** EXERCISE 3: DEBUGGING THE HOISTING BLUNDER **/

/*
    TODO: The communications script below is completely broken! 
    Fix the code sequence so that it executes cleanly without throwing errors, 
    keeping the modern arrow syntax intact.
*/
/*(given code 
let systemAlert = formatRadioPacket("mcrn-roci", "DRIVE INITIALIZED");

const formatRadioPacket = (callsign, status) =>
	`[${callsign.toUpperCase()}] status update: ${status.toLowerCase()}`;

console.log(systemAlert);
*/
// corrected sequence 
const formatRadioPacket = (callsign, status) =>
    `[${callsign.toUpperCase()}] status update: ${status.toLowerCase()}`;

let systemAlert = formatRadioPacket("mcrn-roci", "DRIVE INITIALIZED");

console.log(systemAlert);
