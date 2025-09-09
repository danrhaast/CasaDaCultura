const expressEjsLayout = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const error = require('console')
const express = require('express')
const path = require('path')
const app = express()
const alunoRoutes = require('./D.routes/alunoRoutes')
const profeRoutes = require('./D.routes/profeRoutes')
const funcRoutes = require('./D.routes/funcRoutes')
const aulaRoutes = require('./D.routes/aulaRoutes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(expressEjsLayout)
app.set('layout', 'Layout/main')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('home', {title: 'Casa da Cultura'})
})

app.get('/login', function(req, res) {
    res.render('login', {title: 'Casa da Cultura'})
})

app.get('/form', function(req, res) {
    res.render('form', {title: 'Casa da Cultura'})
})

app.get('/formProfe', function(req, res){
    res.render('formProfe', {title: 'Casa da Cultura'})
})

app.get('/formFunc', function(req, res){
    res.render('formFunc', {title: 'Casa da Cultura'})
})

app.use('/', alunoRoutes)
app.use('/', profeRoutes)
app.use('/', funcRoutes)
app.use('/', aulaRoutes)


app.listen(8120, function (error) {
    if (error) {
        console.log('Erro ao abrir servidor' +error)
    }
    else {
        console.log('Aplicação bem sucedida, porta 8120.')
    }
})