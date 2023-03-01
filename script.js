//your code here
let btn = document.getElementById('btn');
let op = document.getElementById('respond');
let Number = document.getElementById('num');
function genRandomNum() {
    document.getElementById("num").innerHTML =Math.floor( Math.random()*40-20);
}

btn.addEventListener('click',function(){
    let input = document.getElementById('guess').value;
    if (input == Number) {
        op.innerHTML = 'Hot'
    }else if(input<Number){
        op.innerHTML = 'Cold'
    }
    if(input>Number){
        op.innerHTML='Cold'
    }
});

