/**** SPECIAL ARRAY METHODS: QUERYING: SOLUTION ****/

/*
    When working with complex databases, you will constantly need to
    search through arrays to locate specific records. JavaScript gives 
    you three custom Higher-Order Functions designed exclusively for 
    querying data: .find(), .findIndex(), and .filter().

    All three methods use a Predicate Function (a callback function 
    that must return either true or false) to test every single item 
    in the array:
        - .find() (The Record Locator): Loops through the array and 
        returns the first actual item that makes your predicate callback 
        return true. Once it finds a match, it stops looking immediately. 
        If no item matches, it returns undefined.
        - .findIndex() (The Pointer Finder): Works exactly like .find(), 
        but instead of returning the item itself, it returns the numeric 
        index position where that matching item lives inside the array. 
        If no match is found, it returns -1.
        - .filter() (The Collection Extractor): Loops through the entire 
        array and collects every single item that returns true into a 
        brand-new sub-array. The original array remains completely safe 
        and unmutated.
*/

/** EXAMPLE 1 - FIND AND FINDINDEX LOCATORS **/

const tacticalTargets = [
	{ id: "TRG-101", classification: "Scout Drone", threatLevel: 2 },
	{ id: "TRG-202", classification: "Heavy Frigate", threatLevel: 9 },
	{ id: "TRG-303", classification: "Cruiser Fleet", threatLevel: 10 },
	{ id: "TRG-404", classification: "Fighter Escort", threatLevel: 4 },
];

console.log("Priority Target Profile Identified:");
// Use .find() to locate the object with the highest priority threat target
// and log it.
const highThreatTarget = tacticalTargets.find(target => target.threatLevel >= 9);
console.log(highThreatTarget);
// Output: { id: "TRG-202", classification: "Heavy Frigate", threatLevel: 9 }

// Use .findIndex() to find out exactly where the rogue 'TRG-404' drone sits
// inside our system index array and log it
const targetIndex = tacticalTargets.findIndex(target => target.id === "TRG-404");
console.log(`Target 'TRG-404' locked at position: ${targetIndex}`);

/** EXAMPLE 2 - FILTER SUB-ARRAY EXTRACTION **/

// Use .filter() to create a collection subset containing only targets safe
// enough for an escort drone to engage (Threat < 5)
const lowRiskTargets = tacticalTargets.filter(target => target.threatLevel < 5);

console.log("\n--- COMBAT MATRIX ENVELOPE: LOGGING ENGAGEABLE OBJECTS ---");

// Use .forEach() to print each of the low risk targets on a separate line.
lowRiskTargets.forEach(target => console.log(target));
