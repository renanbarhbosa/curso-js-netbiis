let arr = [1,2,3,4,5];

let soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual);
console.log(soma);

// MESMA OPERAÇÃO QUE O DE BAIXO:
// let acumulador = 0;
// for (let valorAtual of arr) {
//     acumulador += valorAtual;
// }
// console.log(acumulador);
