// =============================== PRACTICE 3 ============================
//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const fizzBuzz = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// let result = fizzBuzz(15);
// ------------------------------------------------------------------------------------
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;
// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);
// ------------------------------------------------------------------------------------------
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
//   a: 1,
// };

// const multiplyNumeric = function (obj) {
//   const keys = Object.keys(obj);
//   for (let key of keys) {
//     if (!isNaN(obj[key])) {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// };

// console.log(multiplyNumeric(menu));

// --------------------------variant2 -----------------------------

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
//   a: 1,
// };

// const multiplyNumeric = function (obj) {
//   const keys = Object.keys(obj);
//   for (let key of keys) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// };

// console.log(multiplyNumeric(menu));
// -------------------------------------------------------------------------------
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
// следующее значение по умолчанию: { name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет' }.

// const obj = {
//   name: 'Петр',
//   surname: 'Петров',
//   age: '20 лет',
// };

// const { name = 'Аноном', surname = 'Анонимович', age = '?лет' } = obj;

// console.log(name, surname, age);

// ----------------------------------------------------------
// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;

// const cart = {
//   products = [],
//   amount = 0,
//   price = 0,
// }
// --------------------------------------------------------------------
// Задача. Дан многомерный массив arr:

// const arr = {
//   ru: ['голубой', 'красный', 'зеленый'],
//   en: ['blue', 'red', 'green'],
// };
// Выведите с его помощью слово 'голубой'.

// console.log(arr['ru'][0]);
// ----------------------------------------------------------------------------
// task------------------------;
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами:
//     через квадратные скобки;
//     как свойство объекта.
//  Если пользователь активный (isOnline) выведите в консоль
// "Пользователь находится в сети" иначе "Пользователь не в сети"

// for (let el in user) {
//   console.log(user[el]);
// }
// if (user['isOnline']) {
//   console.log('Пользователь находится в сети');
// } else {
//   console.log('Пользователь не в сети');
// }
// -------------------------------------------------------------------------
// task ------------------------
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// Удалите єлементы "status" и "isOnline"
// delete user['status'];
// delete user['isOnline'];
// console.log(user);
// ----------------------------------------------------------------------------
// task ------------------------
// const name = 'Alex';
// const age = 25;
// Используя короткие свойства объектов создайте объект с полями "name", "age";
// const obj = {
//   name,
//   age,
// };
// console.log(obj);
// ----------------------------------------------------------------
// task ------------------------
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// Выведите в консоль значения свойств объекта по ключам, которые находятся в массиве:
// const keys = ['name', 'age', 'status'];

// for (let key of keys) {
//   console.log(user[key]);
// }
// ---------------------------------------------------------------------
// task ------------------------

// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// Добавьте в объект user метод sayHello, который выводит в консоль приветствие: "Hello"
// Выведите в консоль результат
// user.sayHello = function () {
//   return 'Hello';
// };

// console.log(user.sayHello());
// --------------------------------------------------------------------------
// task ------------------------
// const user = {
//   id: '132ghghj4234ghg34',
//   name: 'Alex',
//   age: 25,
//   status: 'student',
//   isOnline: true,
// };
// Добавьте в объект user метод sayHello,
// который выводит всю информацию о пользователе.
// Используйте console.group()
// user.sayHello = function () {
//   console.group(`${this.name}'s info`);
//   console.log(`id: ${this.id}`);
//   console.log(`name: ${this.name}`);
//   console.log(`age: ${this.age}`);
//   console.log(`status: ${this.status}`);
//   console.log(`isOnline: ${this.isOnline}`);
//   console.group();
// };

// user.sayHello();
// --------------------------------------------------------------------------
// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;
// добавьте в корзину ( в поле products) несколько товаров(объектов);
// Создайте метод, который подсчитывает количество товаров в корзине и общую сумму.
// создайте метод, который логирует все продукты корзины

// const cart = {
//   products: [],
//   amount: 0,
//   price: 0,
//   add(product) {
//     this.products.push(product.name);
//     this.amount += 1;
//     this.price += product.price;
// };
// };

// const milk = {
//   name: 'Milk',
//   price: 50,
// };
// const egg = {
//   name: 'Egg',
//   price: 30,
// };
// const bread = {
//   name: 'Bread',
//   price: 20,
// };

// cart.add(bread);
// cart.add(milk);
// cart.add(egg);
// cart.add(bread);
// console.log(cart);
// ============================================================================

// const vehicle = {
//   speed: 0,
//   color: 'white',
//   isEngineOn: false,
//   isLightOn: false,
//   speedOn(n) {
//     if (this.isEngineOn) {
//       return (this.speed += n);
//     } else {
//       console.log('Engine is not on, you cannot speed up');
//     }
//   },
//   speedOff(n) {
//     if (this.isEngineOn) {
//       return (this.speed -= n);
//     } else {
//       console.log('Engine is not on, you cannot speed down');
//     }
//   },
//   engineToggle() {
//     if (this.isEngineOn) {
//       this.speed = 0;
//       return (this.isEngineOn = false);
//     } else {
//       return (this.isEngineOn = true);
//     }
//   },
//   lightToggle() {
//     if (this.isLightOn) {
//       return (this.isLightOn = false);
//     } else {
//       return (this.isLightOn = true);
//     }
//   },
// };

// vehicle.speedOn(100);
// vehicle.engineToggle();
// vehicle.speedOn(100);
// vehicle.engineToggle();
// vehicle.lightToggle();
// vehicle.lightToggle();
// console.log(vehicle);
// ===============================================================================
// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
// const workers = [
//   { name: 'Alex', salary: 100, isActive: true },
//   { name: 'Rita', salary: 80, isActive: false },
//   { name: 'John', salary: 100, isActive: true },
//   { name: 'Derek', salary: 200, isActive: false },
// ];

// for (let i = 0; i < workers.length; i++) {
//   if (!workers[i].isActive && workers[i].salary > 100) {
//     let name = workers[i].name;
//     console.log(`${name}, you are fired`);
//     workers.splice(i, 1);
//   }
// }

// console.log(workers);
// -------------------------------------------------------------------------------------
// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня.
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
// Ф-ция принимает массив строк и считает сумму всех камней из массива. С учетом кол-ва и цены.
// просто вместо 1 камня - мы загружаем массив камней

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// const stoneNames = ['Бриллиант', 'Изумруд', 'Щебень', 'Сапфир'];

// const stonePrice = function (arr, arrNames) {
//   let result = 0;
//   for (let name of arrNames) {
//     for (let el of arr) {
//       if (el.name === name) {
//         result += el.price * el.quantity;
//       }
//     }
//   }
//   return result;
// };

// console.log(stonePrice(stones, stoneNames));

// ------------------------------------------------------------------------------------------

// const userName = str => {
//   const arr = str.split(' ');
//   const obj = {};
//   obj.name = arr[0];
//   obj.surname = arr[1];
//   console.log(obj);
// };

// userName('Iryna Zalata');
// ------------------------------------------------------------------------------------------------

// const workers = [
//   'Іванова Катерина',
//   'Петрова Юлія',
//   'Клименко Станіслав',
//   'Шевченко Андрій',
//   'Богуслав Тарас',
//   'Варламова Дарина',
//   'Козлов Максим',
// ];

// const addId = function (arr) {
//   const newWorkersList = [];
//   let obj = {};
//   for (let el of arr) {
//     let list = el.split(' ');
//     obj.surname = list[0];
//     obj.name = list[1];
//     newWorkersList.push(obj);
//     obj = {};
//   }
//   for (let i = 0; i < newWorkersList.length; i++) {
//     newWorkersList[i].id = i + 1;
//   }
//   return newWorkersList;
// };

// console.log(addId(workers));
// =============================== HOMEWORK 3 ===================================================
// TASK 1 =======================================================================================

// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки('\n')

// let message = ""
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// }

// user.mood = "happy"
// user["full time"] = true
// user.hobby = "skydiving"
// user.premium = false

// const keys = Object.keys(user)
// for (const key of keys) {
//   message += `${key} : ${user[key]}\n`
// }

// console.log(message)

// TASK 2 =======================================================================================
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.
// Циклы не должны использоваться

// const countProps = function (obj) {
//   "use strict"
//   const res = Object.entries(obj).length
//   return res
// }
// --------------------------------- other variant-------------------------------
//   const countProps = function (obj) {
//   "use strict"
//   const res = Object.keys(obj).length
//   return res
// }
// ---------------------------------------------------------------------------------
// console.log(countProps({})) // 0
// console.log(countProps({ a: 1, b: 1 })) // 2
// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })) // 5

// TASK 3 =======================================================================================
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   "use strict"
//   const keys = Object.keys(employees)
//   let bestResult = 0
//   let bestEmployee = ""
//   for (let key of keys) {
//     if (employees[key] > bestResult) {
//       bestResult = employees[key]
//       bestEmployee = key
//     }
//   }
//   return bestEmployee
// }
// Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }
// console.log(findBestEmployee(developers))
// 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }
// console.log(findBestEmployee(supports))
// 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers))
// 'lux'

// TASK 4 =======================================================================================
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   "use strict"
//   const salaries = Object.values(employees)
//   let total = 0
//   for (let salary of salaries) {
//     total += salary
//   }
//   return total
// }

// Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// }
// console.log(countTotalSalary(developers))
// 1000
// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// }
// console.log(countTotalSalary(supports))
// 500

// TASK 5 =======================================================================================
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   const result = []
//   for (const el of array) {
//     for (const key in el) {
//       if (key === prop) {
//         result.push(el[key])
//         break
//       }
//     }
//   }
//   return result
// }

// Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ]

// console.log(getAllPropValues(products, "name"))
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"))
// [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"))
//  []

// TASK 6 =======================================================================================
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена умноженная на количество).
// Вызовы функции для проверки работоспособности твоей реализации.

// function calculateTotalPrice(array, prop) {
//   "use strict"
//   let sum = 0
//   let total = 0
//   for (const el of array) {
//     const values = Object.values(el)
//     const [name, ...args] = values
//     total = args[0] * args[1]
//     if (prop === name) {
//       sum += total
//     }
//   }
//   return sum
// }

// --------------------------- 2variant-----------------------
// function calculateTotalPrice(array, prop) {
//   'use strict';
//   let total = 0;
//   for (const el of array) {
//     if (prop === el.name) {
//       total += el.price * el.quantity;
//     }
//   }
//   return total;
// }
// -----------------------------------------------------

// Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.table(products);
// console.log(calculateTotalPrice(products, 'Радар'));
// 9080
// console.log(calculateTotalPrice(products, 'Сканер'));
// 10200
// console.log(calculateTotalPrice(products, 'Захват'));
// 2400
// console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
// ===============================================================================================================
// const isApet = function (array) {
//   const phrase = ' is a pet';
//   for (let i = 0; i < array.length; i++) {
//     array[i] += phrase;
//   }
//   return array;
// };

// console.log(isApet(['Mango', 'Poly', 'Ajax']));

// --------------------------------------------------------------------------------------------------
// Сделайте калькулятор, который будет находить площадь и периметр квадрата
// const square = a => a * a;
// const perimeter = a => a * 4;

// console.log(square(5));
// console.log(perimeter(5));
// ------------------------------------------------------------------------------------------------
// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
// const square = (a, b) => a * b;
// const perimeter = (a, b) => 2 * (a + b);

// console.log(square(5, 7));
// console.log(perimeter(5, 7));
// -----------------------------------------------------------------------------------------------------
