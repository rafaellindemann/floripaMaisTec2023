const fs = require('fs');
const pdf = require('pdfkit');

function gerarPDF(nome, cpf, salarioBruto, valorINSS, valorIR, outrosDescontos, salario, dataFormatada, mesPgto, ano) {
    const doc = new pdf();
    const fileName = "folha_pagamento.pdf";
    const stream = fs.createWriteStream(fileName);
    doc.pipe(stream);
    doc.fontSize(12);

    doc.text('--- Folha de Pagamento ---');
    doc.text(`Data da Geração: ${dataFormatada}`);
    doc.text(`Mês do Pagamento: ${mesPgto}/${ano}`);
    doc.text(`Nome: ${nome}`);
    doc.text(`CPF: ${cpf}`);
    doc.text('--- ---');
    doc.text(`Salário Bruto: R$ ${salarioBruto}`);
    doc.text('--- ---');
    if (valorINSS == 0) {
        doc.text("INSS: O salário bruto excede o limite da tabela do INSS de R$ 7.786,02. Consulte site para ver o desconto dessa faixa salarial.");
    } else {
        doc.text(`INSS: R$ ${valorINSS.toFixed(2)}`);
    }
    if (valorIR == 0) {
        doc.text("Imposto de Renda: R$ 0");
    } else {
        doc.text(`Imposto de Renda: R$ ${valorIR.toFixed(2)}`);
    }
    doc.text(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);
    doc.text('--- ---');
    doc.text(`Salário Líquido: R$ ${salario.toFixed(2)}`);
    doc.end();
}

module.exports = gerarPDF;