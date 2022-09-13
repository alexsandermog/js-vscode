const agetext =prompt ('type your age:')
const age = Number (agetext)
const agestring = String(age)
const agestring2 = age + '' ;

if (age >= 18) {
    document.write  (' Então você é adulta. ')
} else if (age > 12) {
    document.write (' Então você é adolescente. ')
} else {
    document.write (' Então você é criança. ')
}
document.write ('<br>') ;

switch (age) {
    case 16: 
    document.write ('Já pode votar ')
    break
    case 18:
    document.write (' Já pode beber e dirigir,não ao mesmo tempo ')
    break
    case 65:
    document.write (' Já pode pegar onibus de graça ')
    break
    default:
        document.write (' se lascou ')

}
