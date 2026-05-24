/**** FOR LOOPS: SOLUTION ****/

/*
    A for loop is used when you know exactly how many times you 
    want to repeat an action. It is the go-to tool for "iterating" 
    (looping) through an array from start to finish.

    A for loop has three parts inside its parentheses, separated by 
    semicolons:
        - Initialization: Where do we start? (Usually let i = 0).
        - Condition: How long do we keep going? (As long as this is 
          true, the loop runs).
        - Iteration: What do we do at the end of each loop? (Usually 
          i++ to move to the next index).

    The i Variable: This stands for "index." Inside the loop, i changes 
    every time, allowing us to access elements with array[i] dynamically!
*/

/** EXAMPLE 1 - BASIC COUNTING **/

// Start at 1, run while i <= 3, add 1 each time
for (let i = 1; i <= 3; i++) {
	console.log("Ignition Sequence..." + i);
}

/** EXAMPLE 2 - LOOPING THROUGH AN ARRAY **/

let planets = ["Mercury", "Venus", "Earth", "Mars"];

// We use i < planets.length because the last index is length - 1
for (let i = 0; i < planets.length; i++) {
	console.log("Exploring: " + planets[i]);
}

/** EXAMPLE 3 - THE TOTALIZER (Accumulator Pattern) **/

let fuelPods = [10, 20, 30];
let totalFuel = 0;

for (let i = 0; i < fuelPods.length; i++) {
	totalFuel += fuelPods[i];
}
console.log("Total Fuel: " + totalFuel); // 60
