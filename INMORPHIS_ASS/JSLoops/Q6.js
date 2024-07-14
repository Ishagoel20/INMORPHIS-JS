//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// Array of students with their marks
let students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
];

// Function to compute average marks
function computeAverageMarks() {
    let totalMarks = 0;

    // Calculate total marks
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }

    // Calculate average marks
    let averageMarks = totalMarks / students.length;
    return averageMarks;
}

// Function to determine grade based on average marks
function determineGrade(averageMarks) {
    if (averageMarks < 60) {
        return 'F';
    } else if (averageMarks < 70) {
        return 'D';
    } else if (averageMarks < 80) {
        return 'C';
    } else if (averageMarks < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

// Compute average marks
let averageMarks = computeAverageMarks();

// Determine grade based on average marks
let grade = determineGrade(averageMarks);

// Displaying the average marks and corresponding grade
console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Grade: ${grade}`);
