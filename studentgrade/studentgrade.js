const { stdin } = require("process");
const readline = require ("readline") // Imports Readline module for reading input 
const rl = readline.createInterface({ // Creates an interface for reading input from the console

    input: process.stdin,
    output: process.stdout,
})
function gradeCalc() { // This is a function that checks the grade by taking in inputs from the user and grading it between grade A to E

rl.question("Please insert your marks : ", (marks) =>{
    if (isNaN(marks) || marks === ' ' ){ // Checks if the input is not a number or empty
        console.log("Invalid input!")
        return gradeCalc()
    }
    if (marks >79 ){
        console.log("Grade A")
    } else if (marks >= 60 && marks <= 79){
        console.log("Grade B")
    } else if (marks >= 49 && marks <= 59){
        console.log("Grade C")
    } else if (marks >=40 && marks< 49){
        console.log("Grade D")
    } else {
        console.log("Grade E")
    }
    rl.close() //closes the readline interfsce
});
}
gradeCalc(); //calls the fuction
