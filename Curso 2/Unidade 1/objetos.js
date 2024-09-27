const pessoa = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    },
    tecnologias: ['Javascript', 'HTML', 'CSS'],
    saucadao: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Pedro';
console.log(pessoa['nome']);
pessoa.saucadao();
pessoa.novaPropriedade = 'Nova propriedade';
console.log(pessoa.novaPropriedade);