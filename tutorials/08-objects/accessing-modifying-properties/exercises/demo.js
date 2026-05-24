/**** ACCESSING & MODIFYING PROPERTIES ****/

/** EXAMPLE 1 - DOT VS BRACKET BASICS **/

const cargoBay = {
    manifestId: "CB-04",
    "containment-status": "SECURE",
    tonnage: 120
};

// DEMO: Use dot notation to modify the tonnage
cargoBay.tonnage=200;
console.log("New value given for tonnage:",cargoBay.tonnage);

// DEMO: Use dot notation to add a technician property
cargoBay.technician= "JOhn";
console.log(cargoBay); 
// output : {
 // manifestId: 'CB-04',
  //'containment-status': 'SECURE',
  //tonnage: 200,
  //technician: 'JOhn'
//}

// DEMO: Use dot notation to form a sentence using properties of the object
// and log it to the console.
console.log(`cargoBay ${cargoBay.manifestId} is handled by the technician ${cargoBay.technician}`);
//Output: cargoBay CB-04 is hadled by the technician JOhn

// DEMO: Use bracket notation to update the containment status
cargoBay["containment-status"] = "unsecure";

// DEMO: Use bracket notation to print an alert about the containment status
console.log(`⚠️  Alert: containment-status is ${cargoBay["containment-status"]}`);
//Output: ⚠️  Alert: containment-status is unsecure

/** EXAMPLE 2 - DYNAMIC VARIABLE LOOKUPS **/
const engineCore = {
    temperature: 3200,
    pressure: 150,
    radiation: 12
};

let statRequested = "pressure";

// DEMO: What happens if we try to use dot notation here?

console.log(engineCore.stateRequested);
//Output : undefined

// DEMO: Use the dynamic key to get the stat
console.log(engineCore[statRequested]);
//Output : 150

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
