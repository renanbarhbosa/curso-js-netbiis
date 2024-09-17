let funcaoAnonima = function() {
    console.log('Função anõnima.');
}

funcaoAnonima();


let arrow = () => {
    console.log('Arrow function');
}

arrow();

let somar = (a, b) => a + b;
let imcCalc = (peso, altura) => (peso / (altura ** 2)).toFixed(2);

console.log(somar(10, 20));
console.log(imcCalc(70, 1.75));