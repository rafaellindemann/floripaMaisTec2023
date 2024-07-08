function calcularIR(salarioBruto) {
    let percentualIR;
    
    switch (true) {
        case salarioBruto < 2112.00:
            percentualIR = 0;
            break;
        case salarioBruto <= 2826.65:
            percentualIR = 0.075;
            break;
        case salarioBruto <= 3751.05:
            percentualIR = 0.15;
            break;
        case salarioBruto <= 4664.68:
            percentualIR = 0.225;
            break;
        default:
            percentualIR = 0.275;
            break;
    }

    const valorIR = salarioBruto * percentualIR;
    return valorIR;
}

module.exports = calcularIR;