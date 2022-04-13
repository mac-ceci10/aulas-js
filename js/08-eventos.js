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

    //neste caso liga e desliga

    // ou pode ser remover
   // pagina.classList.remove("modo-noturno");

});
