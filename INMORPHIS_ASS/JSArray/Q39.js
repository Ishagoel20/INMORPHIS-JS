/*Write a JavaScript function to filter false, null, 0 and blank values from an 
array.
Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]*/

function filter_array_values(arr) {
    // Filter out false, null, 0, and blank values (empty strings)
    return arr.filter(function(value) {
        return ![false, null, 0, ""].includes(value);
    });
}

// Test data
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// Output: [58, "abcd", true]
