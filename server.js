// importing express
const express = require("express");
// importing db-connection
const connectDb = require("./config/db");

// creating an instance of express
const app = express();
// connect to Database
connectDb();

// providing a response when a request is made on the server
app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

// creating a serve on the port 5000
app.listen(PORT, () => console.log(`server started on port ${PORT} `));
