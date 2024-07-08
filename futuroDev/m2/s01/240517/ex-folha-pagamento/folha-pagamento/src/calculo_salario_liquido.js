function calcularSalario(salarioBruto, valorINSS, valorIR) {

  const valeTransporte = salarioBruto * 0.06;
  const unimed = 25.00;
  const outrosDescontos = valeTransporte + unimed;
  
  const salario = salarioBruto - outrosDescontos - valorINSS - valorIR;
  return {outrosDescontos, salario};
}

module.exports = calcularSalario;