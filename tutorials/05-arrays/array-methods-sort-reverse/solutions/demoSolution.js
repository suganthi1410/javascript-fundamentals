/**** COMMON ARRAY METHODS: SORTING & REVERSING ELEMENTS: SOLUTION ****/

/*
    Organization is key to a successful mission. JavaScript provides 
    two primary ways to reorder your collections.

    .reverse(): This method flips the array. The last item becomes the 
    first, and the first becomes the last. It mutates the original array.

    .sort(): This method sorts the elements of an array. By default, it 
    sorts items as strings in alphabetical order.

    The "Alphabetical" Trap: Because .sort() treats everything like a 
    string by default, it works perfectly for words ("Apple" before "Banana"). 
    However, it can be confusing with numbers (it thinks "100" comes before 
    "25" because "1" comes before "2"). We will learn how to fix that later 
    with more advanced logic!
*/

/** EXAMPLE 1 - SORT (Alphabetical) **/

let planets = ["Persephone", "Haven", "Meridian", "Miranda"];

planets.sort();
console.log(planets); // ["Haven", "Meridian", "Miranda", "Persephone"]

/** EXAMPLE 2 - REVERSE (Flipping Order) **/

let countdown = [1, 2, 3, 4, 5];

countdown.reverse();
console.log(countdown); // [5, 4, 3, 2, 1]

/** EXAMPLE 3 - CHAINING THE TWO **/

let crew = ["Zoe", "Wash", "Mal", "Kaylee"];

// Sort alphabetically, then reverse to get Z-A order
crew.sort().reverse();
console.log(crew); // ["Zoe", "Wash", "Mal", "Kaylee"] -> Wash and Zoe swapped based on Alpha
