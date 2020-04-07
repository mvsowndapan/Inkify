const router = require("express").Router();
const { get_notes, post_note } = require("../controllers/notes.controller");

/** 
@method  GET
@route  /notes
@body  none
@success_Response all the notes
@error_Response Unable to fetch the notes.
@callback  get_notes
 **/

router.get("/", get_notes);

/**
@method  POST
@route  /notes
@body  name
@success_Response Note added Successfully.
@error_Response Unable to add note.
@callback post_note 
**/
router.post("/", post_note);

module.exports = router;
