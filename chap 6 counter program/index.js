const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const countLable = document.getElementById("countLable")

// seting count to 0
let count = 0;

IncreaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

DecreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count
}