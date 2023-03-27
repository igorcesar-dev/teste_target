function inverter() {
  // Captura da string digitada
  const string = document.getElementById("string").value;

  // Inicialização da string invertida
  let stringInvertida = "";

  // Percorre a string de trás para frente, concatenando cada caractere na nova string
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  // Exibição da string original e da string invertida
  alert(`String original: ${string} ` + "|" + ` String invertida: ${stringInvertida}`);
}
