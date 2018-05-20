var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    // res.send("Welcome to the home page");
    res.render("home");
});

app.get("/hellothere/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("welcome", {thingVar: thing.toUpperCase()})
    // res.send("Hello there, " + thing.toUpperCase())
});

app.get("/postings", function(req, res) {
    // res.send("it's working")
    var posts = [
        {title: "Post 1", author: "Marge"},
        {title: "Post 2", author: "Lisa"},
        {title: "Post 3", author: "Bart"}
    ];
    res.render("posts", {postings: posts})
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...");
});