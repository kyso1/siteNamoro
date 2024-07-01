let BtnSimPosition = { top: null, left: null };
let BtnNaoPosition = { top: null, left: null };

document.addEventListener('DOMContentLoaded', () => {
    const btnSim = document.querySelector('#btnSim');
    const btnNao = document.querySelector('#btnNao');
   
   BtnSimPosition.top = btnSim.offsetTop + 'px';
   BtnSimPosition.left = btnSim.offsetLeft + 'px';
   BtnNaoPosition.top = btnNao.offsetTop + 'px';
   BtnNaoPosition.left = btnNao.offsetLeft + 'px';
});

function sim() {
  const header = document.querySelector('h1');
  const img = document.querySelector('#imagem');
  const btnSim = document.querySelector('#btnSim');
  const btnNao = document.querySelector('#btnNao');

  if(header.textContent == "Quer namorar comigo? 😍"){
      header.textContent = "VAI ME TRAIR? 👿😡";
      img.src = "assets/gatobravo.png";
      btnSim.style.position = 'absolute';
      btnSim.style.top = BtnSimPosition.top;
      btnSim.style.left = BtnSimPosition.left;
      btnNao.style.position = 'absolute';
      btnNao.style.top = BtnNaoPosition.top;
      btnNao.style.left = BtnNaoPosition.left;
      btnNao.textContent = "Sim"
      btnSim.textContent = "Não"
  }else if(header.textContent == "VAI ME TRAIR? 👿😡" ){
      header.textContent = "Vai me mandar o peito? 🥺";
      img.src = "assets/gatinho2.png";
      btnSim.style.position = 'absolute';
      btnSim.style.top = BtnSimPosition.top;
      btnSim.style.left = BtnSimPosition.left;
      btnNao.style.position = 'absolute';
      btnNao.style.top = BtnNaoPosition.top;
      btnNao.style.left = BtnNaoPosition.left;
      btnNao.textContent = "Não"
      btnSim.textContent = "Sim"
  }
  else if(header.textContent == "Vai me mandar o peito? 🥺"){
    header.textContent = "E a bunda? 😁";
    img.src = "assets/gato4.gif";
    btnSim.style.position = 'absolute';
    btnSim.style.top = BtnSimPosition.top;
    btnSim.style.left = BtnSimPosition.left;
    btnNao.style.position = 'absolute';
    btnNao.style.top = BtnNaoPosition.top;
    btnNao.style.left = BtnNaoPosition.left;
  }else if(header.textContent == "E a bunda? 😁"){
      img.src = "assets/gatinho3.gif";
      header.textContent = "Eba amor vamos namorar! 😎🥰";
      btnNao.style.display = "none";
      btnSim.style.display = "none";
      startConfetti();
      startHearts();
  }
}
function moverNao(){
  var btnNao = document.getElementById("btnNao");
  btnNao.style.position = "absolute";
  btnNao.style.left =
    Math.random() * (window.innerWidth - btnNao.offsetWidth) + "px";
  btnNao.style.top =
    Math.random() * (window.innerHeight - btnNao.offsetHeight) + "px";
}

function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF69B4', '#FFD700', '#ADFF2F', '#00BFFF', '#FF4500'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.opacity = Math.random();
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confettiContainer.appendChild(confetti);
    }
  }
function startHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 100;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        heartsContainer.appendChild(heart);
    }
}
