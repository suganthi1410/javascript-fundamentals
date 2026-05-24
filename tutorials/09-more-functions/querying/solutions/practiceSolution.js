/**** SPECIAL ARRAY METHODS: QUERYING: PRACTICE SOLUTION ****/

/*
    Practice querying flat lists and nested data profiles using evaluation predicates 
    to extract isolated properties or target sets.
*/

/** EXERCISE 1: FLAT REACTION TEMPERATURE CHECKS **/

const reactorTemperatures = [2100, 2850, 3100, 1950, 3400];

/*
    Use '.find()' to scan 'reactorTemperatures' for the first raw temperature 
    value that exceeds the structural safety limits of 3000°C.
    Capture it in a variable named 'criticalTemp' and log it.
*/
let criticalTemp = reactorTemperatures.find(temp => temp > 3000);
console.log(`Thermal Core Warning: High risk value registered at ${criticalTemp}°C.`);

/** EXERCISE 2: TRACKING COOLDOWN SCHEDULERS **/

const lifeSupportSystems = [
	{ moduleName: "Hydroponics O2 Grid", oxygenOutputPercent: 94 },
	{ moduleName: "Command Deck Scrubber", oxygenOutputPercent: 42 },
	{ moduleName: "Main Engineering Vents", oxygenOutputPercent: 12 },
];

/*
    Use '.findIndex()' on 'lifeSupportSystems' to isolate the index position 
    of the system module experiencing a structural output drop below 20%.
    Capture the matching index number inside a constant named 'failedSystemIndex' and log it.
*/
const failedSystemIndex = lifeSupportSystems.findIndex(system => system.oxygenOutputPercent < 20);
console.log(
	`Maintenance tracker routing technician to system grid array index: ${failedSystemIndex}`
);

/** EXERCISE 3: COMBAT READINESS AUDIT **/

const gunshipMunitionsLocker = [
	{ bayCode: "Forward-A", missileCount: 12, readyToFire: true },
	{ bayCode: "Aft-Port", missileCount: 0, readyToFire: false },
	{ bayCode: "Aft-Starboard", missileCount: 8, readyToFire: true },
	{ bayCode: "Dorsal-Aux", missileCount: 0, readyToFire: true },
];

/*
    Use '.filter()' to query the 'gunshipMunitionsLocker' array collection.
    Extract all ammunition bays that have a 'missileCount' greater than 0 AND are marked 
    as 'readyToFire: true'.
    Store the sub-array results in a constant named 'activeFireBays' and log it to the terminal.
*/
const activeFireBays = gunshipMunitionsLocker.filter(
	bay => bay.missileCount > 0 && bay.readyToFire === true
);
console.log("\nActive Fire Control Matrix Channels:", activeFireBays);
