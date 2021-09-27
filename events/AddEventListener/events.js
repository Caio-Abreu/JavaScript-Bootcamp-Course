// 2 Ways not to add events

const btn = document.querySelector('#clicker');

btn.addEventListener('click', function(){
    alert('Clicked!!!!');
})

btn.addEventListener('mouseover', function() {
    btn.innerText = 'Stop touching me'
})

btn.addEventListener('mouseout', function() {
    btn.innerText = 'Click me'
})

const btnImpossible = document.querySelector('#impossible');

btnImpossible.addEventListener('mouseover', function() {
    console.log('Mouse over me');
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btnImpossible.style.top = `${height}px`
    btnImpossible.style.left = `${width}px`
});

btn.addEventListener('click', function(){
    btn.innerText= 'You got me';
    document.body.style.backgroundColor = 'green';
})