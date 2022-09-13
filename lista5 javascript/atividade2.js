const prompt = require ('prompt-sync') ()

const n1 =  (prompt ('Digite o 1° número: '));
const n2 = (prompt ('Digite o 2° número: '));
const n3 = (prompt ('Digite o 3° número: '));

if (n3>n2 && n3>n1 && n1<n2 && n1<n3) {
    console.log ('ordem crescente: '+n1+n2+n3)

} if (n2>n1 && n2>n3 && n1<n2 && n1<n3) {
    console.log ('ordem crescente: '+n1+n3+n2)

} if (n1>n2 && n1>n3 && n2<n1 && n2<n3) {
    console.log ('ordem crescente: '+n2+n3+n1)

} if (n3>n2 && n3>n1 && n2<n1 && n2<n3) {
    console.log ('ordem crescente: '+n2+n1+n3)
}
if (n1>n2 && n1>n3 && n3<n1 && n3<n2) {
    console.log ('ordem crescente: '+n3+n2+n1)
}
if (n2>n3 && n2>n1 && n3<n1 && n3<n2) {
    console.log ('ordem crescente: '+n3+n1+n2)
}


