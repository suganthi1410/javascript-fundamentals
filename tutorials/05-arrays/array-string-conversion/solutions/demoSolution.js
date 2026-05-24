/**** CONVERTING BETWEEN ARRAYS AND STRINGS: SOLUTION ****/

/*
    This is the "bridge" between two worlds. Often, data arrives 
    as a single long string (like a CSV file or a sentence), 
    but it's easier to work with as an array. Or, you've finished 
    processing an array and need to turn it back into a readable message.

    .split(separator): This String method breaks a string into an array 
    of pieces based on a "delimiter" or "separator" (like a space, a comma, 
    or a dash).

    .join(connector): This Array method takes all the items in an array 
    and stitches them together into one string, using a "connector" between 
    each item.

    The Empty String Trick: If you use an empty string "" as a separator in 
    .split(""), it breaks the string into individual characters.
*/

/** EXAMPLE 1 - SPLITTING BY SPACES **/

let sentence = "Engage thrusters now";

let words = sentence.split(" ");
console.log(words); // ["Engage", "thrusters", "now"]

/** EXAMPLE 2 - JOINING WITH HYPHENS **/

let dateParts = ["2026", "05", "01"];

let formattedDate = dateParts.join("-");
console.log(formattedDate); // "2026-05-01"

/** EXAMPLE 3 - THE ROUND TRIP (Clean & Rebuild) **/

let rawData = "oxygen,fuel,water,rations";

// 1. Split into array to work with items
let inventory = rawData.split(",");

// 2. Add an item
inventory.push("batteries");

// 3. Join back into a pretty string for a report
let report = inventory.join(" | ");
console.log(report); // "oxygen | fuel | water | rations | batteries"

/** EXAMPLE 4 - METHOD CHAINING **/

let labels = ["pencils", "Pens", "eRasERs", "MARKERS"];

// Method chaining allows us to make multiple changes in one line of code.
let allCapsLabels = labels.join("-").toUpperCase().split("-").sort();
console.log(allCapsLabels); // [ 'ERASERS', 'MARKERS', 'PENCILS', 'PENS' ]
