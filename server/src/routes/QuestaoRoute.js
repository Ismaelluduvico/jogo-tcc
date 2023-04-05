//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/QuestaoController');

//Rota de adicionar um aluno
router.post('/', controller.postQuestao);

//Rota de mostrar todos os alunos 
router.get('/', controller.getQuestoes);

//Rota de atualizar um aluno
router.put('/:id', controller.putQuestao);

//Rota de deletar um aluno
router.delete('/:id', controller.deleteQuestao);

module.exports = router;