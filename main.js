const express = require("express");
const bodyParser = require("body-parser")
const { errorHandler } = require("./middle/mid");
const {router, users} = require("./routes/index");
const path = require("path");
const methodOverride = require('method-override')

const app = express();
const port = 8080
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(errorHandler);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(router)






app.listen(port, () => console.log(`my server running on ${port}`));