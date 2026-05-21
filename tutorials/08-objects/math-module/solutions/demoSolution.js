/**** THE MATH MODULE AND THE SPREAD OPERATOR: SOLUTION ****/

/*
    JavaScript provides a globally accessible, built-in namespace object called Math. 
    Unlike your custom objects, you do not instantiate or build Math from scratch—it 
    is pre-loaded by the runtime engine containing properties like Math.PI and functional 
    methods to process numerical expressions.

    Rounding Operations: Math.floor() forcibly truncates a float down toward the nearest 
    integer, Math.ceil() forces it upward, and Math.round() adheres to traditional mathematical 
    half-up parameters.

    The Dynamic Evaluators: Math.max() and Math.min() accept comma-separated numbers to find 
    extrema values.

    The Array Paradox & The Spread Operator (...): If you pass an entire array into 
    Math.max([10, 20, 30]), it responds with NaN because it cannot compare an immutable 
    array structure against individual primitive numbers. To fix this, you use the Spread 
    Operator (...). Placing three dots in front of an array unboxes its values, stripping 
    the array shell away and dropping the bare values sequentially into the function arguments.
*/

/** EXAMPLE 1 - CORE MATH METHODS **/

let navigationDistance = 452.87;

// Forcing values to round down vs up
let minBurnRequired = Math.floor(navigationDistance);
let maxSafetyBurn = Math.ceil(navigationDistance);

console.log(
	`Base trajectory requires between ${minBurnRequired}t and ${maxSafetyBurn}t of reaction mass.`
);

// Generating a random scalar coefficient between 0 and 100
let rawRadiationReading = Math.random() * 100;
let localizedReading = Math.round(rawRadiationReading);

console.log(`Geiger counter registering localized ambient static at ${localizedReading} rads.`);

/** EXAMPLE 2 - UNPACKING ARRAYS WITH SPREAD **/

const hullStressSensors = [42, 89, 115, 64, 73];

// This fails because the method expects individual arguments, not an array container
let brokenMaxCheck = Math.max(hullStressSensors);
console.log(`Direct Array Argument Result: ${brokenMaxCheck}`); // Output: NaN

// The spread operator (...) strips away the array container brackets
// It evaluates exactly like: Math.max(42, 89, 115, 64, 73)
let criticalStressPeak = Math.max(...hullStressSensors);
let minimumStressDip = Math.min(...hullStressSensors);

console.log(
	`Sensor grid diagnostics: Peak stress registered at ${criticalStressPeak} MPa, minimum at ${minimumStressDip} MPa.`
);
