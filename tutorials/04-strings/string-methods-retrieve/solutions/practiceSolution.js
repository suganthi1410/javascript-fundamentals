/**** COMMON STRING METHODS: RETRIEVING STRINGS: PRACTICE SOLUTION ****/

/*
    Use .charAt() and .slice() to extract specific 
    data points from these strings.
*/

/** EXERCISE 1: INITIAL EXTRACTION **/

let missionID = "SCI-101-MARS";

/*
    Extract the first 3 characters of 'missionID' 
    to get the department code.
*/
const deptCode = missionID.slice(0, 3);
console.log(deptCode); // SCI

/** EXERCISE 2: BIT BY BIT **/

let binaryString = "110100101";

/*
    Use .charAt() to grab the character at 
    index 5 of the 'binaryString'.
*/
const bitValue = binaryString.charAt(5);
console.log(bitValue); // 0

/** EXERCISE 3: END OF THE LINE **/

let launchDate = "July-20-1969";

/*
    Extract the year from the end of the 
    'launchDate' string (the last 4 characters).
*/
const launchYear = launchDate.slice(8);
// OR launchDate.slice(-4);
console.log(launchYear); // 1969

/** EXERCISE 4: THE MIDDLE MAN **/

let movieTitle = "Morning Star Project";

/*
    Extract the word "Star" from the string below.
    It starts at index 9 and ends before index 13.
*/
const projectCode = movieTitle.slice(8, 12);
console.log(projectCode); // Star

// Great job!
