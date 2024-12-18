COMO EXECUTAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

CHEGAR E FAZER ESSECriar a base de dados "celke" no banco de dados MySQL, necessário ter o MySQL instalado na máquina e rodando.
### CREATE DATABASE celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Alterar no projeto as credenciais do banco de dados no arquivo ".env" 

Executar as migrations
### npx sequelize-cli db:migrate

Executar o projeto
### node app.js


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Criar a base de dados
### CREATE DATABASE celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Executar o projeto
### node app.js

Manipular variáveis de ambiente
### npm install --save dotenv

Criar a migration
### npx sequelize-cli migration:generate --name create-users

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados, versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration

2 ESSECriar a Models users
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,image:string

o meu querido axios vai permitir que eu faça uma requisição a API
### npm install axios

permite req externas
npm i cors



const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

    var dados= req.body;
    console.log(dados)

    await db.Users.create(dados).then((dadosUsuario)=>{
        return res.json({
            mensagem: "usuario cadastrado com sucesso",
            dadosUsuario
        });
    }).catch(()=>{
        return res.json({
            mensagem: "Erro: Usuário NÃO cadastrado com sucesso!",
            dadosUsuario
        });
    })
});

module.exports = router;

const db= require('./../db/models/index.cjs')

// salvar 









'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};