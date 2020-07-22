const connection = require("./connection")

const ORM = {

    selectAll: function () {
        connection.query("SELECT * FROM tacos", function (err, res) {
            if (err) throw err;
        })
    },

    insertOne: function () {
        connection.query("INSERT INTO tacos SET ?", function (err, res) {
            if (err) throw err;
        })
    },

    updateOne: function () {
        connection.query("INSERT INTO tacos SET ?", function (err, res) {
            if (err) throw err;
        })
    }

};


module.exports = ORM
