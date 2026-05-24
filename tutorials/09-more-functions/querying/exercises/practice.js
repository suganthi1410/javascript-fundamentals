/**** SPECIAL ARRAY METHODS: QUERYING: PRACTICE ****/

/*
    Practice querying flat lists and nested data profiles using evaluation predicates 
    to extract isolated properties or target sets.
*/

/** EXERCISE 1: FLAT REACTION TEMPERATURE CHECKS **/

const reactorTemperatures = [2100, 2850, 3100, 1950, 3400];

/*
    TODO: Use '.find()' to scan 'reactorTemperatures' for the first raw temperature 
    value that exceeds the structural safety limits of 3000°C.
    Capture it in a variable named 'criticalTemp' and log it.
*/

/** EXERCISE 2: TRACKING COOLDOWN SCHEDULERS **/

const lifeSupportSystems = [
	{ moduleName: "Hydroponics O2 Grid", oxygenOutputPercent: 94 },
	{ moduleName: "Command Deck Scrubber", oxygenOutputPercent: 42 },
	{ moduleName: "Main Engineering Vents", oxygenOutputPercent: 12 },
];

/*
    TODO: Use '.findIndex()' on 'lifeSupportSystems' to isolate the index position 
    of the system module experiencing a structural output drop below 20%.
    Capture the matching index number inside a constant named 'failedSystemIndex' and log it.
*/

/** EXERCISE 3: COMBAT READINESS AUDIT **/

const gunshipMunitionsLocker = [
	{ bayCode: "Forward-A", missileCount: 12, readyToFire: true },
	{ bayCode: "Aft-Port", missileCount: 0, readyToFire: false },
	{ bayCode: "Aft-Starboard", missileCount: 8, readyToFire: true },
	{ bayCode: "Dorsal-Aux", missileCount: 0, readyToFire: true },
];

/*
    TODO: Use '.filter()' to query the 'gunshipMunitionsLocker' array collection.
    Extract all ammunition bays that have a 'missileCount' greater than 0 AND are marked 
    as 'readyToFire: true'.
    Store the sub-array results in a constant named 'activeFireBays' and log it to the terminal.
*/
