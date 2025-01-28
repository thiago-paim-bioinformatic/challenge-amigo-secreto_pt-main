//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Variáveis
let listaAmigosSecretos = [];
let numeroAleatorio = 0;
let amigoSecreto = "";

function limpaCampo() {
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
};

function resetJogo() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigosSecretos = [];
    numeroAleatorio = 0;
    amigoSecreto = "";
};


//verifica se campo 'input' é vazio ou não
function verificaCampoValido() {
    let campo = document.querySelector("input").value;
    let validacao = campo != "" ? "valido" : "invalido";
    return validacao;
};

function imprimeTexto(id, texto) {
    let campoTag = document.getElementById(id);
    campoTag.innerHTML = texto;
};


function mostraListaAmigos () {
    let campoTag = document.getElementById("listaAmigos");
    campoTag.innerHTML = ""; //inicializa vazio
    let li = "";
    if (listaAmigosSecretos.length > 0) {
        for (let index = 0; index < listaAmigosSecretos.length; index++) {
            li = li + `<li>${listaAmigosSecretos[index]}</li>`;
        };
    };
    campoTag.innerHTML = li;
};

//Outro método para adicionar <li></li> no html

// function mostraListaAmigos (texto) {
//     let campoTag = document.getElementById("listaAmigos");
//     let li = document.createElement("li");
//     li.textContent = texto;
//     campoTag.appendChild(li);
// };


//Lógica principal

// versão 1: adicionarAmigo() somente executada com o clique no botão 'Adicionar'
function adicionarAmigo() {
    let testeValidacaoCampo = verificaCampoValido();
    if (testeValidacaoCampo == "valido") {
        let nomeAmigo = document.querySelector("input").value;
        listaAmigosSecretos.push(nomeAmigo);
        mostraListaAmigos();
        limpaCampo();
    } else {
        alert("Por favor, insira um nome válido");
    };
};



// //versão 2: adicionarAmigo() é executadacom o clique no botão 'Adicionar' ou pressionando a tecla 'enter'
// function adicionarAmigo(event) {
//     let testeValidacaoCampo = verificaCampoValido();
//     if (testeValidacaoCampo == "valido") {
//         let nomeAmigo = document.querySelector("input").value;
//         listaAmigosSecretos.push(nomeAmigo);
//         mostraListaAmigos();
//         limpaCampo();
//     };

// };

// // No event listener do input, usamos o evento 'keyup' em vez de 'keydown'. Isso garante que o valor do input seja atualizado antes de chamarmos a função adicionarAmigo().


// let pressEnterInput = document.querySelector("input");
// pressEnterInput.addEventListener('keyup', function(event) {
//     if (event.key === "Enter") {
//         adicionarAmigo(event);
//     }
// });

// // Adicionamos um event listener para o botão "Adicionar", chamando a função adicionarAmigo() quando o botão for clicado.

// let buttonAdd = document.querySelector(".button-add");
// buttonAdd.addEventListener('click', adicionarAmigo);



function sortearAmigo() {
    let tamanhoListaAmigos = listaAmigosSecretos.length;
    if (tamanhoListaAmigos != 0) { //verifica se array não está vazio
        numeroAleatorio = Math.floor((Math.random() * tamanhoListaAmigos));
        amigoSecreto = listaAmigosSecretos[numeroAleatorio];
        imprimeTexto("resultado", `O Amigo secreto sorteado é: ${amigoSecreto}`);

    } else {
        imprimeTexto("resultado", "Você não adicionou amigos para serem sorteados!");
    };

    resetJogo(); //limpa campos após o sorteio
};


