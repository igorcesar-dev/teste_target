// Função que verifica se um número pertence à sequência de Fibonacci
function TesteFibonacci(num) {
  // Inicia os valores de fibonacci
  var numeroAnterior = 0;
  var numeroAtual = 1;

  // Enquanto o valor do número atual for menor ou igual ao valor informado
  while (numeroAtual <= num) {
    // Se o número informado for igual ao numero atual, ele pertence à sequência de Fibonacci
    if (num === numeroAtual) {
      return true;
    }
    // Atualiza os valores de fibonacci para a próxima iteração
    var temp = numeroAtual;
    numeroAtual = numeroAnterior + numeroAtual;
    numeroAnterior = temp;
  }

  // Caso o número informado não pertença à sequência de Fibonacci a função retorna um "false"
  return false;
}

function testar() { // Função que é acionada ao clicar no botão "enviar"no html
  var num = document.getElementById("valor").value;
  var msg = document.getElementById("msg");

  // Utilizando a função para testar o valor do input
  if (TesteFibonacci(parseInt(num))) {
    msg.innerHTML = `O valor ${num}, pertence à sequência de Fibonacci`;
  } else {
    msg.innerHTML = `O valor ${num}, NÃO pertence à sequência de Fibonacci`;
  }
}
