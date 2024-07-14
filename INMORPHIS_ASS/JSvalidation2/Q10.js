//Write a JavaScript function to check whether given value types are same or not.

function areSameType(value1, value2) {
    return typeof value1 === typeof value2;
}

// Examples:
console.log(areSameType(1, 2));           // true (both are numbers)
console.log(areSameType('hello', 'world')); // true (both are strings)
console.log(areSameType(true, false));    // true (both are booleans)
console.log(areSameType({}, {}));         // false (objects are not the same type as each other)
console.log(areSameType([], {}));         // false (array and object are different types)
console.log(areSameType(null, undefined));// false (null and undefined are different types)
