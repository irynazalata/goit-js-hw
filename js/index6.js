// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));
// --------------------------------------------------------------------------
// FOREACH
// arr.forEach((el)=> console.log(el))
// console.log(arr);
// MAP
// console.log(arr.map((el, i, array)=> el))
// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];

//   // Для каждого элемента коллекции (user) вернем значение поля name
//   const names = users.map(user => user.isActive);

//   console.log(names); // ["Mango", "Poly", "Ajax"]
// const brownEyed2 = users.map(el=> el.eyeColor !== 'brown' ? el = {...el, eyeColor: 'brown'} : el);
// const brownEyed2 = users.map(el=> el = {...el, eyeColor: 'brown'});
// const brownEyed2 = users.map(el=> {
//     el.eyeColor = 'brown';
//     return el;
// });
// console.log(brownEyed2);
// FILTER
// const brownEyed =  users.filter(el=> el.age === 24);
// console.log(brownEyed);
// FIND
// const age = users.find(el=> el.id === "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3ddd");
// console.log(age);
// EVERY
// const e = users.every((el, i)=> {

//     console.log(i);
//   return  el.age>0;
// });
// console.log(e);
// SOME
// const s = users.some((el, i, arr)=> {
//   el.skills.includes('anim') ? console.log(arr[i]) : '';
//   return el.skills.includes('anim');
// });
// console.log(s);
// REDUCE
// const balance = users.reduce((acc, el)=> { 
//   return  acc += el.balance;
// }, 0)
// console.log(balance);
// const friends = users.reduce((acc, el)=>{
//     let result = [];
// acc.push(...el.friends);
//    for(let elem of acc) {
//        !result.includes(elem) ? result.push(elem) : '';
//    }
// return result.filter(el=> el === 'Briana Decker');
// }, []);
// console.log(friends);
// const friends2 = users.reduce((acc, el)=>{
// acc.push(...el.friends);
//     return acc;
// }, []);
// console.log(friends2);
// ============================================ PRACTICE ================================================
// TASKS
// I)
// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.
// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні
// ----------------------task I ----------------------------
// const century = function (year) {
//   const arr = String(year).split('');
//   return Number(arr[0] + arr[1]) + 1
// }

// console.log(century(1701))
// -----------------------------------------------
// const century = function (year) {
//   const cent = year * 0.01
//   return Math.ceil(cent)
// }

// console.log(century(1987))
// ------------------------------------------------
// ----------------------task II ----------------------------
// const userYears = function () {
//   const arr = [];
//   let year;
//   do {
//     year = prompt('Enter the year')
//     if (year !== null) {
//       arr.push(year)
//     }
//   } while (year != null)
//   for (let el of arr) {
//       console.log(`${el} рік - ${century(el)} століття`)
//   }
// }
// userYears()
// ------------------------------------------------------------
// -------------task III ------------------------
// const showYear = year => year % 4 === 0
// console.log(showYear(1996))
// console.log(showYear(1993))
// ---------------------------------------------------------------

// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];

// console.log(inventors.map(el => el.first))
// console.log(inventors.filter(el => el.year >= 1800))
// console.log(inventors.filter(el => (el.passed - el.year) >= 50))
// console.log(inventors.filter(el => el.last === 'Curie').map(el => el = { ...el, married: 'Pierre Curie' }))
// console.log(inventors.filter(el => el.first.includes('e') ? el.last : ''))
// console.log(inventors.filter(el => el.first.includes('e')))
// console.log(inventors.sort((a,b) => a.first > b.first ? 1 : -1))
// console.log(inventors.reduce((acc, el) => acc + (el.passed - el.year), 0))


// - Вывести массив имён учёных/изобретателей
// - Вывести массив тех кто родился в 19-ом веке
// - Вывести массив тех, кто прожил больше 50-ти лет
// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// - Вывести фамилии тех, в чьём имени есть буква "е"
// - Получить массив объектов отсортированный по имени (по алфавиту).
// - Найти сумму лет жизни всех учёных
// ======================================================================================================
// Напишите ф-ю которая принимает строку и возвращает объект с  количеством  букв в строке


// const getSymbStats = (acc, symb) => {
//   if (!acc[symb]) {
//     acc[symb] = 0;
//   }

//   acc[symb] += 1;

//   return acc
// };


// const countLetter = str => str.split('').reduce(getSymbStats, {})

// console.log(countLetter('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'))
// -------------------------------------------------------------------------------------------------
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// const nonUniqueElements = function (arr) {
//   return arr.filter((el, idx, arr) => (arr.lastIndexOf(el) !== idx) || (arr.indexOf(el) !== idx))
// }
// -----------------------------------------------------

// const nonUniqueElements = function (array) {
//   let res = array.filter(el => {
//     let tmp = array.slice();
//     let a = tmp.splice(tmp.indexOf(el), 1);
//     return tmp.includes(a[0]);
//   });
//   return res;
// };

// console.log(nonUniqueElements([1, 2, 3, 1, 3])) // [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5])) // []
// console.log(nonUniqueElements([5, 5, 5, 5, 5])) // [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])) // [10, 9, 10, 10, 9]





// ====================================== HOMEWORK ==============================================
// TASK 1 ---------------------------------------------------------------------------------------
// map
// Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Деструктурирующее присваивание для параметра функции
// PS Деструктурирующее присваивание (ДП):

// Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2
// ДП
// const object = {num : 2}
// const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// Объект как параметр c ДП
// const object = {num : 2}
//function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2


// let users = [
//  {
//  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//  name: 'Moore Hensley',
//  email: 'moorehensley@indexia.com',
//  eyeColor: 'blue',
//  friends: [ 'Sharron Pace' ],
//  isActive: false,
//  balance: 2811,
//  skills: [ 'ipsum', 'lorem' ],
//  gender: 'male',
//  age: 37
//  },
//  {
//  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//  name: 'Sharlene Bush',
//  email: 'sharlenebush@tubesys.com',
//  eyeColor: 'blue',
//  friends: [ 'Briana Decker', 'Sharron Pace' ],
//  isActive: true,
//  balance: 3821,
//  skills: [ 'tempor', 'mollit', 'commodo', 'veniam', 'laborum' ],
//  gender: 'female',
//  age: 34
//  },
//  {
//  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//  name: 'Ross Vazquez',
//  email: 'rossvazquez@xinware.com',
//  eyeColor: 'green',
//  friends: [ 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner' ],
//  isActive: false,
//  balance: 3793,
//  skills: [ 'nulla', 'anim', 'proident', 'ipsum', 'elit' ],
//  gender: 'male',
//  age: 24
//  },
//  {
//  id: '249b6175-5c30-44c6-b154-f120923736f5',
//  name: 'Elma Head',
//  email: 'elmahead@omatom.com',
//  eyeColor: 'green',
//  friends: [ 'Goldie Gentry', 'Aisha Tran' ],
//  isActive: true,
//  balance: 2278,
//  skills: [ 'adipisicing', 'irure', 'velit' ],
//  gender: 'female',
//  age: 21
//  },
//  {
//  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//  name: 'Carey Barr',
//  email: 'careybarr@nurali.com',
//  eyeColor: 'blue',
//  friends: [ 'Jordan Sampson', 'Eddie Strong' ],
//  isActive: true,
//  balance: 3951,
//  skills: [ 'ex', 'culpa', 'nostrud' ],
//  gender: 'male',
//  age: 27
//  },
//  {
//  id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//  name: 'Blackburn Dotson',
//  email: 'blackburndotson@furnigeer.com',
//  eyeColor: 'brown',
//  friends: [ 'Jacklyn Lucas', 'Linda Chapman' ],
//  isActive: false,
//  balance: 1498,
//  skills: [ 'non', 'amet', 'ipsum' ],
//  gender: 'male',
//  age: 38
//  },
//  {
//  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//  name: 'Sheree Anthony',
//  email: 'shereeanthony@kog.com',
//  eyeColor: 'brown',
//  friends: [ 'Goldie Gentry', 'Briana Decker' ],
//  isActive: true,
//  balance: 2764,
//  skills: [ 'lorem', 'veniam', 'culpa' ],
//  gender: 'female',
//  age: 39
//  }
// ]

// const usersBalance = users.map(el => el = { ...el, balance: 0 })
// console.log(usersBalance)

// const getUserNames = array => array.map(({ name }) => name);

// console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */

// TASK 2 ---------------------------------------------------------------------------------------
// filter
// Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя деструктурирующее присваивание для параметра функции ({eyeColor}) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));

// TASK 3 ---------------------------------------------------------------------------------------
// filter, map
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).
// Используй деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const users = [
//  {
//  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//  name: 'Moore Hensley',
//  email: 'moorehensley@indexia.com',
//  eyeColor: 'blue',
//  friends: [ 'Sharron Pace' ],
//  isActive: false,
//  balance: 2811,
//  skills: [ 'ipsum', 'lorem' ],
//  gender: 'male',
//  age: 37
//  },
//  {
//  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//  name: 'Sharlene Bush',
//  email: 'sharlenebush@tubesys.com',
//  eyeColor: 'blue',
//  friends: [ 'Briana Decker', 'Sharron Pace' ],
//  isActive: true,
//  balance: 3821,
//  skills: [ 'tempor', 'mollit', 'commodo', 'veniam', 'laborum' ],
//  gender: 'female',
//  age: 34
//  },
//  {
//  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//  name: 'Ross Vazquez',
//  email: 'rossvazquez@xinware.com',
//  eyeColor: 'green',
//  friends: [ 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner' ],
//  isActive: false,
//  balance: 3793,
//  skills: [ 'nulla', 'anim', 'proident', 'ipsum', 'elit' ],
//  gender: 'male',
//  age: 24
//  },
//  {
//  id: '249b6175-5c30-44c6-b154-f120923736f5',
//  name: 'Elma Head',
//  email: 'elmahead@omatom.com',
//  eyeColor: 'green',
//  friends: [ 'Goldie Gentry', 'Aisha Tran' ],
//  isActive: true,
//  balance: 2278,
//  skills: [ 'adipisicing', 'irure', 'velit' ],
//  gender: 'female',
//  age: 21
//  },
//  {
//  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//  name: 'Carey Barr',
//  email: 'careybarr@nurali.com',
//  eyeColor: 'blue',
//  friends: [ 'Jordan Sampson', 'Eddie Strong' ],
//  isActive: true,
//  balance: 3951,
//  skills: [ 'ex', 'culpa', 'nostrud' ],
//  gender: 'male',
//  age: 27
//  },
//  {
//  id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//  name: 'Blackburn Dotson',
//  email: 'blackburndotson@furnigeer.com',
//  eyeColor: 'brown',
//  friends: [ 'Jacklyn Lucas', 'Linda Chapman' ],
//  isActive: false,
//  balance: 1498,
//  skills: [ 'non', 'amet', 'ipsum' ],
//  gender: 'male',
//  age: 38
//  },
//  {
//  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//  name: 'Sheree Anthony',
//  email: 'shereeanthony@kog.com',
//  eyeColor: 'brown',
//  friends: [ 'Goldie Gentry', 'Briana Decker' ],
//  isActive: true,
//  balance: 2764,
//  skills: [ 'lorem', 'veniam', 'culpa' ],
//  gender: 'female',
//  age: 39
//  }
// ]

// const getUsersWithGender = (array, gender) => array.filter(array => array.gender === gender).map(({name}) => name);

// console.log(getUsersWithGender(users, 'male'));

// TASK 4 ---------------------------------------------------------------------------------------
// filter и оператор !
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)
// Используй деструктурирующее присваивание для параметра функции ({isActive}) без пробелов и переносов на новую строку.
// Используй оператор !.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getInactiveUsers = array => array.filter(({isActive}) => !isActive);

// console.log(getInactiveUsers(users));

// TASK 5 ---------------------------------------------------------------------------------------
// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.
// Используй деструктурирующее присваивание для параметра функции ({email}) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);
// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// TASK 6 ---------------------------------------------------------------------------------------
// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).
// Сравнение, пример
// const x = 13;
// // num больше 10 ?
// const larger = num > 10; // true
// // num меньше 100 ?
// const smaller = 100 > num; // true
// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// Создание анонимных объектов:
// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => age >= min && age <= max)   
//  .map(({name, email}) => ({['name']: name, ['email']: email}));  

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

// TASK 7 ---------------------------------------------------------------------------------------

// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.
// Используй деструктурирующее присваивание для параметра функции {balance} без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.


//  const calculateTotalBalance = array => array.reduce((totalBalance, {balance}) => totalBalance + balance, 0);

//  console.log(calculateTotalBalance(users)); 
// 20916

// TASK 8 ---------------------------------------------------------------------------------------
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.
// Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);

//  console.log(getUsersWithFriend(users, 'Briana Decker'));

//  console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// TASK 9 ---------------------------------------------------------------------------------------

// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный массив, то следует сделать копию массива и сортировать уже копию, а не исходный массив.
// Копирование массива:
// const arr = [1, 3, 5];
// // 1
// const first = [...arr];
// // 2
// const second = arr.slice();
// // 3
// const third = arr.concat();
// Используй деструктурирующее присваивание для параметра функции ({name})` без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// const getNamesSortedByFriendsCount = ([...array]) => array.sort((a,b) => a.friends.length - b.friends.length).map(({name}) => name);

//  console.log(getNamesSortedByFriendsCount(users));

// TASK 10 ---------------------------------------------------------------------------------------

// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// Слияние массивов:
// const odd = [1, 3, 5];
// const even = [2, 4, 6];
// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]
// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
// const users = [
//  {
//  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//  name: 'Moore Hensley',
//  email: 'moorehensley@indexia.com',
//  eyeColor: 'blue',
//  friends: [ 'Sharron Pace' ],
//  isActive: false,
//  balance: 2811,
//  skills: [ 'ipsum', 'lorem' ],
//  gender: 'male',
//  age: 37
//  },
//  {
//  id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//  name: 'Sharlene Bush',
//  email: 'sharlenebush@tubesys.com',
//  eyeColor: 'blue',
//  friends: [ 'Briana Decker', 'Sharron Pace' ],
//  isActive: true,
//  balance: 3821,
//  skills: [ 'tempor', 'mollit', 'commodo', 'veniam', 'laborum' ],
//  gender: 'female',
//  age: 34
//  },
//  {
//  id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//  name: 'Ross Vazquez',
//  email: 'rossvazquez@xinware.com',
//  eyeColor: 'green',
//  friends: [ 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner' ],
//  isActive: false,
//  balance: 3793,
//  skills: [ 'nulla', 'anim', 'proident', 'ipsum', 'elit' ],
//  gender: 'male',
//  age: 24
//  },
//  {
//  id: '249b6175-5c30-44c6-b154-f120923736f5',
//  name: 'Elma Head',
//  email: 'elmahead@omatom.com',
//  eyeColor: 'green',
//  friends: [ 'Goldie Gentry', 'Aisha Tran' ],
//  isActive: true,
//  balance: 2278,
//  skills: [ 'adipisicing', 'irure', 'velit' ],
//  gender: 'female',
//  age: 21
//  },
//  {
//  id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//  name: 'Carey Barr',
//  email: 'careybarr@nurali.com',
//  eyeColor: 'blue',
//  friends: [ 'Jordan Sampson', 'Eddie Strong' ],
//  isActive: true,
//  balance: 3951,
//  skills: [ 'ex', 'culpa', 'nostrud' ],
//  gender: 'male',
//  age: 27
//  },
//  {
//  id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//  name: 'Blackburn Dotson',
//  email: 'blackburndotson@furnigeer.com',
//  eyeColor: 'brown',
//  friends: [ 'Jacklyn Lucas', 'Linda Chapman' ],
//  isActive: false,
//  balance: 1498,
//  skills: [ 'non', 'amet', 'ipsum' ],
//  gender: 'male',
//  age: 38
//  },
//  {
//  id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//  name: 'Sheree Anthony',
//  email: 'shereeanthony@kog.com',
//  eyeColor: 'brown',
//  friends: [ 'Goldie Gentry', 'Briana Decker' ],
//  isActive: true,
//  balance: 2764,
//  skills: [ 'lorem', 'veniam', 'culpa' ],
//  gender: 'female',
//  age: 39
//  }
// ]


// const getSortedUniqueSkills = (array) => array.reduce((allSkills, { skills }) => {allSkills = [ ...allSkills, ...skills ]; return allSkills;}, []).filter((el, idx, arr) => arr.indexOf(el) === idx).sort();
// console.log(getSortedUniqueSkills(users));
// --------------------------------------------------------------------------------------------------

