// console.log("EVENTOS!");

/*Exemplo 01 */

const subExemplo01 = document.querySelector("#subtitulo-exemplo01");

const msg = document.querySelector("#mensagem");

//Monitor/Ouvinte de Evento

// subExemplo01.addEventListener("click", function(){
//     console.log("olá Marcia Pisaneschi");
// });

subExemplo01.addEventListener("click", function(){
    msg.textContent = "Oláaaaaaaaaaaa!!!";

    msg.style.fontSize = "30px";

    subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("ckick", function(){
    msg.textContent = "";
});

//mouserover, mouseout

/* Exemplo 02: modo noturno */

const botao = document.querySelector("#noturno");
const pagina =  document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    if (botao.textContent == 'Ativar') {
        //então, mudameos para Desativar:

        botao.textContent = "Desativar";
        // senão, mudamos para Ativar
    } else {
        botao.textContent = "Ativar";
    }
});
    /*neste caso liga e desliga
    // ou pode ser remover
    // pagina.classList.remove("modo-noturno");
    // variáveis é de onde os dados virão
    // parâmetros são os argumentos da função

/*Exemplo 3 - simulação de cadastro */

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

//seletro query, ou pela classe ou pelo ID
//Programar eventos - no javaScript
//Obs.: a função dentro do listener é chamada de Callback

formulario.addEventListener("submit", function(event){
    event.preventDefault();

// console.log("ok!!!")
// submit funciona com enter e click
// Se estiver usando apenas javacript precisa colocar 
/* formulario.addEventListener("submit", function(event){
event.preventDefault(); estamos anulando o comportamento padrão do navegador que dá uma espécie de erro, pois, enquanto estiver programando ele sempre tentar levar para algum outro lugar.
// 1) Capturar od dados digitados nos campos
*/

let nome = campoNome.value;
let nota1 = parseFloat(campoNota1.value);
let nota2 = parseFloat(campoNota2.value);
//parseInt()
//parseFloat()
//todo conteúdo de um formulário é lido como string no javascript

// 2) Calcular a média das notas

let media = (nota1 + nota2)/2 ;


//Correção do exercício 1

let situacao 
    if (media >= 7) {
        situacao = "aprovado(a)";
    } else {
        situacao = "reprovado(a)";
    }
console.log(media);

/*3) Criando elemento dinâmico via JS

3.1) Criar o elemento/tag*/

let paragrafo = document.createElement("p");

// 3.2) Montar o conteúdo da tag

paragrafo.innerHTML = `Olá, <b> ${nome}</b> sua média foi - <i>${media} e você está ${situacao}</i>`

//neste exemplo acima é comun usar o chamado tamplate String

// 3.3) Adicionar tag/contúedo à div de resultados

divResultados.appendChild(paragrafo);

// console.log(paragrafo);

console.log(nome, nota1, nota2, media);

formulario.rest();

// this.reset (formulario);

});

//parseInt()
//parseFloat()


/*Exercícios
1) Programe o necessário para deterinar se o aluno está aprovado ou reprovado, considerando média maior ou igual a 7.

2) Mostre a situação do aluno junto com nome e a média

3) Desafio: faça com que os campos do formulário sejam rejam resetados ao enviar

//Devolvendo o foco (cursor) para o campo nome

});*/

campoNome.focus();

