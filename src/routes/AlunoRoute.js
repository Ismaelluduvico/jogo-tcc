//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AlunoController');

//Rota de adicionar um aluno
router.post('/', controller.post);

//Rota de mostrar todos os alunos 
router.get('/', controller.get);

//Rota de mostra um aluno
router.get('/:id', controller.getOne);

//Rota de atualizar um aluno
router.put('/:id', controller.put);

//Rota de deletar um aluno
router.delete('/:id', controller.delete);

module.exports = router;