var express = require('express');
var app = express();

//listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});

// Visiting "/" shoudld print "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!")
});

// Visiting /speak/pig should print "the pig says oink"
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        dog: "woof woof",
        cow: "moo",
        pig: "oink",
        cat: "meow",
        bird: "chirp chirp"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal]
    res.send("The " + animal + " says " + sound);
});

//Visiting /repeat/hello/5 should print "hello hello hello hello hello"
app.get("/repeat/:word/:repeat_num", function(req, res) {
    var word = req.params.word;
    var repeat_num = Number(req.params.repeat_num);
    var repeats = "";
    for(var i = 0; i < repeat_num; i++) {
        repeats += word + " ";
    };
    res.send(repeats)
});


// if a user visiting any other route, print: 
// Sorry, page not found...What are you doing with your life? 
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})

    // var sound = ""
    // if(animal === "pig") {
    //     sound = "oink";
    // } else if (animal === "cow") {
    //     sound === "moo";
    // } else if (animal === "dog") {
    //     sound === "woof woof";
    // } else if (animal === "cat") {
    //     sound === "meow";
    // } else if (animal === "bird") {
    //     sound === "chirp chirp";
    // };
    
// Visiting /repeat/hello/5 should print "hello hello hello hello hello"
// app.get("/repat/hello/5", function(req, res) {
//     res.send("hello hello hello hello hello")
// });

// // Visiting /repeat/blah/2 should print "blah blah"
// app.get("/repeat/blah/2", function(req, res) {
//     res.send("blah blah")
// });

// Visiting /speak/cow should print "the cow says moo"
// app.get("/speak/cow", function(req, res) {
//     res.send("The cow says moo")
// });

// // Visiting /speak/dog should print "the dog says woof woof"
// app.get("/speak/dog", function(req, res) {
//     res.send("The dog says woof woof")
// });

// Visiting /repeat/hello/3 should print "hello hello hello"
// app.get("/repeat/hello/3", function(req, res) {
//     res.send("hello hello hello")
// });