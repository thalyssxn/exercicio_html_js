// Obtendo o formulário pela classe
const form = document.querySelector('.form-deposito');

// Adicionando um ouvinte de evento para o formulário quando for submetido
form.addEventListener('submit', function(e) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Obtendo os valores dos campos A e B
    const campoA = document.querySelector('.campo-a').value;
    const campoB = document.querySelector('.campo-b').value;

    // Convertendo os valores para números
    const valorA = parseFloat(campoA);
    const valorB = parseFloat(campoB);

    // Verificando se o campo B é maior que o campo A
    if (valorB > valorA) {
        alert("O Valor de B é maior que o valor de A !.");
    } else {
        alert("O Valor de B deve ser maior que o Valor de A !.");
    }
});
