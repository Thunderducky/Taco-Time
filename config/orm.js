const connection = require("./connection")



function selectAll() {
    connection.query("SELECT * FROM tacos", function (err, res) {
        if (err) throw err;
    },

        function insertOne() {
            connection.query("INSERT INTO tacos SET ?", function (err, res) {
                if (err) throw err;
            }
            ),
},

        function updateOne() {

        },



        module.exports = ORM