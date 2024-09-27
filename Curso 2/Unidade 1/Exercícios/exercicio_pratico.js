alert("Insira os seus dados, por gentileza.");

const nomeCliente = prompt("Nome");
const idadeCliente = prompt("Idade");
const emailCliente = prompt("Email");

const cliente = {
    nome: nomeCliente,
    idade: idadeCliente,
    email: emailCliente
}

console.log(cliente);

for (let propriedade in cliente) {
    console.log(propriedade, cliente[propriedade]);
}