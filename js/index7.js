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
