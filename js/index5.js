// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats);
// console.log(dog);
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
