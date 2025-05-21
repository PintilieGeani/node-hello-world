console.log("Hello Boolean")


// Bonus:
let processArray = process.argv
let strDaTerminale = []
for(let i = 2; i < processArray.length; i++){
    const curElem = processArray[i]
    strDaTerminale.push(curElem)
}
console.log(strDaTerminale.join(" "))
