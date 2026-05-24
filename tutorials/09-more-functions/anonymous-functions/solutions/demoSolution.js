/**** ANONYMOUS FUNCTIONS: SOLUTION ****/

/*
    Up until now, every function you've written has had a name or an alias 
    stored in a variable so you could reuse it later.

    A true Anonymous Function has no name, no variable variable reference, 
    and no alias. It is written in-place directly where it is needed, executed 
    once, and immediately discarded by the computer's memory.

    Think of it like a single-use sticky note. You write the instruction 
    directly inside a system tool, the tool reads it once, and then shreds 
    the note. The most common way to do this in JavaScript is passing a 
    succinct arrow function expression directly into native tools like 
    setTimeout(callback, delayMs) to execute delayed actions.
*/

/** EXAMPLE 1 - IMMEDIATE IN-PLACE EXECUTION **/

// What you already know: an entire function definition can be stored under an alias
const logScannerReport = sector => console.log(`Internal scanner pinged at ${sector}.`);

// The alias is used to call the reusable function
logScannerReport("Sector Delta");
logScannerReport("Sector Alpha");

// A truly anonymous function is run instantly, right where it is defined, 
// by wrapping the arrow definition in grouping parentheses and calling it
// with (argument) at the end.
(sector => console.log(`Internal scanner pinged at ${sector}.`))("Sector Beta");

/** EXAMPLE 2 - A SIMPLE IN-PLACE USE CASE  **/

const blastOff = () => console.log("🚀 Blastoff! Capsule has cleared the launchpad.");

console.log("Initializing countdown sequence... 3... 2... 1...");

// We call JavaScript's built-in timer tool, setTimeout(), which takes two arguments:
//  - Argument 1: The name of a function (or a definition), to be called after...
//  - Argument 2: The delay time in milliseconds (e.g., 3000ms = 3s).
setTimeout(blastOff, 3000);

// Now, we replace blastOff with a truly anonymous, single-use function instead
setTimeout(() => console.log("🚀 Blastoff! Capsule has cleared the launchpad."), 3000);
