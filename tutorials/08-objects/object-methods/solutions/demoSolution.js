/**** OBJECT METHODS & CONTEXT: SOLUTION ****/

/*
    Objects don't just hold passive state data (properties); they can also 
    possess active behaviors. When you store a function inside an object's 
    property, that function is officially classified as a Method.

    Adding by Reference: You can declare a standalone function elsewhere in 
    your code and link it to an object key by its name without parentheses. 
    This attaches the logic by reference.

    The Execution Context (this): When a method executes, it needs a way to 
    look back at the object it belongs to. In JavaScript, the keyword this 
    acts like a mirror—it represents the execution context and references 
    the object that currently owns and invoked the method. By using 
    this.propertyName, a method can dynamically read or update its sibling 
    properties from inside the object container.
*/

/** EXAMPLE 1 - DECLARED SEPARATELY, ASSIGNED BY REFERENCE **/

// A standard, standalone function
function fireThruster() {
	console.log("Pumping water plasma... Thrusters firing! 🚀");
}

const defensiveDrone = {
	modelId: "Aegis-04",
	ammoCount: 50,
	// Assigning the function by reference (No parentheses!)
	activatePropulsion: fireThruster,
};

// Invoking the method directly off the object structure
defensiveDrone.activatePropulsion();

/** EXAMPLE 2 - INLINE METHODS & THE 'THIS' KEYWORD **/

const lifeSupportSystem = {
	sector: "Habitation Deck B",
	oxygenPercentage: 85,
	criticalThreshold: 90,

	// Declaring a method directly inline inside the object configuration
	evaluateAtmosphere: function () {
		// 'this' refers directly to the lifeSupportSystem object instance
		if (this.oxygenPercentage < this.criticalThreshold) {
			return `ALERT: ${this.sector} oxygen levels have dropped to ${this.oxygenPercentage}%!`;
		} else {
			return `${this.sector} atmospheric balance nominal at ${this.oxygenPercentage}%.`;
		}
	},

	// Methods can modify sister properties using 'this' as well
	injectPureOxygen: function (tonnage) {
		this.oxygenPercentage += tonnage;
		console.log(`Injected ${tonnage}t of oxygen mass into internal ducts.`);
	},
};

// Execute evaluation
console.log(lifeSupportSystem.evaluateAtmosphere());

// Modify state via method behavior, then re-evaluate
lifeSupportSystem.injectPureOxygen(10);
console.log(lifeSupportSystem.evaluateAtmosphere());
