/**** INTRODUCTION TO OBJECTS: PRACTICE ****/

/*
    Practice defining object structures and understanding 
    how reference pointers operate within memory.
*/

/** EXERCISE 1: THE PILOT PROFILE **/

/*
    TODO: Declare an object literal saved in a constant named 'pilotProfile'.
    Give it four properties:
    - name (String)
    - rank (String)
    - flightHours (Number)
    - isActive (Boolean)

    Assign values to each of the four properties.
    
    Log the object to the console.
*/

/** EXERCISE 2: MATERIAL CONFIGURATION **/

/*
    TODO: Create an object named 'hullSpecs' that can be described as follows:
    - made of a material that is a titanium alloy
    - has a thickness of 15 centimeters
*/

/** EXERCISE 3: REFERENCE CLONING CHECK **/

const originalCore = { stabilityScore: 100 };
const shadowCore = originalCore;

/*
    TODO: If we alter a property inside 'shadowCore', predict what 
    happens to 'originalCore'. 
    
    Then uncomment the two lines below and observe the output.
*/
// shadowCore.stabilityScore = 45;
// console.log(`Original Core Stability: ${originalCore.stabilityScore}`);
