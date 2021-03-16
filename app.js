const express = require("express");
var app = express();

app.set('view engine', 'ejs'); //Use EJS rendering engine
app.use(express.static('public'));

//Index page
app.get("/", function(req, res) {
    res.render("pages/index");
});

//Start the server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});