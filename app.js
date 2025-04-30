let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;
let btns=["red","green","pink","purple"];
let highest=0;
let maxScore=document.querySelector("#maxSc");
document.addEventListener("keypress",function() {
    if(start==false){
        console.log("Game Started");
        start=true;
        levelUP();
    }
}
);

let h2=document.querySelector("h2");
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUP(){
    //restart userSeq
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx =Math.floor(Math.random()*4);
    let randidxColor=btns[randidx];
    let btn=document.querySelector(`.${randidxColor}`);
    gameSeq.push(randidxColor);
    console.log(gameSeq);
    // console.log(idx);
    // console.log(idxColor);
    // console.log(btn);
    btnFlash(btn);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function check(idx){
    if(gameSeq[idx]===userSeq[idx]){
        //middle element then keep checking 
        //if last element
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUP,1000);
        }
    }
    else{
        //not same
        h2.innerHTML=`Game Over! <b>your score was ${level}<b> <br> 
        Press any key to start over`;
        highest=Math.max(highest,level);
        maxScore.innerHTML=`<b>${highest}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },200);
       reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    check(userSeq.length-1);
}
let boxes=document .querySelectorAll(".box");
for(Onebtn of boxes){
    Onebtn.addEventListener("click",btnPress);
}


