const router = require("./routes/index");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var corsOptions = {
    origin : "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router);
app.listen(8080, () => {console.log("app corriendo")});