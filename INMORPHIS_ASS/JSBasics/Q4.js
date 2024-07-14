//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.


function calculateTriangleArea(a, b, c) {
    
    let s = (a + b + c) / 2;

    
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

const side1 = 5;
const side2 = 6;
const side3 = 7;


const area = calculateTriangleArea(side1, side2, side3);

console.log('The area of the triangle with sides ' + side1 + ', ' + side2 + ', ' + side3 + ' is: ' + area);




