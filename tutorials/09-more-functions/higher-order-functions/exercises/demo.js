/**** HIGHER-ORDER FUNCTIONS ****/

/** EXAMPLE 1 - THE HOF SYSTEM MANAGER **/

// DEMO: Define a HOF that accepts a target name and a function that can describe
// specifically how that target is engaged.
const systemManager = (target, contractorFn) => {
    contractorFn(target);
};

// DEMO: Pass an in-place contractor to SCAN the target
systemManager("Sector 7", target => {
    console.log(`🔍 Scanning ${target} for lifeforms...`);
});
// DEMO: Pass a completely different contractor to WEAPON LOCK the target
systemManager("Sector 7", target => {
    console.log(`🎯 Weapon lock engaged on ${target}!`);
});

/** EXAMPLE 2 - RETURNING A FUNCTION FROM A HOF **/

// DEMO: Define an HOF that can manufacture and return brand-new specialized functions
const makeCalculator = operation => {
    return number => operation(number);
};

// DEMO: Use the HOF to manufacture two distinct calculation engines
const doubleEngine = makeCalculator(num => num * 2);
const tripleEngine = makeCalculator(num => num * 3);

// DEMO: Call each manufactored function and log a report:
console.log(`Double Engine Output: ${doubleEngine(10)}`);
console.log(`Triple Engine Output: ${tripleEngine(10)}`);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
