const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("thang huy dep trai vai cac");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
