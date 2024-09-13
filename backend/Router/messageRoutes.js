const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../Controller/messageControllers");
const { protect } = require("../Middleware/authMidleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;