//Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function isPalindrome(str) {
    
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
   
    let left = 0;
    let right = str.length - 1;

    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; 
        }
        left++;
        right--;
    }
    
    return true; 
}


let string1 = "racecar";
let string2 = "hello";
let string3 = "A man, a plan, a canal, Panama!";

console.log(string1 + " is palindrome? " + isPalindrome(string1)); 
console.log(string2 + " is palindrome? " + isPalindrome(string2)); 
console.log(string3 + " is palindrome? " + isPalindrome(string3)); 














