/**** COMMON ARRAY METHODS: SORTING & REVERSING ELEMENTS: PRACTICE SOLUTION ****/

/*
    Organize the following mission data using .sort() 
    and .reverse().
*/

/** EXERCISE 1: ALPHABETICAL ROSTER **/

let destinationStars = ["Vega", "Arcturus", "Betelgeuse", "Sirius"];

/*
    Sort the destinationStars array alphabetically 
    and print the result.
*/
destinationStars.sort();
console.log(destinationStars); // ["Arcturus", "Betelgeuse", "Sirius", "Vega"]

/** EXERCISE 2: REVERSE CHRONOLOGY **/

let missionSteps = ["Launch", "Orbit", "Landing", "Exploration"];

/*
    Reverse the order of missionSteps to show the 
    return path, then print the array.
*/
missionSteps.reverse();
console.log(missionSteps); // ["Exploration", "Landing", "Orbit", "Launch"]

/** EXERCISE 3: THE HIGHEST LETTER **/

let signalCodes = ["X-9", "A-1", "M-4", "B-2"];

/*
    Sort the signalCodes alphabetically, then reverse 
    them so the "highest" code is at the beginning. Print the result.
*/
signalCodes.sort().reverse();
console.log(signalCodes); // ["X-9", "M-4", "B-2", "A-1"]

/** EXERCISE 4: THE NUMBER TRAP **/

let testScores = [10, 5, 100, 2];

/*
    Run .sort() on this numerical array and print it. 
    Notice how it sorts by the first digit (1, 100, 2, 5) rather 
    than numerical value! 
*/
testScores.sort();
console.log(testScores); // [10, 100, 2, 5]

// Great job!
