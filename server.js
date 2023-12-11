const express = require('express');
const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
    res.json({
        mensagem: 'Esta pronta sua solicitacao',
        listaUsers: ["Filipe", "Joao", "Sofie"]
    })
})

app.listen(4000, () => {
    console.log('Servidor iniciado na porta 4000')
})