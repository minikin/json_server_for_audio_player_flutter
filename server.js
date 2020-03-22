const jsonServer = require('json-server')
const http = require("http");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 4000;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})

setInterval(function () {
  http.get('http://minikin-json-server.herokuapp.com');
}, 300000);