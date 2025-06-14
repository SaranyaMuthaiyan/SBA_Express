const express = require("express");
const bodyParser = require("body-parser")
const { errorHandler } = require("./middle/mid");
const {router, users} = require("./routes/index");
const path = require("path");

const app = express();
const port = 8080
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(router)


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { users: users });
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`my server running on ${port}`));