const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

console.log(fitBitData);
console.log(fitBitData.totalMiles);
console.log(fitBitData.totalSteps);

// Acessing numbers as a key

const numbers = {
    100 : 'one hundred',
    16: 'sixteen'
};

console.log(numbers[100]);

const palette ={
    red : '#eb4d4b',
    yellow : '#f9ca24',
    blue: '#30336b'
};

let mysterColor = 'yellow';

console.log(palette[mysterColor]);

// Adding or Updating

const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 2;

userReviews.mrSmith78++

console.log(userReviews)

// Arrays + Objects
const student ={
    firstName: 'David',
    lastName: 'jones',
    streengths: ['Mussic','Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};


const avg = (student.exams.midterm + student.exams.final)/2;
console.log(avg)

const shoppingCart = [
    {
        product: 'jenga classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo dot',
        price: 26.88,
        quantity: 3
    },
    {
        product: 'Fire stick',
        price: 39.88,
        quantity: 2
    }
];

const game = {
    player1: {
        userName: 'Blue',
        playingAs: 'X'
    },
    player2: {
        userName: 'Muffing',
        playingAs: 'O'
    },
    board: [ [ 'O', null, 'X' ], ['X','O','X'], [null,'O',X]]
};