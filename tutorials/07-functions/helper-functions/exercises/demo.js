/**** HELPER FUNCTIONS ****/

/** EXAMPLE **/
// DEMO: Define a function that calculates a metric conversion
// metric conversion : meter to kilometer
function calculateMetric(ValueInmeter){
    return ValueInmeter/1000;
}
console.log(calculateMetric(5000));


// DEMO: Define a function that checks if a value crosses a safety threshold
 function checkSafetyThreshold(temperature){
    if (temperature > 500){
    console.log("Temperature crossed safety threshold, Abort.");
    }
    else {
        console.log("Temperature is within safe limit")
    }
 }

 // for my understanding logged the helper function
 //checkSafetyThreshold(2000);
 //checkSafetyThreshold(160);
 

// DEMO: Write a primary function that assesses the reactor safety
// and prints a report with either a warning or a nominal message
function assessReactorSafety(currentTemp) {
    console.log("=== Reactor Safety Report ===");
    console.log("Current Temperature:", currentTemp, "°C");

    checkSafetyThreshold(currentTemp);

    console.log("-----------------------------\n");
}
// DEMO: Call the primary function
assessReactorSafety(200);
assessReactorSafety(650);
assessReactorSafety(499);
assessReactorSafety(501);




// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
