//Importar o módulo
const readline = require('readline-sync')

//Criando variavel
const num1 = parseInt(readline.question("Digite Um Número \n"))
const num2 = parseInt(readline.question("Digite só mais um \n"))

if(num1 > num2){
    console.log(`O ${num1} é maior`);

}else{
    console.log(`O ${num2} é maior`);
}