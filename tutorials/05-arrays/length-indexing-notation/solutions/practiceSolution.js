/**** ARRAY LENGTH, INDEXING, AND BRACKET NOTATION: PRACTICE SOLUTION ****/

/*
    Practice accessing and modifying the contents of 
    your mission arrays.
*/

/** EXERCISE 1: NAVIGATIONAL TWEAK **/

let coordinates = [120, 500, 990];

/*
    Change the second item (index 1) in 'coordinates' 
    from 500 to 750.
*/
coordinates[1] = 750;
console.log(coordinates); // [120, 750, 990]

/** EXERCISE 2: DATA INSPECTION **/

let planets = ["Mercury", "Venus", "Earth", "Mars"];

/*
    Create a variable 'thirdPlanet' and assign it 
    the value of the third item in the 'planets' array.
*/
const thirdPlanet = planets[2];
console.log(thirdPlanet); // Earth

/** EXERCISE 3: SHIP REPAIRS **/

let systemStatus = [true, true, true, true];

/*
    The last item in 'systemStatus' is failing. 
    Update the last item in the array to the boolean 'false' 
    using the .length property (don't hardcode the index!).
*/
systemStatus[systemStatus.length - 1] = false;
console.log(systemStatus); // [true, true, true, false]

/** EXERCISE 4: ARRAY GROWTH **/

let moons = ["Europa", "Ganymede"];

/*
    Use the .length property to add "Titan" to the 
    very end of the 'moons' array.
*/
moons[moons.length] = "Titan";
console.log(moons); // ["Europa", "Ganymede", "Titan"]

// Great job!
