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
import { getArrTerminal, arrToString, contaVocali } from "./functions.js"

const arrayDaTerminale = getArrTerminal()
const strDaArr = arrToString(arrayDaTerminale)
const numeroVocali = contaVocali(strDaArr)

console.log(numeroVocali)

// Bonus Snack 2