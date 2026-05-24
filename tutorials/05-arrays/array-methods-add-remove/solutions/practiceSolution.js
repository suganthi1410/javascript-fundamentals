/**** COMMON ARRAY METHODS: ADDING & REMOVING ELEMENTS: PRACTICE SOLUTION ****/

/*
    Manage the ship's logs and cargo using the four 
    primary modification methods.
*/

/** EXERCISE 1: EMERGENCY SUPPLIES **/

let medicalSupplies = ["Bandages", "Antiseptic"];

/*
    Add "Painkillers" to the END of the medicalSupplies 
    array using the correct method, then print the array.
*/
medicalSupplies.push("Painkillers");
console.log(medicalSupplies);

/** EXERCISE 2: CARGO OFFLOADING **/

let cargoHold = ["Titanium", "Gold", "Iron"];

/*
    Remove the LAST item from the cargoHold array. 
    Store that removed item in a variable named 'unloadedItem' 
    and print both the variable and the array.
*/
let unloadedItem = cargoHold.pop();
console.log(unloadedItem); // Iron
console.log(cargoHold); // ["Titanium", "Gold"]

/** EXERCISE 3: PRIORITY DOCKING **/

let dockingQueue = ["Shuttle-A", "Shuttle-B"];

/*
    A priority craft "Emergency-1" needs to be added 
    to the FRONT of the queue. Use the correct method to 
    add it, then print the array.
*/
dockingQueue.unshift("Emergency-1");
console.log(dockingQueue);

/** EXERCISE 4: FIRST IN LINE **/

let missionTasks = ["Refuel", "Clean Solar Panels", "Check Oxygen"];

/*
    The first task is being started. Remove the FIRST 
    item from missionTasks, then print the updated array.
*/
let finishedTask = missionTasks.shift();
console.log(finishedTask); // "Refuel"
console.log(missionTasks); // ["Clean Solar Panels", "Check Oxygen"]

// Great job!
