// ========================================
// PERGUNTAS DO QUIZ
// ========================================

const perguntas = [

    {
        pergunta: "Você ouve gritos vindo da rua. O que você faz?",

        alternativas: [

            {
                texto: "Saio correndo para descobrir o que está acontecendo.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você saiu sem saber o que estava acontecendo e acabou cercado pelos zumbis."
            },

            {
                texto: "Vou para a rua procurar outras pessoas.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ A rua estava infestada e você acabou entrando diretamente no perigo."
            },

            {
                texto: "Fecho portas e janelas e observo a situação.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Você foi cauteloso, mas ainda precisa pensar em uma rota de fuga."
            },

            {
                texto: "Tranco a casa, pego suprimentos e procuro uma rota segura.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Excelente! Você pensou antes de agir e se preparou para sair com segurança."
            }

        ]
    },


    {
        pergunta: "Você precisa encontrar água durante o apocalipse. O que faz?",

        alternativas: [

            {
                texto: "Bebo água de qualquer lugar.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ A água poderia estar contaminada e você acabou ficando doente."
            },

            {
                texto: "Espero encontrar uma loja aberta.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você demorou demais e ficou sem água em uma área perigosa."
            },

            {
                texto: "Procuro uma fonte de água e verifico se ela pode ser tratada.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Boa escolha, mas você ainda precisa garantir que a água seja segura."
            },

            {
                texto: "Procuro água potável ou trato a água antes de beber.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Excelente! Você priorizou uma das necessidades mais importantes para sobreviver."
            }

        ]
    },


    {
        pergunta: "Um grupo de sobreviventes oferece abrigo para você. O que faz?",

        alternativas: [

            {
                texto: "Entro imediatamente sem fazer perguntas.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você confiou em desconhecidos sem verificar o local."
            },

            {
                texto: "Entrego todos os meus suprimentos para provar que sou confiável.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você ficou sem recursos e colocou sua sobrevivência em risco."
            },

            {
                texto: "Converso com o grupo e observo o comportamento deles.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Você foi cuidadoso, mas ainda precisa avaliar se o local é realmente seguro."
            },

            {
                texto: "Verifico o local e avalio os riscos antes de entrar.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Boa decisão! Você não confiou cegamente e avaliou a situação."
            }

        ]
    },


    {
        pergunta: "Você percebe que está fazendo muito barulho e atraindo zumbis. O que faz?",

        alternativas: [

            {
                texto: "Corro e grito para tentar assustá-los.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você fez ainda mais barulho e atraiu uma horda."
            },

            {
                texto: "Continuo normalmente porque eles vão embora.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Os zumbis não foram embora e acabaram cercando você."
            },

            {
                texto: "Diminuo o barulho e procuro um local seguro.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Você percebeu o perigo, mas ainda precisa encontrar uma saída."
            },

            {
                texto: "Fico em silêncio e procuro uma rota discreta para escapar.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Excelente! Evitar chamar atenção é uma ótima estratégia."
            }

        ]
    },


    {
        pergunta: "Você encontra uma mochila abandonada com alimentos e equipamentos. O que faz?",

        alternativas: [

            {
                texto: "Pego tudo e como imediatamente o primeiro alimento.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você não verificou os alimentos e acabou consumindo algo perigoso."
            },

            {
                texto: "Ignoro a mochila completamente.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você desperdiçou recursos que poderiam ajudar na sobrevivência."
            },

            {
                texto: "Pego a mochila e verifico cuidadosamente seu conteúdo.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Você encontrou recursos úteis, mas precisa verificar tudo antes de usar."
            },

            {
                texto: "Verifico tudo e utilizo somente o que estiver seguro.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Excelente! Você aproveitou os recursos sem ignorar os riscos."
            }

        ]
    },


    {
        pergunta: "Uma horda de zumbis está se aproximando. Você precisa escolher para onde ir.",

        alternativas: [

            {
                texto: "Vou diretamente na direção da horda.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ Você entrou diretamente no caminho da horda."
            },

            {
                texto: "Me escondo em qualquer lugar sem verificar se existe saída.",
                pontos: -5,
                tipo: "morreu",
                mensagem: "☠️ O esconderijo não tinha saída e os zumbis encontraram você."
            },

            {
                texto: "Procuro um lugar alto e seguro para ganhar tempo.",
                pontos: 5,
                tipo: "cuidado",
                mensagem: "⚠️ Você ganhou tempo, mas ainda precisa encontrar uma rota definitiva."
            },

            {
                texto: "Procuro uma rota alternativa e silenciosa com uma saída de emergência.",
                pontos: 10,
                tipo: "sobreviveu",
                mensagem: "🧟 Excelente! Você evitou o confronto e procurou uma rota de fuga."
            }

        ]
    }

];


// ========================================
// VARIÁVEIS
// ========================================

let perguntaAtual = 0;
let pontuacao = 0;


// ========================================
// ELEMENTOS
// ========================================

const inicio = document.getElementById("inicio");

const quizArea = document.getElementById("quizArea");

const btnComecar = document.getElementById("btnComecar");

const quiz = document.getElementById("quiz");

const resultado = document.getElementById("resultado");

const btnReiniciar = document.getElementById("btnReiniciar");

const contador = document.getElementById("contador");

const pontuacaoElemento = document.getElementById("pontuacao");


// ========================================
// EMBARALHAR
// ========================================

function embaralhar(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

}


// ========================================
// EMBARALHAR PERGUNTAS E ALTERNATIVAS
// ========================================

function embaralharTudo() {

    embaralhar(perguntas);

    perguntas.forEach(pergunta => {

        embaralhar(pergunta.alternativas);

    });

}


// ========================================
// INICIAR QUIZ
// ========================================

function iniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    embaralharTudo();

    inicio.classList.add("hidden");

    quizArea.classList.remove("hidden");

    resultado.classList.add("hidden");

    btnReiniciar.classList.add("hidden");

    mostrarPergunta();

}


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    pontuacaoElemento.textContent =
        `${pontuacao} pontos`;


    quiz.innerHTML = `

        <div class="pergunta-numero">
            DECISÃO DE SOBREVIVÊNCIA
        </div>

        <h2 class="pergunta">
            ${pergunta.pergunta}
        </h2>

        <div class="alternativas">

            ${pergunta.alternativas.map(
                (alternativa, index) => `

                    <button
                        class="alternativa"
                        onclick="responder(${index})"
                    >
                        ${alternativa.texto}
                    </button>

                `
            ).join("")}

        </div>

    `;
}


// ========================================
// RESPONDER
// ========================================

function responder(index) {

    const pergunta = perguntas[perguntaAtual];

    const alternativa = pergunta.alternativas[index];

    pontuacao += alternativa.pontos;


    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(botao => {

        botao.disabled = true;

    });


    pontuacaoElemento.textContent =
        `${pontuacao} pontos`;


    quiz.innerHTML += `

        <div class="feedback ${alternativa.tipo}">
            ${alternativa.mensagem}
        </div>

        <button
            class="proxima"
            onclick="proximaPergunta()"
        >

            ${
                perguntaAtual === perguntas.length - 1
                ? "VER RESULTADO"
                : "PRÓXIMA PERGUNTA →"
            }

        </button>

    `;
}


// ========================================
// PRÓXIMA PERGUNTA
// ========================================

function proximaPergunta() {

    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


// ========================================
// RESULTADO
// ========================================

function mostrarResultado() {

    quiz.classList.add("hidden");

    resultado.classList.remove("hidden");

    btnReiniciar.classList.remove("hidden");


    let emoji;

    let titulo;

    let mensagem;


    if (pontuacao >= 51) {

        emoji = "🧟‍♂️";

        titulo = "VOCÊ SOBREVIVEU!";

        mensagem =
            "Você tomou boas decisões e conseguiu escapar " +
            "dos principais perigos do apocalipse zumbi.";

    }

    else if (pontuacao >= 21) {

        emoji = "⚠️";

        titulo = "CUIDADO!";

        mensagem =
            "Você conseguiu sobreviver, mas algumas de suas " +
            "decisões foram perigosas. No apocalipse, " +
            "um pequeno erro pode custar caro.";

    }

    else {

        emoji = "☠️";

        titulo = "VOCÊ NÃO SOBREVIVEU!";

        mensagem =
            "Os zumbis venceram desta vez. Talvez seja melhor " +
            "pensar um pouco mais antes de tomar decisões " +
            "no próximo apocalipse.";

    }


    resultado.innerHTML = `

        <div class="resultado-emoji">
            ${emoji}
        </div>

        <h2>
            ${titulo}
        </h2>

        <div class="pontuacao-final">
            ${pontuacao} pontos
        </div>

        <p>
            ${mensagem}
        </p>

    `;

}


// ========================================
// REINICIAR
// ========================================

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    quiz.classList.remove("hidden");

    resultado.classList.add("hidden");

    btnReiniciar.classList.add("hidden");

    embaralharTudo();

    mostrarPergunta();

}


// ========================================
// EVENTOS
// ========================================

btnComecar.addEventListener(
    "click",
    iniciarQuiz
);


btnReiniciar.addEventListener(
    "click",
    reiniciarQuiz
);
