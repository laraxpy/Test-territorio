const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

module.exports= ()=>{
    router.get('*', function(req,res){res.redirect('https://test-servidor.ddns.net/' + req.url)});
    router.get('/', homeController.pagInicio)
    router.get('/miterritorio', homeController.miTerritorio)
    router.get('/mapa', homeController.mapa)
    router.get('/login', homeController.login)


    return router;
}