const jsonServer = require('json-server')
const https = require("https");
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const port = process.env.PORT || 4000;

server.db = router.db
server.use(auth)
server.use(router)

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.listen(port, () => {
  console.log('JSON Server is running')
})


// setInterval(function () {
//   https.get('https://api-flutter-audio-player.herokuapp.com');
// }, 300000);


setInterval(function () {
  https.get('http://localhost');
}, 300000);