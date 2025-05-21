console.log("Hello Boolean")

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus 1:
let processArray = process.argv
let arrDaTerminale = []
for(let i = 2; i < processArray.length; i++){
    const curElem = processArray[i]
    arrDaTerminale.push(curElem)
}
const strDaMostrare = arrDaTerminale.join(" ")
console.log(strDaMostrare)

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus Snack 1
// Importo la funzione
import { getArrTerminal, arrToString, contaVocali } from "./functions.js"

// Raccolta dati
const arrayDaTerminale = getArrTerminal()
const strDaArr = arrToString(arrayDaTerminale)
const numeroVocali = contaVocali(strDaArr)

// Output
console.log(numeroVocali)


console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus Snack 2
// Importo la funzione
import { numeroMaggiore } from "./functions.js"

// Raccolta dati
const arrayDiNumeri = getArrTerminal()
const numMagg = numeroMaggiore(arrayDiNumeri)

// Output
console.log(numMagg)