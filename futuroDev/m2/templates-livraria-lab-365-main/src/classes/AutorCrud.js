const { log } = require('console');
const fs = require('fs');
class AutorCrud {
    
    // #filePath = './src/files/autores.json';
    constructor() {
        this.filePath = './src/files/autores.json';
    }

    criar(autor){
        // console.log('bj autor: ',autor);
        // console.log('nome do autor: ',autor.getNome);
        const autores = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        // jeito do professor:
        // autores.push({
        //     codigo: autor.getCodigo,
        //     nome: autor.getNome,
        //     generoLiterario: autor.getGeneroLiterario
        // })

        // jeito que não funciona porque os atributos são privados:
        // autores.push(autor)

        // jeito que funciona bonito:
        autores.push(autor.toJSON())


        fs.writeFileSync(
            this.filePath, 
            JSON.stringify(autores, null, 2),
            'utf-8'
            // JSON.stringify
            )
    }

}

module.exports = AutorCrud;