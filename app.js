let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener('keypress',function(){
    if(started == false){
        // console.log("Game is started");
        started = true;
        levelUp();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randBtn);
    console.log(gameSeq);
    
}
function checkAns(indx){
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        let highScore = 0;
        h2.innerHTML = `Game over! your score was <b>${level}</b><br> Press any key to start`;
        let body = document.querySelector('body');
        body.style.backgroundColor = "red";
        setTimeout(() => {body.style.backgroundColor = "#FF69B4";},150);
        if(highScore<level){
            h3.innerText = `Highest score is ${level}`;
        } 
        else{
            h3.innerHTML = `Highest score is ${highScore}`;
        }
        reset();
    }
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);
}
function buttonPressed(){
    // console.log("Button pressed");
    let btn = this;
    userFlash(btn);
    let color = btn.getAttribute('id');
    userSeq.push(color);
    checkAns(userSeq.length-1);

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPressed);
}
function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}