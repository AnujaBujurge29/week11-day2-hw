// Load Express
const express = require("express");
const app = express();
const port = 3000;

// Define Routes
app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall <a href="/98">98</a>`);
});

// Tell the app to listen on port:
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
