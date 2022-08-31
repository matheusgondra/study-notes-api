const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router
	.get("/user/:user_id/workspace", UserController.getWorkspace)
	.post("/register", UserController.createUser)
	.post("/login", UserController.loginUser);

module.exports = router;