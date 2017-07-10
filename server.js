const express = require("express"),
bodyParser = require("body-parser");

let path = require("path");
let app = express();
const PORT = process.env.PORT || 8080;

let mongoose = require("mongoose");
mongoose.Promise = Promise;

let db = require("./mongoConfig");
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
  let queries = require("./routes/routes");
  app.use(queries);
});


app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
