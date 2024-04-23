"use strict";

var alunos = [{
  nome: 'José',
  nota: 7
}, {
  nome: 'Fernando',
  nota: 5
}, {
  nome: 'Filipe',
  nota: 8
}, {
  nome: 'Fabiana',
  nota: 4
}, {
  nome: 'Mario',
  nota: 6
}];
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:', alunosAprovadosArray);