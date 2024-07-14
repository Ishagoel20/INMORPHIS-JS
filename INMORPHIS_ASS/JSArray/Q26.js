/*Write a JavaScript program to find a pair of elements (indices of the two 
    numbers) from an given array whose sum equals a specific target number.
    Input: numbers= [10,20,10,40,50,60,70], target=50
    Output: 3, 4*/

    function findIndicesForSum(numbers, target) {
        let map = {}; // Use an object as a hash map to store number -> index mapping
    
        for (let i = 0; i < numbers.length; i++) {
            let complement = target - numbers[i];
    
            // Check if the complement (needed value to reach the target) is already in the map
            if (map[complement] !== undefined) {
                // Return the indices as 1-based (as per the example output format)
                return [map[complement], i];
            }
    
            // Store the current number along with its index in the map
            map[numbers[i]] = i;
        }
    
        // If no such pair is found, return null or an appropriate message
        return null;
    }
    
    // Example usage:
    let numbers = [10, 20, 10, 40, 50, 60, 70];
    let target = 50;
    
    let indices = findIndicesForSum(numbers, target);
    
    if (indices !== null) {
        console.log(`Output: ${indices[0]}, ${indices[1]}`);
    } else {
        console.log("No such pair found.");
    }
    