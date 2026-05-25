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
console.log("vesselName :", gunshipProfile.vesselName);
console.log("type :" , gunshipProfile.classSpecification.type);
console.log("manufacturer :", gunshipProfile.classSpecification.manufacturer);
console.log("weapon1 :", gunshipProfile.weaponLoadout[0]);
console.log("weapon2 :", gunshipProfile.weaponLoadout[1]);


/** EXAMPLE 2 - SHALLOW COPY MUTATION RISK **/

// DEMO: Create a shallow copy via the spread operator
const clone = { ...gunshipProfile };
/*console.log("Shallow copy : Mutation risk")
const Copy = { ...gunshipProfile };
Copy.classSpecification.type = "Frigate-class";
Copy.weaponLoadout.push("Plasma Cannon");
console.log(gunshipProfile.classSpecification.type); // "Frigate-class" 
console.log(gunshipProfile.weaponLoadout); // ["PDC Railguns", "Torpedo Launchers", "Plasma Cannon"] 
*/

// DEMO: Change a top-level primitive and test both the original and the clone
// DEMO: Change a top-level primitive
clone.vesselName = "Noha";

// Test both the original and the clone
console.log("\nOriginal and clone ")
console.log("\nOriginal vesselName:", gunshipProfile.vesselName);
console.log("Clone vesselName:", clone.vesselName);

// DEMO: Change a nested value of the clone and test to see if original was mutated

clone.classSpecification.type = "Destroyer-class";
console.log("\noriginal " , gunshipProfile);
console.log("\nclone", clone);


/** EXAMPLE 3 - THE TRUE DEEP CLONE SOLUTIONS **/

const originalMedicalLab = {
	facility: "Med-Bay Alpha",
	inventory: ["Stitcher-Gels", "Rad-Meds"],
};
/** EXAMPLE 3A — Deep clone using structuredClone() **/

const deepCloneA = structuredClone(originalMedicalLab);

// Mutate clone
deepCloneA.inventory.push("Cryo-Stims");
deepCloneA.facility = "Med-Bay Beta";

console.log("Original:", originalMedicalLab);
console.log("Deep Clone A:", deepCloneA);


// DEMO: Serialize to a string and parse to create a new deep copy
/** EXAMPLE 3 - THE TRUE DEEP CLONE SOLUTIONS **/

// DEMO: Serialize to a string and parse to create a new deep copy
const deepCloneLab = JSON.parse(JSON.stringify(originalMedicalLab));

// DEMO: Add an element to the nested array
deepCloneLab.inventory.push("Cryo-Stims");

// DEMO: Compare modified inventory against the original inventory
console.log("Original Inventory:", originalMedicalLab.inventory);
console.log("Deep Clone Inventory:", deepCloneLab.inventory);

// DEMO: Make a git commit!
// (Run this in your terminal after saving your file)
// git add .
// git commit -m "Added deep clone demo for medical lab"
// git push origin main

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
