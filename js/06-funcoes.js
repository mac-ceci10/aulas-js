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
function soma(valor1, valor2) {
    let total = valor1 + valor2
    return total;
}

console.log()

console.log(soma(10, 5));
// console.log(total); //

let resultado = soma(100,50);
console.log(resultado);

if(resultado < 1000)
{
    console.log("Abaixo da Meta");
}
console.log(total)