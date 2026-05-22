/**** WHILE LOOPS: PRACTICE SOLUTION ****/

/*
    Use while loops to handle conditions where the 
    exact number of iterations is unknown.
*/

/** EXERCISE 1: THE REPAIR BOT **/

let hullIntegrity = 70;

/*
    Create a while loop that runs as long as 'hullIntegrity' 
    is less than 100. In each loop, add 10 to 'hullIntegrity' 
    and log the new value.
*/
while (hullIntegrity < 100) {
	hullIntegrity += 10;
	console.log("Repairing... Current Integrity: " + hullIntegrity);
}

/** EXERCISE 2: CARGO OFFLOADING **/

let crates = ["Food", "Water", "Tools", "Fuel", "Oxygen"];

/*
    Use a while loop to remove items from the 'crates' 
    array one by one (using .pop()) until the array is empty. 
    Log each item as it is unloaded.
*/
while (crates.length > 0) {
	let unloaded = crates.pop();
	console.log("Unloaded: " + unloaded);
}

/** EXERCISE 3: THE PILOT'S PATIENCE **/

let distanceToTarget = 150;

/*
    Create a while loop that runs while 'distanceToTarget' 
    is greater than 0. In each loop, subtract 40 from the distance. 
    If the distance becomes negative, set it to 0. Log the distance.
*/
while (distanceToTarget > 0) {
	distanceToTarget -= 40;
	if (distanceToTarget < 0) {
		distanceToTarget = 0;
	}
	console.log("Distance remaining: " + distanceToTarget);
}

/** EXERCISE 4: RANDOM SENSOR CHECK **/

let sensorValue = 0;

/*
    Create a while loop that runs while 'sensorValue' 
    is less than 0.8. In each loop, assign a new random number 
    to 'sensorValue' using Math.random(). Log the value.
*/
while (sensorValue < 0.8) {
	sensorValue = Math.random();
	console.log("Sensor Reading: " + sensorValue);
}

// Great job!
