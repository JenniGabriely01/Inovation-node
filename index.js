const express = require('express');
const app = express();
const path = require('path');

/* criando rotas */
const router = express.Router();

/* servindo arquivos estáticos */
app.use(express.static(path.join(__dirname, 'pages')));

/* criando função da rota para a página inicial */
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
    console.log("index");
});


/* rota para a página de serviços */
router.get('/servicos', function(req, res){
    console.log("Serviços");
    res.sendFile(path.join(__dirname, 'pages', 'servicos.html'));
});


/* rota para a página de contatos */
router.get('/contatos', function(req, res){
    console.log("Contatos");
    res.sendFile(path.join(__dirname, 'pages', 'contatos.html'));
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando na porta 3000");
});
