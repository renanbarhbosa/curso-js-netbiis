console.log('------------------');
console.log('EXERCÍCIO 1');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (let el of arr) {
    soma += el;
}
console.log(soma);
console.log('------------------');

console.log('EXERCÍCIO 2');

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 28,
    peso: 75,
    altura: 1.75
}

for (let el in pessoa) {
    console.log(pessoa[el]);
}

console.log('------------------');
console.log('EXERCÍCIO 3');

function Aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;
}

let renan = new Aluno('Renan', 10);
let victor = new Aluno('Victor', 10);
let patrick = new Aluno('Patrick', 10);
let joao = new Aluno('Joao', 10);

let arrAlunos = [renan, victor, patrick, joao];

// MINHA SOLUÇÃO

// for (let el of arrAlunos) {
//     arrAlunos.forEach((aluno) => {
//         if (aluno.nota > 7) {
//             console.log(aluno.nome);
//         }
//     })
// }

// SOLUCAO PARA A PROPOSTA DO EXERCÍCIO

for (let aluno of arrAlunos) {
    for (let key in aluno) {
        if (key === 'nota' && aluno[key] > 7) {
            console.log(aluno.nome);
        }
    }
}

console.log('------------------');
