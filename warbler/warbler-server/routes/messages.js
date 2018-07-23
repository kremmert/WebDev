const express = require("express");
//mergeParams to grab the /api/user/:id/messages id 
const router = express.Router({mergeParams:true});

const { createMessage, getMessage, deleteMessage } = require("../handlers/messages");

router.route("/").post(createMessage);

router.route("/:message_id")
	.get(getMessage)
	.delete(deleteMessage);


module.exports = router;