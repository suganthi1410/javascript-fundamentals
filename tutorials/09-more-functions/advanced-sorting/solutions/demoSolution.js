/**** ADVANCED SORTING: SOLUTION ****/

/*
    JavaScript’s built-in .sort() method operates in a way that often traps 
    unsuspecting developers. By default, if you call .sort() without passing 
    any arguments, the engine converts every element in the array into a 
    string and sorts them alphabetically according to their UTF-16 character 
    code values.

    The String Sorting Hazard: This causes major issues with numeric arrays. 
    For example, the number 10 will unreliably sort before the number 2, 
    simply because the character "1" comes before the character "2" 
    alphabetically.

    The Comparator Solution: To sort numbers or complex object arrays 
    deterministically, you must pass a Comparator Function as a callback to 
    your sort engine: array.sort((a, b) => { ... }). This function compares 
    two elements at a time:
        - If it returns a value less than 0, it moves a to an index lower 
        than b (ascending order).
        - If it returns a value greater than 0, it moves b to an index lower 
        than a (descending order).
        - If it returns exactly 0, it leaves their relative positions unchanged.

    In-Place Mutation Warning: Unlike .map() or .filter(), the .sort() method 
    is destructive—it reorders the elements directly inside the original array 
    memory block. If you want to keep your original data pristine, you must 
    create a shallow clone of the array (e.g., using the spread operator [...array]) 
    before triggering the sort.
*/

/** EXAMPLE 1 - THE NUMERIC SORT TRAP RECONSTRUCTION **/

const structuralStressTolerances = [8, 105, 22, 1000, 4];

// WRONG: Default sorting treats these numbers like strings ("1000" comes before "22")
const brokenStringSort = [...structuralStressTolerances].sort();
console.log("⚠️ Broken String-Based Numeric Sort:", brokenStringSort); // not sorted

// CORRECT: Using an inline numeric comparator subtraction engine
// (a - b) evaluates to a negative number if 'a' is smaller, sorting it to the left
const cleanAscendingSort = [...structuralStressTolerances].sort((a, b) => a - b);
console.log("✅ Fixed Ascending Numeric Sort:", cleanAscendingSort); // sorted

/** EXAMPLE 2 - SORTING AN OBJECT MATRIX BY KEYS **/

const rocinanteCargoHold = [
	{ containerId: "CRATE-A", massTons: 45 },
	{ containerId: "CRATE-B", massTons: 12 },
	{ containerId: "CRATE-C", massTons: 88 },
];

// Goal: Sort cargo containers in DESCENDING order based on weight (heaviest first)
// By switching our subtraction vector to (b - a), larger values float to the front
const heaviestCargoFirst = [...rocinanteCargoHold].sort((vesselA, vesselB) => {
	return vesselB.massTons - vesselA.massTons;
});

console.log("\n--- RECONFIGURED STOWAGE BAY MANIFEST (HEAVIEST FIRST) ---");
heaviestCargoFirst.forEach(cargo => console.log(`${cargo.containerId} - ${cargo.massTons}`));
