const pTag = document.getElementsByTagName('p');
const pId = document.getElementById('main');
console.log(pId.innerText);

const inputs = document.querySelectorAll('input');
console.log(inputs[0].value);
console.log(inputs[2].value);
console.log(inputs[3].value);

const a = document.querySelector('a');
console.log(a.href);

const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
console.log(range.getAttribute('type'));
console.log(range.getAttribute('lolol'));
// This will change the attribute type to radio
range.setAttribute('type', 'radio');

const ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);

// Changing multiple elements
const allLis = document.querySelectorAll('li');

// for (let i = 0; i< allLis.length; i++) {
//     allLis[i].innerText = "We are the champions"
// }

// for (let li of allLis) {
//     li.innerHTML = 'We are <b>The champions</b>'
// }

// Altering style

pId.style.color = 'red';
const colors = ['red','orange', 'yellow', 'green', 'blue', 'purple'];

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })

// getComputedStyle

const li = document.querySelector('li');

const style = getComputedStyle(li);
console.log(style);
console.log(style.color);

const h1 = document.querySelector('h1');
const compStyles = getComputedStyle(h1);
console.log(compStyles.color);

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration= 'line-through';
// todo.style.opacity = '50%';

todo.getAttribute('class');
// todo.getAttribute('class').includes('done');
todo.setAttribute('class', todo.getAttribute('class') + 'done');
console.log(todo.getAttribute('class'));
todo.classList.toggle('done');
todo.classList.toggle('done');

// Creating element
const newh2 = document.createElement('h2');
newh2.innerText = 'I like animals!';
newh2.classList.add('special');

// Connecting the element in section
const section = document.querySelector('section');
section.appendChild(newh2);

const newImg = document.createElement('img');
newImg.src = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/01/Boku2_02_3.jpg'
newImg.style.width = "300px";
document.body.appendChild(newImg);

const parentUL = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I am a new Li';
parentUL.appendChild(newLi);

// Put on the top
const firstLi = document.querySelector('li.tododone');
// dad.insertBefore(what you want to insert, where you want to insert)
parentUL.insertBefore(newLi, firstLi);

const i = document.createElement('i');
i.innerText = 'I am italics!!!';

const firstP = document.querySelector('p');
// firstP.insertAdjacentElement('beforebegin', i);
// firstP.insertAdjacentElement('afterbegin', i);
// firstP.insertAdjacentElement('afterend', i);
// firstP.insertAdjacentElement('beforeend', i);

// Easier than appendChild to put in the end of the element
firstP.append(i, newLi);

// Easier than appendChild to put in the begging of the element
firstP.prepend(i, newLi);

// Remove and RemoveChild
// Removing the italics on the 'p'
const removeMe = firstP.querySelector('i')
firstP.removeChild(removeMe);
// Using remove to literaly removing 'h1'
h1.remove()