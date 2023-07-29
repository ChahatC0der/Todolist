const express = require("express");
// const multer = require("multer")
const app=express();

app.get("/",function(request,response){
    response.sendFile(__dirname+"/web.html");
})

app.get("/cookie.css",function(request,response){
    response.sendFile(__dirname+"/cookie.css");
})

app.use(function (req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use(express.json());


app.post("/todo",function(request,response){
    console.log(request.body);
    response.status(200);
    response.send();
})

app.get("/ToDolist",function(request,response){
    response.sendFile(__dirname+"/ToDolist.html");
})
app.get("/Todolist.css",function(request,response){
    response.sendFile(__dirname+"/ToDolist.css");
})
app.get("/Todolist.js",function(request,response){
    response.sendFile(__dirname+"/ToDolist.js")
})


app.listen(8080,function(){
    console.log("Server is running at port 8080.");
})