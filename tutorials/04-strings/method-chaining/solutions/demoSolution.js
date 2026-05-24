/**** METHOD CHAINING: SOLUTION ****/

/*
    Method chaining is the process of calling multiple methods in 
    a single line of code, one after another. Because most string 
    methods return a new string, we can immediately call another 
    method on that result.

    The Flow: The code is executed from left to right. The output 
    of the first method becomes the input for the second.

    Why Use It? It makes your code more concise and prevents you 
    from having to create "middle-man" variables that only exist 
    for one step.

    Readability: If a chain gets too long, it can be hard to read. 
    A good rule of thumb is to chain 2–3 related actions (like cleaning 
    and formatting) but break it up if it gets more complex.
*/

let messyInput = "   protocol-alpha-9   ";

/** EXAMPLE 1 - CLEAN AND SHOUT **/

// We trim the space FIRST, then convert to uppercase.
let cleanShout = messyInput.trim().toUpperCase();
console.log(cleanShout); // "PROTOCOL-ALPHA-9"

/** EXAMPLE 2 - EXTRACT AND REPLACE **/

// 1. Slice out "alpha-9" (index 12 to 19)
// 2. Replace "alpha" with "omega"
let newText = messyInput.trim().slice(9).replace("alpha", "omega");
console.log(newText); // "omega-9"

/** EXAMPLE 3 - THE IMPORTANCE OF ORDER **/

let word = "  Space  ";

// Scenario A: Trim then slice
console.log(word.trim().slice(0, 1)); // "S"

// Scenario B: Slice then trim (Indices are different because of spaces!)
console.log(word.slice(0, 1).trim()); // "" (It sliced a space!)
