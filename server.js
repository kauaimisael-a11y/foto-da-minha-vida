// Instale o pacote 'dotenv' e 'cors' se ainda não o fez
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Em um sistema real, essas informações viriam de um Banco de Dados
const USUARIO_MESTRE = {
    login: "admin",
    senha: "uma_senha_muito_forte_aqui" 
};

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === USUARIO_MESTRE.login && senha === USUARIO_MESTRE.senha) {
        // Em vez de "OK", enviamos um ID aleatório para dificultar fraudes
        const tokenFalso = Math.random().toString(36).substring(2);
        return res.status(200).json({ auth: true, token: tokenFalso });
    }

    res.status(401).json({ auth: false, msg: "Acesso negado!" });
});
