// class inheritance simply means that we are creating another class that inherits all the properties of the prevoius class
// for our case that would be class Car
// let us create a class name "Model" which will inherit the mothods from the "Car" class:
// we use the extends keyword to achieve this


class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model
    }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();