//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

   
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}


console.log(isPrime(23));   
console.log(isPrime(10));   
console.log(isPrime(17));   
console.log(isPrime(1));    
console.log(isPrime(0));   
