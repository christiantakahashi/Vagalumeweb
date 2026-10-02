console.log("acao.js carregou");
const vagalume = document.getElementById("vagalume")
const status = document.getElementById("status")
const bntAcender = document.getElementById("bnt-acender")
const bntApagar = document.getElementById("bnt-apagar")

function acender() {
  vagalume.src = "./Imagens/vagalume_aceso_sem_fundo.png";
  status.textContent = "Vagalume aceso!";
}
function apagar() {
  vagalume.src = "./Imagens/vagalume_apagado_sem_fundo.png";
  status.textContent = "Vagalume apagado!";
}

bntAcender.addEventListener("click", acender);
bntApagar.addEventListener("click", apagar);
