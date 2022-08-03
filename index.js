//PTI_ALGORITMOS_E_PROGRAMAÇÃO
//FELIPE DE SOUZA MODESTO
//DESENVOLVIDO NA REPLIT.COM


do{
preco_alcool = parseFloat(prompt("Digite o preço da álcool: "))
console.log("")
preco_gasolina = parseFloat(prompt("Digite o preço do gasolina: "))
console.log("")

var comparacao = parseFloat(preco_alcool)/parseFloat(preco_gasolina)
console.log("A relação de comparação dos combustíveis é: "+ comparacao.toFixed(2))
console.log("")

const relacao = 0.70

if (comparacao.toFixed(2) < relacao && comparacao != relacao){
  console.log("Vale a pena o álcool")
}
else if (comparacao.toFixed(2) > relacao && comparacao != relacao)  {
  console.log("Vale a pena a gasolina")
}
else {
  console.log("Tanto faz abastecer com um ou outro")
  console.log("")
}

condicao = prompt("Deseja realizar uma nova comparação (sim/nao)?")
console.log("")
 
} while (condicao == 'sim')

console.log("Fim de programa!")


