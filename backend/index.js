const express = require("express");
const socket = require("socket.io");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.static("../public"));

let server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

let io = socket(server);
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  // once the user is connected, we can listen to the events emitted by the client
  socket.on("beginPathDraw", (data) => {
    // data from the client
    console.log("Begin path data: ", data);
    // emit the data to all the clients except the sender
    io.sockets.emit("beginPathDraw", data);
  });

  socket.on("drawStroke", (data) => {
    // data from the client
    console.log("Draw stroke data: ", data);
    // emit the data to all the clients except the sender
    io.sockets.emit("drawStroke", data);
  });

  socket.on("undoRedoCanvas", (data) => {
    console.log("Undo/Redo data: ", data);
    // emit the data to all the clients except the sender
    io.sockets.emit("undoRedoCanvas", data);
  });
});
