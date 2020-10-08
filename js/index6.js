class Car {
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor(settings) {
    this.maxSpeed = settings.maxSpeed || 0;
    this.speed = settings.speed || 0;
    this.isOn = settings.isOn || false;
    this.distance = settings.distance || 0;
    this._price = settings.price || 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.speed + value > this.maxSpeed
      ? (this.speed = maxSpeed)
      : (this.speed += value);
  }
  decelerate(value) {
    this.speed - value < 0 ? (this.speed = 0) : (this.speed -= value);
  }
  drive(hours) {
    this.distance += this.speed * hours;
  }
}
