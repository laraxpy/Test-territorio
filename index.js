const express = require('express');
const https = require('https');
const fs = require('fs');
const router = require('./router/index')
const app = express();
const port = process.env.PORT || 3000;
const {engine} = require('express-handlebars');
const path = require('path');
https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/territoriofernando.ddns.net/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/territoriofernando.ddns.net/fullchain.pem')
}, app).listen(port, ()=> {})

//Habilitamos handlebars como view
app.engine('handlebars', engine({defaultLayout: 'layout'}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router());
