
var express = require('express'),
app = express();
path = require("path");
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
config = require('./api/models/model'),
bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/db',{useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

var routes = require('./api/routes/routes'); //importing route
routes(app);


app.listen(port);

console.log('RESTful API server started on: ' + port);


/*
  Start Express server
*/
app.use(express.static('src'))

app.listen(1234);

console.log("ExpressJS server running on port 1234");
