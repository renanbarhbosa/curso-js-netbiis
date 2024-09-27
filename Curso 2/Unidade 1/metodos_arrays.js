let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dobro = arr.map((el) => {
    return el * 2;
});

// console.log(dobro);

const alunos = [
    { nome: 'João', idade: 15, notas: [7, 8, 9] },
    { nome: 'Maria', idade: 12, notas: [10, 11, 12] },
    { nome: 'Zezinho', idade: 13, notas: [1, 2, 3] }
];

const alunosComMedia = alunos.map((aluno) => {
    let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / aluno.notas.length;

    return {
        ...aluno,
        media: media
    };
});


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maiorQueCinco = array.filter(item => item > 5);
console.log(maiorQueCinco);