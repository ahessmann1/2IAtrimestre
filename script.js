const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Que estratégia podemos usar para a diminuição do aquecimento global?",
    alternativas: [
        {
   texto: "Redução das emissões de gases do efeito estufa, através do uso de energia renovavél, práticas agrícolas sustentavéis",
   afirmacao:"Você está ciente do que fazer para não contribuir com o aquecimento global" 
        }
        {
   texto:"Continuação do uso de combustivéis fosséis, como carvão, petróleo e gás natural"
   afirmacao:"Isso aumenta o aquecimento global"
        }
]
    },
    {
        enunciado: "Quais as estratégias resultante do desmatamento?",
        alternativas: [
            {
    texto:"Perda da biodiversidade, degradação do solo e erosão",
    afirmacao:"Você conhece os danos causados pelo desmatamento"
            }
            {
    texto:"Terremotos, desastres naturais, tsunamis e erupções vulcânicas"
    afirmacao:"Esses desastres não tem relação com o desmatamento"
            }
    ]
        },
        {
            enunciado: "Quais ações poderíamos fazer para recuperação do meio ambiente",
            alternativas: [
                {
        texto: "Reflorestamento, redução do desperdício e poluição",
        afirmacao:"Essas ação ajuda na recuperação"
                }
                {
        texto:"Ausência de conscientização ambiental e falta de políticas ambientais"
        afirmacao:"Isso não ajuda na recuperação, apenas piora"
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
