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
