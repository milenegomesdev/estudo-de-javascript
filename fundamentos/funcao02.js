// Armazenando uma função em uma variável
const impirmirSoma = function (a,b) {
    console.log(a + b)
}

impirmirSoma(2,3)

// Armazendando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implícito
const subtracao = (a,b) => a- b
console.log(subtracao(2,3))