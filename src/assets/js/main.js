const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const unoj = document.querySelector('.unoj');
const delenie = document.querySelector('.delenie');

const result = document.querySelector('.result');

let action = '+';

plus.addEventListener('click', ()=>{
    action = '+';
})

minus.addEventListener('click', ()=>{
    action = '-';
})

unoj.addEventListener('click', ()=>{
    action = '*';
})

delenie.addEventListener('click', ()=>{
    action = '/';
})

const submitBtn = document.querySelector('.submitBtn').addEventListener('click', ()=>{
    if (action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value);
        result.textContent = sum;
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value);
        result.textContent = sum;
    } else if (action === '*') {
        const sum = Number(inputOne.value) * Number(inputTwo.value);
        result.textContent = sum;
    } else if (action === '/') {
        const sum = Number(inputOne.value) / Number(inputTwo.value);
        result.textContent = sum;
    }

    let randomcolor = generateNum(100000, 999999);
    const body = document.querySelector('.body').style.cssText = "background: #" + randomcolor + ";";
});

function generateNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}