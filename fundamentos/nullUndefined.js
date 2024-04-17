let valor // não inicializada
console.log(valor)

valor = null // aunsência de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir andefiend
console.log(!!produto.preco)
// delete produto.preco - para tirar o atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)