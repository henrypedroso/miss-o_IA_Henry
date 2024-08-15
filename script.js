const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em sua aula de Biologia, você se dá conta de que as mudanças climáticas que estão ocorrendo no planeta são consequências do aquecimento global...",
        alternativas: [
            {
                texto: "Isso é perturbador!",
                afirmacao: "No futuro, com o avanço da tecnologia, deverão surgir profissões que ajudem a diminuir o impacto do homem sobre a natureza." 
            },
            {
                texto: "Olha aí uma oportunidade!",
                afirmacao: "Então esse é o momento de se capacitar em tecnologias promovendo a sua inclusão digital."
            }
        ]
    },
    {
        enunciado: "Parando para pensar, no colégio que você estuda, já existem áreas do conhecimento que podem ser o primeiro passo para promover sua inclusão digital...",
        alternativas: [
            {
                texto: "Aulas de Programação!",
                afirmacao: "Nas aulas de programação, você pode produzir páginas web e aplicativos com informações e alertas sobre as condições climáticas." 
            },
            {
                texto: "Aulas de Robótica!",
                afirmacao: "Nas aulas de Robótica, você pode empreender construindo equipamentos de monitoramento e coleta de dados sobre as condições climáticas."
            }
        ]
    },
    {
        enunciado: "Você percebe que a programação em JavaScript lembra, em muito, os códigos utilizados no IDE arduíno onde está prototipando...",
        alternativas: [
            {
                texto: "Isso me deixa ainda mais motivado!",
                afirmacao: "Você tem a sensação de que uma área do conhecimento depende da outra e que ainda, de bônus, é possível aprender na prática diversos conceitos de Matemática e Física." 
            },
            {
                texto: "Oportunidade profissional!",
                afirmacao: "Diante dos desafios impostos pelo aquecimento global, a programação e a robótica podem te conduzir a um novo nicho profissional que venha a contribuir para um futuro mais sustentável." 
            }
        ]
    },
    {
        enunciado: "Você então com os seus conhecimentos na área da programação e robótica, desenvolve o TitanX, um artefato robótico capaz de emitir sinais de alerta a respeito do aquecimento global...",
        alternativas: [
            {
                texto: "Está ficando perigoso!",
                afirmacao: "Na sua percepção, os dados coletados na sua região já demonstram um aumento na temperatura quando comparados aos apresentados pelos veículos oficiais." 
            },
            {
                texto: "É preciso tomar uma providência!",
                afirmacao: "Sua decisão é de publicar os dados num site que você mesmo criou e tornar público as autoridades, a sua preocupação com as consequências do aquecimento global." 
            }
        ]
    },
    {
        enunciado: "Missão cumprida! Vc percebe que através da inclusão digital que seu colégio lhe proporcionou, conseguiu fazer a sua parte contribuindo para a conscientização das autoridades e público em geral...",
        alternativas: [
            {
                texto: "Que massa!",
                afirmacao: "Durante essa jornada, você percebe que a inclusão digital, além de lhe preparar para um presente e um futuro onde esse tipo de conhecimento predomina, também pode contribuir com a mitigação de desastres naturais." 
            },
            {
                texto: "Prevenção é o melhor remédio!",
                afirmacao: "Somos um só povo e uma só raça! Precisamos nos doar cada um naquilo que pode a fim de tornar a Terra um lugar cada vez melhor para todos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "No futuro, profissões como engenheiros de energia renovável e especialistas em adaptação climática são essenciais para mitigar os efeitos do aquecimento global. A inclusão digital permite que esses profissionais colaborem globalmente, usando tecnologias avançadas para desenvolver soluções sustentáveis e acessíveis a todos.";

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
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();