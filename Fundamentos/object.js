const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4988.90
prod1['Desconto Legal'] = 0.40 // evitar usar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)