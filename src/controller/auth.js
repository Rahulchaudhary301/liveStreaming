const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const router = express.Router();




const register= async(req,res)=>{
      
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    const token = jwt.sign({ id: user._id }, 'jwt_secret', { expiresIn: '1d' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}




const login= async(req,res)=>{
      
 
  try {

    const { email, password } = req.body;
   // console.log(email , password)
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, 'jwt_secret', { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}







module.exports = {login, register}
