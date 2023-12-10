const express = require("express");
const app = express();

app.get("/", function (req, res) {
  return res.send("Hello world");
});

// Server
const appName = process.env.APP_NAME;
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`${appName} listening on port ${port}`);
});
