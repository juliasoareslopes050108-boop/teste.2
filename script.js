// =============================
// BOTÃO "NÃO" FUGINDO
// =============================

const naoBtn =
document.getElementById("naoBtn");

if (naoBtn){

    naoBtn.addEventListener(
        "mouseover",
        fugir
    );

    naoBtn.addEventListener(
        "touchstart",
        fugir
    );
}

function fugir(){

    const largura =
    window.innerWidth - 150;

    const altura =
    window.innerHeight - 150;

    const x =
    Math.random() * largura;

    const y =
    Math.random() * altura;

    naoBtn.style.position =
    "fixed";

    naoBtn.style.left =
    `${x}px`;

    naoBtn.style.top =
    `${y}px`;
}


// =============================
// ABRIR SURPRESA
// =============================

function abrirSurpresa(){

    document
    .getElementById("pergunta")
    .classList.add("hidden");

    document
    .getElementById("home")
    .classList.remove("hidden");
}


// =============================
// ABRIR MENU
// =============================

function abrirMenu(){

    document
    .getElementById("home")
    .classList.add("hidden");

    document
    .getElementById("menu")
    .classList.remove("hidden");
}


// =============================
// MOSTRAR CONTEÚDO
// =============================

function mostrarMensagem(tipo){

    const box =
    document.getElementById(
        "mensagemBox"
    );



    // =================
    // 5 COISAS
    // =================

    if(tipo === "coisas"){

        box.innerHTML = `
        <div class="mensagem-conteudo">

        💜 <strong>
        Detalhes que amo em você
        </strong>

        <br><br>

        ⚽ As vezes que você me manda um "fiz gol pra você"
        <br>

        😂 O seu humor duvidoso, que me faz rir
        <br>

        💜 Seus olhinhos, que eu sou obcecada
        <br>

        🐱 Seu esforço e dedicação
        <br>

        ✨ Sua maturidade e visão de futuro

        </div>
        `;
    }



    // =================
    // MÚSICA
    // =================

    if(tipo === "musica"){

        if(tipo === "musica"){

    box.innerHTML = `
    <div class="mensagem-conteudo">

    🎵 <strong>
    Nossa música
    </strong>

    <br><br>

    O Amor do Mundo Inteiro 💜

    <br><br>

    Essa sempre vai me lembrar você ✨

    <br><br>

    <a
    href="https://open.spotify.com/track/4ephGEwWsjs8lQkNt2o8BU?si=byWdXYByTxaTTY5mKBpYmQ"
    target="_blank"
    class="spotify-btn">

    🎧 Ouvir no Spotify

    </a>

    </div>
    `;
}
    }



    // =================
    // POKÉMON
    // =================

    if(tipo === "pokemon"){

        box.innerHTML = `

        <div class="pokemon-scene">

            <img
            src="img/gengar.png"
            class="pokemon gengar">

            <img
            src="img/clefable.png"
            class="pokemon clefable">

            <div class="coracao-pixel">
                💜
            </div>

        </div>

        <div class="pokemon-texto">

        👾 <strong>
        Gengar + Clefable
        </strong>

        <br><br>

        Claramente esse é nosso
        casal Pokémon, tá... 💜

        </div>
        `;
    }



    // =================
    // MENSAGEM SECRETA
    // =================

    if(tipo === "mensagem"){

        box.innerHTML = `
        <div class="mensagem-conteudo">

        💌

        <br><br>

        Fiz isso porque gosto
        de fazer coisinhas
        pensando em você.

        <br><br>

        E porque você merece
        muito amor 💜

        </div>
        `;
    }
}



// =============================
// FINAL
// =============================

function mostrarFinal(){

    document
    .getElementById("menu")
    .classList.add("hidden");

    document
    .getElementById("final")
    .classList.remove("hidden");
}