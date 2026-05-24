/**** DO...WHILE LOOPS: PRACTICE SOLUTION ****/

/*
    Practice using do...while loops for scenarios 
    requiring a guaranteed first step.
*/

/** EXERCISE 1: THE ENGINE PRE-CHECK **/

let engineTemp = 50;

/*
    Create a do...while loop that adds 20 to 'engineTemp' 
    while 'engineTemp' is less than 50. 
    (Note: Since it's 50 already, the loop should still run once!)
*/
do {
	engineTemp += 20;
	console.log("Warming engines... Current temp: " + engineTemp);
} while (engineTemp < 50);

/** EXERCISE 2: SHUTTLE DOCKING **/

let distance = 10;

/*
    Use a do...while loop to subtract 5 from 'distance' 
    until 'distance' is 0 or less. Log the distance in each loop.
*/
do {
	distance -= 5;
	console.log("Docking distance: " + distance);
} while (distance > 0);

/** EXERCISE 3: THE REBOOT SEQUENCE **/

let systemReady = false;

/*
    Create a do...while loop that logs "Rebooting..." 
    Then, set 'systemReady' to true inside the loop. 
    The loop should run while 'systemReady' is false.
*/
do {
	console.log("Rebooting...");
	systemReady = true;
} while (systemReady === false);

/** EXERCISE 4: AMBIENT NOISE GATHERING **/

let samplesCollected = 0;

/*
    Use a do...while loop to increment 'samplesCollected' 
    until it reaches 3. Log "Sample #" followed by the count.
*/
do {
	samplesCollected++;
	console.log("Sample #" + samplesCollected);
} while (samplesCollected < 3);

// Great job!
