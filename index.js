console.log("Hello Boolean")

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus 1:
let processArray = process.argv
let strDaTerminale = []
for(let i = 2; i < processArray.length; i++){
    const curElem = processArray[i]
    strDaTerminale.push(curElem)
}
const strDaMostrare = strDaTerminale.join(" ")
console.log(strDaMostrare)

console.log("---------------------------------------------------------------------------------------------------------------------------------")

// Bonus Snack 