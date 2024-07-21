const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const {hashSync} = require('bcryptjs')

const Usuario = connection.define("usuarios", {
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password_hash: {
        type: DataTypes.STRING
    }
})

Usuario.beforeSave((usuario) => {

   usuario.password_hash = hashSync(usuario.password_hash, 10) // 10 é valor padrao
   
   return usuario
})

module.exports = Usuario