const express = require("express");
const app = express();

let broadcaster1;
let broadcaster2;
let broadcaster3;
let broadcaster4;
let broadcaster5;
let broadcaster6;
let broadcaster7;
let broadcaster8;
let broadcaster9;
let broadcaster10;



const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {




  //connection1
  socket.on("broadcaster1", () => {
    broadcaster1 = socket.id;
    socket.broadcast.emit("broadcaster1");
  });
  socket.on("watcher1", () => {
    socket.to(broadcaster1).emit("watcher1", socket.id);
  });
  socket.on("offer1", (id, message) => {
    socket.to(id).emit("offer1", socket.id, message);
  });
  socket.on("answer1", (id, message) => {
    socket.to(id).emit("answer1", socket.id, message);
  });
  socket.on("ice-candidate", (id, message) => {
    socket.to(id).emit("ice-candidate", socket.id, message);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster1).emit("disconnectPeer", socket.id);
  });







});
server.listen(process.env.PORT || 5000);
