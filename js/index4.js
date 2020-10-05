// ================================== Practice 4 ============================================
// ==========================================================================================
// ===================================== Homework 4 ================================================
// TASK 1 =======================================================================================
// Callback функция
// Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова (callback). Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.
// Оформи создание массива numbers нужной длины используя new Array () и необходимый аргумент для задания длины, равной длине array.
// Напиши функцию обратного вызова addIndex , которая принимает два параметра - element и index и возвращает число - сумму element и index (сложение).
// Напиши функцию обратного вызова subIndex, которая принимает два параметра - element и index и возвращает число - разность element и index(вычитание).

// const addIndex = (element, index) => element + index;
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];
// console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]
// console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
// ============================================================================================
// TASK 2 =======================================================================================
// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr. Функция возвращает true или false в зависимости от того встречается ли элемент первый раз в массиве (true) или этот элемент в массиве уже встречался (false) .
// Функция isEven принимает один параметр - element. Функция возвращает true или false в зависимости от того является ли элемент четным числом или нет.
// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray заполняла новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];
// console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]
// console.log(filterArray(arr, isEven));
// [2, 4, 2]
// ============================================================================================
// TASK 3 =======================================================================================
// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element , возвращает число - сумму, разность или произведение параметров.
// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива в зависимости от того какая именно из трех функция(add, mult, sub) будет передана в качестве cb.

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5
// ============================================================================================
// TASK 4 =======================================================================================
// this в методах объекта
// Расставь отсутствующие this в методах объекта account.
// В комментариях показаны операции с объектом и ожидаемые результаты.
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// (copyAccount.orders = [...account.orders]);
// копируем для автотестов ссылочные типы

/*
account.changeDiscount(0.15);
//console.log(account.discount); // 0.15

//console.log(account.showOrders()); 
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
//console.log(account.balance); // 19000

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']
*/
// ============================================================================================
// TASK 5 =======================================================================================
// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов
// inventory.add
// inventory.remove выступал объект inventory

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory), // Write code in this line
// );
// const arrayAdd = [...inventory.items];
/* 
//console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

//console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']
*/
// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory), // Write code in this line
// );
// const arrayRemove = [...inventory.items];
// console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }
// console.log(arrayRemove);
// ['Knife', 'Medkit']
// ===========================================================================================
// ================================ Practice =========================================

// const greeting = function (callback, callback2) {
//   let helloMsg = 'Hello, my name is:';
//   let countryMsg = "I'm from: ";
//   callback(helloMsg);
//   callback2(countryMsg);
// };

// const askName = function (helloMsg) {
//   let name = prompt("What's your name?");
//   console.log(helloMsg + name);
// };

// const askCountry = function (countryMsg) {
//   let country = prompt('Where are you from?');
//   console.log(countryMsg + country);
// };

// greeting(askName, askCountry);
// =============================================================================================
// const calculator = function (num, callback) {
//   return callback(num);
// };

// const plus = function (num) {
//   return Number(prompt('Enter your number: ')) + num;
// };

// const minus = function (num) {
//   return prompt('Enter your number: ') - num;
// };

// let resultPlus = calculator(10, plus);
// console.log(resultPlus);
// let resultMinus = calculator(10, minus);
// console.log(resultMinus);
// ===============================================================================
// Напишите функцию которая принимает 3 параметра: название, цена, колбек
// Колбек создаёт объект с товаром и выводит его в консоль

// const allProducts = [];
// const fn = function (name, price, callback) {
//   callback(name, price);
// };

// const orderFormatting = function (name, price) {
//   let product = { name, price };
//   allProducts.push(product);
//   return allProducts;
// };

// fn('Bread', 10, orderFormatting);
// fn('Butter', 25, orderFormatting);
// fn('Milk', 20, orderFormatting);
// fn('Sugar', 30, orderFormatting);
// console.log(allProducts);
// ============================================================================

// const greeting = function (callback) {
//   const message = 'Welcome to our place, ';
//   callback(message);
// };
// const askName = function (message) {
//   const name = prompt('Enter your name, please');
//   console.log(message + name);
// };

// greeting(askName);
// ==============================================================================
// let money = 85;
// const favouriteColor = 'green';
// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let cars = [
//   { name: 'ferrari', cost: 100, color: 'red' },
//   { name: 'lambo', cost: 90, color: 'green' },
//   { name: 'bmw', cost: 80, color: 'blue' },
//   { name: 'subaru', cost: 60, color: 'yellow' },
// ];

// const affordableCars = [];
// for (let car of cars) {
//   if (money >= car['cost']) {
//     affordableCars.push(car);
//   }
// }

// console.log(affordableCars);

// affordableCars(cars, affordableCar);

// const affordableCar = function (callback) {
//   callback(array);
// };

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const affordableCars = filter(cars, car => money >= car.cost);
// console.log(affordableCars);
// ---------------------------------------------- variant2 ----------------------------------------------
// const affordableCars = function (array, value, callback) {
//   callback(array, value);
// };

// const priceChecking = function (array, value) {
//   const filteredArray = [];
//   for (const el of array) {
//     if (value >= el['cost']) {
//       filteredArray.push(el);
//     }
//   }
//   console.log(filteredArray);
// };
// affordableCars(cars, money, priceChecking);
// --------------------------------------------------------------------------------------------------------
// Роблю домашку самостійно, сама пишу весь код
// ---------------------------------------------------------------------------------------------------------
// Задача 1
// const mapArray = function (array, cb) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     let index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// };

// const addIndex = (element, index) => element + index;
// const subIndex = (element, index) => element - index;

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

//console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
// ----------------------------------------------------------------------------------------------------------
// Задача 2
// const isUniq = (element, index, array) => array.indexOf(element) === index;

// const isEven = element => element % 2 === 0;

// const filterArray = function (array, cb) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     let index = i;
//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// };
// const arr = [1, 2, 3, 4, 5, 1, 2, 5];
// console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]
// console.log(filterArray(arr, isEven));
// [2, 4, 2]
// ------------------------------------------------------------------------------------------------------------------
// Задача 3
// const add = (accum, element) => accum + element;
// const sub = (accum, element) => accum - element;
// const mult = (accum, element) => accum * element;

// const reduceArray = function (array, cb) {
//   let accum = array[0];
//   for (let i = 1; i < array.length; i++) {
//     const element = array[i];
//     accum = cb(accum, element);
//   }
//   return accum;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
//console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
//console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
//console.log(reduceArray(arr, sub, 10)); // -5
// -----------------------------------------------------------------------------------------
