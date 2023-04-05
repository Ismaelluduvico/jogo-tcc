//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/CapituloController');

//Rota de adicionar um aluno
router.post('/', controller.postCapitulo);

//Rota de mostrar todos os alunos 
router.get('/', controller.getCapitulo);

//Rota de mostra um aluno
router.get('/:id', controller.getOneCapitulo);

//Rota de atualizar um aluno
router.put('/:id', controller.putCapitulo);

//Rota de deletar um aluno
router.delete('/:id', controller.deleteCapitulo);

module.exports = router;