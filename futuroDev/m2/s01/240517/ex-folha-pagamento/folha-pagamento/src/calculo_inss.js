function calcularINSS(salarioBruto) {
  const tetoINSS = 908.85;
  let percentualINSS;
  
  switch (true) {
      case salarioBruto <= 1412.00:
          percentualINSS = 0.075;
          break;
      case salarioBruto <= 2666.68:
          percentualINSS = 0.09;
          break;
      case salarioBruto <= 4003.03:
          percentualINSS = 0.12;
          break;
      case salarioBruto <= 7786.02:
          percentualINSS = 0.14;
          break;
      default:
          percentualINSS = 0;
          break;
  }

  const valorINSS = Math.min((salarioBruto * percentualINSS), tetoINSS);
  return valorINSS;
}

module.exports = calcularINSS;