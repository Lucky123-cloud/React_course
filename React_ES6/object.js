// objects are like other things that the class has for example class car
// might have objects like model, fuel, color and others, just like its features eg below
// we are creating an object of class car called mycar to display the brand name or the type of the car

class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new Car("Aston Martin");

// The constructor is usually called immediately the object is initialzed