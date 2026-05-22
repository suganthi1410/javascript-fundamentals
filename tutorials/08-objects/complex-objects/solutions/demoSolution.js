/**** COMPLEX OBJECTS & MUTATION: SOLUTION ****/

/*
    In production environments, data structures are rarely flat. Objects can comfortably 
    house other objects or arrays as values, creating high-fidelity Complex Objects.

    When dealing with complex structures, duplicating data in memory requires extreme precision:

    Shallow Copying (... Spread): Creating a copy of an object using the spread operator 
    (const clone = { ...original }) copies all top-level primitives by value into a fresh, 
    distinct memory block. However, if the object contains a nested array or object, JavaScript 
    only copies the reference pointer to that nested structure.

    The Mutation Hazard: If you mutate a nested property inside a shallow clone, you will 
    accidentally corrupt that exact same property inside your original object.

    Deep Copying: To decouple completely and replicate every single structural layer into 
    independent memory blocks, you must perform a deep copy. A bulletproof native approach 
    is converting the structure into a flat string and parsing it back into memory: 
    JSON.parse(JSON.stringify(object)).
*/

/** EXAMPLE 1 - THE COMPLEX SHIP STRUCT **/

const gunshipProfile = {
	vesselName: "Rocinante",
	classSpecification: {
		type: "Corvette-class",
		manufacturer: "MCRN Shipyards",
	},
	weaponLoadout: ["PDC Railguns", "Torpedo Launchers"],
};

// Accessing nested layers using chained accessors
console.log(
	`The ${gunshipProfile.vesselName} is a ${gunshipProfile.classSpecification.type} armed with ${gunshipProfile.weaponLoadout[0]}.`
);

/** EXAMPLE 2 - SHALLOW COPY MUTATION RISK **/

// Creating a shallow copy via the spread operator
const shallowRocClone = { ...gunshipProfile };

// Changing a top-level primitive works flawlessly!
shallowRocClone.vesselName = "Contynel";
console.log(`Original Name: ${gunshipProfile.vesselName}`); // Rocinante (Safe!)
console.log(`Shallow Copy Name: ${shallowRocClone.vesselName}`); // Contynel

// CRITICAL RISK: Mutating a nested property alters BOTH copies
shallowRocClone.classSpecification.type = "Heavy Frigate";
console.log(`Original Class: ${gunshipProfile.classSpecification.type}`); // Heavy Frigate ❌ (Corrupted!)

/** EXAMPLE 3 - THE TRUE DEEP CLONE SOLUTIONS **/

const originalMedicalLab = {
	facility: "Med-Bay Alpha",
	inventory: ["Stitcher-Gels", "Rad-Meds"],
};

// Serializing to a string and parsing breaks all reference pointers completely
const deepLabClone = JSON.parse(JSON.stringify(originalMedicalLab));

// Mutating deep arrays safely without cross-contamination
deepLabClone.inventory.push("Nanite Swarms");

console.log(`Original Med-Bay Cargo: ${originalMedicalLab.inventory}`); // Stitcher-Gels,Rad-Meds (Safe!)
console.log(`Deep Copy Cargo: ${deepLabClone.inventory}`); // Stitcher-Gels,Rad-Meds,Nanite Swarms
