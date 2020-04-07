const router = require("express").Router();
const notes = require("./notes.routes");

router.use("/notes", notes);

module.exports = router;
