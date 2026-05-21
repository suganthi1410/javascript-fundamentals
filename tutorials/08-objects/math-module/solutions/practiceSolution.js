/**** THE MATH MODULE AND THE SPREAD OPERATOR: PRACTICE SOLUTION ****/

/*
    Practice using global calculations and data spreading 
    to analyze navigational vectors.
*/

/** EXERCISE 1: MANUAL STEERING LOCKS **/

let fineAdjustmentVector = -14.62;

/*
    Use 'Math.abs' to extract the absolute value of 'fineAdjustmentVector' 
    (removing the negative sign). 
    Then, pass that absolute value into 'Math.round' to find the nearest integer.
    Store the final result in a constant named 'CLEAN_STEERING_ANGLE' and log it.
*/
const CLEAN_STEERING_ANGLE = Math.round(Math.abs(fineAdjustmentVector));
console.log(`Correcting trajectory alignment lock by: ${CLEAN_STEERING_ANGLE}°`);

/** EXERCISE 2: SECTOR RANGE SCANNER **/

const cargoBayTemperatures = [18, 22, 14, 31, 19, 25];

/*
    Use 'Math.max' along with the spread operator to pull the highest temperature 
    out of the 'cargoBayTemperatures' array. 
    Store it in a variable named 'highestTemp' and log it using a template literal.
*/
let highestTemp = Math.max(...cargoBayTemperatures);
console.log(`Climate control warning: Thermal maximum reached at ${highestTemp}°C.`);

/** EXERCISE 3: FUEL POD BALANCER **/

const fuelPodWeights = [450, 412, 498, 380];

/*
    Use 'Math.min' with the spread operator to identify the lightest fuel pod.
    Subtract that lowest weight value from the highest possible capacity constant (500).
    Log how many metric tons are needed to top off that emptiest tank.
*/
let emptiestPodWeight = Math.min(...fuelPodWeights);
let structuralRefillDeficit = 500 - emptiestPodWeight;

console.log(
	`Pod refueling deficit: Tank requires ${structuralRefillDeficit}t to reach standard capacity limits.`
);
