/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

const express=require("express")
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT|| 4000;
const mongoose=require("mongoose")
const Content=require("./schema")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://react:react@cluster0.vszgook.mongodb.net/Firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongodb connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
app.get("/",(req,res)=>{
    res.send("API is working")
})
app.get("/users",async (req,res)=>{
    await Content.find()
        .then(found=>res.json(found))
})
app.post("/store",(req,res)=>{
    const username="Test@gmail.com",password="Testing"
    const newData=new Content({
        username,password
    })
    newData.save()
})

app.listen(port,()=>console.log("server started successfully",port))
