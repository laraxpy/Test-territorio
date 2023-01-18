const express = require('express');
const router = require('./router/index')
const app = express();
const port = process.env.PORT || 3000;
const {engine} = require('express-handlebars');
const path = require('path');
//Habilitamos handlebars como view
app.engine('handlebars', engine({defaultLayout: 'layout'}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router());

app.listen(port, ()=> {
    console.log('Servidor escuchando en puerto 3000')
})