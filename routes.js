const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.render('home/index')
})

routes.get('/location', (request, response) => {
  return response.render('location')
})

routes.get('/encomendas', (request, response) => {
  return response.render('encomendas')
})

routes.get('/brindes', (request, response) => {
  return response.render('brindes')
})

routes.get('/login', (request, response) => {
  return response.render('login')
})

routes.get('/createAccount', (request, response) => {
  return response.render('createAccount')
})

routes.get('/cart', (request, response) => {
  return response.render('home/cart')
})

routes.get('/categorias', (request, response) => {
  return response.render('home/categorias')
})

routes.get('/about', (request, response) => {
  return response.render('about')
})

routes.get('/terms-conditions', (request, response) => {
  return response.render('terms')
})

routes.get('/polityc', (request, response) => {
  return response.render('polityc')
})

// acessos as categorias
routes.get('/casa', (request, response) => {
  return response.render('home/casa')
})

routes.get('/cozinha', (request, response) => {
  return response.render('home/cozinha')
})

routes.get('/gym', (request, response) => {
  return response.render('home/gym')
})

routes.get('/pcs', (request, response) => {
  return response.render('home/pcs')
})

routes.get('/sala', (request, response) => {
  return response.render('home/sala')
})

routes.get('/smartphones', (request, response) => {
  return response.render('home/smartphones')
})

routes.get('/smartTv', (request, response) => {
  return response.render('home/smartTv')
})

routes.get('/smartwatchs', (request, response) => {
  return response.render('home/smartwatchs')
})

module.exports = routes
