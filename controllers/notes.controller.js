const { Note } = require("../models/index");

const get_notes = async (req, res) => {
  try {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    res.sendStatus("1001", data);
  } catch (e) {
    res.sendStatus(e);
  }
};

const post_note = async (req, res) => {
  try {
    let { body } = req;
    await Note.create(body);
    res.sendStatus("1002");
  } catch (e) {
    res.sendStatus("4002");
  }
};

module.exports = { get_notes, post_note };
