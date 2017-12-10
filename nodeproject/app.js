var express = require('express');
var app = express();
app.use(express.static(__dirname + '/view'));
app.get("/",function (req, res) {
	// body...
	res.sendFile(index.html);
	res.end();
})
app.listen(8080);