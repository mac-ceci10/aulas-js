'use strict'; //MODO ESTRITO / RESTRITO

console.log("Funções!");

/*Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualqer parte da sua aplicação.
Usar funções também é uma forma de separar a lógica e organizar melhor sua programação.*/

/*repetir uma ação*/

// Sintaxe tradicional - segue a palavra function e em seguida um nome como exemplo abaixo
function linha(){
    console.log("--------------------------------------------------------------------------------------------------");
}

let curso = "Programadora Web";
let escola = "Senac";
let ano = 2022

console.log(`Curso: ${curso}`);
linha();

console.log(`Escola: ${escola}`);
linha();

console.log(`Ano: ${ano}`);
linha();

                

//argumentos da função

// VERSÃO 1.
function soma(valor1, valor2) {
    let total = valor1 + valor2
    return total;
}
// comentei este intervalo, pois, estava em conflito
// console.log()
// console.log(soma(10,5));
// console.log(total); 

let resultado = soma(100,50);
console.log(resultado);

if(resultado < 1000)
{
    console.log("Abaixo da Meta");
}
// console.log(total)

//Versão 2: sintaxe ARROW FUNCTION (Função seta/flecha)
// mais comum com o uso de constantes

const soma3 = (valor1,valor2) => {
    let total = valor1 + valor2;
    return total;
};


//Arrow function com retorno IMPLÍCITO
const soma1 = (valor1,valor2) => valor1 + valor2;
console.log(soma1(1055,500));

console.log(soma(10,5));
//console.log(total); // erro, pois é variável local

// let resultado = soma (100,5);

linha();

// //Versão1 tradicional
// function dobra(numero){
//     let resultado = numero * 2;
//     return resultado;
//}


//Versão2: arrow function
// const dobra = (numero) => {
// let resultado = numero*2
// return numero*2;
// }


//arrow function
//se a função só usar 1 parêmetro pode tirar o parâmetro dele

// const dobra = (numero) => {
// return numero *2;
// }

//Agora uma nova simplificação

const dobra = numero => numero*2;


linha();


console.log (dobra(40));
console.log (dobra(900));
console.log (dobra(3000));
console.log (dobra(79999))

linha();

let nota1 = 8.5;
let nota2 = 7.9;

const calculaMedia = (n1,n2) => (n1 + n2) / 2;

console.log(calculaMedia (nota1, nota2));

//Obs.: se não tem parâmentros, também precisa usar ()

const linha2 = () => console.log("******");

