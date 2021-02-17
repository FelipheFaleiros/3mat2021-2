// Criação de um objeto vazio
let vazio1 = {}             // Forma "moderna"
let vazio2 = new Object()   // Forma "tradicional"

// Criação de objetos já com dados
let pessoa = {
    // Objetos organizam-se em pares de
    // propriedade: valor
    // também chamados de
    // atributo: valor
    nome: 'Orkutilson da Silva', 
    dataNasc: '2009-01-29', 
    sexo: 'M',
    ocupacao: 'estudante',
    // Nomes de propriedade podem ter espaço e/ou acentos,
    // mas, nesse caso, precisam vir entre aspas
    'cidade de origem': 'Franca/SP'
}

// Acessando uma propriedade do objeto
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// Quando o nome da propriedade tem espaços ou acento, não é possível
// acessá-la pela sintaxe do ponto. Deve-se usar a sintaxe dos colchetes.
console.log(pessoa['cidade de origem'])

// A sintaxe dos colchetes SEMPRE funciona
console.log(pessoa.dataNasc)        // Sintaxe do ponto
console.log(pessoa['dataNasc'])     // Sintaxe dos colchetes

// A sintaxe dos colchetes é importante também quando o nome da propriedade
// está armazenada em uma variável
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

// Formas de exibição de um objeto inteiro no console
console.log(pessoa)
console.table(pessoa)

let veiculo = {}    // O objeto inicia-se vazio
// Foi criada a propriedade marca e colocado o valor 'Volkswagen' dentro dela
veiculo.marca = 'Volkswagen'
veiculo.modelo = 'Variant'
veiculo.ano = 1974
// Propriedade com acento -> sintaxe dos colchetes
veiculo['combustível'] = 'gasolina' 
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)

// Listando todas as propriedades de um objeto
console.log('--------------------------------')

// for..in -> lista todas as propriedades de um objeto
// Variáveis:
// prop -> a variável que irá conter o nome de cada uma das propridades
// do objeto (pode ser qualquer nome válido de variável)
// pessoa -> o objeto do qual queremos listar as propriedades
for(let prop in pessoa) {
    console.log(prop)
}
console.log('--------------------------------')
for(let x in veiculo) {
    console.log(x)
}
console.log('--------------------------------')
// Listando propriedades e valores do objeto veiculo com for..in
for(let atrib in veiculo) {
    console.log(atrib + ' -> ' + veiculo[atrib])
}

// Objeto veiculo antes da exclusão da propriedade
console.table(veiculo)

// Apagando uma propriedade de um objeto: delete
delete veiculo.ano

// Objeto veiculo depois da exclusão da propriedade
console.table(veiculo)