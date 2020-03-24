const jsonServer = require('json-server')
const http = require("http");
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 4000;

server.use(middlewares)
server.use(router)

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.listen(port, () => {
  console.log('JSON Server is running')
})


setInterval(function () {
  http.get('https://api-flutter-audio-player.herokuapp.com');
}, 300000);