const somaNumeroFinal = window.prompt("Digite um número para a última soma do loop");
let count = 0;
let soma = 0;

while (count < somaNumeroFinal) {
    count = count + 1;
    soma = soma + count;
}

console.log(soma);
