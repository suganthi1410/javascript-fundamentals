/**** OBJECT METHODS & CONTEXT: PRACTICE SOLUTION ****/

/*
    Practice attaching operational behaviors to objects and 
    leveraging 'this' context variables to evaluate metrics.
*/

/** EXERCISE 1: ATTACHING THE CODES **/

function transmitMessage() {
	console.log("Broadcasting data packets to Tycho Station...");
}

const communicationArray = {
	dishAlignmentDeg: 42.1,
	frequencyMhz: 1420,
};

/*
    Attach the 'transmitMessage' function to the 'communicationArray' 
    object using a new key named 'broadcast'. 
    Then, execute the method from the object.
*/
communicationArray.broadcast = transmitMessage;
communicationArray.broadcast();

/** EXERCISE 2: CORE HEALTH CALCULATOR **/

const engineeringDriveCore = {
	coreName: "Epstein Drive Core Mk4",
	currentTemperature: 2850,
	maxSafeTemperature: 3000,

	// Complete the method inline
	checkThermalSafety: function () {
		/* 
            Calculate the structural margin remaining before meltdown by subtracting 
            this object's current temperature from its maximum safe temperature.
            Return a template literal reading: 
            "The [coreName] has [margin]°C remaining before structural failure."
        */
		let thermalMargin = this.maxSafeTemperature - this.currentTemperature;
		return `The ${this.coreName} has ${thermalMargin}°C remaining before structural failure.`;
	},
};

console.log(engineeringDriveCore.checkThermalSafety());

/** EXERCISE 3: DYNAMIC REFUEL MODULATOR **/

const fuelPod = {
	podIdentifier: "Pod Gamma",
	currentReserveTons: 120,
	maxCapacityTons: 500,

	// Complete the refueling method below
	addFuel: function (amount) {
		/*
            Check if adding the 'amount' to 'this.currentReserveTons' exceeds 'this.maxCapacityTons'.
            - If it does: log an alert and do not add the fuel.
            - If it fits: add the amount to 'this.currentReserveTons' and log the success.
            Use template literals for both logs.
        */
		if (this.currentReserveTons + amount > this.maxCapacityTons) {
			console.log(
				`Refuel Aborted: Cannot exceed total volume capacity on ${this.podIdentifier}.`
			);
		} else {
			this.currentReserveTons += amount;
			console.log(
				`Success: ${this.podIdentifier} reserve level increased to ${this.currentReserveTons}t.`
			);
		}
	},
};

fuelPod.addFuel(400); // Should fail (120 + 400 = 520 > 500)
fuelPod.addFuel(200); // Should succeed (120 + 200 = 320 <= 500)
