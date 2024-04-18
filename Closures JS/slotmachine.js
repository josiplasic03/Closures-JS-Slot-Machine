// Closure training
// Slot Machine - Outer and inner functions
// Inner function has scope of the outer function

function createSlotMachine() {
    let symbols = ["🍒", "🍍", "🍌", "🫐", "🍈"]; // Application symbols
    let combination = []; // Array which will expand later

    function spin() {
        combination = [];

        for(let i = 0; i < symbols.length; i++) { // Loop for randomizing and putting symbols into empty array
            let randomIndex = Math.floor(Math.random() * symbols.length); // Math function for randomizing symbols
            combination.push(symbols[randomIndex]); // Pushing randomized symbols into empty array
        }
        console.log(`Combination: ˘${combination.join("")}`); // Application results
    }
    return spin;
};

let spin = createSlotMachine(); // Function Expression

spin();