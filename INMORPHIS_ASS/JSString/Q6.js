/*Write a JavaScript function to hide email addresses to protect from 
unauthorized user.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"*/

function protect_email(email) {
    // Split the email into local part and domain part
    var parts = email.split("@");
    var local = parts[0];
    var domain = parts[1];

    // Replace characters in the local part with dots, but keep the first and last characters visible
    var hiddenLocal = local.substring(0, 3) + "...@" + domain;

    return hiddenLocal;
}

// Test Data
console.log(protect_email("robin_singh@example.com")); // Output: "rob...@example.com"

