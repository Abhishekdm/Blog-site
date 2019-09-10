// importing express
const express = require("express");
// importing db-connection
const connectDB = require("./config/db");

// creating an instance of express
const app = express();
// connect to Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// providing a response when a request is made on the server
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

// creating a serve on the port 5000
app.listen(PORT, () => console.log(`server started on port ${PORT} `));
