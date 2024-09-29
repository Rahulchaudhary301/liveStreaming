const express = require('express');
const router = express.Router();




const sendMessage= async(req,res)=>{
      
  const { roomId, message } = req.body;
  io.to(roomId).emit('message', message);
  res.send('Message sent');

}




module.exports = {sendMessage}
