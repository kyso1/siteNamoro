function sim() {
    let header = document.querySelector('h1');
    if(header.textContent == "Quer namorar comigo? 😍"){
        header.textContent = "Vai me mandar o peito? 🥺";
    }else if(header.textContent == "Vai me mandar o peito? 🥺"){
        header.textContent = "Ebaa obrigado amor vamos namorar! :3";
        let btnNao = document.querySelector('#btnNao');
        let btnSim = document.querySelector('#btnSim');
        btnNao.style.display = "none";
        btnSim.style.display = "none";
        startConfetti();
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
