const prompt = require('prompt-sync') ()

const N = prompt(' Informe o número: ')
const N1= Number(N)


if(N1 % 2 === 0) {
console.log (' número par '+Math.sqrt (N1,2))

}else { 
console.log(' número impar ' +Math.pow(N1,2) )
}
