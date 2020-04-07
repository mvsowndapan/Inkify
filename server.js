const app = require("express")();
const routes = require("./routes/index");
app.listen(3000, () => console.log("server started in 3000"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", routes);
