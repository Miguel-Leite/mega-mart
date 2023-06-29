const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const app = express()

app.use(express.static('public'))
app.use(routes)

app.set('view engine', 'njk')

nunjucks.configure('views', {
  express: app,
  noCache: false,
  autoescape: true
})

app.listen(4001, () => console.log('servidor rodando na porta 4001'))
