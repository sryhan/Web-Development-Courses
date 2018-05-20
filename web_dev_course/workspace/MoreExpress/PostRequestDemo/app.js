var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
var users = ["Bob Belcher", "Homer Simpson", "Ray Gillette", "Phineas"];

app.set("view engine", "ejs");


app.post("/adduser", function(req, res) {
    var thisuser = req.body.newuser;
    users.push(thisuser);
    res.redirect("/friends");
})


app.get("/", function(req, res){
    // res.send("home");
    res.render("home")
});

app.get("/friends", function(req, res){
    res.render("friends", {friendo: users});
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
});