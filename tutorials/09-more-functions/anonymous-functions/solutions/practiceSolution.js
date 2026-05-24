/**** ANONYMOUS FUNCTIONS: PRACTICE SOLUTION ****/

/*
    Practice writing completely nameless, single-use arrow functions 
    directly in-place inside system timers.
*/

/** EXERCISE 1: THE DELAYED RADAR PING **/

console.log("Sending outbound radar frequency sweep...");

/*
    Use 'setTimeout'. Pass it two arguments:
    1. A truly anonymous, single-line arrow function written in-place 
       that logs: "📡 Echo received: Object detected at 12,000km."
    2. A delay time of 3000 milliseconds (3 seconds).
*/
setTimeout(() => console.log("📡 Echo received: Object detected at 12,000km."), 3000);


/** EXERCISE 2: EMERGENCY KLAXON TIMER **/

console.log("Airlock seal breach detected! Charging secondary containment...");

/*
    Use 'setTimeout' to create a 1-second (1000ms) delay.
    Pass in a succinct anonymous arrow function that logs:
    "🚨 Emergency magnetic shields are now online!"
*/
setTimeout(() => console.log("🚨 Emergency magnetic shields are now online!"), 1000);
