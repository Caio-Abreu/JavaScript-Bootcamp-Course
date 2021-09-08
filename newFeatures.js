// Default parameters
function multiply(a, b = 1){
    return x * y;    
}

// Spread
const colors = ['red','orange','yellow','green'];
function giveMeFour(a,b,c,d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

console.log(giveMeFour(...colors));

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug','variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods,...gastropods];
console.log(mollusca);

const inverts = [...cnidaria,...gastropods, ...cephalopods];
console.log(inverts);

const cephCopy = [...cephalopods];
console.log(cephCopy);

// Spread with objects
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
console.log(dog);

const houseCat ={
    ...feline,
    isGrumpy: true,
    personality: "unpredictable"
};
console.log(houseCat);

const catDog = {
    ...canine,
    ...feline
};
console.log(catDog);

// Rest
// Using arguments object
function movies(){
    return console.log(arguments);
}
// I dont know the name of the movies by head, sorry guys
movies("Harry potter 1","Harry potter 2","Harry potter 3","Harry potter 4","Harry potter 5");

// Rest parameters
function sum(...nums){
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}
console.log(sum(4,5,6,7,8,9,20));
console.log('-----------------------------------------------------------------------------')
function firstNumbers(first,second, ...nums){
    console.log(first);
    console.log(second);
    console.log(nums);
}

firstNumbers(1,2,3,4,5,6,7,8,9);

// Destructuring arrays
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay hebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

const [gold, silver, bronze] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the order of the golden heart of kenya"
}

// const {
//     first,
//     last,
//     time 
// } = runner;

const {country: nation, title: honorific } = runner;
console.log('------------------------------------------------------------')
const {
    first,
    last,
    ...other
} = runner;

console.log(first);
console.log(last);
console.log(other);

// function print(person){
//     const {first,last,title} = person;
//     console.log(`${first} ${last}, ${title}`);
// }

function print({first,last,title}){
    console.log(`${first} ${last}, ${title}`);
}

console.log(print(runner));

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${protocol}`);
}

parseResponse(response);