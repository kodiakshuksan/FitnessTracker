const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;


const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
//app.use(express.static('files'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// Routes
require("./routes/html.js")(app);
require("./routes/api.js")(app);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
