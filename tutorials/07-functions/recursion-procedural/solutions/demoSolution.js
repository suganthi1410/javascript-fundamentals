/**** PROCEDURAL RECURSION: SOLUTION ****/

/*
    Recursion is a programming technique where a function calls 
    itself to solve a smaller piece of a larger problem.

    Think of it like a set of Russian nesting dolls: you open a 
    large doll, only to find a slightly smaller version of the same 
    doll inside. You keep opening them until you find the smallest 
    doll that cannot be opened.

    To prevent a recursive function from calling itself forever (and 
    crashing your system with a "Stack Overflow" error), it must have 
    two things:

    The Base Case: The exit condition. The condition under which the 
    function stops calling itself and starts returning values.

    The Recursive Case: The condition where the function calls itself 
    again, but with a smaller or modified input, bringing it one step 
    closer to the Base Case.
*/

/** EXAMPLE 1 - THE RADAR PING TRAVERSAL (Countdown) **/

// Simulating a radar signal traveling through space, losing strength
function broadcastRadarPing(signalStrength) {
	// 1. BASE CASE: If signal strength drops to 0, stop broadcasting
	if (signalStrength <= 0) {
		console.log("Signal lost in the vacuum of space.");
		return;
	}

	// Action: Log the current signal strength in decibel-milliwatts
	console.log(`Ping transmitted... Signal Strength: ${signalStrength}dBm`);

	// 2. RECURSIVE CASE: Call the function again with a smaller strength
	broadcastRadarPing(signalStrength - 20);
}

// Start a ping at 60dBm strength
broadcastRadarPing(60);

/** EXAMPLE 2 - DIVIDE AND CONQUER (Grid Sub-division) **/

// Simulating search-and-rescue teams splitting up grid sectors
function scanGridSector(sectorName, sectorSizeKm) {
	// BASE CASE: Sector is small enough for a single drone to scan
	if (sectorSizeKm <= 5) {
		console.log(`Drone deployed to scan ${sectorName} (${sectorSizeKm}km zone).`);
		return;
	}

	// RECURSIVE CASE: Sector is too big. Split it in half.
	let subSectorSize = sectorSizeKm / 2;
	console.log(`Sector ${sectorName} (${sectorSizeKm}km) too large. Sub-dividing...`);

	// Conquering BOTH halves:
	scanGridSector(`${sectorName} - Left Half`, subSectorSize); // Scan first sub-zone
	scanGridSector(`${sectorName} - Right Half`, subSectorSize); // Scan second sub-zone
}

scanGridSector("Main Grid", 20);
