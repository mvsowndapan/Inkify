const router = require("express").Router();

router.get("/", (req, res) => {
  let data = [1, 2, 3, 4, 5, 6, 7, 10, 8, 9];
  res.send(data);
});

module.exports = router;
