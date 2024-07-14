/*Write a JavaScript program to get the volume of a Cylinder with four decimal 
places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.*/

// Define a Cylinder class
class Cylinder {
    // Constructor to initialize radius and height
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    getVolume() {
        // Calculate volume using the formula V = π * r^2 * h
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        // Round the volume to four decimal places
        return volume.toFixed(4);
    }
}

// Example usage:
// Create a Cylinder object with radius 5 and height 10
let cylinder = new Cylinder(5, 10);

// Calculate and print the volume
console.log("Volume of the cylinder:", cylinder.getVolume());
