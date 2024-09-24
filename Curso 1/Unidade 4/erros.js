let numero = null;
try {
    // Tipos de erros abaixo, respectivamente: type error, reference error e syntax error
    // console.log(numero.toUpperCase());
    // console.log(teste);
    // console.log('teste');
} catch (err) {
    console.log('Aconteceu um erro: ' + err.message);
} finally {
    console.log('Finalizou o bloco try catch');
}
