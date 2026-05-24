/**** ARRAY LENGTH, INDEXING, AND BRACKET NOTATION: SOLUTION ****/

/*
    Just like strings, arrays use zero-based indexing. However, there 
    is one significant difference: Arrays are mutable. This means we
    can change part of it in place, permanently.

    Reading Data: We use array[index] to peek at a value.

    Writing Data: We can use the assignment operator (=) to change the 
    value at a specific index. This "overwrites" whatever was there before.

    The .length Property: This returns the number of elements. Interestingly, 
    if you change the .length property manually, you can actually shrink or 
    grow the array!

    The "Last Item" Trick: Just like strings, the last item is always found 
    at array[array.length - 1].
*/

let starships = ["Falcon", "Enterprise", "Serenity"];

/** EXAMPLE 1 - ACCESSING VALUES **/

console.log(starships[0]); // Falcon
console.log(starships[2]); // Serenity

/** EXAMPLE 2 - MUTATING (CHANGING) DATA **/

// The Falcon is undergoing repairs, let's replace it with the Razor Crest
starships[0] = "Razor Crest";

console.log(starships); // ["Razor Crest", "Enterprise", "Serenity"]

/** EXAMPLE 3 - THE LENGTH PROPERTY **/

console.log(starships.length); // 3

// Accessing the last item dynamically
let lastShip = starships[starships.length - 1];
console.log(lastShip); // Serenity

/** EXAMPLE 4 - ADDING VIA INDEX **/

// We can add an item to the end by using the current length as the index
starships[starships.length] = "Discovery";
console.log(starships); // ["Razor Crest", "Enterprise", "Serenity", "Discovery"]
