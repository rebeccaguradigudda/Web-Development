var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;


p1button.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score===winningscore){
       p1display.classList.add("winner");
       gameover = true;
    }
    p1display.textContent = p1score;
    }
});

p2button.addEventListener("click",function(){
    if(!gameover){
    p2score++;
    if(p2score===winningscore){
        p2display.classList.add("winner");
        gameover = true;
    }
    p2display.textContent = p2score;
    }
});

reset.addEventListener("click",function(){
    reset();
});
    function reset(){    
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent = numInput.value;
    winningscore = Number(numInput.value);
    reset();
});