/* Estrutura tradicionais

(tem em todas as linguagens):

while -> enquanto
do/While -> faça/enquanto
for -> para

*/

// Exemplo loop while (enquanto)

console.log("while"); 

// Variável de controle do loop
//* Obs.: normalmente é chamada de i, j ou k */

let contador = 1;

while(contador <=10) {
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
}

let i = 1;
while(i <=10) {
    console.log(`Valor de i: ${i}`);
    i++; // incremento
}
//letras mais usadas para uma estrutura de repetição
// i j k

console.log("-------------------------------")
console.log("do/while")

    let j = 1; // variável de controle
    do {
     console.log(`j vale ${j}`);
     j++;

    } while (j <=3) // ou j< 4

console.log("-------------------------------")
console.log("FOR");

for(let i = 1; i <=5; i++) {
    console.log(`I vale: ${i}`);
    }

console.log("-------------------------------")

console.log("Loop e Estrutura de dados")

//Array (vetor)

let alunos= ["Eduardo", "Vagner", "Thalia", "Claudio", "Jéssica"]

for(let i = 0; i < 5; i++) {
    console.log(alunos[i]);
}

console.log(alunos.sort()); 

//*sort () -> função para ordenar array */
//console.log (alunos.sort());

console.log("-------------------------------")

console.log("Loops exclusivos do JS");

//for/of: ótimo para arrays

for(let aluno of alunos) {
    console.log(aluno);
}

let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes:3
};

//for/in
for(let dados in livro){
    //console.log(dados);
    console.log(livro[dados]);
}



