const expressEjsLayout = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const { error } = require('console')
const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressEjsLayout)
app.set('layout', 'layout/main')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('home', {title: 'Casa da Cultura'})
})

app.listen(8120, function (error) {
    if (error) {
        console.log('Erro ao abrir servidor' +error)
    }
    else {
        console.log('Aplicação bem sucedida, porta 8120.')
    }
})