const petsRoutes = require('./routes/pets.routes');
const vacinasRoutes = require('./routes/vacinas.routes');
const servicosRoutes = require('./routes/servicos.routes');

app.use('/pets', petsRoutes);               // manda o app usar o petRoutes que foi importado para gerenciar as rotas e define o prefixo /pets para as rotas do petRoutes
app.use('/vacinas', vacinasRoutes);         // manda o app usar o vacinaRoutes que foi importado para gerenciar as rotas
app.use('/servicos', servicosRoutes);       // manda o app usar o servicosRoutes que foi importado para gerenciar as rotas
