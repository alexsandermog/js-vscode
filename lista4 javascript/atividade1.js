

const yearsold = prompt ('Entre com a quantidade de anos:')
const yearsoldNumber = Number(yearsold);
const months = prompt ('Entre com a quantidade de meses:')
const monthss = Number (months)
const days = prompt ('Entre com a quantidade de dias:')
const dayss = Number (days)

const totaldays = yearsold * 365 + months * 30 + days

console.log (yearsold)

console.log (months)

console.log (days)

document.write (totaldays + ' Dias vividos ')


