//your code here
let btn = document.getElementById('btn');
let output = document.getElementById('respond');
let num = document.getElementById('num');
function genRandomNum() {
    document.getElementById("num").innerHTML =Math.floor( Math.random()*40-20);
}

btn.addEventListener('click',function(){
    let input = document.getElementById('guess').value;
    if (input == num) {
        output.innerHTML = 'Hot'
    }else if(input<num){
        output.innerHTML = 'Cold'
    }
    if(input>num){
        output.innerHTML='Cold'
    }
});

