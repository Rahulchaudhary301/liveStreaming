const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const router =require('./src/routes/routes')


// App setup
const app = express();
app.use(cors());
app.use(express.json());



const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		//origin: "https://rahulscreenvideo.netlify.app",
    origin: "https://rahulliveclasses.netlify.app",
		//origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

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
// const server = http.createServer(app);
// const io = socketio(server, {
//   cors: {
//     origin: '*',
//   },
// });





io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    console.log(`Joined room: ${roomId}`);
  });


  socket.on('sendMessage', ({ roomId, message }) => {
    io.to(roomId).emit('message', message);
  });


  
  socket.on('newUser',(data)=>{
		
    socket.broadcast.emit('increaseUser',data)
	})


  socket.on('LeaveUser',(data)=>{
		
    socket.broadcast.emit('decreaseUser',data)
	})

  socket.on('EndClass',(data)=>{
		
    socket.broadcast.emit('endpopUpMessage',data)
	})



  


  socket.on('disconnect', () => {
    socket.broadcast.emit('decreaseUserCondition')
    console.log('Client disconnected');
  });
});




// Server listening
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});