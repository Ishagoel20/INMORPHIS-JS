//Write a JavaScript function to compute the factors of a positive integer.

function computeFactors(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Please provide a positive integer.";
    }

    let factors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) {
                factors.push(n / i);
            }
        }
    }
    
    factors.sort(function(a, b) {
        return a - b;
    });
    
    return factors;
}

console.log(computeFactors(28));   
console.log(computeFactors(36));   
console.log(computeFactors(16));   
console.log(computeFactors(1));    
console.log(computeFactors(0));   
console.log(computeFactors(-12));  

