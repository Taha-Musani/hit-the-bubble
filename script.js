let time = 60;
let score = 0;
let hitscore = 0;
let hitted = 0;

function hit() {
  hitscore = Math.floor(Math.random() * 10);
  document.getElementById("hit").textContent = hitscore;
}

document.getElementById("playground").addEventListener("click", function (dot) {
  hitted = Number(dot.target.textContent);
  // console.log((hitted));
  // console.log(typeof hitted);
  if (hitted == hitscore) {
    increasescore();
    makebubble();
    hit();
  }
  else if (isNaN(hitted)) {
    return
  }
  else if (hitted>9) {
    return
  }
  else {
    makebubble();
    hit();
  }
});

function increasescore() {
  score += 10;
  document.getElementById("score").innerText = score;
}

function makebubble() {
  let clutter = "";
  for (let i = 0; i < 234; i++) {
    let point = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${point}</div>`;
  }
  document.getElementById("playground").innerHTML = clutter;
}

function runtimer() {
  function timer() {
    let playground = document.getElementById("playground");
    let playagain = document.getElementById("playagain");
    if (time > 0) {
      time--;
      document.getElementById("time").textContent = time;
    } else {
      playground.innerHTML = `<h1>Game over<br>Your score is ${score}</h1> <button onclick="reload()" id="playagain">Play again</button>`;
      clearInterval(timeing);
    }
  }
  let timeing = setInterval(timer, 1000);
}
function reload() {
  location.reload();
}


makebubble();
runtimer();
hit();
