let num = [3, 5, 1, 7, 2]
num.sort()
num.push(6)
//console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
    if(pos == -1) {
        console.log('O valor não foi encontrado!')
    } else{
        console.log(`O valor está na posição ${pos}`)
    }