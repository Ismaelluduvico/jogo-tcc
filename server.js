const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Aeeeeeee.');
  });
app.get('/aluno', (req, res) => {
    res.send('Aooooo.');
  });

  app.listen(3333, () => console.log('Example app is listening on port 3000.'));
