/**** ARRAYS OF N LENGTH: SOLUTION ****/

/*
    Sometimes we know the capacity we need before we have the data. 
    Instead of starting with an empty bracket [], we can use the 
    Array() constructor.

    Array(n): Creates an array with n number of slots.

    Empty Slots vs. Undefined: By default, Array(n) creates "holes" 
    or empty slots. These aren't quite the same as undefined or null—
    they are literally missing data.

    The .fill(value) Method: Since empty slots can be tricky to work 
    with, we use .fill() to initialize every slot with a starting value 
    (like 0 for scores or null for empty seats).

    Use Cases: This is perfect for creating a grid, a ship's inventory 
    map, or a set of sensor readings before the sensors are turned on.
*/

/** EXAMPLE 1 - THE CONSTRUCTOR **/

// Creates an array with 5 empty slots
let lifeSupportSensors = Array(5);
console.log(lifeSupportSensors); // [ <5 empty items> ]
console.log(lifeSupportSensors.length); // 5

/** EXAMPLE 2 - FILLING DATA **/

// Initialize all oxygen tanks to 100%
let oxygenTanks = Array(4).fill(100);
console.log(oxygenTanks); // [100, 100, 100, 100]

/** EXAMPLE 3 - EMPTY vs NULL vs UNDEFINED **/

// Empty slots are "holes". It's better to be explicit.
let cabinSeats = Array(3).fill(null);
// Now we know the seats exist, but they are currently empty.
console.log(cabinSeats); // [null, null, null]

/** EXAMPLE 4 - DYNAMIC FILL **/

let landingGrid = Array(3).fill("Clear");
console.log(landingGrid); // ["Clear", "Clear", "Clear"]
