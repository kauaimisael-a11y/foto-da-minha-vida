const express = require('express');
const cors = require('cors');       
const app = express();              

app.use(cors());
app.use(express.json());

// ROTA PRINCIPAL (Evita o erro "Cannot GET /" quando você abre o link)
app.get('/', (req, res) => {
    res.send("Servidor da Galeria está ONLINE! 🚀");
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    console.log("Tentativa com:", usuario, senha);

    if (usuario === "admin" && senha === "1234") {
        // Importante: status 200 para sucesso
        return res.status(200).json({ msg: "Logado com sucesso!" });
    } 
    
    // Status 401 para erro de credenciais
    res.status(401).json({ msg: "Usuário ou senha incorretos!" });
});

// AJUSTE DA PORTA: Isso é obrigatório para o Render/Railway funcionar
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
