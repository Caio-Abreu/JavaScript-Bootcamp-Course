// How to add and remove value in the array
let topSongs = [ 
    'First time ever i saw your face',
    'God only knows',
    'A day in the life',
    'Life on mars'
];

// push() will put on the final of the array whatever you want and return the length
topSongs.push("Fortunate son");
console.log(topSongs);

// pop() will delete always the last value of the array and return it
topSongs.pop();
console.log(topSongs);

// unshift() add from the start of the array and return the length
topSongs.unshift('Thunderstruck');
topSongs.unshift('Highway to hell');
console.log(topSongs);

// shift() remove from the start of the array and return it
topSongs.shift();
topSongs.shift();
console.log(topSongs);

// ------------------------------------------------------------------------------------------------------
// Concat
// Merge two or more arrays

let fruits = ['apple','bananas'];
let veggies = ['aspargurus','brussel sprouts'];
let meats = ['steak','chciken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies,meats);
console.log(allFood);


// ------------------------------------------------------------------------------------------------------
// includes and indexOf
let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

// includes check if there is fish, if False return False,if True return True
console.log(ingredients.includes('fish'));

// if(ingredients.includes('flour')){
//     console.log('I am gluten free, i cannot eat that')
// };

ingredients.includes('flour') ? console.log('I am gluten free, i cannot eat that') : 'Thanks god, i can eat it';

// indexOf check if there is eel, if True return the position, if False return -1
console.log(ingredients.indexOf('eel'));


// ------------------------------------------------------------------------------------------------------
// Reserve and Join
// reserve will literaly reverse the content of the array
console.log(ingredients);
console.log(ingredients.reverse());

// join will put all the content of the array in one string wiht a separate value
console.log(ingredients.join());


// ------------------------------------------------------------------------------------------------------
// Slice 
// slice the array, with the inicial position until the position you want +1
let animals = ['shark','salmon','whale','bear','lizard','tortoise'];
let swimmers = animals.slice(0,3);
let mammals = animals.slice(2,4);

// let reptiles = animals.slice(4,6);
let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

// ------------------------------------------------------------------------------------------------------
// Splice
// splice(which position you want to add or start,until where you want to delete,what you want to add)
console.log(animals.splice(3,0,'snake','frog')); // here we are adding snake and frog into the array
console.log(animals);
console.log(animals.splice(3,2)); // and removing using splice


// ------------------------------------------------------------------------------------------------------
// Sort
// will sort the array
console.log( animals.sort() );
let nums = [ 34, 10, 10000000, 67, 54 ];
console.log(nums.sort());

// ------------------------------------------------------------------------------------------------------
