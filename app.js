var express = require('express');
var app = express();
app.use(express.static(__dirname+'/view'));
app.get("/",function (req, res) {
	// body...
	res.sendFile('index.html');
	
})

app.get("/description",function (req, res) {
	// body...
	res.sendFile(__dirname + "/view/" +'description.html');
	
})
app.listen(8080);