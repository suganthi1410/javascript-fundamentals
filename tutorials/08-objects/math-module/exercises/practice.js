/**** THE MATH MODULE AND THE SPREAD OPERATOR: PRACTICE ****/

/*
    Practice using global calculations and data spreading 
    to analyze navigational vectors.
*/

/** EXERCISE 1: MANUAL STEERING LOCKS **/

let fineAdjustmentVector = -14.62;

/*
    TODO: Use 'Math.abs' to extract the absolute value of 'fineAdjustmentVector' 
    (removing the negative sign). 
    Then, pass that absolute value into 'Math.round' to find the nearest integer.
    Store the final result in a constant named 'CLEAN_STEERING_ANGLE' and log it.
*/

/** EXERCISE 2: SECTOR RANGE SCANNER **/

const cargoBayTemperatures = [18, 22, 14, 31, 19, 25];

/*
    TODO: Use 'Math.max' along with the spread operator to pull the highest temperature 
    out of the 'cargoBayTemperatures' array. 
    Store it in a variable named 'highestTemp' and log it using a template literal.
*/

/** EXERCISE 3: FUEL POD BALANCER **/

const fuelPodWeights = [450, 412, 498, 380];

/*
    TODO: Use 'Math.min' with the spread operator to identify the lightest fuel pod.
    Subtract that lowest weight value from the highest possible capacity constant (500).
    Log how many metric tons are needed to top off that emptiest tank.
*/
