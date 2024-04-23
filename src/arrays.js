const redesSociais = ['Facebook', 'Intagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['José', 'Fernando', 'Filipe', 'Fabiana'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'frontend'
    }
    return itemAtual;
})
console.log(alunos2)

const Fernando = alunos2.find(function(item){
    return item.nome == 'Fernando'
})

console.log(Fernando)


const indiceDoFernando = alunos2.findIndex(function(item){
    return item.nome == 'Fernando'
})
console.log(indiceDoFernando)

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso  === 'frontend'
})
const nums = [10, 20, 30, 50]
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)
console.log(soma);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')
console.log(nomesDosAlunos)



// const numeros = [1, 2, 3]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual
// })

// console.log(dobroDosNumeros)