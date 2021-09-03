// For loop
for(i=0;i<11;i++){
    console.log('Hello')
};

// For loopss + arrays
const examScores = [ 98, 77, 84, 91, 57, 66 ];
for(let i = 0; i < examScores.length;i++){
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    }
];

total = 0;

for(let i = 0; i< myStudents.length; i++){
    let student = myStudents[i];
    total += student.grade;
};

console.log(total/myStudents.length);

for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
};

const word = 'stressed';
let reversedWord = "";

for(let i = word.length -1; i >= 0; i--){
    reversedWord += word[i];
};
console.log(reversedWord);

// While loops
let j = 0;
while(j <= 5){
    console.log(j);
    j++;
};

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

// while(guess !== target){
//     guess = Math.floor(Math.random() * 10);
//     console.log(`Target: ${target} Guess: ${guess}`)
// }
// console.log(`CONGRATS YOU WIN !!!`)

// Break is used for stop loops

for(let i = 0; i < 10; i++){
    console.log(i);
    if (i == 5){
        break;
    }
}

while(true){
    if(target === guess) break;
    guess = Math.floor(Math.random() * 10);
    console.log(`Target: ${target} Guess: ${guess}`);
}

// For....of 

let subreddits = ['soccer', 'popheads', 'cringe', 'books']

for(let sub of subreddits){
    console.log(sub);
}

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In bruges': 9,
    Amadeus: 10,
    'Kill bill': 8,
    'Little Miss sunshine': 8.5,
    Coraline: 7.5
}

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

const rating = Object.values(movieReviews);
total = 0;

for(let r of rating){
    total += r;
}
let avg = total / rating.length;
console.log(avg);

// For...in loops
const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOftheDecades: 100000,
};


for(let prop in jeopardyWinnings ){
    console.log(prop)
    console.log(jeopardyWinnings[prop])
    total += jeopardyWinnings[prop]
}

console.log(`Ken Jenning total earnings: ${total}`)

for(let k in [88,99,77,66]){
    console.log(k) 
}