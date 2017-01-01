var express = require('express');
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

//app.use(express.static(path.join(__dirname, '/../client/')))
app.use (bodyParser.json());

// app.get('/app-bundle.js',
// 	browserify('./components/index.jsx', {
// 		transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
// 	})
// )

var server = app.listen(3000, function(){
	console.log("The Polling server is running!! Port 3000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log('Connected: %s', socket.id);
})