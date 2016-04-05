var express = require("express");
// var path = require("path");
var app = express();

// use this if the file IS NOT in the root directory
// app.use(express.static(path.join(__dirname+"/views")));

// use this if the file IS in the root directory
app.use(express.static("./"));

app.get("/",function(req,res){
	res.render("index");
});

app.listen(8000,function(){
	console.log("listening on port 8000");
});

