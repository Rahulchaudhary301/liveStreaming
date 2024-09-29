const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const router =require('./src/routes/routes')


// App setup
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/tuition-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB is connected");
})
.catch((err) => console.log(err.message));



// Routes
app.use('/', router);


// Create HTTP and Socket.IO server
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});


io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    console.log(`Joined room: ${roomId}`);
  });

  socket.on('sendMessage', ({ roomId, message }) => {
    io.to(roomId).emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});




// Server listening
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});