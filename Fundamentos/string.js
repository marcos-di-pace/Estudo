const escola = "Cod3r"

console.log(escola.charAt(4)) // mostra a posição 5 lembrando que se começa a contar do 0
console.log(escola.charAt(5)) // irá mostra vazio pois não existi dado
console.log(escola.charCodeAt(3)) // mostra o código HTML do 4º caractere
console.log(escola.indexOf('3')) // 

console.log(escola.substring(1)) // mostra o texto menos a primeira letra
console.log(escola.substring(0, 3)) // mostra os três primeiros caracteres

console.log('Escola '.concat(escola).concat('!')) // concactena texto
console.log(escola.replace(3, 'e')) // substitui o 3 pelo e

console.log('Ana,Maria,Pedro'.split(',')) // converte uma string em um array