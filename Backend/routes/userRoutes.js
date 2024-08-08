const express = require("express");
const { registerUser, loginUser, findMe } = require("../controllers/userController");
const router = express();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/find-me/:id", findMe);

module.exports = router;
