document.addEventListener("DOMContentLoaded", () =>{
prepararReacoes();
prepararAnimacaoCard();
criarBotaoTopo();
})

function prepararReacoes() {
const artigos = document.querySelectorAll("article");

artigos.forEach((artigo, indice) => {

const botoes = artigo.quuerySelectorAll("Button");
if (botoes.lenght < 2) {
    return;
    
}

const botaoUM = botoes[0];
const botaoDOIS = botoes[1];

 })
}