/**** HELPER FUNCTIONS: SOLUTION ****/

/*
    A Helper Function is a small, single-purpose function designed to perform a 
    specific sub-task for a larger, more complex function.

    Separation of Concerns: Instead of writing one massive, hundred-line function 
    that handles calculations, data filtering, and console formatting all at once, 
    you break those duties into bite-sized "helper" blocks.

    Readability & Maintenance: It turns your code into plain English. Reading a 
    main function should feel like reading an instruction manual, where the details 
    of how a specific gear turns are safely hidden inside the helper functions.
*/

/** EXAMPLE **/

// Helper 1: Purely calculates a metric conversion
function celsiusToKelvin(celsius) {
	return celsius + 273.15;
}

// Helper 2: Purely checks if a value crosses a safety threshold
function isOverheating(kelvinTemp) {
	const CRITICAL_TEMP_K = 3000;
	return kelvinTemp > CRITICAL_TEMP_K;
}

// Main Function: Coordinates the helpers to assess reactor safety
function runReactorCheck(currentCelsius) {
	// Hand off the conversion to Helper 1
	let tempInKelvin = celsiusToKelvin(currentCelsius);

	// Hand off the evaluation to Helper 2
	let threatDetected = isOverheating(tempInKelvin);

	if (threatDetected) {
		console.log(`CRITICAL: Core is at ${tempInKelvin}K. Initiate containment!`);
	} else {
		console.log(`Core nominal. Operating temperature: ${tempInKelvin}K.`);
	}
}

runReactorCheck(2800); // 2800°C + 273.15 = 3073.15K (Overheating!)
