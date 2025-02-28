const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Thang Duy dep trai vai ccac 12312571258158");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
