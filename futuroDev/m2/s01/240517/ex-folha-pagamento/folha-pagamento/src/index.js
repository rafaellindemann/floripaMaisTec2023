// const readline = require('readline')
// const PDFDocument = require('pdfkit')
// const fs = require('fs')

// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream('folha_pagamento.pdf'));

// console.log('Hello World!')

const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularIR = require('./calculo_imposto_renda.js');
const calcularSalario = require('./calculo_salario_liquido.js');
const obterData = require('./obter_data.js');
const gerarPDF = require('./gerar_pdf.js');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Para iniciar, digite seu nome: ', (nome) => {
    input.question('Digite seu CPF: ', (cpf) => {
        input.question('Digite o mês de pagamento (de 1 a 12): ', (mesPgto) => {
            input.question('Insira seu salário bruto: ', (salarioBruto) => {
                const valorINSS = calcularINSS(parseFloat(salarioBruto));
                const valorIR = calcularIR(parseFloat(salarioBruto));
                const valorReceber = calcularSalario(parseFloat(salarioBruto), valorINSS, valorIR);
                const data = obterData(parseFloat());

                console.log("--- Folha de Pagamento ---");
                console.log("Data da Geração:", data.dataFormatada);
                console.log(`Mês do Pagamento: ${mesPgto}/${data.ano}`);
                console.log("Nome:", nome);
                console.log("CPF:", cpf);
                console.log("--- ---");
                console.log("Salário Bruto: R$", salarioBruto);
                console.log("--- ---");
                if (valorINSS == 0) {
                    console.log("INSS: O salário bruto excede o limite da tabela do INSS de R$ 7.786,02.\nConsulte site para ver o desconto dessa faixa salarial.");
                } else {
                    console.log("INSS: R$", valorINSS.toFixed(2));
                }

                if (valorIR == 0) {
                    console.log("Imposto de Renda: R$ 0");
                } else {
                    console.log("Imposto de Renda: R$", valorIR.toFixed(2));
                }
                console.log("Outros descontos: R$", valorReceber.outrosDescontos.toFixed(2));
                console.log("--- ---");
                console.log("Salário Líquido: R$", valorReceber.salario.toFixed(2));

                input.question('Deseja gerar um PDF desta consulta? (sim/não)', async (resposta) => {
                    if(resposta.toLowerCase() == "sim") {
                        await gerarPDF(nome, cpf, salarioBruto, valorINSS, valorIR, valorReceber.outrosDescontos, valorReceber.salario, data.dataFormatada, data.ano, mesPgto);
                        console.log("PDF gerado com sucesso!");
                    } else {
                        console.log("Ok! Até a próxima consulta ;) ");
                    }
                    input.close();
                });
            });
        });
    });
});