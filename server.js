require('dotenv').config({ quiet: true });

//importando os packages instalados
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const homeRouter = require('./routes/homeRoute');
const pedidoRouter = require('./routes/pedidoRoute');

const app = express();

//configurando a nossa pasta public como o nosso repositorio de arquivos estaticos (css, js, imagens)
app.use(express.static(__dirname + "/public"))
//configuracao das nossas views para utilizar a ferramenta EJS
app.set('view engine', 'ejs');

//Configuracao de onde ficarao nossas views
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuracao da nossa pagina de layout
app.set('layout', './layout');
app.use(expressLayouts);

app.use('/', homeRouter)
app.use('/pedido', pedidoRouter);

//ponto de inicio do nosso servidor web
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, function() {
    console.log(`Servidor web iniciado em http://localhost:${PORT}`);
});
