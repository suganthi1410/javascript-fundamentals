/**** INTRODUCTION TO OBJECTS: SOLUTION ****/

/*
    Up until now, arrays allowed you to save a list of data ordered by numeric indices 
    (0, 1, 2). However, real-world data has named attributes. A starship isn't just an 
    array of items; it has a name, a crew capacity, and a status.

    An Object is a collection of related data stored as Key-Value pairs enclosed in 
    curly braces {}.
        - Keys (Properties): The descriptive label (always a string behind the scenes).
        - Values: The actual data assigned to that label (can be any data type).

    The Memory Secret: Primitives (like numbers or strings) are stored directly in the 
    variable's memory bucket. Objects are completely different. The variable doesn't hold 
    the object itself; it holds a reference pointer (a memory address) that looks at where 
    the object lives on the heap. Because of this, comparing two distinct objects with === 
    checks if they point to the exact same memory slot, not if their content matches!
*/

/** EXAMPLE 1 - DECLARATION & INITIALIZATION **/

// Creating a structured profile for our ship using Key-Value pairs
const shipProfile = {
	name: "Rocinante",
	classType: "Corvette-class Gunship",
	crewCapacity: 4,
	isDriveActive: false,
};

// See the object literal in the console
console.log(shipProfile);

/** EXAMPLE 2 - THE MEMORY REFERENCE PARADOX **/

const sectorA_Scanner = { oxygenLevel: 98 };
const sectorB_Scanner = { oxygenLevel: 98 };

// Both have the exact same contents, but...
console.log(sectorA_Scanner === sectorB_Scanner);
// Output: false ❌ (They point to two completely different locations in memory!)

const scanner01 = sectorA_Scanner;
console.log(sectorA_Scanner === scanner01);
// Output: true  (They point to the exact same address slot!)
