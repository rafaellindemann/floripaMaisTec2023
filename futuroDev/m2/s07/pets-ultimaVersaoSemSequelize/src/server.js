require('dotenv').config();                                 // importa o módulo dotenv e executa o método config() para carregar as variáveis de ambiente
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const PORT_API = process.env.PORT_API// || 3000;

class Server {
    constructor( server = express() ) {
        this.middlewares(server);                               // registra os middlewares no express
        this.database();                                        // inicializa a conexão com o banco de dados
        server.use(routes);                                     // registra as rotas no express     
        this.initializeServer(server);                          // inicializa o servidor express
    }

    async middlewares(app) {
        console.log("Executando middlewares...");
        
        app.use(cors());                                        // habilita o cors
        app.use(express.json());   
        console.log("Middlewares executados com sucesso!");
                                     // habilita o server a receber json
    }

    async database() {
        // inicializa a conexão com o banco de dados
        console.log('Conectando ao banco de dados...');
    }

    async initializeServer(app) {
        app.listen(PORT_API, () => {
            console.log(`Forrest Gump is running on http://localhost:${PORT_API}`);
        });
    }
}

module.exports = { Server };

// const app = express();
// app.use(express.json()); // habilita o server a receber json



// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

