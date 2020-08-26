const express = require("express");
const app = express();
const port = 3000;
app.set('port',(process.env.port||port))
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
  socket.on("candidate1", (id, message) => {
    socket.to(id).emit("candidate1", socket.id, message);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster1).emit("disconnectPeer", socket.id);
  });



//connection2
socket.on("broadcaster2", () => {
  broadcaster2 = socket.id;
  socket.broadcast.emit("broadcaster2");
});
socket.on("watcher2", () => {
  socket.to(broadcaster2).emit("watcher2", socket.id);
});
socket.on("offer2", (id, message) => {
  socket.to(id).emit("offer2", socket.id, message);
});
socket.on("answer2", (id, message) => {
  socket.to(id).emit("answer2", socket.id, message);
});
socket.on("candidate2", (id, message) => {
  socket.to(id).emit("candidate2", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster2).emit("disconnectPeer", socket.id);
});


//connection3
socket.on("broadcaster3", () => {
  broadcaster3 = socket.id;
  socket.broadcast.emit("broadcaster3");
});
socket.on("watcher3", () => {
  socket.to(broadcaster3).emit("watcher3", socket.id);
});
socket.on("offer3", (id, message) => {
  socket.to(id).emit("offer3", socket.id, message);
});
socket.on("answer3", (id, message) => {
  socket.to(id).emit("answer3", socket.id, message);
});
socket.on("candidate3", (id, message) => {
  socket.to(id).emit("candidate3", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster3).emit("disconnectPeer", socket.id);
});



//connection4
socket.on("broadcaster4", () => {
  broadcaster4 = socket.id;
  socket.broadcast.emit("broadcaster4");
});
socket.on("watcher4", () => {
  socket.to(broadcaster4).emit("watcher4", socket.id);
});
socket.on("offer4", (id, message) => {
  socket.to(id).emit("offer4", socket.id, message);
});
socket.on("answer4", (id, message) => {
  socket.to(id).emit("answer4", socket.id, message);
});
socket.on("candidate4", (id, message) => {
  socket.to(id).emit("candidate4", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster4).emit("disconnectPeer", socket.id);
});



//connection5
socket.on("broadcaster5", () => {
  broadcaster5 = socket.id;
  socket.broadcast.emit("broadcaster5");
});
socket.on("watcher5", () => {
  socket.to(broadcaster5).emit("watcher5", socket.id);
});
socket.on("offer5", (id, message) => {
  socket.to(id).emit("offer5", socket.id, message);
});
socket.on("answer5", (id, message) => {
  socket.to(id).emit("answer5", socket.id, message);
});
socket.on("candidate5", (id, message) => {
  socket.to(id).emit("candidate5", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster5).emit("disconnectPeer", socket.id);
});



//connection6
socket.on("broadcaster6", () => {
  broadcaster6 = socket.id;
  socket.broadcast.emit("broadcaster6");
});
socket.on("watcher6", () => {
  socket.to(broadcaster6).emit("watcher6", socket.id);
});
socket.on("offer6", (id, message) => {
  socket.to(id).emit("offer6", socket.id, message);
});
socket.on("answer6", (id, message) => {
  socket.to(id).emit("answer6", socket.id, message);
});
socket.on("candidate6", (id, message) => {
  socket.to(id).emit("candidate6", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster6).emit("disconnectPeer", socket.id);
});


//connection7
socket.on("broadcaster7", () => {
  broadcaster7 = socket.id;
  socket.broadcast.emit("broadcaster7");
});
socket.on("watcher7", () => {
  socket.to(broadcaster7).emit("watcher7", socket.id);
});
socket.on("offer7", (id, message) => {
  socket.to(id).emit("offer7", socket.id, message);
});
socket.on("answer7", (id, message) => {
  socket.to(id).emit("answer7", socket.id, message);
});
socket.on("candidate2", (id, message) => {
  socket.to(id).emit("candidate2", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster7).emit("disconnectPeer", socket.id);
});


//connection8
socket.on("broadcaster8", () => {
  broadcaster8 = socket.id;
  socket.broadcast.emit("broadcaster8");
});
socket.on("watcher8", () => {
  socket.to(broadcaster8).emit("watcher8", socket.id);
});
socket.on("offer8", (id, message) => {
  socket.to(id).emit("offer8", socket.id, message);
});
socket.on("answer8", (id, message) => {
  socket.to(id).emit("answer8", socket.id, message);
});
socket.on("candidate8", (id, message) => {
  socket.to(id).emit("candidate8", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster8).emit("disconnectPeer", socket.id);
});


//connection9
socket.on("broadcaster9", () => {
  broadcaster9 = socket.id;
  socket.broadcast.emit("broadcaster9");
});
socket.on("watcher9", () => {
  socket.to(broadcaster9).emit("watcher9", socket.id);
});
socket.on("offer9", (id, message) => {
  socket.to(id).emit("offer9", socket.id, message);
});
socket.on("answer9", (id, message) => {
  socket.to(id).emit("answer9", socket.id, message);
});
socket.on("candidate9", (id, message) => {
  socket.to(id).emit("candidate9", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster9).emit("disconnectPeer", socket.id);
});


//connection10
socket.on("broadcaster10", () => {
  broadcaster10 = socket.id;
  socket.broadcast.emit("broadcaster10");
});
socket.on("watcher10", () => {
  socket.to(broadcaster10).emit("watcher10", socket.id);
});
socket.on("offer10", (id, message) => {
  socket.to(id).emit("offer10", socket.id, message);
});
socket.on("answer10", (id, message) => {
  socket.to(id).emit("answer10", socket.id, message);
});
socket.on("candidate10", (id, message) => {
  socket.to(id).emit("candidate10", socket.id, message);
});
socket.on("disconnect", () => {
  socket.to(broadcaster10).emit("disconnectPeer", socket.id);
});



});
server.listen(app.get('port'),function(){ console.log(`Server is running on port ${port}`)});
