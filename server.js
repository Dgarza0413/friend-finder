//dependencies

var express = require("express")
var path = require("path")

var PORT = 3000
var app = express();

var friends = require("./app/data/friends")
var htmlRoutes = require("./app/routing/htmlRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/', require('./app/routing/htmlRoutes'))

// belongs in the htmlRoutes.js
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"))
})

app.get("/signin", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/signin.html"))
})

// belongs in the apiRoutes.js
app.get("/api/friends", function (req, res) {
    res.json(friends)
})

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friends.push(newFriend)
    res.json(newFriend)
})


app.listen(PORT, function () {
    console.log("App is listening on http://localhost:" + PORT)
})