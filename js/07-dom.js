/* Funções (ou métodos) de acesso/seleção ao DOM

-getElementById()  -> seleciona UM elemento (apenas 1, afinal o ID)
-querySector()      -> seleciona UM elemento através de um seletor
-querySelectorAll() -> seleciona VÁRIOS elementos através de seletor

EXEMPLOS */

// const titulo = document.getElementById("titulo-principal");


const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

//Leitura do conteúdo
console.log(titulo.textContent)

//Alteração do conteúdo


console.log(subtitulos[1].textContent);

titulo.textContent = "Olá DOM, meu velho amigo";
subtitulos[0].innerHTML = "<i>Aprendendo DOM </i>";

//Manipulando CSS via JS
// 1) Inline - injeta CSS diretamente na linha da tag do HTML
//

const pagina = document.querySelector("body");
pagina.style.background = "lightblue";
pagina.style.fontFamily = "Verdana";
pagina.style.margin = "0";
pagina.style.background = "lightblue";

//2) Classe
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);
const itemMeio = document.querySelector("#lista-editores li:nth-child(2)");
primeiroItem.classList.add("destaque-item");

