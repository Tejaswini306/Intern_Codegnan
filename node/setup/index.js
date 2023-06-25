const express=require("express")
const app=express()
const employees=require("./employeelist")
const cors=require("cors")
const bodyParser=require("body-parser")
console.log(employees)
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/bring",(req,res)=>{
    res.send("hai good morning everyone")
})
app.get("/emp",(req,res)=>{
    return res.json(employees)
})
app.post("/store-employee",(req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
})

app.listen(5000,()=>console.log("server started successfully"))