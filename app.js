//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Variáveis
let listaAmigosSecretos = [];


function limpaCampo() {
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
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
function adicionarAmigo() {
    let testeValidacaoCampo = verificaCampoValido();
    if (testeValidacaoCampo == "valido") {
        let nomeAmigo = document.querySelector("input").value;
        listaAmigosSecretos.push(nomeAmigo);
        console.log(listaAmigosSecretos); //verifica no console a lista
        mostraListaAmigos();
        limpaCampo();
    } else {
        alert("Por favor, insira um nome válido");
    };
};