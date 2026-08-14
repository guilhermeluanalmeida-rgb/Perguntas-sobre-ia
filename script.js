const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acabou de descobrir uma nova inteligência artificial capaz de conversar, criar imagens e produzir áudios extremamente realistas. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso pode ser perigoso.",
                afirmacao: "Começou a observar a evolução da IA com cautela, tentando entender seus riscos e suas possíveis consequências."
            },
            {
                texto: "Isso pode ser incrível.",
                afirmacao: "Ficou interessado nas possibilidades da IA e começou a procurar maneiras de utilizá-la no cotidiano."
            }
        ]
    },

    {
        enunciado: "Durante uma aula, sua professora propõe uma pesquisa sobre Inteligência Artificial. Você precisa encontrar informações confiáveis e explicar o assunto com suas próprias palavras. Como você decide fazer isso?",
        alternativas: [
            {
                texto: "Usar uma IA como ferramenta de pesquisa.",
                afirmacao: "Aprendeu a utilizar a IA como uma ferramenta para encontrar informações e compreender assuntos que antes pareciam complicados."
            },
            {
                texto: "Pesquisar por conta própria.",
                afirmacao: "Preferiu comparar diferentes fontes e construir seu trabalho utilizando suas próprias pesquisas e conhecimentos."
            }
        ]
    },

    {
        enunciado: "Anos depois, a IA se tornou cada vez mais presente no mercado de trabalho. Em uma discussão sobre o futuro das profissões, qual opinião representa melhor o que você pensa?",
        alternativas: [
            {
                texto: "A IA pode criar novas profissões e oportunidades.",
                afirmacao: "Passou a buscar novas oportunidades profissionais relacionadas à IA e descobriu formas de utilizar a tecnologia para desenvolver novas habilidades."
            },
            {
                texto: "Precisamos proteger quem pode perder o emprego.",
                afirmacao: "Começou a defender uma utilização mais responsável da IA e participou de iniciativas para ajudar trabalhadores a se adaptarem às novas tecnologias."
            }
        ]
    },

    {
        enunciado: "Para um projeto importante, você precisa criar uma imagem que represente sua visão sobre o futuro da Inteligência Artificial. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Criar a imagem manualmente.",
                afirmacao: "Aprofundou seus conhecimentos em ferramentas tradicionais de criação e passou a ajudar outras pessoas a desenvolver suas próprias habilidades artísticas."
            },
            {
                texto: "Utilizar uma inteligência artificial para criar a imagem.",
                afirmacao: "Aprendeu a utilizar ferramentas generativas para acelerar seu processo criativo e começou a ensinar outras pessoas a trabalhar com elas."
            }
        ]
    },

    {
        enunciado: "Em um trabalho de grupo, um colega entrega um texto completamente produzido por uma IA. O conteúdo parece bom, mas ninguém verificou se as informações estão corretas. O que você faz?",
        alternativas: [
            {
                texto: "Se o texto está pronto, podemos simplesmente utilizá-lo.",
                afirmacao: "Passou a depender cada vez mais da IA para realizar suas tarefas e começou a perceber como é fácil deixar a tecnologia pensar em seu lugar."
            },
            {
                texto: "Vamos revisar o conteúdo e acrescentar nossas próprias ideias.",
                afirmacao: "Entendeu que a IA pode ser uma excelente ferramenta, mas que suas respostas precisam ser verificadas e complementadas pelo pensamento humano."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener(
            "click",
            () => respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {

    historiaFinal += `${opcaoSelecionada.afirmacao} `;

    atual++;

    mostraPergunta();
}


function mostraResultado() {

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

    caixaResultado.classList.add("mostrar");
}


mostraPergunta();
