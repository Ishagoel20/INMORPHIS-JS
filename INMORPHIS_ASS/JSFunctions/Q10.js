//Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n) {
    let matrix = [];
    
    for (let i = 0; i < n; i++) {
        matrix[i] = [];  
        for (let j = 0; j < n; j++) {
           
            matrix[i][j] = (i === j) ? 1 : 0;
        }
    }
    
    return matrix;
}


console.log(identityMatrix(3));

console.log(identityMatrix(5));

