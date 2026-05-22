/**** FOR LOOPS: PRACTICE SOLUTION ****/

/*
    Practice using for loops to automate 
    repetitive mission tasks.
*/

/** EXERCISE 1: THE COUNTDOWN **/

/*
    TODO: Create a for loop that counts DOWN from 5 to 1.
    Log each number to the console.
*/
for (let i = 5; i >= 1; i--) {
	console.log(i);
}

/** EXERCISE 2: CARGO SCANNER **/

let supplies = ["Water", "Rations", "Oxygen", "Batteries"];

/*
    TODO: Create a for loop that iterates through the 'supplies' 
    array and prints "Scanning item: " followed by the item name.
*/
for (let i = 0; i < supplies.length; i++) {
	console.log("Scanning item: " + supplies[i]);
}

/** EXERCISE 3: DATA AGGREGATOR **/

let sensorReadings = [12, 8, 15, 10];
let sum = 0;

/*
    TODO: Use a for loop to add every number in 'sensorReadings' 
    to the 'sum' variable. Print 'sum' after the loop finishes.
*/
for (let i = 0; i < sensorReadings.length; i++) {
	sum += sensorReadings[i];
}
console.log(sum); // 45

/** EXERCISE 4: THE SELECTIVE LOGGER **/

let temperatures = [72, 110, 68, 120, 70];

/*
    TODO: Loop through 'temperatures'. Inside the loop, use 
    an 'if' statement to only log temperatures that 
    are higher than 100.
*/
for (let i = 0; i < temperatures.length; i++) {
	if (temperatures[i] > 100) {
		console.log("WARNING: High Temp Detected: " + temperatures[i]);
	}
}

// Great job!
