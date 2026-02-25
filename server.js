const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Senha mestra (Configure no painel do Render como MINHA_SENHA_SECRETA)
const SENHA_MESTRE = process.env.MINHA_SENHA_SECRETA || "1234";

// Dados protegidos
const dadosGaleria = {
    pastas: ["Favoritas", "Viagens", "Trabalho"],
    fotos: [
        { titulo: "Montanhas", desc: "Verão 2024", cor: "#4a306d", url: "https://picsum.photos/id/1015/600/600" },
        { titulo: "Cidade Luz", desc: "Passeio Noturno", cor: "#1e3a5f", url: "https://picsum.photos/id/1019/600/600" },
        { titulo: "Acampamento", desc: "Noite sob as estrelas", cor: "#5f1e1e", url: "https://picsum.photos/id/1025/600/600" }
    ]
};

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === "gissele" && senha === 1234) {
        return res.status(200).json({ 
            auth: true, 
            token: "tk_" + Math.random().toString(36).substr(2),
            dados: dadosGaleria 
        });
    }
    res.status(401).json({ auth: false, msg: "Credenciais inválidas!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor seguro na porta ${PORT}`));

