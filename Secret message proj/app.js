const { hash } = window.location;

const message = (atob(hash.replace('#', '')));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('#show').innerHTML = message;
}


document.querySelector('form').addEventListener('submit', event => {
    // Prevent the default action that is a refresh on the page
    event.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const inputMessage = document.querySelector('#message-input');
    const encrypted = btoa(inputMessage.value);

    const inputLink = document.querySelector('#link-input')
    inputLink.value = `${window.location}#${encrypted}`;
    inputLink.select();
})