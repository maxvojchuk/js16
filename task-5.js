//5
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(
      `Mаксимальна швидкість: ${car.maxSpeed}, швидкість: ${car.speed}, Чи працює: ${car.isOn}, дистанція: ${car.distance}, коштує: ${car.price}`
    );
  }
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }
  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
