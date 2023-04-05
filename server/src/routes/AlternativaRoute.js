//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AlternativaController');

//Rota de adicionar um aluno
router.post('/', controller.postAlternativa);

//Rota de mostrar todos os alunos 
router.get('/', controller.getAlternativas);

//Rota de atualizar um aluno
router.put('/:id', controller.putAlternativa);

//Rota de deletar um aluno
router.delete('/:id', controller.deleteAlternativa);

module.exports = router;