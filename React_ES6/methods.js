// methods are like function that are within the classes
// lets create a function/method called present that will return 'I have a ' + this.brand

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand
    }
}

const mycar = new Car("Aston Martin");
mycar.present();