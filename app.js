const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

// create application/json parser
var jsonParser = bodyParser.json();

app.use(cors());
app.use(jsonParser);
app.use(express.static(path.join(__dirname, "nonreact")));

//database config
const db = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "pradiptaghoshal",
        database: "socialstories"
    }
});

app.post("/email", function (req, res) {
    const { email } = req.body;
    db.insert({
        email: email
    })
        .into("emails")
        .then(data => res.json("Done!"))
        .catch(err => res.json("Not Done!"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "nonreact", "index.html"));
});

app.listen(8000, () => console.log("listening"));
