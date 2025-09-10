let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;

let level = 0;  

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        // console.log("game started");
        started = true;

        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);

    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function btnFlash(randBtn) {
    randBtn.classList.add("flash");
    setTimeout(function() {
        randBtn.classList.remove("flash");
    }, 250)
}

function checkAns(idx) {
    // console.log(`current level ${level}`);
    // let idx = level - 1;

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";  
        }, 200)
        h2.innerHTML = `Game over! Your score was <b>${level - 1}<b /> <br />Press any key to start.`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBts = document.querySelectorAll(".btn");
for(let btn of allBts) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}