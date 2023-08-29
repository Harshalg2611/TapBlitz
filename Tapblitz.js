var timer  =60;
var score = 0;
let vr = 0;
function increasescore(){
 Number(score +=10) ;
  document.querySelector("#scoreval").textContent = score;
}
function getnewhit(){
   vr =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = vr;
}
function makebubble(){
    var clutter = " "

    for(let i=0;i<184;i++){
        let rnb = Math.floor(Math.random()*10) ;
        clutter += `<div class="bubble"> ${rnb}</div>`;
    }
    document.querySelector(".panelbotton").innerHTML = clutter;
}

function runTimer(){
  var timerinterval =   setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }else{
            clearInterval(timerinterval);
          var d =   document.querySelector("#panelbotton").innerHTML = `<h1>GAME OVER  </h1> `;
        }
    },1000);
}
document.querySelector("#panelbotton").addEventListener('click', function(dets){
     var click = Number(dets.target.textContent);
     if(click === vr){
        increasescore();
        makebubble();
        getnewhit();
     }
});
increasescore();
getnewhit();
runTimer();
makebubble();