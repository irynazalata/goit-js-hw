// =========================================== PRACTICE FROM CODE.ME ===============================
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
// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
// const square = (r, pi = 3.1415) => r * r * pi;
// const perimeter = (r, pi = 3.1415) => 2 * r * pi;

// console.log(square(5));
// console.log(perimeter(5));
// -----------------------------------------------------------------------------------------------------
// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
// const square = (a, b, c) =>
//   (((a + b + c) / 2) *
//     ((a + b + c) / 2 - a) *
//     ((a + b + c) / 2 - b) *
//     ((a + b + c) / 2 - c)) **
//   0.5;
// console.log(square(5, 7, 10));
// -----------------------------------------------------------------------------------------------------
// 1) Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє
// ​
// const closestToZero = function (arr) {

//   const obj = {}
//   for (let el of arr) {
//     const newEl = Math.abs(el);
//     obj[el] = 0 + newEl;
//   }
//   let keysSorted = Object.keys(obj).sort((a,b)=> obj[a]-obj[b])
//   return keysSorted[0]
// }
//  console.log(closestToZero([-5, -3, 1, 2, 3, 5])) // 1
//  console.log(closestToZero([-2, 3, 5, 10])) // -2
//  console.log(closestToZero([-7, -5, -3, 3, 5, 8])) //3

// 2) Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.

// let computerChoice
// let i
// let playerChoice;
// let result;

// do {
//   playerChoice = prompt("Зробіть свій вибір. Напишіть камінь, ножиці чи папір")
//   computerChoice = ['камінь', 'ножиці', 'папір'];
//   i = Math.floor(Math.random() * computerChoice.length);


//   if (playerChoice === null || playerChoice === '' || !(computerChoice.includes(playerChoice))) {
//     alert("Введіть коректний варіант");
//   } else {
//     if ((computerChoice[i] === 'ножиці' && playerChoice === 'папір') || (computerChoice[i] === 'папір' && playerChoice === 'камінь') || (computerChoice[i] === 'камінь' && playerChoice === 'ножиці')) {
//       result = 'На жаль, Ви програли. Спробуйте ще раз';
//       alert(result)
//     } else if ((computerChoice[i] === 'ножиці' && playerChoice === 'камінь') || (computerChoice[i] === 'папір' && playerChoice === 'ножиці') || (computerChoice[i] === 'камінь' && playerChoice === 'папір')) {
//       result = "Вітаємо, Ви виграли у комп'ютера";
//       alert(result)
//     } else if ((computerChoice[i] === 'ножиці' && playerChoice === 'ножиці') || (computerChoice[i] === 'папір' && playerChoice === 'папір') || (computerChoice[i] === 'камінь' && playerChoice === 'камінь')) {
//       result = "Нічия. Спробуйте ще раз";
//       alert(result)
//     }
//   }
// } while (result != "Вітаємо, Ви виграли у комп'ютера")

// console.log(computerChoice[i]);

// 2.5)
//  1) Питаємся в користувача яка в нього є валюта
// 2) Питаємся в яку він хоче перевести
// 3) Питаємся яку суму хоче поміняти 
// 4) Вивести на екран суму яка вийшла. 

// usd eur uah
// const USD_UAH = 28.3;
// const UAH_USD = 1 / USD_UAH;
// const EUR_UAH = 30;
// const UAH_EUR = 1 / EUR_UAH;

// const currency = ['USD', 'UAH', "EUR"]

// const customerCurrency = prompt('Яку валюту Ви хочете обміняти?');

// const wantedCurrency = prompt('Яку валюту Ви хочете отримати?');

// const customerCurrencyAmount = prompt('Яку суму Ви хочете обміняти?');

// let result

// if ((customerCurrency === null || !(currency.includes(customerCurrency)))
//   && (customerCurrency === null || !(currency.includes(wantedCurrency)))) {
//   alert('Введіть коректну валюту: USD, EUR, UAH')
// } else {
//   if (customerCurrency === 'USD' && wantedCurrency === 'UAH') {
//     result = (Number(customerCurrencyAmount) * USD_UAH) ;
//   } else if (customerCurrency === 'EUR' && wantedCurrency === 'UAH') {
//     const result = Number(customerCurrencyAmount) * EUR_UAH;
//   } else if (customerCurrency === 'UAH' && wantedCurrency === 'USD') {
//     result = Number(customerCurrencyAmount) * UAH_USD;
//   } else if (customerCurrency === 'UAH' && wantedCurrency === 'EUR') {
//     result = Number(customerCurrencyAmount) * UAH_EUR;
//   } else {
//     result = 0
//   }
//   result === 0 ? alert("Ми не здійснюємо таку валютну операцію") : alert(`За ${customerCurrencyAmount} ${customerCurrency} Ви отримаєте ${Math.round(result)} ${wantedCurrency}`)
// }



//3) 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.



//4) Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();


// 5) Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
// console.log('16px'); // 1rem
// console.log('24px'); // 1.5rem
// console.log('0px'); // 0rem


// 6) Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.
// const convertToPrc = function (container, block) {
//   let first = parseInt(container);
//   let second = parseInt(block);
//   let result = Math.round((second / first * 100) * 100) / 100;
//   return `${result}%`
// }

//  console.log(convertToPrc('1000px', '100px')); //10%
//  console.log(convertToPrc('950px', '150px')); // 15.79%


// 7) Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
//  from - одиниці з яких конвертувати, 
//  to - одиниці в які конвертувати, 
//  block - розміри блока для конвертації, 
//  container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
//    console.log('px', 'rem', 16); // 1rem
//    console.log('px', 'rem', 24); // 1.5rem
//    console.log('px','%', 100px', '1000px'); //10%
//    console.log('px', '%', '150px', '950px'); // 15.79%


// 8)Написати ф-ю convertFromKmToMetric(km). Ця функція приймає відстань в кілометрах і перетворює її в м, дм, см. Ф-я повертає обєкт конвертованих даних.
// console.log(convertFromKm(1)); // {cm: 100000, dm: 10000, m: 1000,}
// console.log(convertFromKm(1.5)); // {cm: 150000, dm: 15000, m: 1500,}
// console.log(convertFromKm(3)); // {cm: 300000, dm: 30000, m: 3000,}


// 9)
// let worker = {
//     workSchedule: [
//         {day: 'M', hours: 9},
//         {day: 'T', hours: 10},
//         {day: 'W', hours: 11},
//         {day: 'T', hours: 5},
//         {day: 'F', hours: 12},
//         ],
//         penalty: [
//         {day: 'M', value: 0},
//         {day: 'T', value: 120},
//         {day: 'W', value: 50},
//         {day: 'T', value: 0},
//         {day: 'F', value: 35},
//         ],
//         premium: 500,
// }
// написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
// Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// hours - години роботи
// value - сума штрафу
// premium - премія

// const getSalary = function (obj, rate) {
//   const weekSalary = obj['workSchedule'].reduce((acc, { hours }) => acc + hours, 0) * rate;
//   const weekPenalty = obj['penalty'].reduce((acc, { value }) => acc + value, 0);
//   return weekSalary - weekPenalty + obj['premium']
// }
// console.log(getSalary(worker, 20)); // 1235
// console.log(getSalary(worker, 8)); // 671


// 10) Напишите ф-ю которая принимает число и возвращает его зеркальную копию

// const reverseNumber = function (num) {
//   return String(num).split('').reverse().join('');
// }

// console.log(reverseNumber(12)) // 21
// console.log(reverseNumber(567)) // 765
// console.log(reverseNumber(1004)) // 4001

//11) Напишите ф-ю которая принимает строку и делает из нее строку в стиле capitalize.

// const Capitalize = function (str) {
//   return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
// }
// console.log(Capitalize('write javaScript function')) // Write JavaScript Function
// console.log(Capitalize('the quick brown fox')) //The Quick Brown Fox
// console.log(Capitalize('go to the editor')) //Go To The Editor


 //12) Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке

// const countOfVowels = function (str) {
//   let vowels = 'aeiouy';
//   str = str.toLowerCase().split('').filter(el => vowels.includes(el))
//   return str.length
//  }
// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4 
// console.log(countOfVowels('Go to the editor')) // 6


//13) Напишите ф-ю которая принимает строку и букву и возвращает количество этой буквы в строке

// const countLetter = function (str, letter) {
//   str = str.split('').filter(el => el === letter)
//   return str.length
// }
//  console.log(countLetter('w3school.com', 'o')) // 3


//14) Напишите ф-ю которая переводит rgb цвет в hex цвет
// Здесь поможет Number() i toString() 
// const convertColor = function (str) {
//   str = str.slice(4, -1).split(',')
  
//   const componentToHex = (c) => {
//   let hex = Number(c).toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }
//   return '#' + str.map(el => componentToHex(el)).join('')
// }
// console.log(convertColor('rgb(255,255,255)')) // #ffffff
// console.log(convertColor('rgb(0,0,0)')) //#000000
// console.log(convertColor('rgb(66, 134, 244)')) //#4286f4

//15)* Написати ф-ю cipher яка приймає зашифровану строку і повертає розшифровану. Перетворення строки відбувається за алгоритмом ROT13 який заміняє поточну літеру 13 буквою в абетці після неї. Наприклад A => N; K => X; R => E; U => H;
// Перші 13 літер алфавіту зміщуються вправо. Другі 13 літер зміщується вліво. Використати методи строки: 
// fromCharCode()  =   букви в юнікод
// charCodeAt()      = юнікод в букви
// console.log(cipher("SERR CVMMN"))  // FREE PIZZA;
// console.log(cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))  // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG;
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => console.log(typeof user.isActive));

// console.log(names); // ["Mango", "Poly", "Ajax"]
