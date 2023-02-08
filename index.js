require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8080;
const db = require("./db");
const postsRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const getAllQuotes = require("./routes/quotes");

db();
//middlewares to parse input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", postsRoutes, authRoutes, getAllQuotes);

app.get("/", (req, res) => {
  res.send(`<h1>JWT Lecture</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
