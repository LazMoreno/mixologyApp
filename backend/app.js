//import all libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

//setup connections
mongoose
  .connect("mongodb://localhost/mixologyApp")
  .then(() => console.log("Connected to DB...🔌"))
  .catch(() => console.log("Couldn't connect to DB...❌"));

//setup middlewares
app.use(cors()); // CORS => cross origin resource sharing
app.use(express.json());

//setup routes
app.get("/", (req, res) => {
  return res.json({ message: "api works" });
});

//start listening on server
const port = 5000;
app.listen(port, () => {
  console.log("Server running...💯");
});
