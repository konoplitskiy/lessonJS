"use strict"

let num = 20;

// название функции = Глагол + название над чем происходит действие
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}
showFirstMessage('Hello world');

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();