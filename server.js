const express = require('express');
const cors = require('cors');       
const app = express();             

app.use(cors());
app.use(express.json());


app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    console.log("Tentativa com:", usuario, senha);

    if (usuario === "admin" && senha === "1234") {
        return res.json({ msg: "Logado com sucesso!" });
    } 
    res.status(401).json({ msg: "Dados incorretos!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});