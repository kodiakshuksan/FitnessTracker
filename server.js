const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("express").Router();
const routesA = require("./routes/api-routes.js");
const routesB = require("./routes/html-routes.js");
const db = require("./models");
//const routesA = require("./routes/api-routes");
//console.log(routesA)



const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routesA);
app.use(routesB);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



