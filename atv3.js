//Importar o módulo
const readline = require('readline-sync')

//Criando variavel
const idade = parseInt(readline.question("Digite sua idade \n"))

if(idade <= 17){
    console.log(`Você tem menos de 18 Anos!`);

}else{
    console.log(`Você tem mais de 18, boa`);
}