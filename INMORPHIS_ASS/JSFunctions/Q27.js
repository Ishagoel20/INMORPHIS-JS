/*Write a JavaScript function that returns the longest palindrome in a given 
string.
Note: According to Wikipedia "In computer science, the longest palindromic 
substring or longest symmetric factor problem is the problem of finding a 
maximum-length contiguous substring of a given string that is also a palindrome. 
For example, the longest palindromic substring of "bananas" is "anana". The 
longest palindromic substring is not guaranteed to be unique; for example, in the 
string "abracadabra", there is no palindromic substring with length greater than 
three, but there are two palindromic substrings with length three, namely, "aca" 
and "ada".
In some applications it may be necessary to return all maximal palindromic 
substrings (that is, all substrings that are themselves palindromes and cannot be 
extended to larger palindromic substrings) rather than returning only one 
substring or returning the maximum length of a palindromic substring.*/

function longestPalindrome(s) {
    if (!s || s.length === 0) {
        return "";
    }

    let start = 0;
    let maxLength = 1;
    let n = s.length;

    // Initialize a 2D array to store whether substrings are palindromes
    let dp = Array.from(Array(n), () => Array(n).fill(false));

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check for substrings of length greater than 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}

// Example usage:
let inputString = "babad";
let longestPal = longestPalindrome(inputString);
console.log(longestPal); // Output: "bab" or "aba"

inputString = "cbbd";
longestPal = longestPalindrome(inputString);
console.log(longestPal); // Output: "bb"
