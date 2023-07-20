const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

const server = http.createServer(app);

// Socket.io server instance.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

/**
 * Object to keep track of the number of clients in each room.
 * @type {Object.<string, number>}
 */
var numClients = {};

/**
 * Event listener for new socket connections.
 */
io.on("connection", (socket) => {
  console.log(`User Connect ${socket.id}`);

  /**
   * Event listener for joining a room.
   * @param {string} id - The room ID.
   * @param {function} cd - The callback function.
   */
  socket.on("join_room", (id, cd) => {
    if (numClients[id] == undefined) {
      numClients[id] = 1;
      socket.join(id);
      cd(numClients[id]);
    } else if (numClients[id] <= 1) {
      numClients[id] = numClients[id] + 1;
      socket.join(id);
      cd(numClients[id]);
    } else {
      socket.emit("room_join", {
        error: "Room is full please choose another room to play!",
      });
    }
  });

  /**
   * Event listener for sending a message.
   * @param {Object} data - The message data.
   */
  socket.on("send_message", (data) => {
    socket.to(data.id).emit("receive_message", data);
  });

  /**
   * Event listener for socket disconnection.
   * @param {string} reason - The reason for disconnection.
   */
  socket.on("disconnecting", (reason) => {
    console.log("user has left", socket.id);
    for (const room of socket.rooms) {
      if (room !== socket.id) {
        numClients[room] = numClients[room] - 1;
        socket.to(room).emit("user has left", socket.id);
      }
    }
  });
});

server.listen(5000, () => {
  console.log("SERVER IS RUNNING");
});
