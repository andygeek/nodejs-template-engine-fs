const express = require("express");
const app = express();
const port = 8002;
const expressAG = require("./express-ag");

app.engine("ag", expressAG);
app.set("views", "./views");
app.set("view engine", "ag")

app.get("/", (req, res) => {
  res.render("index", { hello: "hola", world: "mundo" });
});

const server = app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
