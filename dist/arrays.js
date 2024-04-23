"use strict";

var redesSociais = ['Facebook', 'Intagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, "Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['José', 'Fernando', 'Filipe', 'Fabiana'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var Fernando = alunos2.find(function (item) {
  return item.nome == 'Fernando';
});
console.log(Fernando);
var indiceDoFernando = alunos2.findIndex(function (item) {
  return item.nome == 'Fernando';
});
console.log(indiceDoFernando);
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'frontend';
});
var nums = [10, 20, 30, 50];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// const numeros = [1, 2, 3]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual
// })

// console.log(dobroDosNumeros)