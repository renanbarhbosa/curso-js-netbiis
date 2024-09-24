function somarValores(numero1, numero1) {
    if (typeof numero1 !== "number" || numero2 !== 'number') {
        throw new TypeError(('Os valores devem ser números'))
    } 
    return numero1 + numero2;
} 

try {
    console.log(somarValores(5, 5));
    console.log('5', 5);
} catch (erro) {
    console.error(erro.message);
    console.error(erro.name);
    console.log(erro.stack);
}
