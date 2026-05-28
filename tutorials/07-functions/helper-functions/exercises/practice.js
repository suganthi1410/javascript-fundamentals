/**** HELPER FUNCTIONS: PRACTICE SOLUTION ****/

/*
    Practice refactoring code and delegating tasks to dedicated 
    helper functions to clean up ship systems.
*/

/** EXERCISE 1: THE CARGO DISTRIBUTOR **/

// TODO: Create a helper function named 'calculateMassInKg'. It should take
// a parameter 'metricTons' and return that value multiplied by 1000.
function calculateMassInKg(metricTons) {
	return metricTons * 1000;
}
//logged the helper function for my understanding
//console.log(`MassinKg : ${calculateMassInKg(20)}`);


// TODO: Complete the main function below. Use your 'calculateMassInKg' helper
// inside the loop to calculate each pod's weight in kilograms.

function processLogisticsManifest(cargoPodsArray) {
	console.log("--- Processing Logistics Manifest ---");

	for (let i = 0; i < cargoPodsArray.length; i++) {
		let massInKg = calculateMassInKg(cargoMass[i]);
		console.log(`Pod #${i + 1}: ${massInKg} kg`);
	}
}

let cargoMass = [5, 12, 3.5];

// TODO: Call your main function and test it with the cargoMass array
processLogisticsManifest(cargoMass);


/** EXERCISE 2: COMMUNICATION SCRUBBER **/

// TODO: Create a helper function named 'sanitizeInput'. It should take a string
// parameter 'text', remove leading/trailing spaces, and convert it to lowercase.
function sanitizeInput(text){
	return text.trim().toLowerCase();
}

//logged the helper function for my understanding
//console.log("New text :",sanitizeInput("Abort Launch"));

// TODO: Complete the main function below. Use your 'sanitizeInput' helper to
// clean the user's transmission command before checking it.
function processIncomingTransmission(command) {
	let cleanCommand = sanitizeInput(command);

	if (cleanCommand === "abort launch") {
		console.log("🚨 EMERGENCY TRANSMISSION VALIDATED: Halting launch sequences.");
	} else {
		console.log("Transmission processed. Command unrecognized.");
	}
}

let command = "  ABORT LAUNCH   ";

// TODO: Call the main function and test it with the command above.
processIncomingTransmission(command);

console.log("\nExtra Test case:");

processIncomingTransmission("Abort Launch");
processIncomingTransmission("AbOrT LaUnCh");
processIncomingTransmission("   ");
processIncomingTransmission("abort");


