/**** WHILE LOOPS ****/

/** EXAMPLE 1 - MANUAL COUNTING **/

// DEMO: Count down from 3 to 1 using a while loop, then
// blast off into space

/** EXAMPLE 2 - DYNAMIC DEPLETION **/

let battery = 100;
let distanceTraveled = 0;

// DEMO: For every 50 miles traveled, the battery uses 20%
// of its power. Report on each iteration how far you've
// traveled and the current percentage of battery power left,
// until you run out of battery.

/** EXAMPLE 3 - SEARCHING UNTIL FOUND **/

let deck = ["Jack", "Queen", "King", "Ace", "Joker"];
let card;

// DEMO: Keep taking the first card until we find the Ace
while (card !== "Ace") {
	card = deck.shift();
	console.log("Drew: " + card);
}

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
