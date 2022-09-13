const prompt = require ('prompt-sync') ()
const n1 =  (prompt ('Digite o 1° número: '));
const n2 = (prompt ('Digite o 2° número: '));
const n3 = (prompt ('Digite o 3° número: '));

if(n1>n2 && n1>n3) {
    console.log('valor do 1° número é maior')
} if (n2>n1 && n2>n3) {
    console.log('valor do 2° número é maior')
} if (n3>n1 && n3>n2) {
    console.log('valor do 3° número é maior')
}


