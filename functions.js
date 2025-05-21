
function getArrTerminal() {
    let arrDaTerminale = []

    let processArray = process.argv

    for (let i = 2; i < processArray.length; i++) {
        const curElem = processArray[i]
        arrDaTerminale.push(curElem)
    }
    return arrDaTerminale
}

function arrToString(array) {
    const newArr = array.join("")
    return newArr
}


function contaVocali(array) {
    let vocali = ["a", "e", "i", "o", "u"]
    let counter = 0

    for (let i = 0; i < array.length; i++) {
        let curLetter = array[i]
        if (vocali.includes(curLetter)) {
            counter++
        }
    }
    return counter
}

export{getArrTerminal, arrToString, contaVocali}








