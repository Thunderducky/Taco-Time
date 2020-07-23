const express = require("express");
const mysql = require("mysql");
// const escapeHtml = require("escape-html");
const connection = require("./config/connection")
const view = require("./views");
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows access to public folder
app.use(express.static("public"));

//routes
app.get("/", function (req, res) {
    res.send(view.app(
        `
		<li class="list-group-item">${taco.taco_name}</li>
		<center><button data-devour="${taco.id}" class="btn devour-it" type="submit">Down the Hatch!</button></center>
    `
    ));
})

// app.post("/", function (req, res) {
//     const taco = req.body.taco

//     connection.query("INSERT INTO tacos (taco) VALUES (?)",)
// })

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
