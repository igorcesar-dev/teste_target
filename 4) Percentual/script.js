// Definição dos valores de faturamento mensal por estado
const faturamentoEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Cálculo do valor total mensal da distribuidora
const valorTotalMensal = Object.values(faturamentoEstado).reduce(
  (total, faturamento) => total + faturamento,
  0
);

// Cálculo do percentual de representação de cada estado em relação ao valor total mensal
const percentualEstado = {};
for (let estado in faturamentoEstado) {
  percentualEstado[estado] =
    (faturamentoEstado[estado] / valorTotalMensal) * 100;
}

// Resultados
for (let estado in percentualEstado) {
  console.log(`${estado}: ${percentualEstado[estado].toFixed(2)}%`);
}
