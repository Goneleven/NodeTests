//Importar o módulo
const readline = require('readline-sync')

//Criando variavel
const numParImpar = parseInt(readline.question("Digite Um Número \n"))

if(numParImpar % 2 == 0){
    console.log(`O Numero ${numParImpar} é Par!`);

}else{
    console.log(`O Numero ${numParImpar} é Impar!`);
}