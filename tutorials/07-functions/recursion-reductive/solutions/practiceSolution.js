/**** REDUCTIVE RECURSION: PRACTICE SOLUTION ****/

/** EXERCISE: COMPUTE TIME TO DECAY **/

/*
    A piece of space debris loses 10% of its velocity every hour due to 
    atmospheric drag. We need to calculate how many hours it will take 
    for the velocity to drop below a safe threshold of 50 km/h.

    Complete the recursive function 'calculateHoursToDecay'.
    1. Base Case: If 'currentVelocity' is less than or equal to 'threshold', 
       return 0 (it requires 0 additional hours).
    2. Action: Calculate the new velocity by multiplying 'currentVelocity' by 0.9.
    3. Recursive Case: Calculate the remaining hours by calling the function 
       again with the new velocity. Then, RETURN 1 + that recursive result.
*/

function calculateHoursToDecay(currentVelocity, threshold) {
    // Base Case
    if (currentVelocity <= threshold) {
        return 0;
    }

    // Reduce velocity for the next hour
    let newVelocity = currentVelocity * 0.9;

    // Recursive Case: Return this hour (1) + all subsequent hours calculated
    return 1 + calculateHoursToDecay(newVelocity, threshold);
}

// Test case: Starting at 80 km/h, counting hours until it hits 50 km/h
let hoursRequired = calculateHoursToDecay(80, 50);
console.log("Orbit will decay to safe speeds in: " + hoursRequired + " hours."); // 5 hours
