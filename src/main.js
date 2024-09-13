const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); 


app.post('/submit', (req, res) => {
  const data = req.body;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar os dados');
    } else {
      console.log('Dados salvos com sucesso!');
      res.status(200).send('Mensagem enviada com sucesso!');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});