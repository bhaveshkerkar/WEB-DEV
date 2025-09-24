const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("You conctacted root path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>Hello ${username}</h1> <p>Your ID is ${id}</p>`;
  res.send(htmlStr);
});

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("No results found");
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>No search query provided</h1>");
  }
  res.send(`<h1>You searched for ${q}  </h1`);
});

// app.get("/apple", (req, res) => {
//   res.send("You conctacted apple path");
// });

// app.get("/mango", (req, res) => {
//   res.send("You conctacted mangos path");
// });

// app.get("*", (req, res) => {
//   res.send("This path does not exist on this server");
// });

// app.use((req, res) => {
//   console.log("Request received");
// res.send({
//   color: "red",
//   text: "Hello, World!",
// });

// let user =
//   "<h1>Hello Bhavesh</h1> <ul><li>How are You?</li><li>Did You eat?</li></ul>";
// res.send(user);

// });
