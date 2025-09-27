const myButton = document.getElementById("myButton");
const myLable1 = document.getElementById("myLable1");
const myLable2 = document.getElementById("myLable2");
const myLable3 = document.getElementById("myLable3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max) + min;
    randomNum2 = Math.floor(Math.random()*max) + min;
    randomNum3 = Math.floor(Math.random()*max) + min;
    myLable1.textContent = randomNum1
    myLable2.textContent = randomNum2
    myLable3.textContent = randomNum3
}