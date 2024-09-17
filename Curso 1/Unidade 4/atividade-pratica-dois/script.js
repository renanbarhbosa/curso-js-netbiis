document.getElementById('meuForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Esconde o formulário e exibe a mensagem de sucesso
    document.getElementById('meuForm').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';
});

document.getElementById('novoForm').addEventListener('click', function() {
    // Exibe o formulário novamente e esconde a mensagem de sucesso
    document.getElementById('meuForm').style.display = 'block';
    document.getElementById('mensagem-sucesso').style.display = 'none';
    
    // Limpa os campos do formulário
    document.getElementById('meuForm').reset();
});
