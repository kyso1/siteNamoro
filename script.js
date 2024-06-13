function mostrarResposta(resposta) {
  if (resposta) {
    alert("cade o meu peito :c.. 📹");
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
