// Obtendo o formulário pelo ID
const form = document.getElementById('form-deposito');

// Função para validar se o nome completo tem pelo menos duas palavras
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

// Adicionando um ouvinte de evento para o formulário quando for submetido
form.addEventListener('submit', function(e) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Inicializar a variável de validação do formulário
    let formEValido = false;

    // Obtendo os elementos do formulário pelos seus IDs
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');

    // Construindo a mensagem de sucesso com valores dos campos
    const mensagemSucesso = `Montante de: R$ ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

    // Validando o nome do beneficiário
    formEValido = validaNome(nomeBeneficiario.value);

    // Exibindo uma mensagem de sucesso ou erro baseado na validação
    if (formEValido) {
        alert(mensagemSucesso);
    } else {
        alert("O nome não está completo");
    }
});

// Log do formulário no console (opcional)
console.log(form);
