const express = require("express");
const mysql = require("mysql");
const view = require("./views");
const escapeHTML = require("escape-html");

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows access to public folder
app.use(express.static("public"));

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "tacosDB"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


//routes
app.get("/", function (req, res) {

    connection.query("SELECT * FROM tacos;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        // Since the "app" piece is already included in the function we call, we don't need to remember to use it here
        res.send(view.app(view.tacos({ tacos: data })));
    });
});



// app.get("/", function (req, res) {
//     res.send(view.tacos(
//         `
//         	<li class="list-group-item">${taco.taco_name}</li>
//         	<center><button data-devour="${taco.id}" class="btn devour-it" type="submit">Down the Hatch!</button></center>
//         `
//     )
//     );
// })

app.post("/api/tacos", function (req, res) {
    // Make sure to sanitize the input from the request by using escapeHTML
    //gets the req.body from the textarea with the name="taco"
    const taco = escapeHTML(req.body.taco);
    connection.query("INSERT INTO tacos (taco_name) VALUES (?)", [taco], function (
        err,
        result
    ) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        }

        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
