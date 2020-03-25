const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const data = require('./db.json')

const port = process.env.PORT || 4000;
const router = jsonServer.router(data)
const server = jsonServer.create()

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(jsonServer.defaults(['./public']))
server.use(router)
server.listen(port)

console.log('Server is running on:', 'http://localhost:' + port);

setInterval(function () {
  https.get('https://api-flutter-audio-player.herokuapp.com');
}, 300000);