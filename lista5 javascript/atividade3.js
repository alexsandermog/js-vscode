const prompt = require ('prompt-sync') ()

const idade = prompt ('Escreva sua idade: ')

if (idade>=10 && idade<=14) {
    console.log('Classe infatil')
}else if (idade >=15 && idade <=17) {
    console.log ('Classe juvenil')
}else if (idade >=18 && idade >=25) {
    console.log ('Classe adulta')
}