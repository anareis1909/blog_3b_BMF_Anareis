document.addEventListener("DOMContentLoaded", () => {
prepararReacoes();
prepararAnimacaoCard();
criarBotaoTopo();
});

function prepararReacoes() {
const artigos = document.querySelectorAll("article");

artigos.forEach((artigo, indice) => {

    const botao = artigo.querySelector(".like-button");

    if (!botao) {
        return;
    }

    const contador = botao.querySelector(".like-count");

    if (!contador) {
        return;
    }

    const chave = `curtidas-artigo-${indice + 1}`;

    let curtidas = Number(localStorage.getItem(chave)) || 0;

    contador.textContent = curtidas;

    botao.addEventListener("click", () => {
        curtidas++;

        contador.textContent = curtidas;

        localStorage.setItem(chave, curtidas);

        botao.classList.add("liked");

        setTimeout(() => {
            botao.classList.remove("liked");
        }, 300);
    });
});

}

function prepararAnimacaoCard() {
const artigos = document.querySelectorAll("article");

artigos.forEach((artigo) => {
    artigo.addEventListener("mouseenter", () => {
        artigo.classList.add("card-hover");
    });

    artigo.addEventListener("mouseleave", () => {
        artigo.classList.remove("card-hover");
    });
});

}

function criarBotaoTopo() {
const botaoTopo = document.createElement("button");

botaoTopo.textContent = "⬆️";
botaoTopo.classList.add("botao-topo");

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

}