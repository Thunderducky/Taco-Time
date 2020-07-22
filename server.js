const mysql = require("mysql");
const connection = require("./config/connection")
const express = require("express");
const view = require("./views");


const app = express();
const PORT = process.env.PORT || 8080;

// Data
const icecreams = [
];

//routes
app.get("/", function (req, res) {
    res.send(view.app(
        `
      <h1>Index</h1>
      <a href="/tacos">Take me to the Taco Heaven!</a>
    `
    ));
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
