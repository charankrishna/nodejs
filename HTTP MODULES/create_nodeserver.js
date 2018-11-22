var http = require("http");
var dt	=	require('./myfirstmodule.js');


//create a server object
http.createServer(function (req,res){
	res.writeHead(200,	{'Content-Type':'text/html'});
	res.write("The date and time are currently: "+ dt.myDateTime());
	res.end('Hello World!'); //write a response to the client
}).listen(3000); //server object listens on port 3000