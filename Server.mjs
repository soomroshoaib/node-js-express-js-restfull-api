import express, { json } from "express"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
 let users = []


 app.post('/user',(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.send("server is working now")

 })


 app.get('/user',(req, res)=>{
    res.send(users)
 })

 
 app.put('/user',(req, res)=>{
    req.send("user is ofde12345    ")
 })
 
 app.delete('/user',(req, res)=>{
    req.send("usa 12345        ")
 })


 const Port = process.env.PORT || 3000;

 app.listen(Port,()=>{
    console.log(`localhost ${Port}`)
 })