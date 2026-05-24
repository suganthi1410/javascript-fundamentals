/**** COMMON ARRAY METHODS: COMBINING & EXTRACTING ELEMENTS: SOLUTION ****/

/*
    These methods allow us to rearrange, merge, or "surgically" modify 
    our arrays.

    .concat(array2): Short for "concatenate." It merges two or more arrays 
    together into a brand new array. The original arrays remain unchanged.

    .slice(start, end): Just like with strings, this extracts a portion of 
    an array. It creates a "shallow copy" of the elements from the start 
    index up to (but not including) the end index.

    .splice(index, count, newItem): This is the most powerful (and destructive) 
    method. It can remove, replace, or add items anywhere in the array. 
    Unlike slice, splice mutates the original array.
*/

/** EXAMPLE 1 - CONCAT (Merge) **/

let primaryEngines = ["Alpha", "Beta"];
let backupEngines = ["Gamma"];

let allEngines = primaryEngines.concat(backupEngines);
console.log(allEngines); // ["Alpha", "Beta", "Gamma"]

/** EXAMPLE 2 - SLICE (Extract) **/

let fleet = ["Shuttle", "Fighter", "Cruiser", "Carrier"];

// Take the first two ships (Index 0 and 1)
let smallShips = fleet.slice(0, 2);
console.log(smallShips); // ["Shuttle", "Fighter"]

/** EXAMPLE 3 - SPLICE (Remove & Replace) **/

let minerals = ["Iron", "Gold", "Uranium"];

// At index 1, remove 1 item and insert "Lead"
minerals.splice(1, 1, "Lead");
console.log(minerals); // ["Iron", "Lead", "Uranium"]

// At index 2, remove 1 item (Uranium)
minerals.splice(2, 1);
console.log(minerals); // ["Iron", "Lead"]

// At index 1, add 1 item (Cadmium) without removing anything
minerals.splice(1, 0, "Cadmium");
console.log(minerals); // ["Iron", "Cadmium", "Lead"]
