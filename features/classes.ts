// public = accessible from anywhere. This is the default if no access modifier is specified.
// private = only accessible within the class
// protected = accessible within the class and its subclasses/children

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(
    public wheels: number,
    color: string,
  ) {
    super(color);
  }

  private drive(): void {
    console.log('Vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
