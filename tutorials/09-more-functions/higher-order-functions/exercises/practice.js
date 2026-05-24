/**** HIGHER-ORDER FUNCTIONS: PRACTICE ****/

/*
    Practice engineering Higher-Order Functions that accept or 
    generate localized operational callback workers.
*/

/** EXERCISE 1: THE CARGO PROCESSOR **/

// This is our Higher-Order Function (The Manager)
function processCargoManifest(weightInTons, processingWorker) {
    let internalTaxRate = 0.05;
    // TODO: Execute the processingWorker callback, passing it both 
    // 'weightInTons' and 'internalTaxRate' and return its result
    
}

/*
    TODO: Invoke 'processCargoManifest'. Pass it the weight 500, and a truly anonymous 
    inline arrow function (the contractor). 
    The contractor should take 'weight', and 'tax', and return the calculation: weight * tax.
    Log the final returned result.
*/

/** EXERCISE 2: INTERCEPT TRACER FACTORY **/

function generateWeaponLauncher(weaponType) {
    /*
        TODO: Complete this Higher-Order Function so that it returns a brand-new 
        anonymous arrow function. 
        The returned function should accept a 'quantity' parameter and return 
        a template literal reading: "Firing [quantity] [weaponType] projectiles!"
    */
    
}

// Manufacturing the weapon instances
const firePdcRailgun = generateWeaponLauncher("PDC Railgun");
const fireTorpedo = generateWeaponLauncher("Plasma Torpedo");

// TODO: Execute both manufactured functions to test them, logging their output.
