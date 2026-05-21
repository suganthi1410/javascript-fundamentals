/**** COMPLEX OBJECTS & MUTATION ****/

/** EXAMPLE 1 - COMPLEX DATA STRUCTURE **/

const gunshipProfile = {
	vesselName: "Rocinante",
	classSpecification: {
		type: "Corvette-class",
		manufacturer: "MCRN Shipyards",
	},
	weaponLoadout: ["PDC Railguns", "Torpedo Launchers"],
};

// DEMO: Access nested layers using chained references

/** EXAMPLE 2 - SHALLOW COPY MUTATION RISK **/

// DEMO: Create a shallow copy via the spread operator

// DEMO: Change a top-level primitive and test both the original and the clone

// DEMO: Change a nested value of the clone and test to see if original was mutated

/** EXAMPLE 3 - THE TRUE DEEP CLONE SOLUTIONS **/

const originalMedicalLab = {
	facility: "Med-Bay Alpha",
	inventory: ["Stitcher-Gels", "Rad-Meds"],
};

// DEMO: Serialize to a string and parse to create a new deep copy

// DEMO: Add an element to the nested array

// DEMO: Compare modified inventory against the original inventory

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
