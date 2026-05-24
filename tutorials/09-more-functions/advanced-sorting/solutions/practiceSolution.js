/**** ADVANCED SORTING: PRACTICE SOLUTION ****/

/*
    Practice writing mathematical comparator equations to re-index primitive arrays 
    and nested data objects safely without breaking immutable constraints.
*/

/** EXERCISE 1: REARRANGING CORES BY LATENCY **/

const pingMetricsMs = [340, 12, 89, 4, 115];

/*
    Create a shallow clone of the 'pingMetricsMs' array so the original remains safe.
    Sort this cloned array in ASCENDING order (lowest response time first) using a 
    numeric comparator callback.
    Store the sorted array inside a constant named 'optimizedPings' and log it.
*/
const optimizedPings = [...pingMetricsMs].sort((a, b) => a - b);
console.log("Optimized Signal Handshake Array:", optimizedPings);

/** EXERCISE 2: WEAPONS SYSTEM THREAT INDEXING **/

const targetLockProfiles = [
	{ callsign: "Rogue-Drone-01", structuralBreachChance: 0.14 },
	{ callsign: "Heavy-Destroyer-06", structuralBreachChance: 0.92 },
	{ callsign: "Scout-Interceptor", structuralBreachChance: 0.45 },
];

/*
    Sort the 'targetLockProfiles' object matrix in DESCENDING order based 
    on the 'structuralBreachChance' decimal key (highest structural compromise rating first).
    Remember to safely clone the array before sorting using the spread operator!
    Capture the resulting array in a constant named 'highPriorityEngagements' and log it.
*/
const highPriorityEngagements = [...targetLockProfiles].sort((targetA, targetB) => {
	return targetB.structuralBreachChance - targetA.structuralBreachChance;
});

console.log("\nTactical Threat Engagement Hierarchy:", highPriorityEngagements);
