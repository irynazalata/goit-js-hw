// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats);
// console.log(dog);

// class Student {
//   constructor() {}
// }
// console.log(typeof Student);
// ----------------------------------------------------------------------------------
// ================================================ HOMEWORK ==========================================
// Task 1 -----------------------------------------------------------------------------------
// function-constructor
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции-конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango);
// console.log(mango.getInfo());

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// Task 2 -----------------------------------------------------------------------------------
// class
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers
// class User {
//   constructor(name, age, followers) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
//   }

//   getInfo() {
//     return (`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//   };
// };

// console.log(typeof User);
// 'function'
// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// 'function'
// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
// Task 3 -----------------------------------------------------------------------------------
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих
// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i] === item) {
//         this.items.splice(i, 1);
//         return this.items;
//       }
//     }
//   }
// }

// console.log(typeof Storage);
// 'function'
// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// const storage = new Storage(goods);
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
// Task 4 -----------------------------------------------------------------------------------
// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value += str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this.append(str);
//     this.prepend(str);
//   }
// }

// console.log(typeof StringBuilder);
// 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// Task 5 -----------------------------------------------------------------------------------
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
/*
 * Добавь `статический` метод
 * `getSpecs(car)`, который принимает
 * объект-машину как параметр
 * и возвращает шаблонную строку
 * со свойствами и значениями объекта.
 * Свойства:
 *   maxSpeed,
 *   speed,
 *   isOn,
 *   distance,
 *   price
 * Пример строки, полученной этим методом:
 * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 */

/*
 * Конструктор получает объект настроек.
 *
 * Добавь свойства будущеего экземпляра класса:
 *  speed - текущая скорость,
 *          начальное значение `0`
 *  price - цена автомобиля
 *  maxSpeed - максимальная скорость
 *  isOn - заведен ли автомобиль.
 *         Значения `true` или `false`,
 *         начальное значение false
 *  distance - пробег в километрах,
 *             начальное значение `0`
 */
// constructor() {}

/*
 * Добавь геттер и сеттер
 * для свойства `price`, который будет
 * работать с свойством цены автомобиля.
 *
 * ВАЖНО: для записи методов get и set
 * значение параметра записывают с
 * подчеркиванием. См. ниже пример 1.
 */

/*
 * Метод, который заводит автомобиль
 * Записывает в свойство `isOn` значение `true`
 */
// turnOn() {}

/*
 * Метод, чтобы заглушить автомобиль
 * Этот метод должен записывать
 * в свойство isOn значение false,
 * и сбрасывать текущую скорость до 0
 */
// turnOff() {}

/*
 * Этот метод должен добавлять
 * к свойству `speed` полученное
 * значение, при условии,
 * что результирующая скорость
 * не больше чем значение свойства `maxSpeed`
 */
// accelerate(value) {}

/*
 * Этот метод должен отнимать
 * от свойства `speed`
 * полученное значение, при условии,
 * что результирующая скорость не меньше 0
 */

// decelerate(value) {}

/*
 * Этот метод должен добавлять к свойству
 * `distance` пробег в километрах,
 * т.е. hours * speed,
 * но только в том случае,
 * если машина заведена!
 */
//   drive(hours) {}
// }

// class Car {
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     return (this._price = value);
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     if (value + this.speed > this.maxSpeed) {
//       this.speed = this.maxSpeed;
//     } else if (value <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }
//   decelerate(value) {
//     if (value <= this.speed) {
//       this.speed -= value;
//     } else if (value - this.speed > 0) {
//       this.speed = 0;
//     }
//   }
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(3);
// mustang.accelerate(60);
// mustang.accelerate(100);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// console.log(Car.getSpecs(mustang));

// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

//console.log(mustang.price); // 2000
// mustang.price = 4000;
//console.log(mustang.price); // 4000
// console.log(Car.getSpecs(mustang));
// ---------------------------------------------------------------------------------------------
// const obj = {
//   name: 'Ira',
//   q: this,
// };

// console.log(obj.q);
// ------------------------------------------------------------------------------------------
// const greet = function () {
//   console.log(
//     `You've bought ${(this.weight && this.color) || ''} for ${
//       this.price
//     }, weight: ${this.weight || 0} `,
//   );
// };
// const hotel = { name: 'Resort Hotel' };
// const hotel2 = { name: 'Rixos' };
// greet.call(hotel, 'Genadii');
// greet.apply(hotel2, ['Vasilii']);
// const car1 = { name: 'Ferrari', color: 'red', price: 100 };
// const car2 = { name: 'BMW', color: 'black', price: 80 };
// greet.call(car1);
// greet.call(car2);
// let ferrari = greet.bind(car1);
// let bmw = greet.bind(car2);
// car2.weight = 100500;
// ferrari();
// bmw();
// --------------------------------------------------------------------------------------
// let obj, method;
// obj = {
//   go: function () {
//     console.log(this);
//   },
// };

// obj.go();
// (obj.go || obj.stop)();
// console.log(obj.go || obj.stop);
// -----------------------------------------------------------------------------------
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().showStep().up();
// --------------------------------------------------------------------------------------------
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }
// let user = {
//   name: 'Вася',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk, user.loginFail);
// ---------------------------------- correct answer ----------------------------------------
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// -------------------------------------------------------------------------------------------
// Дан массив с числами(Написать самим).Ваша ф - я возвращает среднее арифметическое его элементов

// const array = [5, 6, 7, 8, 9, 10];
// const averageNumber = function (arr) {
//   let total = 0;
//   for (let el of arr) {
//     total += el;
//   }
//   return total / arr.length;
// };

// console.log(averageNumber(array));
// ----------------------------------------------------------------------------------------------------
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// =========================================================================================================
// const anagram = function (str1, str2) {
//   str1 = str1.split('');
//   str2 = str2.split('');
//   console.log(str1);
//   console.log(str2);
//   if (str1.length !== str2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < str1.length; i++) {
//       if (str2.includes(str1[i])) {
//         let index = str2.indexOf(str1[i]);
//         str2.splice(index, 1);
//       }
//     }
//     return str2.length === 0 ? 'true' : 'false';
//   }
// };

// console.log(anagram('кабан', 'банка'));
// console.log(anagram('казан', 'банка'));
// console.log(anagram('кабан каприз', 'банка   приказ'));
// console.log(anagram('каприз', 'приказ'));
// ----------------------------------------------------------------------------------------------------------

// Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.
// Например:

// function f(text, ...rest) {
//   function g(a, b, c) {
//     return a + b + (c || 0);
//   }
//   console.log(text, g(...rest));
// }
// ---------------------- variant 2  ---------------------------------------
// function f(text, ...rest) {
//   function g(rest) {
//     let total = 0;
//     for (let el of rest) {
//       total += el;
//     }
//     return total;
//   }
//   console.log(text, g(rest));
// }
// f('тест', 1, 2);
// f('тест2', 1, 2, 3);
// f('тест2', 1, 2, 3, 4, 5, 6, 7);
// Код функции f не должен зависеть от количества аргументов.
// ----------------------------------------------------------------------------------------------------
// Как в функции отличить отсутствующий аргумент от undefined?
// function f(x) {
//   console.log(arguments.length);
// }

// f(undefined); // 1
// f(); // 0

// ------------------------------------------------------------------------------------------
// Напишите ф - цию которая принимает массив чисел  и возвращает массив в котором останутся только уникальные числа

// const uniqueNumbers = function (arr) {
//   const arr2 = [];
//   for (let el of arr) {
//     if (!arr2.includes(el)) {
//       arr2.push(el);
//     }
//   }
//   console.log(arr2);
// };

// const numbers = [1, 4, 7, 6, 8, 7, 8, 1, 1, 10];
// uniqueNumbers(numbers);
// ---------------------------------------------------------------------------------------------------------------
// const numbers = [1, 4, 7, 6, 8, 7, 8, 1, 1, 10];

// const fn = function (array) {
//   let number = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) === i) {
//       number.push(array[i]);
//     }
//   }
//   return number;
// };
// console.log(fn(numbers));
// const showThis = function () {
//   console.log(this);
// };
// ({ a: 1 }.showThis());

// const arr = [1, 2, 3];

// arr.showThis();

// ------------------------------------------------------------------------------------------
// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.

// let statistics = {
//   soldGeneral: 0,
//   soldTshirts: 0,
//   soldJackets: 0,
// };

// const ItemToSale = function (size, type, color) {
//   this.size = size;
//   this.type = type;
//   this.color = color;
//   this.saveToStatistics = function (amount) {
//     if (this.type === 'tshirt') {
//       statistics.soldGeneral += amount;
//       statistics.soldTshirts += amount;
//     } else if (this.type === 'jacket') {
//       statistics.soldGeneral += amount;
//       statistics.soldJackets += amount;
//     }
//     return statistics;
//   };
// };

// const jacket = new ItemToSale('xs', 'jacket', 'black');
// const tshirt = new ItemToSale('xs', 'tshirt', 'white');
// console.log(jacket);
// console.log(tshirt);
// console.log(jacket.saveToStatistics(2));
// console.log(tshirt.saveToStatistics(4));
// ------------------------------------------------------------------------------------------------------
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// const statistics = {};
// const Voter = function (name) {
//   this.name = name;
//   this.vote = function (presidentName) {
//     if (statistics.hasOwnProperty(this.name)) {
//       console.log('You have already voted');
//     } else {
//       statistics[this.name] = presidentName;
//     }
//     return statistics;
//   };
// };
// const ira = new Voter('Ira');
// const vasya = new Voter('Vasya');
// const petya = new Voter('Petya');
// const olga = new Voter('Olga');
// const misha = new Voter('Mishenka');
// ira.vote('John');
// vasya.vote('Pokemon');
// petya.vote('Pokemon');
// olga.vote('Pokemon');
// misha.vote('Baiden');
// misha.vote('John');
// ira.vote('Pokemon');
// const votes = Object.values(statistics);
// const presidents = {};
// for (let el of votes) {
//   const names = Object.keys(presidents);
//   if (names.includes(el)) {
//     presidents[el] += 1;
//   } else {
//     presidents[el] = 1;
//   }
// }
// const keys = Object.keys(presidents);
// let bestResult = 0;
// let selectedPresident = '';
// for (let key of keys) {
//   if (presidents[key] > bestResult) {
//     bestResult = presidents[key];
//     selectedPresident = key;
//   }
// }
// console.log(`${selectedPresident} won the election with ${bestResult} votes`);
// -------------------------------------------------------------------------------------------
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert("Mul=" + calculator.mul());

// const Calculator = function () {
//   this.read = function (num1, num2) {
//     this.number1 = num1;
//     this.number2 = num2;
//   };
//   this.sum = function () {
//     return +this.number1 + +this.number2;
//   };
//   this.mul = function () {
//     return +this.number1 * +this.number2;
//   };
// };

// let calculator = new Calculator();
// calculator.read(prompt('Enter first number'), prompt('Enter second number'));
// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());
// -------------------------------------------------------------------------------------------------
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

// const Accumulator = function (startingValue) {
//   this.value = startingValue;
//   this.read = function (number) {
//     this.value += +number;
//     console.log(this.value);
//   };
// };

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(prompt('Enter your number')); // прибавит ввод prompt к текущему значению
// accumulator.read(prompt('Enter your number')); // прибавит ввод prompt к текущему значению
// alert(accumulator.value);
// ----------------------------------------------------------------------------------------
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.

// const Calculator = function () {
//   this.calculate = function (str) {
//     let arr = str.split(' ');
//     let sign = arr[1];
//     if (sign === '+') {
//       return +arr[0] + +arr[2];
//     } else if (arr[1] === '-') {
//       return +arr[0] - +arr[2];
//     } else {
//       for (let el in this.callbacks) {
//         if (sign === el) {
//           return this.callbacks[el](arr[0], arr[2]);
//         }
//       }
//     }
//   };
//   this.callbacks = {};
//   this.addMethod = function (name, callback) {
//     this.sign = name;
//     this.callback = callback;
//     this.callbacks[name] = this.callback;
//   };
// };

// let calc = new Calculator();
// alert(calc.calculate('3 + 7')); // 10
// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);
// alert(powerCalc.calculate('2 * 3'));
// alert(powerCalc.calculate('2 ** 3'));
// alert(powerCalc.calculate('21 / 3'));
// alert(powerCalc.calculate('5 * 10'));
// alert(powerCalc.calculate('5 ** 3'));

// ----------------------------------------------------------
