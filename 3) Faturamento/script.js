function calcularFaturamentoDiario(json) {
  const faturamentoDiario = json.faturamento_diario;
  const diasComFaturamento = faturamentoDiario.filter((valor) => valor !== 0);
  const mediaMensal =
    diasComFaturamento.reduce((soma, valor) => soma + valor, 0) /
    diasComFaturamento.length;
  const diasAcimaDaMedia = diasComFaturamento.filter(
    (valor) => valor > mediaMensal
  );
  const menorValor = Math.min(...diasComFaturamento);
  const maiorValor = Math.max(...diasComFaturamento);

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia: diasAcimaDaMedia.length,
  };
}

const faturamentoMensal = {
  faturamento_diario: [
    999, 450, 160, 1486, 1250, 1600, 0, 0, 1701, 2221, 1923, 2112, 1621, 0, 0,
    2344, 1222, 1321, 1234, 4321, 230, 0, 0, 20, 1346, 2000, 1100, 1200, 1300,
    0,
  ],
};

console.log(calcularFaturamentoDiario(faturamentoMensal));
