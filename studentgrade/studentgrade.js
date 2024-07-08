const { stdin } = require("process");
const readline = require ("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function gradeCalc() {
rl.question("Please insert your marks : ", (marks) =>{
    if (isNaN(marks) || marks === ' ' ){
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
    rl.close()
});
}
gradeCalc();
