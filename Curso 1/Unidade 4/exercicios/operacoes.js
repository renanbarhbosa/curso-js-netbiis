let somaTudo = function (a, b) {
    return "Resultado da soma: " + (a + b);
}

function subtraiTudo(a, b) {
    return "Resultado da subtração: " + (a - b);
}

let multiplicaTudo = (a, b) => "Resultado da multiplicação: " + (a * b);

let divideTudo = (a, b) => "Resultado da divisão: " + (a / b);

const operador = window.prompt("Escolha uma das 4 operações (+, -, x, /)");

if (operador === "+") {
    document.write("<h1>" + somaTudo(1, 2) + "</h1>");
} else if (operador === "-") {
    document.write("<h1>" + subtraiTudo(20, 15) + "</h1>");
} else if (operador === 'x') {
    document.write("<h1>" + multiplicaTudo(2, 2) + "</h1>");
} else if (operador === "/") {
    document.write("<h1>" + divideTudo(2, 2) + "</h1>");
} else {
    document.write("<h1>Operador inválido</h1>");
}
