const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
    console.log('KEY DOWN!!');
});

input.addEventListener('keyup', function(e) {
    console.log('KEY UP!!');
});

input.addEventListener('keypress', function(e) {
    console.log('KEY PRESS!!');
});

const addIteemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addIteemInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        if(!this.value) return;
        const newItemText = this.value;
        const newItem  = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
})

