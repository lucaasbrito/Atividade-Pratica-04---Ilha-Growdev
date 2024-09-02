// Solicita o valor ao usuário
const valorInput = prompt("Digite o valor a ser sacado:");

// Converte o valor para um número
let valor = parseFloat(valorInput);

// Verifica se o valor é um número e é positivo
if (isNaN(valor) || valor <= 0) {
  document.write("<h1>Erro</h1><p>O valor deve ser um número positivo.</p>");
} else {
  // Converte o valor para um inteiro para processamento de notas
  valor = Math.floor(valor);

  // Inicializa as variáveis para cada nota
  const quantidade50 = Math.floor(valor / 50);
  valor %= 50;

  const quantidade10 = Math.floor(valor / 10);
  valor %= 10;

  const quantidade5 = Math.floor(valor / 5);
  valor %= 5;

  const quantidade1 = valor; // Nota de 1 real é o valor restante

  // Prepara o resultado
  let resultado = "<h1>Notas a sacar:</h1>";
  resultado += `R$ 50 -> ${quantidade50}<br>`;
  resultado += `R$ 10 -> ${quantidade10}<br>`;
  resultado += `R$ 5 -> ${quantidade5}<br>`;
  resultado += `R$ 1 -> ${quantidade1}<br>`;

  // Exibe o resultado na página
  document.write(resultado);
}
