var express = require('express');
var app = express();


//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!");
});


// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// "/dog" => "Goodbye!"
app.get("/dog", function(req, res) {
    res.send("MEOW");
});

//routes and variables
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    res.send("Welcome to the comments page!");
});

//for any other page that we haven't explicitly mentioned 
app.get("*", function(req, res) {
    res.send("You are a star!");
});
