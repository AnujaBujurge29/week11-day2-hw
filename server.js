// Load Express
const express = require("express");
const app = express();
const port = 3000;
// let number_Bottles = 100;

app.get("/", (req, res) => {
  res.send(`<h2>99 Bottles of beer on the wall <a href="/98">99</a></h2>`);
});

app.get("/:number_Bottles", (req, res) => {
  const newLink = req.params.number_Bottles - 1;
  if (req.params.number_Bottles <= 0 || req.params.number_Bottles > 99) {
    res.send(`<a href="/">Start Over</a>`);
  } else {
    // console.log(`${req.params.number_Bottles}`);
    res.send(
      `<h2><br/><br/>Bottles of beer on the wall: ${req.params.number_Bottles}  <a href="${newLink}"><br/><br/>Take one down and pass it around</a></h2>`
    );
  }
});
// Tell the app to listen on port:
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
