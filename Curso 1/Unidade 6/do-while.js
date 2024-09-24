// let notaInput = '';

// do {
//     notaInput = prompt('Digite a note de 0 a 10, companheiro');
// } while (notaInput < 0 || notaInput > 10 || isNaN(notaInput)) {
//     notaInput = prompt('Digite a note de 0 a 10, companheiro');
// }










let numerosSoma;
let soma = 0; 

do {
    numerosSoma = parseInt(prompt('vai digitando os números para somar aí, meu parceiro'));
    
    if (!isNaN(numerosSoma)) { 
        soma += numerosSoma; 
    }
} while (numerosSoma !== 0); 

console.log(`A soma dos números é: ${soma}`);
