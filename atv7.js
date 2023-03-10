const readline = require('readline-sync')

//Criando variavel
const num1 = parseInt(readline.question("Digite Um numero Inteiro \n"))
const num2 = parseInt(readline.question("Digite Outro numero Inteiro \n"))

//ADIÇÃO
var adicao = (num1 + num2);

console.log(`Conta em ADIÇÃO: ${adicao}`);

//SUBTRAÇÃO
var subtracao = (num1 - num2);

console.log(`Conta em SUBTRAÇÃO: ${subtracao}`);


//MULTIPLICAÇÃO
var multiplicacao = (num1 * num2);

console.log(`Conta em MULTIPLICAÇÃO: ${multiplicacao}`);


//DIVISÃO
var divisao = (num1 + num2);

console.log(`Conta em DIVISÃO: ${divisao}`);