/**** INTRODUCTION TO OBJECTS: PRACTICE SOLUTION ****/

/*
    Practice defining object structures and understanding 
    how reference pointers operate within memory.
*/

/** EXERCISE 1: THE PILOT PROFILE **/

/*
    Declare an object literal saved in a constant named 'pilotProfile'.
    Give it four properties:
    - name (String)
    - rank (String)
    - flightHours (Number)
    - isActive (Boolean)

    Assign values to each of the four properties.
    
    Log the object to the console.
*/
const pilotProfile = {
	name: "Alex Kamal",
	rank: "Pilot",
	flightHours: 1250,
	isActive: true,
};

console.log(pilotProfile);

/** EXERCISE 2: MATERIAL CONFIGURATION **/

/*
    Create an object named 'hullSpecs' that can be described as follows:
    - made of a material that is a titanium alloy
    - has a thickness of 15 centimeters
*/
const hullSpecs = {
	material: "Titanium-Alloy",
	thicknessCm: 15,
};

/** EXERCISE 3: REFERENCE CLONING CHECK **/

const originalCore = { stabilityScore: 100 };
const shadowCore = originalCore;

/*
    If we alter a property inside 'shadowCore', predict what 
    happens to 'originalCore'. 
    
    Then uncomment the lines below and observe the output.
*/
shadowCore.stabilityScore = 45;
console.log(`Original Core Stability: ${originalCore.stabilityScore}`);

// It prints 45! Because shadowCore was assigned the reference pointer,
// both variables modify the exact same underlying object in memory.
