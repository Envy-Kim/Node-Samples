var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Cross Origin Resource Sharing
app.use(cors());

app.use(bodyParser.json());

app.get('/greeting', function(req, res) {
	var obj = {
		hello : 'Hello Angular'
	}
	res.json(obj);
});

app.post('/greeting', function(req, res) {
	if ( req.body.hello && req.body.hello.length > 3) {
		res.json({message:'success'});
	}
	else {
		res.sendStatus(400);
	}
});

app.use(require('./movieRouter'));

app.listen(3000);