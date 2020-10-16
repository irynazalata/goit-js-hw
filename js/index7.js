// ================================ DOM ============================================


// const paragraphRef = document.createElement('p');
// console.log(paragraphRef ); // <p></p>

// paragraphRef .textContent = 'This is text';
// console.log(paragraphRef ); // <h1>This is a heading</h1>

// const container = document.querySelector(".container");
// const title = document.querySelector(".title")
// console.log(container)
// container.appendChild(paragraphRef );
// container.insertBefore(paragraphRef , title);
// ---------------------------------------------------------------------------------------
// =========================== HOMEWORK ====================================
// TASK 1 -----------------------

// const listRef = document.querySelectorAll('.item')
// const categoryAmount = listRef.length
// console.log(`У списку ${categoryAmount} категорії.`)

// const headingRef = document.querySelectorAll('h2')
// headingRef.forEach(el => console.log(`Категорія: ${el.textContent}\nКількість елементів: ${el.nextElementSibling.children.length}`))

// TASK 2 -----------------------
// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients.Для створення DOM - вузлів використовуй document.createElement().

// for (let el of ingredients) {
//   const listItemRef = document.createElement('li')
//   const listRef = document.querySelector('#ingredients')
//   listItemRef.textContent = el
//   listRef.appendChild(listItemRef)
// }
// ----------------------------------------------------------
// PRACTICE -------------------------------------------

// const list = document.querySelector('ul')

// for (let i = 1; i <= 3; i++) {
//   const listItem = document.createElement('li');
//   listItem.textContent = `Елемент під номером ${i}`
//   list.append(listItem)
// }
// ----------------------------------------------------------
// for (let i = 1; i <= 5; i++) {
//   const div = document.createElement('div');
//   div.classList.add('container')
//   div.textContent = `${i}`
//   document.body.append(div)
// }
// ------------------------------------------------------------

// const containers = document.body.querySelectorAll('div')
// containers.forEach((el, index) => el.textContent = `${index+1}`)
// ------------------------------------------------------------

// for (let i = 0; i < 3; i++) {
//   const img = document.createElement('img')
//   document.body.append(img)
//   img.setAttribute('src', 'https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg')
// }
// --------------------------------------------

// for (let i = 0; i < 3; i++) {
//   const img = document.createElement('img')
//   let id = Math.round(Math.random() * 200)
//   document.body.append(img)
//   img.setAttribute('src', `https://picsum.photos/id/${id}/200/300`)
// }

// Шашличний калькулятор ))
// 1) Створити в HTML розмітку:
// 1.1) Заголовок "Скільки коштує мясо на шашлики?"
// 1.2) Форму з двома інпутами і підписами до них.
// В першому інпуті №1 вказуємо ціну за кілограм мяса (можна і з копійками до другого знаку після коми)
// В другому інпуті №2 вибираємо через range кількість кілограм
// 1.3) Справа внизу відображається загальга вартість мяса.
// 2 ) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
// 3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// 4) Завжди має відображатися валюта - гривня
// 5) Загальна сума відображається з копійками (2 знаки після коми)
// 6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// 7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// 8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
// 9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.
// 10) Оформлення на свій смак.
// 1) Отримати доступ до інпутів +
// 2) Розраховуємо вартість +
// 3) Показуємо результат на екрані +
// 4) Перезаписуємо синій квадрат +
// 5) Вартість 2 знака після коми і валюта +
// 6) Подія на Форму +
//   7) Запускати ф - ю при завантаженні сторінки +

const price = document.querySelector('input[type="number"]');
const weight = document.querySelector('input[type="range"]');
const form = document.querySelector('.form');
let selectedAmount = document.querySelector('.weight');
let selectedPrice = document.querySelector('.price');
let totalPrice = document.querySelector('.total-price');

selectedAmount.textContent = weight.value;


const countTotalPrice = function () {
  totalPrice.textContent = Math.ceil((+selectedPrice.textContent * +selectedAmount.textContent) * 100) / 100;
}

price.addEventListener('input', () => {
  selectedPrice.textContent = price.value;
})

weight.addEventListener('input', () => {
  selectedAmount.textContent = weight.value;
  if (weight.value < 5) {
    selectedAmount.style.color = 'red';
  } else if (weight.value > 5 && weight.value < 20) {
    selectedAmount.style.color = 'orange';
  } else {
    selectedAmount.style.color = 'green';
  }
})

form.addEventListener('input', countTotalPrice);
document.addEventListener('DOMContentLoaded', countTotalPrice);
// _____________________________________________________________________________
// Crazy button
// 1) Додати подію яка реагує на наведення мишки +
// 2) Змінити координати Кнопки на випадкові +
//   3) Кнопка не повинна залишати межі екрану +

const button = document.querySelector('.btn')
const viewWidth = document.documentElement.clientWidth;
const viewHeight = document.documentElement.clientHeight;

const btnWidth = Math.round((200 / viewWidth) * 100)
const btnHeight = Math.round((80 / viewHeight) * 100)

button.onmouseover = function (event) {
const number1 = Math.round(Math.random() * 100);
const number2 = Math.round(Math.random() * 100)
  event.target.style.transition = '.5s'
  number1 > btnWidth ? event.target.style.left = `${number1-btnWidth}%` : event.target.style.left = `${number1+btnWidth}%`
  number2 > btnHeight ? event.target.style.top = `${number2 - btnHeight}%` : event.target.style.top = `${number2 + btnHeight}%`
}
