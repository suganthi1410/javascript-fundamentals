/**** REDUCING: PRACTICE ****/

/*
    Practice using reduction aggregators to compress raw array structures 
    and slice metrics out of dataset records.
*/

/** EXERCISE 1: COMBAT CARGO WEIGHT CHECK **/

const torpedoCrateWeightsKg = [120, 150, 95, 110];

/*
    TODO: Use '.reduce()' to calculate the total combined weight of all torpedo crates.
    Initialize the accumulator at 0.
    Capture the final calculation in a variable named 'totalWeaponsMass' and log it.
*/

/** EXERCISE 2: SECTOR SURVEY POPULATION SUMMARY **/

const sectorHabitationHubs = [
	{ sectorName: "Ceres Station Core", populationCount: 600000 },
	{ sectorName: "Tycho Shipyards", populationCount: 15000 },
	{ sectorName: "Eros Outpost", populationCount: 100000 },
];

/*
    TODO: Use '.reduce()' to process the 'sectorHabitationHubs' array of objects.
    Sum up the 'populationCount' field from each object instance to find the overall 
    population across the entire sector.
    Store the final number in a constant named 'totalSectorPopulation' and log it.
*/
