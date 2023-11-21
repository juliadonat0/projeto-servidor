//importar módulo
const express = require("express");

// criar instância
const app = express();

// definir rota simples
app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu servidor');
});

// porta
const porta = 3000

//iniciando servidor
app.listen(porta, () => {
    console.log (`O servidor rodando em http://localhost:${porta}`);  // não tem espaço entre o localhost e a porta
});