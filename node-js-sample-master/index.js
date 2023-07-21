// Paul did the changes 
//changed in codespace

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.send('Hello World! Pull request demo')
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at local:" + app.get('port'))
})
