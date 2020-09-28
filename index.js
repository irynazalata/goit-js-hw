// ================================HOMEWORK 1=============================
// ============================ Task1 ===============================

// Объяви две переменные хранящие название и цену товара name и price.
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: «Генератор защитного поля»
// цена: 1000
// Используя шаблонную строку и переменные name и price задай новой переменной firstMessage текст:
// Выбран «Генератор защитного поля», цена за штуку 1000 кредитов
// Присвой товару (price) новую цену - 2000
// Используя шаблонную строку и переменные name и price задай новой переменной secondMessage текст:
// Выбран «Генератор защитного поля», цена за штуку 2000 кредитов

// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// ============================ Task2 ===============================

// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.
// Есть переменные
// stock = 100. Это количество товаров на складе.
// invoice. Эта переменная - количество единиц товара в заказе. Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.
// message. Это переменная для текста с ответом на запрос о покупке. Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

// const invoice = 100
// const stock = 100

// const message = invoice <= stock ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!"

// console.log(message)

// ============================ Task3 ===============================
// Использование if else
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:
// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:
// const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.

// const userPassword = "jqueryismyjam"

// const ADMIN_PASSWORD = "jqueryismyjam"

// const CANCELED_BY_USER = "Отменено пользователем!"
// const ACCESS_IS_ALLOWED = "Добро пожаловать!"
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!"
// let message

// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER
// } else {
//   message = ACCESS_DENIED
// }

// console.log(message)

// ============================ Task4 ===============================

// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.
// Переменная credits хранит количество средств - 23580 кредитов.
// Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.
// Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).
// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:
// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${} дроидов, на счету осталось ${} кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

// const orderPieces = 4

// const credits = 23580
// const pricePerDroid = 3000
// const CANCELED_BY_USER = "Отменено пользователем!"
// const ACCESS_DENIED = "Недостаточно средств на счету!"

// let totalPrice // Write code on this line
// let balanceCredit // Write code on this line
// let message

// totalPrice = pricePerDroid * orderPieces
// balanceCredit = credits - totalPrice
// if (orderPieces === null) {
//   message = CANCELED_BY_USER
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED
// } else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// }

// console.log(message)

// ============================ Task5 ===============================
// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.
// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной (метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).
// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:
// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${} будет стоить ${} кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.
// В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const countryName = "ЧИЛИ"

// const CANCELED_BY_USER = "Отменено пользователем!"
// const NO_DELIVERY = "В выбранную страну доставка недоступна."
// const CHINA = "Китай"
// const AUSTRALIA = "Австралия"
// const INDIA = "Индия"
// const JAMAICA = "Ямайка"
// let message
// let price = 0
// let country
// if (countryName === null) {
//   message = CANCELED_BY_USER
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase() // Write code on this line
//   switch (country) {
//     case CHINA:
//       price = 100
//       break
//     case AUSTRALIA:
//       price = 170
//       break
//     case INDIA:
//       price = 80
//       break
//     case JAMAICA:
//       price = 120
//       break
//     default:
//       message = NO_DELIVERY
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`
// }

// console.log(message)

// ===================================PRACTICE==============================

// let bulb = 1
// let electricity = 0

// if (bulb && electricity) {
//   console.log("Light")
// } else {
//   console.log("Darkness")
// }

// console.log(0 || 1 || null)

// const person = {
//   driverLicence: "YES",
//   age: 21,
//   drunk: "NO",
// }

// if (person.driversLicence === "YES" || person.drunk === "NO" || person.age >= "21") {
//   console.log("You're allowed to drive")
// } else {
//   console.log("Driving is prohibited")
// }

// const person = {
//   driverLicence: true,
//   age: 20,
//   drunk: false,
// }

// if (person.driverLicence && person.drunk && person.age === 20) {
//   console.log("You're allowed to drive")
// } else {
//   console.log("Driving is prohibited")
// }

// let data = 3
// let result

// if (data === 5) {
//   console.log("Data is 5")
// } else if (data > 5) {
//   console.log("Data is more than 5")
// } else {
//   console.log("Data is wrong")
// }

// result = data === 5 ? "Data is 5" : data > 5 && data < 10 ? "Data is more than 5" : "Data is wrong"
// console.log(result)

// let userLevel
// const subscription = "advanced"

// switch (subscription) {
//   case "beginner":
//     userLevel = "not bad"
//     break
//   case "preintermediate":
//     userLevel = "good"
//     break
//   case "intermediate":
//     userLevel = "great"
//     break
//   case "advanced":
//     userLevel = "superb"
//     break
//   default:
//     console.log("Your level is not defined")
// }
// console.log(userLevel)

// ============================== МАССИВЫ =======================================================

// const clients = ["Irochka", "Mishenka", "Dasha", "Illya", "Liliya", "Julien"]

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Our guest:", clients[i])
// }
// for (const client of clients) {
//   console.log(client)
// }
// const string = "javascript"
// for (const character of string) {
//   console.log(character)
// }
// const nameToFind = "Sasha"
// let message

// for (const client of clients) {
//   if (nameToFind === client) {
//     message = "Клиент с таким именем есть в базе"
//     break
//   }
//   message = "Client is not on the list"
// }
// console.log(message)

// const numbers = [6, 98, 65, 34, 14, 22]
// const numberToCompare = 25

// for (const number of numbers) {
//   if (number > numberToCompare) {
//     continue
//   }
//   console.log("This number:", number, "is smaller than", numberToCompare)
// }
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// let total = 0

// for (let i = 0; i < matrix.length; i += 1) {
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j])
//     total += matrix[i][j]
//   }
// }

// console.log(total)
// ====================================== practice ====================
// const arr = [5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
// const arr = []
// for (let i = 0; i < 10; i++) {
//   arr[i] = i + 1
// }
// console.log(arr)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let el of arr) {
//   if (el === 5) {
//     console.log(el)
//     break
//   }
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// let sum = 0

// for (let i of matrix) {
//   for (let j of i) {
//     sum += j
//   }
// }
// console.log(sum)

// let str = "Hello world, I'm Ira"
// let res = str.split(" ").join(" ")
// console.log(res)
// console.log(typeOf(res))

// =========== Проверка на палиндром ===============
// const str = "aBBA"
// const res = str.split("").reverse().join("")
// console.log(res.toLowerCase() === str.toLowerCase())
// ======================================================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = 7
// if (arr.includes(a)) {
//   console.log("Includes")
// } else {
//   console.log("Not")
// }
// let arr = []
// arr.push("1")
// arr.push("2")
// console.log(arr)
// console.log(arr.push())
// console.log(arr.pop())
// arr.unshift("0")
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// ==================================================================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr.slice(3))
// =================================================================
// let arr = [1, 2, 3]
// arr.splice(2, 0, "Hello")
// console.log(arr)
// arr.splice(0, arr.length)
// console.log(arr)
// ========================================================
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// let arr = [1, 2, 3];
// let newArr = arr.concat([]);
// arr.push(4);
// console.log(newArr);
// console.log(arr);

// =============================== HOMEWORK 2 ============================
// TASK 1
// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

// const getItemsString = function(array) {
//   'use strict';
//   let result = '';
//   for (let i = 0; i < array.length; i++) {
//     let elementNumber = i + 1;
//     let elementValue = array[i];
//     result += `${elementNumber} - ${elementValue}\n`;
//   }
//   return result;
// }

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

// TASK 2 =======================================================================

// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach или функциональных методов.

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//   let result = message.split(" ")
//   let price = Number(result.length) * Number(pricePerWord)
//   return price
// }

// console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)) // 80
//console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)) // 160
//console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)) // 240
//console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)) // 120
//console.log(calculateEngravingPrice("Uno", 100)) // 100

// TASK 3 =======================================================================

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string = "") {
//   let result = string.split(" ")
//   let numberOfLetters = 0
//   let longestWord = ""
//   for (let el of result) {
//     if (el.length > numberOfLetters) {
//       numberOfLetters = el.length
//       longestWord = el
//     }
//   }
//   return typeof longestWord
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// 'jumped'

//console.log(findLongestWord("Google do a roll"))
// 'Google'

//console.log(findLongestWord("May the force be with you"))
// 'force'

// TASK 4 =======================================================================================

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

// function formatString(string, maxLength = 40) {
//   let result = string.split("");
//   if (result.length < maxLength) {
//     return string;
//   } else {
//     result.length = maxLength;
//     string = result.join("") + "...";
//     return string;
//   }
// }

//console.log(formatString("Curabitur ligula sapien, tincidunt non."))
// 'Curabitur ligula sapien, tincidunt non.'
//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'
//console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30))
// 'Vestibulum facilisis, purus ne...'

// TASK 5 =======================================================================================
// Функция предикат
// Функция предикат возвращает true или false
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// function checkForSpam (str) {
//   'use strict';
//   let word1 = "spam"
//   let word2 = "sale"
//   let message = str.toLowerCase().split(" ")
//   for (let el of message) {
//     if (el.includes(word1) || message.includes(word2)) {
//       return true
//     }
//     return false
//   }
// }

//console.log(checkForSpam('Latest technology news')); // false
//console.log(checkForSpam('JavaScript weekly newsletter')); // false
//console.log(checkForSpam('Get best sale offers now!')); // true
//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// TASK 6 =======================================================================================

// Конструкция new Array(10) создаст массив, длинной в 10 элементов. Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined. Поэтому такой массив нужно заполнить значениями для дальнейшего использования.
// Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push()
// Быстрая обработка массива
// Преимущество создания массива заданной длины перед добавлением в пустой массив в том, что метод push() медленнее обрабатывается.
// Если `new Array()` будет содержать более одного аргумента, то будет создан массив с элементами из аргументов.
// Пример:
// new Array(3);
// // [,,]
// new Array(1, 2, 3);
// // [1, 2, 3]
// Быстрое создание массива
// Пустой массив. Вызов new Array() создаст пустой массив []. Но это более медленный способ создания массива по сравнению с использованием литерала. Если нужен пустой массив, то рекомендуется использовать литерал массива.
// const arrFast = []; // быстрее
// const arrSlow = new Array(); // медленнее
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for.По завершению перебора массива array возвращается массив numbers.

// function mapArray(array) {
//   "use strict"
//   const numbers = new Array(array.length)
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10
//   }
//   return numbers
// }

//console.log(mapArray([-2, 0, 2]))
// [-20, 0, 20]
//console.log(mapArray([-2.5, 0, 2.5]))
// [-25, 0, 25]

// TASK 7 =======================================================================================
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.По завершению проверки массива array возвращается массив numbers.

// function filterArray(array) {
//   "use strict"
//   const numbers = []
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i])
//     }
//   }
//   return numbers
// }

//console.log(filterArray([-2, 0, 2]))
//[-2, 0, 2]
//console.log(filterArray([1, NaN, Infinity]))
//[1]
//console.log(filterArray([0, -0, 100, "100"]))
//[0, 0, 100]
//console.log(filterArray([undefined, false, null, [], 1]))
//[1]
//console.log(filterArray([{}, () => {}, 2]))
//[2]

// TASK 8 =======================================================================================

// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.Для подсчета суммы используй переменную total.Функция должна возвращать 0 если массив пустой и значение total в противном случае.

// function reduceArray(array) {
//   "use strict"
//   let total = 0
//   if (array.length > 0) {
//     for (let number of array) {
//       total += Number(number)
//     }
//     return total
//   } else {
//     return 0
//   }
// }

//console.log(reduceArray([]))
//0
//console.log(reduceArray([1, 2, 3]))
// 6
//console.log(reduceArray([-2, 0, 2]))
// 0
//console.log(reduceArray([1, 2, 2.5]))
// 5.5

// TASK 9 =======================================================================================
// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:
// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.
// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.
// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
// Напиши функцию addLogin(allLogins, login) которая:
// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.
// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {
//   if (login.length >= min && login.length <= max) {
//     return true
//   } else {
//     return false
//   }
// }

// function isLoginUnique(allLogins, login) {
//   "use strict"

//   if (allLogins.includes(login)) {
//     return false
//   } else {
//     return true
//   }
// }

// function addLogin(allLogins, login) {
//   "use strict"
//   const SUCCESS = "Логин успешно добавлен!"
//   const REFUSAL = "Такой логин уже используется!"
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов"
//   let message
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login)
//       return SUCCESS
//     } else {
//       return REFUSAL
//     }
//   } else {
//     return ERROR
//   }
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// ====================================================================================================================

// =============================== HOMEWORK 3 ============================
// ===============================================================================================================
