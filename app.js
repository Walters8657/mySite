const express = require("express");
var app = express();
var favicon = require('serve-favicon');

app.set('view engine', 'ejs'); //Use EJS rendering engine
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/images/me.ico'));

//Index page
app.get("/", function(req, res) {
    res.render("pages/index");
});

app.get("/resume", function(req, res) {
    res.render("pages/resume");
});

app.get("/miniProjects", function(req, res) {
    res.render("pages/miniProjects");
});



//Start the server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});