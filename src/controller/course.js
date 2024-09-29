const express = require('express');
const Course = require('../model/Course');
//const protect = require('../middleware/auth');
const router = express.Router();





const create= async(req,res)=>{
  
  try {
    // if (req.user.role !== 'tutor') {
    //   return res.status(403).json({ message: 'Only tutors can create courses' });
    // }
    const { title, description, price, schedule } = req.body;
   // console.log(title, description, price, schedule)
    const course = await Course.create(req.body);
    res.status(201).send("create succesfully..");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}




// router.post('/create', protect, async (req, res) => {
//   if (req.user.role !== 'tutor') {
//     return res.status(403).json({ message: 'Only tutors can create courses' });
//   }
//   const { title, description, price, schedule } = req.body;
//   try {
//     const course = await Course.create({
//       title, description, price, schedule, tutor: req.user._id
//     });
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });




// router.get('/', async (req, res) => {
//   const courses = await Course.find().populate('tutor', 'name email');
//   res.json(courses);
// });

module.exports = {create};
