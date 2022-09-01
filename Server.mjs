import express, { json } from "express"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
 
 let users = []

 function  randomNumber(){
   return Math.floor(Math.random() * 10000)
 }

 app.post('/user',(req,res)=>{
    console.log(req.body)

    let newuser = {
      id: randomNumber(),
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: req.body.password
    }
    users.push(newuser)
    res.send("user is created  soomro ")

 })

     // single user create 
 app.get('/user/:userId',(req, res)=>{

    let userId = req.params.userId;
    let isFond = false;

    for(let i = 0; i < users.length; i++){
      if(users[i].id == userId){
         res.send(users[i])
         isFond = true;
         break;
      }
    }
    if(!isFond){
      res.send("user is not found ")
    }


 })

 app.get('/users',(req, res)=>{
   res.send(users)
})
 
 app.put('/user/:userId',(req, res)=>{
    req.send("user is modify     ")


    let userId = req.params.userId

    let userIndex = -1 
    for(let i = 0; i < users.length; i++){
      if(users[i].id == userId){
        // res.send(userId[i])
         userIndex = i ; 
         break;
      }
    }
    if(userIndex === -1){
      res.send(' user is not found ')
    }else{
      if(req.body.fullName){
         users[userIndex].fullName = req.body.fullName
      };
      if(req.body.userName){ 
         users[userIndex].userName = req.body.userName
      }
      if(req.body.password){
         users[userIndex].password = req.body.password
      }
      res.send(users[userIndex])
    }
 })
 
 app.delete('/user/:userId',(req, res)=>{
    //req.send("user is deleted         ")

    let userId = req.params.userId
    let userIndex = -1 
    for(let i = 0; i<users.length; i++){
      if(users[i].id === userId){
         res.send(userId[i])
         userIndex = i 
         break;
      }
    }
    if(userIndex === -1){
      res.send("user is not found ")
    }else{
      users.splice(userIndex , 1)
      res.send("user is deleted ")
    }
 })


 app.delete('/user',(req, res)=>{
   users = []
   req.send("usa 12345        ")
})

 const Port = process.env.PORT || 3000;

 app.listen(Port,()=>{
    console.log(` localhost ${Port}`)
 })