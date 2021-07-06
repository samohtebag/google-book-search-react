const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`Now running on: ${PORT}!`);
});
  