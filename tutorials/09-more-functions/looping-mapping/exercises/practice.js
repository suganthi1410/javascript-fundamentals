/**** SPECIAL ARRAY METHODS: LOOPING AND MAPPING: PRACTICE ****/

/*
    Practice iterating through list profiles to generate side-effect metrics 
    and construct mapped array transforms.
*/

/** EXERCISE 1: RECONNAISSANCE PACKET SWEEP **/

const radarDistancePingsKm = [120, 450, 890, 230];

/*
    TODO: Use '.forEach()' on the 'radarDistancePingsKm' primitive array.
    Inside your inline arrow callback, calculate the distance in miles 
    (ping * 0.621) and log it using a template literal reading:
    "Target contact distance validated: [miles] miles."
*/

/** EXERCISE 2: FUEL PROFILE AMPLIFICATION **/

const fuelCells = [42, 19, 85, 60];

/*
    TODO: Use '.map()' on the 'fuelCells' array to create a completely new array 
    where each cell's fuel volume is multiplied by a safety scalar of 1.5.
    Capture the returned transformed array inside a constant named 'boostedFuelCells' 
    and log it to the console.
*/

/** EXERCISE 3: FLEET COMM SIGNATURE UPDATE **/

const civilianShips = [
	{ vesselName: "Somnambulist", registry: "MCRN" },
	{ vesselName: "Guanshiyin", registry: "UN-NAVY" },
];

/*
    TODO: Use '.map()' to process the 'civilianShips' object collection array.
    Return a brand-new object for each item that copies all existing keys, 
    but appends a brand-new property key named 'transponderStatus' set to the string "BROADCASTING".
    Capture this collection inside a constant named 'updatedFleetRegistry' and log it.
*/
