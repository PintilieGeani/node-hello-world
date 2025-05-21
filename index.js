// Importo le funzioni
import { getArrTerminal, arrToString, contaVocali, numeroMaggiore } from "./functions.js"

console.log("Hello Boolean")

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus 1:
let processArray = process.argv.toSpliced(0, 2)
const strDaMostrare = processArray.join(" ")
console.log(strDaMostrare)

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus Snack 1

// Raccolta dati
const arrayDaTerminale = getArrTerminal()
const strDaArr = arrToString(arrayDaTerminale)
const numeroVocali = contaVocali(strDaArr)

// Output
console.log(numeroVocali)


console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus Snack 2

// Raccolta dati
const arrayDiNumeri = getArrTerminal()
const numMagg = numeroMaggiore(arrayDiNumeri)

// Output
console.log(numMagg)