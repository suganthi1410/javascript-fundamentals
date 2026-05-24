/**** COMMON ARRAY METHODS: ADDING & REMOVING ELEMENTS: SOLUTION ****/

/*
    While bracket notation works for changing values, JavaScript provides 
    specialized methods for adding and removing items from the "ends" of 
    an array.

    .push(item): Adds one or more items to the end of the array.

    .pop(): Removes the last item from the array and returns it.

    .unshift(item): Adds one or more items to the beginning of the array.

    .shift(): Removes the first item from the array and returns it.

    The Stack/Queue Metaphor: Think of .push and .pop like a stack of trays—
    you add to the top and take from the top. Think of .shift and .unshift 
    as moving the entire line of data to make room at the front.
*/

let supplyList = ["Water", "Food"];

/** EXAMPLE 1 - PUSH (Add to End) **/

supplyList.push("Oxygen");
console.log(supplyList); // ["Water", "Food", "Oxygen"]

/** EXAMPLE 2 - POP (Remove from End) **/

let removedItem = supplyList.pop();
console.log(`Removed: ${removedItem}`); // Removed: Oxygen
console.log(supplyList); // ["Water", "Food"]

/** EXAMPLE 3 - UNSHIFT (Add to Front) **/

supplyList.unshift("Fuel");
console.log(supplyList); // ["Fuel", "Water", "Food"]

/** EXAMPLE 4 - SHIFT (Remove from Front) **/

let firstItem = supplyList.shift();
console.log(`First item was: ${firstItem}`); // First item was: Fuel
console.log(supplyList); // ["Water", "Food"]
