const express =require('express')
const Router=express.Router()

const LoginController=require('../controller/auth.js')
const LiveController=require('../controller/live.js')
const PaymentController=require('../controller/payment.js')
const SendMessageController=require('../controller/chat.js')
const CreateCourseController=require('../controller/course.js')

const OnlineLiveController=require('../controller/OnlineLive.js')

Router.get('/bc',(req,res)=>{
    res.send({status:true, msg: "Successfully"})
})

Router.post('/register', LoginController.register)
Router.post('/login', LoginController.login)

Router.get('/token', LiveController.token)

Router.get('/pay', PaymentController.pay)

Router.post('/sendMessage', SendMessageController.sendMessage)

Router.post('/create', CreateCourseController.create)


Router.get('/getAllOnline', OnlineLiveController.getAllOnlineData)
Router.post('/createOnline',OnlineLiveController.create )
Router.post('/deleteOnline',OnlineLiveController.deleteByCode )


module.exports = Router