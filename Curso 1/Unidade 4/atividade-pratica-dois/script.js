document.getElementById('meuForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('meuForm').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';
});

document.getElementById('novoForm').addEventListener('click', function () {
    document.getElementById('meuForm').style.display = 'block';
    document.getElementById('mensagem-sucesso').style.display = 'none';

    document.getElementById('meuForm').reset();
});
