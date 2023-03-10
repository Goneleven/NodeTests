//Importar o módulo
const readline = require('readline-sync')

//Criando variavel
const num = parseInt(readline.question("Digite Um Número positivo ou negativo \n"))

if(num <= -1){
    console.log(`O ${num} é Negativo`);

}else if(num >= 1){
    console.log(`O ${num} é Positivo`);

}else{
    console.log(`O numero é ZERO`);
}