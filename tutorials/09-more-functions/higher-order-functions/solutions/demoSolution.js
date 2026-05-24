/**** HIGHER-ORDER FUNCTIONS: SOLUTION ****/

/*
    A Higher-Order Function (HOF) is a function that takes another function 
    as an argument, returns a function, or both.

    To understand this easily, use the Manager and Contractor analogy:
        - The Higher-Order Function is the Manager: It knows when to execute 
        a task and handles the broad logistics, but it doesn't know the 
        specific details of the work.
        - The Callback Function is the Contractor: This is the truly anonymous, 
        in-place function you pass in. It is a specialized worker hired to 
        perform one specific operation when the manager calls upon it.

    By keeping the manager separate from the contractor, your code becomes 
    incredibly flexible. You can create one master management engine and 
    completely change its real-time behavior simply by passing in different 
    in-place contractors.
*/

/** EXAMPLE 1 - THE HOF SYSTEM MANAGER **/

// This is our Higher-Order Function (The Manager)
// It accepts a target name and a function
function engageTacticalComputer(targetName, engageTarget) {
    console.log(`[RADAR TRACKING]: Locking onto ${targetName}...`);
    
    // The manager executes the contractor function, passing it data
    console.log(`[SYSTEM ENGAGED]: ${engageTarget(targetName)}`);
}

// EXECUTION 1: Passing an in-place contractor to SCAN the target
engageTacticalComputer("Unidentified Frigate", target => `Scan of ${target} Complete: Hull composition is 80% carbon.`);

// EXECUTION 2: Passing a completely different contractor to WEAPON LOCK the target
engageTacticalComputer("Scout Drone-04", target => `Target locked. Railgun velocity calibrated to engage ${target}.`);

/** EXAMPLE 2 - RETURNING A FUNCTION FROM A HOF **/

// HOFs can also manufacture and return brand-new specialized functions
function createThrusterBurnCalculator(burnMultiplier) {
    // This returns a custom, anonymous function to be used later
    return (baseFuel) => baseFuel * burnMultiplier;
}

// Manufacturing two distinct calculation engines
const getStandardBurn = createThrusterBurnCalculator(1.5);
const getEmergencyEscapeBurn = createThrusterBurnCalculator(4.0);

// Using each specific calculation function where needed
console.log(`Standard fuel required: ${getStandardBurn(100)}t`); // 150
console.log(`Emergency fuel required: ${getEmergencyEscapeBurn(100)}t`); // 400
