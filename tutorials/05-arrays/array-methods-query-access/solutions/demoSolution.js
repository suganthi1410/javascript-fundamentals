/**** COMMON ARRAY METHODS: QUERYING & ACCESSING ELEMENTS: SOLUTION ****/

/*
    Query methods allow us to search through an array to find out if an 
    item exists and exactly where it is located. This is vital for checking 
    inventory or identifying specific systems.

    .includes(item): Returns a Boolean (true or false). It’s the quickest 
    way to check if an item is present.

    .indexOf(item): Returns the index of the first occurrence of an item. 
    Just like with strings, it returns -1 if the item is not found.

    .lastIndexOf(item): If an item appears multiple times, this finds the 
    index of the last one.

    Case Sensitivity: Remember that these checks are literal. "Mars" is 
    not the same as "mars".
*/

let equipment = ["Drill", "Scanner", "Drill", "Laser"];

/** EXAMPLE 1 - INCLUDES **/

let hasScanner = equipment.includes("Scanner");
console.log(hasScanner); // true

/** EXAMPLE 2 - INDEXOF **/

// Finds the first "Drill" at index 0
let firstDrill = equipment.indexOf("Drill");
console.log(firstDrill); // 0

/** EXAMPLE 3 - LASTINDEXOF **/

// Finds the last "Drill" at index 2
let lastDrill = equipment.lastIndexOf("Drill");
console.log(lastDrill); // 2

/** EXAMPLE 4 - THE "NOT FOUND" CASE **/

let hasAlienLife = equipment.indexOf("Xenomorph");
console.log(hasAlienLife); // -1
