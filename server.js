const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Utilize Variáveis de Ambiente no Render para esta senha!
const SENHA_MESTRE = process.env.MINHA_SENHA_SECRETA || "1234"; 

// A lista de fotos agora fica PROTEGIDA dentro do servidor
const galeriaPrivada = [
    { titulo: "Montanhas", desc: "Verão 2024", cor: "#4a306d", url: "https://picsum.photos/id/1015/600/600" },
    { titulo: "Cidade Luz", desc: "Passeio Noturno", cor: "#1e3a5f", url: "https://picsum.photos/id/1019/600/600" },
    { titulo: "Acampamento", desc: "Noite sob as estrelas", cor: "#5f1e1e", url: "https://picsum.photos/id/1025/600/600" }
];

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === "admin" && senha === SENHA_MESTRE) {
        // Retornamos os dados da galeria apenas se a senha estiver correta
        return res.status(200).json({ 
            auth: true, 
            token: "chave-segura-" + Math.random(), 
            fotos: galeriaPrivada 
        });
    }

    res.status(401).json({ auth: false, msg: "Acesso negado!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
