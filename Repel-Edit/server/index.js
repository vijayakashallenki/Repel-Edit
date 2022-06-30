const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
app.get('/',(req,res)=>{
	console.log("hy there!!");
});
io.on("connection",(socket)=>{
	console.log("socket is running");
	socket.on("editor-data",(data)=>{
		socket.broadcast.emit("editor-data",data)
	});
});
server.listen(4132,()=>{
	console.log("listening on port 4132")
});