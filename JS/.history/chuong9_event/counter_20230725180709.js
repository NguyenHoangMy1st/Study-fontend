
const buttonDescrease = document.querySelector(".counter-descrease");
const buttonIncrease = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);

buttonIncrease.addEventListener("click", function(){
    console.log("increase");
});
