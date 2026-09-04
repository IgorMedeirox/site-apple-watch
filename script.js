const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numeroImagemSelecionada = 1;
let numeroTamanhoSelecionado = 1;
let numeroCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numeroCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numeroCorSelecionada];

  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    nomeCor.toLowerCase() +
    " para caixa de " +
    opcoesTamanho[numeroTamanhoSelecionado];

  nomeCorSelecionada.innerText = "Cor - " + nomeCor;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-" +
    numeroImagemSelecionada +
    ".jpeg";

  imagemMiniatura0.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-0.jpeg";

  imagemMiniatura1.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-1.jpeg";

  imagemMiniatura2.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-2.jpeg";
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionada = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numeroTamanhoSelecionado = opcaoTamanhoSelecionada;

  const tamanhoCaixa = opcoesTamanho[numeroTamanhoSelecionado];

  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[numeroCorSelecionada].toLowerCase() +
    " para caixa de " +
    tamanhoCaixa;

  if (tamanhoCaixa === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numeroImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-" +
    opcoesCores[numeroCorSelecionada].toLowerCase() +
    "/imagem-" +
    numeroImagemSelecionada +
    ".jpeg";
}
