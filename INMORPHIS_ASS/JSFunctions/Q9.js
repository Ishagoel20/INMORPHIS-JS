//Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined

function getTypeOf(value) {
    return typeof value;
}


console.log(getTypeOf(42));             
console.log(getTypeOf("Hello"));        
console.log(getTypeOf(true));           
console.log(getTypeOf({}));             
console.log(getTypeOf([]));             
console.log(getTypeOf(function() {}));  
console.log(getTypeOf(undefined));      
console.log(getTypeOf(null));           
