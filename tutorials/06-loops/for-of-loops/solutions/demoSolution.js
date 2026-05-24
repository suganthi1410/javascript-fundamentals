/**** FOR...OF LOOPS: SOLUTION ****/

/*
    The for...of loop is a simplified version of the standard for loop. 
    Use it when you want to look at every single item in an array and 
    you don't care about the specific index number (0, 1, 2...).
    
    The Syntax: for (let item of array) { ... }
    
    Readability: It reads almost like plain English: "For every item 
    of the collection, do this."
    
    Limitation: You don't have easy access to the index (i). If you 
    need to know where an item is (like "Replace the 3rd item"), use 
    a standard for loop. If you just need the data inside, use for...of.
*/

let crew = ["Shepard", "Garrus", "Tali"];

/** EXAMPLE 1 - SIMPLE ITERATION **/

// Standard way (Harder to read)
for (let i = 0; i < crew.length; i++) {
	console.log("Standard: " + crew[i]);
}

// for...of way (Much cleaner!)
for (let member of crew) {
	console.log("For...of: " + member);
}

/** EXAMPLE 2 - TOTALING VALUES **/

let scores = [10, 20, 30];
let total = 0;

for (let score of scores) {
	total += score;
}
console.log(total); // 60
