function calcularJurosSimples(capital, taxa, tempo) {
    const juros = (capital * taxa * tempo) / 100
    return juros
}

module.exports = {
    calcularJurosSimples
}