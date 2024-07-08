const readline = require("readline") // Imports Readline module for reading input 
const rl = readline.createInterface({ // Creates an interface for reading input from the console

    input: process.stdin,
    output: process.stdout
})
function calculateDemeritPoints() { // This is  a function that checks the speed by taking in inputs from the user

    rl.question("What is your speed?: ", (speed) => {
        speed = parseInt(speed);//convert speed from string to integer
        if (isNaN(speed)) {// Checks weather the speed Input is not a number  

            console.log("Invalid number! Please enter a valid number.")
            calculateDemeritPoints();
        } else if (speed <= 70) {  // Statement begin from here 
            console.log("Ok");
            rl.close();
        } else {  //  Calculation regarding highSpeed
            const highSpeed = speed - 70;
            const demeritPoints = Math.floor(highSpeed / 5);

            if (demeritPoints > 12) {  // Checks weather demeritPoints more than 12 and prints to the console 
                console.log("license suspended");
                rl.close();
            } else {
                console.log(`Points: ${ demeritPoints}`);
                rl.close();
            }
        }
    });
}

calculateDemeritPoints();// calls the function





