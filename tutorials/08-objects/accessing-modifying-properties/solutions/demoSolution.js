/**** ACCESSING & MODIFYING PROPERTIES: SOLUTION ****/

/*
    Once an object is created, you need to read, add, or change its properties. 
    JavaScript gives you two tools to do this: Dot Notation and Bracket Notation.

    Dot Notation (object.property): This is your daily driver. It is clean, readable, 
    and fast. You use it when you know the exact name of the key beforehand.

    Bracket Notation (object["property"]): This is your heavy utility tool. 
    You must use bracket notation if:
        - Your key name has spaces, dashes, or special characters (e.g., ship["hull-type"]).
        - You are evaluating a dynamic key stored inside a variable. When JavaScript 
        sees ship[keyName], it looks at the variable called keyName, evaluates the string
        it stores, and searches the object for a specific key that matches that string.
*/

/** EXAMPLE 1 - DOT VS BRACKET BASICS **/

const cargoBay = {
	manifestId: "CB-04",
	"containment-status": "SECURE", // Key with a dash requires quotes
	tonnage: 120,
};

// Reading and Modifying using Dot Notation
cargoBay.tonnage = 145; // Updates existing value
cargoBay.technician = "Amos"; // Dynamically adds a brand-new property
console.log(`Bay ${cargoBay.manifestId} holds ${cargoBay.tonnage}t of cargo.`);

// Reading and Modifying using Bracket Notation
cargoBay["containment-status"] = "VENTING";
console.log(`Alert Status: ${cargoBay["containment-status"]}`);

/** EXAMPLE 2 - DYNAMIC VARIABLE LOOKUPS **/

const engineCore = {
	temperature: 3200,
	pressure: 150,
	radiation: 12,
};

// A crew member wants to look up a stat
let statRequested = "pressure";

// Dot notation fails here! engineCore.statRequested looks for a key literally named "statRequested"
console.log(`Dot Notation Test: ${engineCore.statRequested}`); // Output: undefined

// Bracket notation succeeds because it evaluates the variable's value first
console.log(`Dynamic Stat Request (${statRequested}): ${engineCore[statRequested]}`); // Output: 150
