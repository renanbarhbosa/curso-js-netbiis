let arr = [1, 2, 3, 4, 5];

let evenNumbers = arr.filter((isEven) => isEven % 2 === 0);
console.log(evenNumbers);

let arrayMultiplicada = arr.reduce((acc, curr) => acc * curr);
console.log(arrayMultiplicada);
// multiplicar cada elemento do array e retornar um novo array com o multiplicador






function contarOcorrencias(arr, numero) {
    let contador = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
            contador++;
        }
    }

    return contador;
}

const array = [1, 2, 3, 4, 2, 5, 2, 6];
const numero = 2;
console.log(`O número ${numero} aparece ${contarOcorrencias(array, numero)} vezes no array.`);

// USAR FILTER E O .LENGHT