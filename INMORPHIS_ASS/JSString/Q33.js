/*Write a JavaScript function to remove non-word characters.
Test Data :
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
"PHP - MySQL"*/

function remove_non_word(str) {
    // Use regex to remove non-word characters (excluding underscore)
    return str.replace(/[^\w\s-]/g, '');
}

// Test the function
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));  // Output: "PHP - MySQL"
