const app = require("express")(),
  mongoose = require("mongoose");

const routes = require("./routes/index"),
  intialize_middleware = require("./middleware/index");

require("dotenv").config();
app.use("/", routes);

mongoose
  .connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Db Connected"))
  .catch((err) => console.log(err));
app.listen(3000, () => console.log("server started in 3000"));

intialize_middleware(app);
