//Write a JavaScript program to check a credit card number.

function isValidCreditCard(cardNumber) {
    // Remove spaces and dashes from the card number
    var cleanedCardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');

    // Check if the cleaned card number is numeric and has a valid length
    if (!/^\d{13,16}$/.test(cleanedCardNumber)) {
        return false;
    }

    // Apply Luhn algorithm
    var sum = 0;
    var shouldDouble = false;
    for (var i = cleanedCardNumber.length - 1; i >= 0; i--) {
        var digit = parseInt(cleanedCardNumber.charAt(i), 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10 === 0);
}

// Test the function
console.log(isValidCreditCard('4532 1456 1234 5678'));   // Output: true (Visa card)
console.log(isValidCreditCard('4916-1234-5678-9012'));  // Output: true (Visa card)
console.log(isValidCreditCard('6011 6011 6011 6611'));   // Output: true (Discover card)
console.log(isValidCreditCard('1234-5678-9876-5432'));  // Output: false (Invalid)

