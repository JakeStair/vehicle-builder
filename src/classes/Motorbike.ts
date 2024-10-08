// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // Properties include vin, color, make, model, year, weight, topSpeed, and wheels
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.topSpeed = topSpeed;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    // Check if the wheels array has 2 elements; if not, create 2 default Wheel objects
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails() {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
