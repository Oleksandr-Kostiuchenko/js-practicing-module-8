//TODO: Створи список із трьох елементів. Додай обробники подій на кожен елемент списку, батьківський елемент і документ. 
//? Виведи в консоль повідомлення про спрацювання кожного обробника.

//* Find elements
const list = document.querySelector('.list');
const firtEl = document.querySelector('.first');
const secondEl = document.querySelector('.second');
const thirdEl = document.querySelector('.third');
const stop = document.querySelector('.box');

//* Add event listeners
stop.addEventListener('click', event => {
    console.log('Stop element execution');
    event.stopImmediatePropagation();
});

firtEl.addEventListener('click', event => {
    console.log('First element execution');
});

secondEl.addEventListener('click', event => {
    console.log('Second element execution');
});

thirdEl.addEventListener('click', event => {
    console.log('Third element execution');
});

list.addEventListener('click', event => {
    console.log('List execution');
});

document.addEventListener('click', event => {
    console.log('Document execution');
});