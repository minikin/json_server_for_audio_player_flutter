const jsonServer = require('json-server')
const https = require("https");
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const port = process.env.PORT || 4000;

server.db = router.db
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})

setInterval(function () {
  https.get('https://api-flutter-audio-player.herokuapp.com');
}, 300000);