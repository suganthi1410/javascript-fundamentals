/**** WHILE LOOPS: SOLUTION ****/

/*
    You've learned that for loops are great when you know the exact
    number of times it needs to run the code block. A while loop is 
    used when you don't know exactly how many times you need to repeat. 
    It simply runs while a condition is true.

    The Danger Zone: If the condition never becomes false, you 
    create an Infinite Loop, which can crash your program. You 
    must ensure something inside the loop eventually changes the 
    condition.

    Manual Control: Unlike the for loop, you have to handle your 
    own "counter" or "iterator" variable outside and inside the loop.

    Best Use Case: Scenarios like "Keep searching until the item 
    is found" or "Keep running as long as the battery is above 0%."
*/

/** EXAMPLE 1 - MANUAL COUNTING **/

let count = 3;

while (count > 0) {
	console.log("T-Minus: " + count);
	count--; // Crucial: This ensures the loop eventually stops!
}
console.log("Blast off!");

/** EXAMPLE 2 - DYNAMIC DEPLETION **/

let battery = 100;
let distanceTraveled = 0;

while (battery > 0) {
	distanceTraveled += 50;
	battery -= 20; // Consuming 20% power per 50km
	console.log(`Traveled ${distanceTraveled}km. Battery at ${battery}%`);
}

/** EXAMPLE 3 - SEARCHING UNTIL FOUND **/

let deck = ["Jack", "Queen", "King", "Ace", "Joker"];
let card;

// Keep taking the first card until we find the Ace
while (card !== "Ace") {
	card = deck.shift();
	console.log("Drew: " + card);
}
