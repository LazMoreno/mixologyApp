//import all libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

require("dotenv").config();

//setup connections
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB...🔌"))
  .catch(() => console.log("Couldn't connect to DB...❌"));

//setup middlewares
app.use(cors()); // CORS => cross origin resource sharing
app.use(express.json());

//setup routes
app.use("/api/users", require("./routes/user"));
app.use("/api/drinks", require("./routes/drink"))

//start listening on server
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running...💯");
});
