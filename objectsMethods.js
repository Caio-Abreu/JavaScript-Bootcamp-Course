// Computed properties
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron'

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen'
}

console.log(team[role]);

// function addProp(obj, k, v){
//     const copy = {...obj}
//     copy[k] = v;
//     return console.log(copy);
// };


const addProp = (obj, k, v) => {
    return console.log({...obj, [k]: v});
}
addProp(team, 'happy', ':)');

// Adding methods to objects

const math = {
    numbers: [1,2,3,4,5],
    add: function(x,y){
        return x + y;
    },
    multiply: function(x,y) {
        return x * y;
    }
}

console.log(math.add(2,3));
console.log(math.multiply(2,3));

// Shorthand Syntax
const auth = {
    username: 'TommyBot',
    login() {
        console.log("Logged you in!")
    },
    logout() {
        console.log("Goodbye")
    }
}
console.log(auth.login());
console.log(auth.logout());

// Key This
function sayHi(){
    console.log('Hi');
    console.log(this);
}
console.log(sayHi());

const person3 = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {
            first,
            last,
            nickName
        } = this;
       return `${first} ${last} AKA ${nickName}`;
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);
    },
    // Using arrow functions "this" will point to window and not to the object
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAHA`);
    }
}

person3.printBio();

// Annoyomatic Demo
const annoyer = {
    phrases: ["Literrally", "cray cray", "I cant even", "Totes!", "Yolo", "Cant stop", "Wont stop"],
    pickPhrases(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start(){
        this.timerId = setInterval(() => {
            console.log(this.pickPhrases());
        },3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("PHEW THANK HEAVENS THAT IS OVER");
    }
}
// console.log(annoyer.pickPhrases());
// console.log(annoyer.start());

// Using the knowledge studied to make a game Deck of Cards


// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts','diamonds','spades','clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for(let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop()
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(card1);

const myDeck = {
    deck: [],
    drawCards: [],
    suits: ['hearts','diamonds','spades','clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const {suits,
            values,
            deck
        } = this;
        for(let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop()
        this.drawCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for (let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const {
            deck
        } = this;
        // Loop over array backwars
        for (let i = deck.length - 1; i > 0; i--) {
            // Pick random index before current element
            let j = Math.floor(Math.random() * (i+1));
            // Then swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

console.log(myDeck.initializeDeck());
console.log(myDeck.deck);
console.log(myDeck.shuffle());
console.log('-------------------------------------------------------');
console.log(myDeck.deck);
