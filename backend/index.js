const express = require ('express');

const app = express();

app.get('/', (req,res) => {
  return res.json( {
    mensage: 'Hello World',
    aluno: 'Ericson'
  })
})

app.listen(3333) //localhost:3333


