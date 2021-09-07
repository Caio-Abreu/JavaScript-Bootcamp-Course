// Simple functions 
function greet(nickname){
    console.log(`Hi ${nickname}`);
}

greet('Tim')
greet()

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    for(let i = 0; i< numRolls; i++){
        rollDie();
    }
}

throwDice(8);

function sum(x, y) {
    console.log(x+y);
}

sum(5,4);

function divide(a,b) {
    console.log(a/b);
}

divide(3,2);

// return will break the function returning what is write

function isValidPassword(password,username){
    if(password.lengeth < 8){
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
    if(password.indexOf(username) !== -1){
        return false;
    }
    return true;

}

function isValidPassword(password,username){
    if(password.lengeth < 8 || 
        (password.indexOf(' ') !== -1 || 
        password.indexOf(username) !== -1)
        ){
        return false;
    }
    return true
}
// Paragram

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false;
            console.log("false")
        }
    }
    return true;
    console.log("true")
}

isPangram('The five boxing wizards jump quickly');


// Passing functions as parameter

// function callThreeTimes(f){
//     f();
//     f();
//     f();
// }

function cry(){
    console.log("BOO HOO I AM SO SAD!!");
}

// callThreeTimes(cry);

function repeatNTimes(action, num){
    for(let i =0; i < num;i++) {
        action();
    }
}

repeatNTimes(cry,10);

// const btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     alert('WHY DID YOU CLICK ME?');
// });

// forEach

const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num){
    console.log(num * 2);
})

numbers.forEach(function(num,idx){
    console.log(num,idx);
})

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);

const books = [
    {
        title: 'Good omens',
        authors: ['Terry pratchett','Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: the complete edition',
        authors: ['Jeff smith'],
        rating:4.42
    },
    {
        title: 'American gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A gentleman in moscow',
        authors: ['Amor towles'],
        rating: 4.36
    }
]
books.forEach(function(book){
    console.log(book.title.toUpperCase());
})

// Map, will map the interable and for each element will return a function made by you

const words = ['asap','byob','rsvp','diy'];

console.log(numbers);
const doubles = numbers.map(function(num){
    return num * 2;
})
console.log(doubles);

const numDetail = numbers.map(function(n){
    return{
        value: n,
        isEven: n % 2 === 0
    }
})
console.log(numDetail);

const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.');
})

console.log(abbrevs);

const titles = books.map(function(b){
    return b.title;
})

console.log(titles);

// Arrow functions
// When you have just one parameter the parentesis isnt needed but still works


const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x,y) => {
    return x * y
}

// const square = x => {
//     return x * x;
// }

// const square = x => (
//     x * x
// )

// const square = x => x * x;

const square = x => {
    if (x < 0){
        return false
    }
    x * x
}

const doubles1 = numbers.map(function(x){
    return x * 2;
})

const doubles2 = numbers.map(x =>{
    return x * 2;
})

const doubles3 = numbers.map(x => x * 2);

// Array.find, will find in the interable if there is something especific

console.log(words.find(word => {
    return word.includes('d');
}))

console.log(books.find(b =>(
    b.authors.includes('Neil Gaiman')
)))

// Filter

// Will print on console only odd numbers
console.log(numbers.filter(n => n % 2 === 1));
// evens numbers
console.log(numbers.filter(n => n % 2 === 0));

console.log(numbers.filter(n => n > 25));

// Just books with 4.3+ of rating
console.log(books.filter(n => n.rating > 4.3 ));
console.log('-------------------------------------------------------------------');
const query = '';

const result = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
})
console.log(result);

// Some & every

const words2 = ['dog','dig','log','bag','wag'];

// Will return true or false 
console.log(words2.every(word => word.length === 3));

// Check if the last letter is 'g'
console.log(words2.every(word =>{
    const last = word.length -1;
    return word[last] === 'g';
}))

// Some is similar but if there is one element True will return True
console.log(words2.some(word => word[0] === 'd'));
console.log(words2.every(word => word[0] === 'd'));

// Check if all the books have at least rating > 3.5
console.log(books.every(book => book.rating > 3.5));
console.log(books.some(book => book.rating > 4.3));

// Sort
const prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];

console.log(prices.sort());

// How to put in a crescent form
console.log(prices.sort((a, b) => a - b));
// How to put in a decrescent form
console.log(prices.sort((a, b) => b - a));

// The same thing but ordening by the rating
console.log(books.sort((a, b) => a.rating - b.rating));
console.log(books.sort((a, b) => b.rating - a.rating));

// Reduce
console.log(numbers.reduce((total,curValue) => {
    return total *curValue;
}));

// Will return the max number in the array
// console.log(numbers.reduce((max, currentValue) => {
//     if(currentValue > max) return currentValue;
//     return max;
// }));

// Return the max value
console.log(numbers.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
}));
// Return the min value
console.log(numbers.reduce((min, currentValue) => {
    return Math.min(min, currentValue);
}));

const votes = ['y','y','y','n','y','n','n','n','y','y','y','n','n','y','n'];
// console.log(votes.reduce((tally, val) => {
//     if(tally[val]){
//         tally[val]++;    
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {}))

console.log(votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {}))

console.log(books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {}))