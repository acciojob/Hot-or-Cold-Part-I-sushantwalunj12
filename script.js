// const btn = document.querySelector('#btn');
// const num = document.querySelector('#num');

// btn.addEventListener('click', function() {
//   const randomNum = Math.floor(Math.random() * 41) - 20;
//   num.innerHTML = randomNum;
// });

let userInput = document.querySelector("input");
let btn = document.querySelector("button");
let output = document.querySelector("#num");

function randomnumber() {
    let range = 20 - (-20) + 1;  // max - min + 1

    let random = Math.random() * range;

    let result = Math.floor(random) + (-20);
    console.log(userInput.value);
    console.log(userInput.value - 5);
    console.log(parseFloat(userInput.value) + parseFloat(5));
    console.log(result);
    if(((userInput.value - 5) <= result) && (result <= parseFloat(userInput.value) + parseFloat(5))){
        return 'HOT';
    }
        return 'Cool';
}

btn.addEventListener('click', () =>{
    
    output.innerHTML = randomnumber();
});