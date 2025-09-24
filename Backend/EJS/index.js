const express = require("express");
const app = express();
const path = require("path"); // Import the path module

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the views directory

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
