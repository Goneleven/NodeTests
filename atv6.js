//Importar o módulo
const readline = require('readline-sync')

//Criando variavel
const nota1 = parseInt(readline.question("Digite Uma Nota \n"))
const nota2 = parseInt(readline.question("Digite Outra Nota \n"))
const nota3 = parseInt(readline.question("Digite A Ultima Nota \n"))

const media = (nota1 + nota2 + nota3)/3;

console.log(`A media das notas é: ${media}`);