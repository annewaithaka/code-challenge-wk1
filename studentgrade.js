function gradeCalc() {
    // Prompt the user for input and convert it to a number
    let marks = parseFloat (prompt("Enter marks between 0 and 100"));

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output grade
    return (`Student marks: ${marks} Grade: ${grade}`);
}
console.log (grade);