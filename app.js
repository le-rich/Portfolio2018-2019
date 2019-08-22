const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + 'css'));

const port = 8080;

app.get('/', function (req, res){
	res.sendFile(__dirname + 'index.html');
});

app.get('/projects', function(req, res){
	res.sendFile(__dirname + '/projects-gd.html');
});

app.get('/projects-gd', function(req, res){
	res.sendFile(__dirname + '/projects-gd.html');
});

app.get('/projects-software', function(req, res){
	res.sendFile(__dirname + '/projects-software.html')
});

app.get('/projects-design', function(req, res){
	res.sendFile(__dirname + '/projects-design.html')
});

app.get('/projects-web', function(req, res){
	res.sendFile(__dirname + '/projects-web.html')
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});