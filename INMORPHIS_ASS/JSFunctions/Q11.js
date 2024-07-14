//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.Sample array : [1,2,3,4,5]Expected Output : 2,4

function findSecondLowestAndGreatest(numbers) {
    if (numbers.length < 2) {
        return "Array should have at least two distinct numbers.";
    }
    
    
    numbers.sort(function(a, b) {
        return a - b;
    });
    

    let secondLowest = numbers[1];
    let secondGreatest = numbers[numbers.length - 2];
    
    return `${secondLowest},${secondGreatest}`;
}


console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));  
console.log(findSecondLowestAndGreatest([9, 8, 7, 6, 5, 4, 3, 2, 1]));  
console.log(findSecondLowestAndGreatest([1]));  
