/**** FOR...OF LOOPS: PRACTICE SOLUTION ****/

/*
    Practice using for...of loops to process data 
    without worrying about index math.
*/

/** EXERCISE 1: COMMUNICATION LOGS **/

let messages = ["Hello", "Deep Space", "Incoming Ship"];

/*
    Use a for...of loop to print each message in the 
    'messages' array followed by an exclamation point.
*/
for (let msg of messages) {
	console.log(msg + "!");
}

/** EXERCISE 2: FUEL EFFICIENCY **/

let fuelConsumptions = [5.5, 8.2, 4.1];

/*
    Use a for...of loop to calculate the sum of all 
    numbers in 'fuelConsumptions'. Print the final sum.
*/
let totalUsed = 0;
for (let amount of fuelConsumptions) {
	totalUsed += amount;
}
console.log(totalUsed);

/** EXERCISE 3: CARGO SEARCH **/

let inventory = ["Water", "Oxygen", "Gold", "Water"];

/*
    Use a for...of loop to count how many times 
    the word "Water" appears in the 'inventory' array. 
    Log the final count.
*/
let waterCount = 0;
for (let item of inventory) {
	if (item === "Water") {
		waterCount++;
	}
}
console.log(waterCount);

/** EXERCISE 4: LOUD SIRENS **/

let alerts = ["fire", "hull breach", "oxygen low"];

/*
    Use a for...of loop to print each alert in 
    ALL CAPS using .toUpperCase().
*/
for (let alert of alerts) {
	console.log(alert.toUpperCase());
}

// Great job!
