const express = require('express');
const https = require('https')
const router = require('./router/index')
const app = express();
const port = process.env.PORT || 443;
const {engine} = require('express-handlebars');
const path = require('path');
https.createServer({
    cert: 'mi_certificado.crt',
    key: 'mi_certificado.key'
}, app).listen(port, ()=> {
    console.log(`Servidor escuchando en puerto ${port}`)
})

//Habilitamos handlebars como view
app.engine('handlebars', engine({defaultLayout: 'layout'}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router());

