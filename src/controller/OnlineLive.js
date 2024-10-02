

const express = require('express');
const Online = require('../model/OnlineLive');
const router = express.Router();









const create= async(req,res)=>{
  
    try {
    
      const {name, code} = req.body;
      console.log("fffffffffffffffffff")
      console.log(name , code)
      const data = await Online.create(req.body);
     // res.status(201).send("create succesfully..");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  
  }






  const getAllOnlineData = async (req, res) => {
    try {
      // Fetch all documents from the 'Online' collection
      const data = await Online.find();
  
      console.log('ttttttttttt')
      console.log(data)

      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).send('No data found.');
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
  


  const deleteByCode = async (req, res) => {
    try {
      const { code } = req.body;

      console.log(code)
  
      // Assuming 'Online' is your Mongoose model and you're deleting by 'code'
      const result = await Online.findOneAndDelete({ code: code });
  
      if (result) {
        // res.status(200).send(`Code ${code} deleted successfully.`);
        console.log("delete successfully..")
      } else {
        // res.status(404).send(`Code ${code} not found.`);
        console.log("Oline not exit..")
      }

   


    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  






  module.exports = {create , getAllOnlineData , deleteByCode};








//   {
//     name: 'Rahul',
//     code: '98',
//     _id: new ObjectId('66fd14f3d6542f8e12334afb'),
//     __v: 0
//   }