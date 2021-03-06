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

// ------------------------------------------------------------------------------------------------------
