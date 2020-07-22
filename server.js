const express = require("express");
const mysql = require("mysql");
const escapeHtml = require("escape-html");
const connection = require("./config/connection")
const express = require("express");
const view = require("./views");
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", function (req, res) {
    res.send(view.app(
        `
      <h1>Index</h1>
      <a href="/tacos">Take me to the Taco Heaven!</a>
    `
    ));
})

app.post("/", function (req, res) {
    const taco = req.body.taco

    connection.query("INSERT INTO tacos (taco) VALUES (?)",)
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
