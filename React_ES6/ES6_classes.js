// a class is a type of function but instead of using function keyword
// We use the 'class' keyword and other properties are assigned inside a constructor() method

// example below

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand
    }
}


// notice that we have started with class Car with uppercase 'C' this is the convection way to name classes
// Now we can create objects using the Car class example below creating an object called mycar based in Car class

const mycar = new Car("Aston Martin");

// The constructor function is called automatically when the object is initialized
// We can also add methods (functions) inside the Car class

mycar.present();