var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

var path = require('path')

app.use(express.static(path.join(__dirname + '/userInterface/dist/userInterface')))

require('./server/config/routes.js')(app)

app.listen(8000, function(){
	console.log("Listening on port 8000...")
})