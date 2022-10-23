const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const AlunoRoute = require('./routes/AlunoRoute');
const ProfessorRoute = require('./routes/ProfessorRoute');
const CapituloRoute = require('./routes/CapituloRoute');
const QuestaoRoute = require('./routes/QuestaoRoute');
const AlternativaRoute = require('./routes/AlternativaRoute');
const PlacarRoute = require('./routes/PlacarRoute');

app.use(express.json())
app.use(require('body-parser').urlencoded({extended: false}))
app.use('/', index);
//Rota do aluno
app.use('/aluno', AlunoRoute);
//Rota professor
app.use('/professor', ProfessorRoute);
//Rota capitulo
app.use('/capitulo', CapituloRoute);
//Rota questao
app.use('/questao', QuestaoRoute);
//Rota para alternativa
app.use('/alternativa', AlternativaRoute);
//Rota para placar
app.use('/placar', PlacarRoute);

module.exports = app;