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

const listRef = document.querySelectorAll('.item')
const categoryAmount = listRef.length
console.log(`У списку ${categoryAmount} категорії.`)

const headingRef = document.querySelectorAll('h2')
headingRef.forEach(el => console.log(`Категорія: ${el.textContent}\nКількість елементів: ${el.nextElementSibling.children.length}`))