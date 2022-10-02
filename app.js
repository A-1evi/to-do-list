//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js")
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
let items = []
app.get("/", function(req, res){
let day=  date.getDate();
 res.render("lists",{todayDay:day, addtask:items});
});
app.post("/",function(req,res){
 const item =  req.body.task
 items.push(item);
res.redirect("/");
});
app.get("/about", function(req,res){
  res.render("about")
});
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
