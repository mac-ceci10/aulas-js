// acessando elementos usando jquery
const titulo = $("h1");
// mudar um conteúdo do elemento
// se fosse no test.content ou innerHTML
// no jQuery usa como no exemplo abaixo

titulo.text("Olá jQuery");

//CSS via jQuery - no JS document.style.color ....
// no jQuery como no exemplo abaixo

// titulo.css("color","blue");

titulo.css({
    "color": "blue",
    "text-align" : "center",
    "font-size" : "25px",

});


//eventos com js acessar o elemento add.eventListening...
// no jQuery ON

titulo.on("click", function(){
    $("body").css("background-color", "yellow");
    $("h2").text("Clicou!!");
    titulo.fadeOut();
});






